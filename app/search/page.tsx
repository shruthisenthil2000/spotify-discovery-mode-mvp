"use client";

import { useState } from "react";
import { PageHeader } from "@/components/AppShell";
import { TrackRow } from "@/components/TrackRow";
import { demoTracks, genreChips, moodChips } from "@/lib/demoTracks";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [activeGenre, setActiveGenre] = useState<string | null>(null);

  const filtered = demoTracks.filter((t) => {
    const q = query.toLowerCase();
    const matchesQuery =
      !q ||
      t.title.toLowerCase().includes(q) ||
      t.artist.toLowerCase().includes(q) ||
      t.genre.toLowerCase().includes(q);
    const matchesGenre = !activeGenre || t.genre.toLowerCase().includes(activeGenre.toLowerCase().split(" ")[0]);
    return matchesQuery && matchesGenre;
  });

  return (
    <div>
      <PageHeader title="Search" subtitle="Find genres, moods, and fresh picks" />

      <div className="px-5 pb-4">
        <div className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3-3" />
          </svg>
          <input
            type="text"
            placeholder="What do you want to listen to?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-white placeholder:text-spotify-muted outline-none"
          />
        </div>
      </div>

      <div className="px-5 pb-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-spotify-muted">
          Genres
        </p>
        <div className="flex flex-wrap gap-2">
          {genreChips.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => setActiveGenre(activeGenre === chip ? null : chip)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                activeGenre === chip
                  ? "bg-spotify-green text-black"
                  : "bg-spotify-elevated text-white hover:bg-white/15"
              }`}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      <div className="px-5 pb-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-spotify-muted">
          Moods
        </p>
        <div className="flex flex-wrap gap-2">
          {moodChips.map((mood) => (
            <span
              key={mood}
              className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-spotify-muted"
            >
              {mood}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 px-5 pb-4">
        {[
          { name: "Indie Pop", gradient: "from-violet-600 to-indigo-900" },
          { name: "Tamil Indie", gradient: "from-emerald-600 to-teal-900" },
          { name: "Hidden Gems", gradient: "from-purple-700 to-black" },
          { name: "Fresh R&B", gradient: "from-rose-700 to-purple-900" },
          { name: "Lo-fi Focus", gradient: "from-slate-500 to-blue-700" },
          { name: "Electronic Finds", gradient: "from-blue-500 to-cyan-700" },
        ].map((cat) => (
          <button
            key={cat.name}
            type="button"
            onClick={() => setActiveGenre(cat.name)}
            className={`rounded-lg bg-gradient-to-br ${cat.gradient} p-4 text-left text-sm font-bold text-white transition active:scale-95`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <p className="px-5 pb-2 text-sm font-bold text-white">
        {filtered.length} result{filtered.length !== 1 ? "s" : ""}
      </p>
      <div className="pb-4">
        {filtered.slice(0, 15).map((track, i) => (
          <TrackRow key={track.id} track={track} index={i} />
        ))}
      </div>
    </div>
  );
}
