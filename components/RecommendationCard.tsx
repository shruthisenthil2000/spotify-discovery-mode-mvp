"use client";

import type { DiscoveryRecommendation } from "@/lib/types";
import { FRESHNESS_LABELS } from "@/lib/types";

export function RecommendationCard({
  recommendation,
  onInterested,
  onNotInterested,
  onSave,
  onAddToPlaylist,
  saved,
  addedToPlaylist,
}: {
  recommendation: DiscoveryRecommendation;
  onInterested: () => void;
  onNotInterested: () => void;
  onSave: () => void;
  onAddToPlaylist: () => void;
  saved: boolean;
  addedToPlaylist: boolean;
}) {
  const { track, explanation, freshnessLevel } = recommendation;

  return (
    <div className="rounded-xl bg-spotify-elevated p-4 ring-1 ring-white/5">
      <div className="flex gap-3">
        <div
          className={`h-16 w-16 shrink-0 rounded-md bg-gradient-to-br ${track.artworkGradient}`}
        />
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-white">{track.title}</p>
          <p className="truncate text-sm text-spotify-muted">{track.artist}</p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-spotify-muted">
              {track.genre}
            </span>
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-spotify-muted">
              {track.mood}
            </span>
            <span className="rounded-full bg-spotify-green/20 px-2 py-0.5 text-[10px] font-medium text-spotify-green">
              {FRESHNESS_LABELS[freshnessLevel]}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-spotify-muted">
        <span className="font-medium text-white/80">Recommended because… </span>
        {explanation}
      </p>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <ActionButton onClick={onInterested} variant="primary">
          Interested
        </ActionButton>
        <ActionButton onClick={onNotInterested} variant="ghost">
          Not Interested
        </ActionButton>
        <ActionButton onClick={onSave} variant="ghost" active={saved}>
          {saved ? "Saved ✓" : "Save"}
        </ActionButton>
        <ActionButton onClick={onAddToPlaylist} variant="ghost" active={addedToPlaylist}>
          {addedToPlaylist ? "Added ✓" : "Add to Playlist"}
        </ActionButton>
      </div>
    </div>
  );
}

function ActionButton({
  children,
  onClick,
  variant,
  active,
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant: "primary" | "ghost";
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full py-2.5 text-xs font-semibold transition active:scale-95 ${
        variant === "primary"
          ? "bg-white text-black hover:bg-white/90"
          : active
            ? "bg-spotify-green/20 text-spotify-green ring-1 ring-spotify-green/40"
            : "bg-white/10 text-white hover:bg-white/15"
      }`}
    >
      {children}
    </button>
  );
}
