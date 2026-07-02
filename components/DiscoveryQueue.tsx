"use client";

import { usePlayer } from "@/lib/PlayerContext";
import { FRESHNESS_LABELS } from "@/lib/types";

export function DiscoveryQueue() {
  const {
    discoveryQueue,
    handleInterested,
    handleNotInterested,
    handleSave,
    handleAddToPlaylist,
    playTrack,
  } = usePlayer();

  if (discoveryQueue.length === 0) {
    return (
      <div className="mx-5 mt-6 pb-8">
        <h3 className="mb-2 text-lg font-bold text-white">Discovery Queue</h3>
        <p className="text-sm text-spotify-muted">
          Adjust the freshness slider to build your discovery queue while you listen.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-5 mt-6 pb-8">
      <h3 className="mb-1 text-lg font-bold text-white">Discovery Queue</h3>
      <p className="mb-4 text-xs text-spotify-muted">
        {discoveryQueue.length} suggestion{discoveryQueue.length !== 1 ? "s" : ""} this session
      </p>
      <div className="space-y-1">
        {discoveryQueue.map((item) => (
          <div
            key={item.id}
            className="rounded-lg bg-spotify-card/50 px-3 py-3 ring-1 ring-white/5"
          >
            <button
              type="button"
              onClick={() => playTrack(item.track)}
              className="flex w-full items-center gap-3 text-left"
            >
              <div
                className={`h-11 w-11 shrink-0 rounded bg-gradient-to-br ${item.track.artworkGradient}`}
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-white">{item.track.title}</p>
                <p className="truncate text-xs text-spotify-muted">{item.track.artist}</p>
                <div className="mt-1 flex flex-wrap gap-1">
                  <span className="text-[10px] text-spotify-muted">{item.track.genre}</span>
                  <span className="text-[10px] text-spotify-muted">·</span>
                  <span className="text-[10px] text-spotify-muted">{item.track.mood}</span>
                  <span className="text-[10px] text-spotify-muted">·</span>
                  <span className="text-[10px] text-spotify-green">
                    {FRESHNESS_LABELS[item.freshnessLevel]}
                  </span>
                </div>
              </div>
            </button>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <QueueBtn
                onClick={() => handleInterested(item.track.id)}
                active={item.interested === true}
              >
                Interested
              </QueueBtn>
              <QueueBtn
                onClick={() => handleNotInterested(item.track.id)}
                active={item.interested === false}
              >
                Skip
              </QueueBtn>
              <QueueBtn onClick={() => handleSave(item.track.id)} active={item.saved}>
                {item.saved ? "Saved" : "Save"}
              </QueueBtn>
              <QueueBtn
                onClick={() => handleAddToPlaylist(item.track.id)}
                active={item.addedToPlaylist}
              >
                {item.addedToPlaylist ? "Added" : "Playlist"}
              </QueueBtn>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function QueueBtn({
  children,
  onClick,
  active,
}: {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1 text-[10px] font-semibold transition ${
        active
          ? "bg-spotify-green/20 text-spotify-green"
          : "bg-white/10 text-white hover:bg-white/15"
      }`}
    >
      {children}
    </button>
  );
}
