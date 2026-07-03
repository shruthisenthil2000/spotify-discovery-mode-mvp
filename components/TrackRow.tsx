"use client";

import { usePlayer } from "@/lib/PlayerContext";
import type { Track } from "@/lib/types";

export function TrackRow({
  track,
  index,
  queue,
}: {
  track: Track;
  index?: number;
  /** The list this row belongs to — passed through so Now Playing's
   * prev/next can step through the rest of the list. Defaults to just this
   * track when omitted. */
  queue?: Track[];
}) {
  const { playTrack, currentTrack, isPlaying } = usePlayer();
  const isCurrent = currentTrack?.id === track.id;

  return (
    <button
      type="button"
      onClick={() => playTrack(track, queue)}
      className="flex w-full items-center gap-3 px-5 py-2.5 text-left transition hover:bg-white/5 active:bg-white/10"
    >
      {index !== undefined && (
        <span className="w-5 text-sm text-spotify-muted">{index + 1}</span>
      )}
      <div
        className={`h-12 w-12 shrink-0 rounded bg-gradient-to-br ${track.artworkGradient}`}
      />
      <div className="min-w-0 flex-1">
        <p className={`truncate text-sm font-medium ${isCurrent ? "text-spotify-green" : "text-white"}`}>
          {track.title}
        </p>
        <p className="truncate text-xs text-spotify-muted">{track.artist}</p>
      </div>
      {isCurrent && isPlaying && (
        <div className="flex items-end gap-0.5">
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className="inline-block w-0.5 animate-pulse bg-spotify-green"
              style={{ height: `${8 + i * 3}px`, animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      )}
    </button>
  );
}
