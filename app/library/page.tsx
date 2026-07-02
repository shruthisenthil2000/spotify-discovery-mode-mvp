"use client";

import { PageHeader, SectionTitle } from "@/components/AppShell";
import { TrackRow } from "@/components/TrackRow";
import { demoTracks, libraryPlaylists } from "@/lib/demoTracks";

export default function LibraryPage() {
  const recentlyAdded = demoTracks.filter((t) => t.releaseYear >= 2024).slice(0, 6);

  return (
    <div>
      <PageHeader title="Your Library" subtitle="Playlist-heavy Premium collection" />

      <div className="grid grid-cols-2 gap-3 px-5 pb-6">
        {libraryPlaylists.map((pl) => (
          <button
            key={pl.id}
            type="button"
            className={`rounded-lg bg-gradient-to-br ${pl.gradient} p-4 text-left transition active:scale-95`}
          >
            <p className="text-sm font-bold text-white">{pl.name}</p>
            <p className="mt-1 text-xs text-white/70">{pl.count} songs</p>
          </button>
        ))}
      </div>

      <SectionTitle>Recently added</SectionTitle>
      <div className="pb-4">
        {recentlyAdded.map((track, i) => (
          <TrackRow key={track.id} track={track} index={i} />
        ))}
      </div>

      <SectionTitle>Liked songs</SectionTitle>
      <div className="pb-4">
        {demoTracks.slice(0, 5).map((track, i) => (
          <TrackRow key={track.id} track={track} index={i} />
        ))}
      </div>
    </div>
  );
}
