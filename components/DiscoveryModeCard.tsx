"use client";

import { usePlayer } from "@/lib/PlayerContext";
import { FreshnessSlider } from "./FreshnessSlider";
import { RecommendationCard } from "./RecommendationCard";

export function DiscoveryModeCard() {
  const {
    currentTrack,
    freshnessLevel,
    setFreshnessLevel,
    recommendation,
    feedback,
    handleInterested,
    handleNotInterested,
    handleSave,
    handleAddToPlaylist,
  } = usePlayer();

  if (!currentTrack || !recommendation) return null;

  const saved = feedback.savedTrackIds.includes(recommendation.track.id);
  const addedToPlaylist = feedback.playlistTrackIds.includes(recommendation.track.id);

  return (
    <div className="mx-5 mt-6 rounded-2xl bg-spotify-card p-5 ring-1 ring-white/5">
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-spotify-green/20">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#1DB954">
              <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6L12 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Discovery Mode</h3>
            <p className="text-xs text-spotify-muted">Fresh finds in this genre</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-spotify-muted">
          Based on what you&apos;re listening to now
        </p>
        <p className="mt-1 text-sm font-semibold text-spotify-green">
          Fresh finds in {currentTrack.genre}
        </p>
      </div>

      <FreshnessSlider value={freshnessLevel} onChange={setFreshnessLevel} />

      <div className="mt-5">
        <RecommendationCard
          recommendation={recommendation}
          onInterested={handleInterested}
          onNotInterested={handleNotInterested}
          onSave={handleSave}
          onAddToPlaylist={handleAddToPlaylist}
          saved={saved}
          addedToPlaylist={addedToPlaylist}
        />
      </div>
    </div>
  );
}
