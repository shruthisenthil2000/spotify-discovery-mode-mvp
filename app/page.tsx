"use client";

import { PageHeader, SectionTitle } from "@/components/AppShell";
import { TrackCard } from "@/components/TrackCard";
import { TrackRow } from "@/components/TrackRow";
import {
  demoTracks,
  getDiscoveryRow,
  getMadeForYou,
  getRecentlyPlayed,
} from "@/lib/demoTracks";

export default function HomePage() {
  const greeting = getGreeting();
  const recentlyPlayed = getRecentlyPlayed();
  const madeForYou = getMadeForYou();
  const discovery = getDiscoveryRow();

  return (
    <div>
      <PageHeader title={greeting} subtitle="Ready to discover something fresh?" />

      <SectionTitle>Recently played</SectionTitle>
      <div className="flex gap-4 overflow-x-auto px-5 pb-6 no-scrollbar">
        {recentlyPlayed.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>

      <SectionTitle>Made for you</SectionTitle>
      <div className="flex gap-4 overflow-x-auto px-5 pb-6 no-scrollbar">
        {madeForYou.map((track) => (
          <TrackCard key={track.id} track={track} size="lg" />
        ))}
      </div>

      <div className="mx-5 mb-6 rounded-xl bg-gradient-to-r from-spotify-green/30 to-emerald-800/30 p-4 ring-1 ring-spotify-green/20">
        <p className="text-xs font-semibold uppercase tracking-wide text-spotify-green">
          Try Discovery Mode
        </p>
        <p className="mt-1 text-sm text-white">
          Play any song and open Now Playing to get AI-powered fresh finds in the same genre.
        </p>
      </div>

      <SectionTitle>Fresh discovery picks</SectionTitle>
      <div className="flex gap-4 overflow-x-auto px-5 pb-4 no-scrollbar">
        {discovery.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>

      <SectionTitle>Popular right now</SectionTitle>
      <div className="pb-4">
        {demoTracks.slice(0, 8).map((track, i) => (
          <TrackRow key={track.id} track={track} index={i} />
        ))}
      </div>
    </div>
  );
}

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}
