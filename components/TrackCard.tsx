"use client";

import { usePlayer } from "@/lib/PlayerContext";
import type { Track } from "@/lib/types";

export function TrackCard({
  track,
  size = "md",
  queue,
}: {
  track: Track;
  size?: "sm" | "md" | "lg";
  /** The row this card belongs to — passed through so Now Playing's
   * prev/next can step through the rest of the row. Defaults to just this
   * track when omitted. */
  queue?: Track[];
}) {
  const { playTrack } = usePlayer();
  const dims = size === "lg" ? "w-40" : size === "sm" ? "w-28" : "w-36";

  return (
    <button
      type="button"
      onClick={() => playTrack(track, queue)}
      className={`shrink-0 ${dims} text-left transition active:scale-95`}
    >
      <div
        className={`mb-2 aspect-square rounded-md bg-gradient-to-br shadow-lg ${track.artworkGradient} ${size === "lg" ? "rounded-lg" : ""}`}
      />
      <p className="truncate text-sm font-semibold text-white">{track.title}</p>
      <p className="truncate text-xs text-spotify-muted">{track.artist}</p>
    </button>
  );
}
