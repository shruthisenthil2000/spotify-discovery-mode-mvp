"use client";

import { useMemo, useState } from "react";
import { usePlayer } from "@/lib/PlayerContext";
import { PageHeader } from "./AppShell";
import { FreshnessSlider } from "./FreshnessSlider";
import { getRecentlyPlayed, moodChips } from "@/lib/demoTracks";
import { pickGenreMatchedRows, rotateRecommendations } from "@/lib/recommendationMatrix";
import { getTrackForRecommendation } from "@/lib/excelTrackCatalog";
import type { ArtistSongRecommendationRow } from "@/lib/artistSongRecommendations";
import type { FreshnessLevel, Track } from "@/lib/types";

const ROW_LIMIT = 3;

function dominantGenre(tracks: Track[]): string | null {
  const counts = new Map<string, number>();
  for (const t of tracks) counts.set(t.genre, (counts.get(t.genre) ?? 0) + 1);
  let best: string | null = null;
  let bestCount = 0;
  for (const [genre, count] of counts) {
    if (count > bestCount) {
      best = genre;
      bestCount = count;
    }
  }
  return best;
}

/** Reorders a row's cards for the selected zone — real fields the Excel
 * catalog already carries (mainstreamScore, freshness), never a re-fetch. */
function reorderForZone(tracks: Track[], zone: FreshnessLevel): Track[] {
  if (zone === "hidden_gems") return [...tracks].sort((a, b) => a.mainstreamScore - b.mainstreamScore);
  if (zone === "fresh") return [...tracks].sort((a, b) => b.freshness - a.freshness);
  return [...tracks].sort((a, b) => b.mainstreamScore - a.mainstreamScore);
}

/**
 * "Genre Mix" — Discover's dedicated same-genre browsing surface, built on
 * the Excel recommendation matrix (data/Artist_Song_Recommendations.xlsx,
 * see lib/artistSongRecommendations.ts + lib/recommendationMatrix.ts) rather
 * than the scoring engine that already drives the Now Playing Discovery Mode
 * card. Matches against the current track, recently played artists, and the
 * dominant genre among them — falling back to a curated spreadsheet sample
 * so the page is never empty. Every song title/artist/genre shown comes
 * verbatim from the spreadsheet; only playback metadata is synthesized (see
 * excelTrackCatalog.ts) since this MVP has no external catalog to resolve
 * real audio/artwork from. Play always uses the existing in-app playTrack —
 * there is nothing external to open in this project.
 */
export function GenreMix() {
  const {
    currentTrack,
    playTrack,
    feedback,
    handleInterested,
    handleNotInterested,
    handleSave,
    handleAddToPlaylist,
  } = usePlayer();
  const [zone, setZone] = useState<FreshnessLevel>("fresh");
  const [mood, setMood] = useState<string | null>(null);

  const recentlyPlayed = useMemo(() => getRecentlyPlayed(), []);

  const matchedRows = useMemo(() => {
    const pool = currentTrack ? [currentTrack, ...recentlyPlayed] : recentlyPlayed;
    const rows = pickGenreMatchedRows({
      currentTrack: currentTrack ? { title: currentTrack.title, artist: currentTrack.artist } : null,
      recentArtists: recentlyPlayed.map((t) => t.artist),
      topArtists: [],
      dominantGenre: dominantGenre(pool),
      limit: ROW_LIMIT,
    });
    return rows.map((row) => ({
      row,
      tracks: rotateRecommendations(row).map((rec) => getTrackForRecommendation(rec, row.genre)),
    }));
  }, [currentTrack, recentlyPlayed]);

  const displayedRows = useMemo(() => {
    return matchedRows.map(({ row, tracks }) => {
      const filtered = mood ? tracks.filter((t) => t.mood === mood) : tracks;
      const visible = filtered.length > 0 ? filtered : tracks;
      return { row, tracks: reorderForZone(visible, zone) };
    });
  }, [matchedRows, zone, mood]);

  return (
    <div>
      <PageHeader title="Genre Mix" subtitle="Same-genre discoveries powered by your music taste." />

      <div className="px-5 pb-6">
        <FreshnessSlider value={zone} onChange={setZone} />
      </div>

      <div className="flex gap-2 overflow-x-auto px-5 pb-6 no-scrollbar">
        {moodChips.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMood((prev) => (prev === m ? null : m))}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
              mood === m ? "bg-spotify-green text-black" : "bg-spotify-elevated text-white hover:bg-white/15"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="px-5 pb-10">
        <h2 className="text-lg font-bold text-white">Same-genre albums &amp; songs</h2>
        <p className="mb-4 mt-0.5 text-xs text-spotify-muted">
          Matched from your genre recommendation matrix.
        </p>

        {displayedRows.length === 0 ? (
          <p className="text-sm text-spotify-muted">No genre-matched picks available right now.</p>
        ) : (
          <div className="space-y-7">
            {displayedRows.map(({ row, tracks }) => (
              <GenreMixRow
                key={`${row.artist}::${row.song}`}
                row={row}
                tracks={tracks}
                onPlay={(track) => playTrack(track, tracks)}
                savedTrackIds={feedback.savedTrackIds}
                playlistTrackIds={feedback.playlistTrackIds}
                onInterested={handleInterested}
                onNotInterested={handleNotInterested}
                onSave={handleSave}
                onAddToPlaylist={handleAddToPlaylist}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function GenreMixRow({
  row,
  tracks,
  onPlay,
  savedTrackIds,
  playlistTrackIds,
  onInterested,
  onNotInterested,
  onSave,
  onAddToPlaylist,
}: {
  row: ArtistSongRecommendationRow;
  tracks: Track[];
  onPlay: (track: Track) => void;
  savedTrackIds: string[];
  playlistTrackIds: string[];
  onInterested: (trackId: string) => void;
  onNotInterested: (trackId: string) => void;
  onSave: (trackId: string) => void;
  onAddToPlaylist: (trackId: string) => void;
}) {
  const [choice, setChoice] = useState<Record<string, "interested" | "skipped">>({});

  return (
    <div>
      <p className="mb-2.5 text-xs text-spotify-muted">
        Because you like <span className="font-semibold text-white">{row.song}</span> by{" "}
        <span className="font-semibold text-white">{row.artist}</span>
      </p>
      <div className="flex gap-3 overflow-x-auto pb-1 no-scrollbar">
        {tracks.map((track) => {
          const saved = savedTrackIds.includes(track.id);
          const addedToPlaylist = playlistTrackIds.includes(track.id);
          return (
            <div key={track.id} className="w-[148px] shrink-0 rounded-xl bg-spotify-card p-2.5">
              <button type="button" onClick={() => onPlay(track)} className="block w-full text-left">
                <div
                  className={`mb-2 aspect-square rounded-lg bg-gradient-to-br shadow-lg ${track.artworkGradient}`}
                />
                <p className="truncate text-[13px] font-semibold text-white">{track.title}</p>
                <p className="truncate text-[11px] text-spotify-muted">{track.artist}</p>
                <span className="mt-1 inline-block rounded-full bg-spotify-green/15 px-1.5 py-0.5 text-[9px] font-semibold text-spotify-green">
                  {track.mood}
                </span>
              </button>

              <button
                type="button"
                onClick={() => onPlay(track)}
                className="mt-2 flex w-full items-center justify-center gap-1 rounded-full bg-spotify-green py-1.5 text-[11px] font-bold text-black transition active:scale-95"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play
              </button>

              <div className="mt-2 flex flex-wrap gap-1">
                <FeedbackBtn
                  active={choice[track.id] === "interested"}
                  onClick={() => {
                    setChoice((prev) => ({ ...prev, [track.id]: "interested" }));
                    onInterested(track.id);
                  }}
                >
                  Interested
                </FeedbackBtn>
                <FeedbackBtn
                  active={choice[track.id] === "skipped"}
                  onClick={() => {
                    setChoice((prev) => ({ ...prev, [track.id]: "skipped" }));
                    onNotInterested(track.id);
                  }}
                >
                  Skip
                </FeedbackBtn>
                <FeedbackBtn active={saved} onClick={() => onSave(track.id)}>
                  {saved ? "Saved" : "Save"}
                </FeedbackBtn>
                <FeedbackBtn active={addedToPlaylist} onClick={() => onAddToPlaylist(track.id)}>
                  {addedToPlaylist ? "Added" : "Playlist"}
                </FeedbackBtn>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FeedbackBtn({
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
      className={`rounded-full px-1.5 py-0.5 text-[9px] font-semibold transition ${
        active ? "bg-spotify-green/20 text-spotify-green" : "bg-white/10 text-white hover:bg-white/15"
      }`}
    >
      {children}
    </button>
  );
}
