"use client";

import Link from "next/link";
import { usePlayer } from "@/lib/PlayerContext";

export function MiniPlayer() {
  const { currentTrack, isPlaying, togglePlay } = usePlayer();
  if (!currentTrack) return null;

  return (
    <Link
      href="/now-playing"
      className="fixed bottom-[calc(3.5rem+env(safe-area-inset-bottom))] left-1/2 z-30 mx-3 w-[calc(100%-1.5rem)] max-w-[406px] -translate-x-1/2"
    >
      <div className="flex items-center gap-3 rounded-lg bg-spotify-elevated px-3 py-2 shadow-xl ring-1 ring-white/10 transition active:scale-[0.99]">
        <div
          className={`h-12 w-12 shrink-0 rounded bg-gradient-to-br ${currentTrack.artworkGradient}`}
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-white">{currentTrack.title}</p>
          <p className="truncate text-xs text-spotify-muted">{currentTrack.artist}</p>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            togglePlay();
          }}
          className="flex h-10 w-10 shrink-0 items-center justify-center text-white"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>
    </Link>
  );
}
