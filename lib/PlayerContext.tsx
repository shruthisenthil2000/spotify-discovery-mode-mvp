"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { demoTracks } from "./demoTracks";
import { getAIDiscoveryRecommendations } from "./discoveryEngine";
import {
  applyInterested,
  applyNotInterested,
  applyPlaylistAdd,
  applySave,
  createEmptyFeedback,
  loadFeedback,
  saveFeedback,
} from "./feedbackStore";
import type {
  DiscoveryRecommendation,
  FreshnessLevel,
  QueuedRecommendation,
  Track,
  UserFeedback,
} from "./types";

type PlayerContextValue = {
  currentTrack: Track | null;
  isPlaying: boolean;
  progress: number;
  feedback: UserFeedback;
  freshnessLevel: FreshnessLevel;
  recommendation: DiscoveryRecommendation | null;
  discoveryQueue: QueuedRecommendation[];
  /** The playable queue the current track was opened with — used by
   * playNext/playPrev. A single-track queue just replays from the start. */
  queue: Track[];
  playTrack: (track: Track, queue?: Track[]) => void;
  playNext: () => void;
  playPrev: () => void;
  togglePlay: () => void;
  setFreshnessLevel: (level: FreshnessLevel) => void;
  refreshRecommendation: () => void;
  handleInterested: (trackId?: string) => void;
  handleNotInterested: (trackId?: string) => void;
  handleSave: (trackId?: string) => void;
  handleAddToPlaylist: (trackId?: string) => void;
  toast: string | null;
};

const PlayerContext = createContext<PlayerContextValue | null>(null);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(demoTracks[0]);
  const [queue, setQueue] = useState<Track[]>(demoTracks[0] ? [demoTracks[0]] : []);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0.35);
  const [feedback, setFeedback] = useState<UserFeedback>(createEmptyFeedback);
  const [freshnessLevel, setFreshnessLevelState] = useState<FreshnessLevel>("fresh");
  const [recommendation, setRecommendation] = useState<DiscoveryRecommendation | null>(null);
  const [discoveryQueue, setDiscoveryQueue] = useState<QueuedRecommendation[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const [excludeIds, setExcludeIds] = useState<string[]>([]);

  const currentTrackRef = useRef<Track | null>(currentTrack);
  const queueRef = useRef<Track[]>(queue);

  useEffect(() => {
    currentTrackRef.current = currentTrack;
  }, [currentTrack]);

  useEffect(() => {
    queueRef.current = queue;
  }, [queue]);

  useEffect(() => {
    setFeedback(loadFeedback());
  }, []);

  useEffect(() => {
    saveFeedback(feedback);
  }, [feedback]);

  useEffect(() => {
    if (!isPlaying || !currentTrack) return;
    const interval = setInterval(() => {
      setProgress((p) => (p >= 1 ? 0 : p + 0.002));
    }, 500);
    return () => clearInterval(interval);
  }, [isPlaying, currentTrack]);

  const showToast = useCallback((message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  }, []);

  const addToQueue = useCallback(
    (rec: DiscoveryRecommendation) => {
      setDiscoveryQueue((prev) => {
        if (prev.some((q) => q.track.id === rec.track.id)) return prev;
        const item: QueuedRecommendation = {
          id: `${rec.track.id}-${Date.now()}`,
          track: rec.track,
          freshnessLevel: rec.freshnessLevel,
          explanation: rec.explanation,
          saved: feedback.savedTrackIds.includes(rec.track.id),
          addedToPlaylist: feedback.playlistTrackIds.includes(rec.track.id),
          interested: null,
          timestamp: Date.now(),
        };
        return [item, ...prev].slice(0, 20);
      });
    },
    [feedback.savedTrackIds, feedback.playlistTrackIds]
  );

  const generateRecommendation = useCallback(
    (level: FreshnessLevel, track: Track, fb: UserFeedback, excludes: string[]) => {
      const recentArtists = discoveryQueue.slice(0, 5).map((q) => q.track.artist);
      const results = getAIDiscoveryRecommendations({
        currentTrack: track,
        freshnessLevel: level,
        userFeedback: fb,
        allTracks: demoTracks,
        excludeIds: excludes,
        recentArtists,
        count: 1,
      });
      return results[0] ?? null;
    },
    [discoveryQueue]
  );

  const refreshRecommendation = useCallback(() => {
    if (!currentTrack) return;
    const rec = generateRecommendation(freshnessLevel, currentTrack, feedback, excludeIds);
    if (rec) {
      setRecommendation(rec);
      addToQueue(rec);
    }
  }, [currentTrack, freshnessLevel, feedback, excludeIds, generateRecommendation, addToQueue]);

  useEffect(() => {
    if (!currentTrack) return;
    const rec = generateRecommendation(freshnessLevel, currentTrack, feedback, excludeIds);
    if (rec) {
      setRecommendation(rec);
      addToQueue(rec);
    }
  }, [currentTrack, freshnessLevel]); // eslint-disable-line react-hooks/exhaustive-deps

  const setFreshnessLevel = useCallback(
    (level: FreshnessLevel) => {
      setFreshnessLevelState(level);
      if (!currentTrack) return;
      const rec = generateRecommendation(level, currentTrack, feedback, excludeIds);
      if (rec) {
        setRecommendation(rec);
        addToQueue(rec);
      }
    },
    [currentTrack, feedback, excludeIds, generateRecommendation, addToQueue]
  );

  const playTrack = useCallback((track: Track, nextQueue?: Track[]) => {
    setCurrentTrack(track);
    setQueue(nextQueue && nextQueue.length > 0 ? nextQueue : [track]);
    setIsPlaying(true);
    setProgress(0.1);
    setExcludeIds([]);
  }, []);

  const togglePlay = useCallback(() => setIsPlaying((p) => !p), []);

  /** Steps through the queue the current track was opened with, wrapping
   * around. A single-track queue (the common case) just replays from 0. */
  const stepQueue = useCallback((direction: 1 | -1) => {
    const prevTrack = currentTrackRef.current;
    if (!prevTrack) return;
    const q = queueRef.current;
    if (q.length === 0) return;
    const idx = q.findIndex((t) => t.id === prevTrack.id);
    const nextIdx = idx === -1 ? 0 : (idx + direction + q.length) % q.length;
    const next = q[nextIdx];
    setCurrentTrack(next);
    setIsPlaying(true);
    setProgress(0.1);
    setExcludeIds([]);
  }, []);

  const playNext = useCallback(() => stepQueue(1), [stepQueue]);
  const playPrev = useCallback(() => stepQueue(-1), [stepQueue]);

  const updateQueueItem = useCallback(
    (trackId: string, updates: Partial<QueuedRecommendation>) => {
      setDiscoveryQueue((prev) =>
        prev.map((q) => (q.track.id === trackId ? { ...q, ...updates } : q))
      );
    },
    []
  );

  const handleInterested = useCallback(
    (trackId?: string) => {
      const track = trackId
        ? demoTracks.find((t) => t.id === trackId)
        : recommendation?.track;
      if (!track) return;
      const nextFeedback = applyInterested(feedback, track);
      setFeedback(nextFeedback);
      updateQueueItem(track.id, { interested: true });
      showToast("Tuning future discovery");
      if (!trackId) {
        setExcludeIds((prev) => [...prev, track.id]);
        const rec = generateRecommendation(freshnessLevel, currentTrack!, nextFeedback, [
          ...excludeIds,
          track.id,
        ]);
        if (rec) setRecommendation(rec);
      }
    },
    [
      recommendation,
      feedback,
      showToast,
      updateQueueItem,
      generateRecommendation,
      freshnessLevel,
      currentTrack,
      excludeIds,
    ]
  );

  const handleNotInterested = useCallback(
    (trackId?: string) => {
      const track = trackId
        ? demoTracks.find((t) => t.id === trackId)
        : recommendation?.track;
      if (!track) return;
      const nextFeedback = applyNotInterested(feedback, track);
      setFeedback(nextFeedback);
      updateQueueItem(track.id, { interested: false });
      showToast("Less of this style next time");
      if (!trackId) {
        setExcludeIds((prev) => [...prev, track.id]);
        const rec = generateRecommendation(freshnessLevel, currentTrack!, nextFeedback, [
          ...excludeIds,
          track.id,
        ]);
        if (rec) setRecommendation(rec);
      }
    },
    [
      recommendation,
      feedback,
      showToast,
      updateQueueItem,
      generateRecommendation,
      freshnessLevel,
      currentTrack,
      excludeIds,
    ]
  );

  const handleSave = useCallback(
    (trackId?: string) => {
      const id = trackId ?? recommendation?.track.id;
      if (!id) return;
      const track = demoTracks.find((t) => t.id === id);
      const nextFeedback = applySave(feedback, id);
      setFeedback(nextFeedback);
      updateQueueItem(id, { saved: true });
      showToast("Saved to your discovery profile");
      if (track && !trackId) {
        setExcludeIds((prev) => [...prev, id]);
        const rec = generateRecommendation(freshnessLevel, currentTrack!, nextFeedback, [
          ...excludeIds,
          id,
        ]);
        if (rec) setRecommendation(rec);
      }
    },
    [
      recommendation,
      feedback,
      showToast,
      updateQueueItem,
      generateRecommendation,
      freshnessLevel,
      currentTrack,
      excludeIds,
    ]
  );

  const handleAddToPlaylist = useCallback(
    (trackId?: string) => {
      const id = trackId ?? recommendation?.track.id;
      if (!id) return;
      const track = demoTracks.find((t) => t.id === id);
      const nextFeedback = applyPlaylistAdd(feedback, id);
      setFeedback(nextFeedback);
      updateQueueItem(id, { addedToPlaylist: true, saved: true });
      showToast("Added to Discovery Mode playlist");
      if (track && !trackId) {
        setExcludeIds((prev) => [...prev, id]);
        const rec = generateRecommendation(freshnessLevel, currentTrack!, nextFeedback, [
          ...excludeIds,
          id,
        ]);
        if (rec) setRecommendation(rec);
      }
    },
    [
      recommendation,
      feedback,
      showToast,
      updateQueueItem,
      generateRecommendation,
      freshnessLevel,
      currentTrack,
      excludeIds,
    ]
  );

  const value = useMemo(
    () => ({
      currentTrack,
      isPlaying,
      progress,
      feedback,
      freshnessLevel,
      recommendation,
      discoveryQueue,
      queue,
      playTrack,
      playNext,
      playPrev,
      togglePlay,
      setFreshnessLevel,
      refreshRecommendation,
      handleInterested,
      handleNotInterested,
      handleSave,
      handleAddToPlaylist,
      toast,
    }),
    [
      currentTrack,
      isPlaying,
      progress,
      feedback,
      freshnessLevel,
      recommendation,
      discoveryQueue,
      queue,
      playTrack,
      playNext,
      playPrev,
      togglePlay,
      setFreshnessLevel,
      refreshRecommendation,
      handleInterested,
      handleNotInterested,
      handleSave,
      handleAddToPlaylist,
      toast,
    ]
  );

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used within PlayerProvider");
  return ctx;
}
