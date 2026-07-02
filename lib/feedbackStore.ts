import type { UserFeedback } from "./types";

const STORAGE_KEY = "discovery-mode-feedback";

export const createEmptyFeedback = (): UserFeedback => ({
  interestedGenres: [],
  rejectedGenres: [],
  interestedSubGenres: [],
  rejectedSubGenres: [],
  interestedMoods: [],
  rejectedMoods: [],
  savedTrackIds: [],
  playlistTrackIds: [],
  rejectedArtistNames: [],
});

export function loadFeedback(): UserFeedback {
  if (typeof window === "undefined") return createEmptyFeedback();
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return { ...createEmptyFeedback(), ...JSON.parse(stored) };
  } catch {
    /* ignore */
  }
  return createEmptyFeedback();
}

export function saveFeedback(feedback: UserFeedback): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
  } catch {
    /* ignore */
  }
}

export function applyInterested(feedback: UserFeedback, track: {
  genre: string;
  subGenre: string;
  mood: string;
}): UserFeedback {
  const next = { ...feedback };
  if (!next.interestedGenres.includes(track.genre)) {
    next.interestedGenres = [...next.interestedGenres, track.genre];
  }
  if (!next.interestedSubGenres.includes(track.subGenre)) {
    next.interestedSubGenres = [...next.interestedSubGenres, track.subGenre];
  }
  if (!next.interestedMoods.includes(track.mood)) {
    next.interestedMoods = [...next.interestedMoods, track.mood];
  }
  next.rejectedGenres = next.rejectedGenres.filter((g) => g !== track.genre);
  next.rejectedMoods = next.rejectedMoods.filter((m) => m !== track.mood);
  return next;
}

export function applyNotInterested(feedback: UserFeedback, track: {
  genre: string;
  subGenre: string;
  mood: string;
  artist: string;
}): UserFeedback {
  const next = { ...feedback };
  if (!next.rejectedMoods.includes(track.mood)) {
    next.rejectedMoods = [...next.rejectedMoods, track.mood];
  }
  if (!next.rejectedArtistNames.includes(track.artist)) {
    next.rejectedArtistNames = [...next.rejectedArtistNames, track.artist];
  }
  return next;
}

export function applySave(feedback: UserFeedback, trackId: string): UserFeedback {
  if (feedback.savedTrackIds.includes(trackId)) return feedback;
  return {
    ...feedback,
    savedTrackIds: [...feedback.savedTrackIds, trackId],
  };
}

export function applyPlaylistAdd(feedback: UserFeedback, trackId: string): UserFeedback {
  if (feedback.playlistTrackIds.includes(trackId)) return feedback;
  return {
    ...feedback,
    playlistTrackIds: [...feedback.playlistTrackIds, trackId],
  };
}

export function getFeedbackScore(
  feedback: UserFeedback,
  track: { id: string; genre: string; subGenre: string; mood: string; artist: string }
): number {
  let score = 0;

  if (feedback.interestedGenres.includes(track.genre)) score += 0.15;
  if (feedback.interestedSubGenres.includes(track.subGenre)) score += 0.1;
  if (feedback.interestedMoods.includes(track.mood)) score += 0.1;
  if (feedback.rejectedGenres.includes(track.genre)) score -= 0.25;
  if (feedback.rejectedSubGenres.includes(track.subGenre)) score -= 0.15;
  if (feedback.rejectedMoods.includes(track.mood)) score -= 0.2;
  if (feedback.rejectedArtistNames.includes(track.artist)) score -= 0.3;
  if (feedback.savedTrackIds.includes(track.id)) score -= 1;
  if (feedback.playlistTrackIds.includes(track.id)) score -= 1;

  return score;
}
