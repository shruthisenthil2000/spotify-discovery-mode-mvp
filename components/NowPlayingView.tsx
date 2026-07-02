"use client";

import Link from "next/link";
import { usePlayer } from "@/lib/PlayerContext";
import { DiscoveryModeCard } from "./DiscoveryModeCard";
import { DiscoveryQueue } from "./DiscoveryQueue";

export function NowPlayingView() {
  const { currentTrack, isPlaying, togglePlay, progress, handleSave, feedback } = usePlayer();

  if (!currentTrack) {
    return (
      <div className="flex min-h-screen items-center justify-center px-5 text-spotify-muted">
        No track playing. Go back and select a song.
      </div>
    );
  }

  const saved = feedback.savedTrackIds.includes(currentTrack.id);
  const progressPct = Math.round(progress * 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-spotify-elevated to-spotify-dark pb-10">
      <div className="flex items-center justify-between px-5 pt-12">
        <Link href="/" className="text-spotify-muted hover:text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </Link>
        <span className="text-xs font-medium uppercase tracking-widest text-spotify-muted">
          Now Playing
        </span>
        <div className="w-6" />
      </div>

      <div className="mx-8 mt-8">
        <div
          className={`aspect-square w-full rounded-xl bg-gradient-to-br shadow-2xl ${currentTrack.artworkGradient}`}
        />
      </div>

      <div className="mt-8 px-8 text-center">
        <h1 className="text-2xl font-bold text-white">{currentTrack.title}</h1>
        <p className="mt-1 text-lg text-spotify-muted">{currentTrack.artist}</p>
        <p className="mt-1 text-xs text-spotify-muted">
          {currentTrack.album} · {currentTrack.genre}
        </p>
      </div>

      <div className="mt-8 px-8">
        <div className="h-1 rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-white transition-all"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <div className="mt-1 flex justify-between text-[10px] text-spotify-muted">
          <span>{formatTime(progress * 210)}</span>
          <span>3:30</span>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-8">
        <button type="button" className="text-spotify-muted" aria-label="Shuffle">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
          </svg>
        </button>
        <button type="button" className="text-white" aria-label="Previous">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z" />
          </svg>
        </button>
        <button
          type="button"
          onClick={togglePlay}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-lg transition active:scale-95"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <button type="button" className="text-white" aria-label="Next">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 18l8.5-6L6 6v12zm10-12v12h2V6h-2z" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => handleSave(currentTrack.id)}
          className={saved ? "text-spotify-green" : "text-spotify-muted"}
          aria-label="Save"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
          </svg>
        </button>
      </div>

      <DiscoveryModeCard />
      <DiscoveryQueue />
    </div>
  );
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}
