/**
 * Matching logic against ARTIST_SONG_RECOMMENDATIONS (generated from
 * data/Artist_Song_Recommendations.xlsx — see artistSongRecommendations.ts).
 * That spreadsheet is the source of truth for genre-matched recommendations
 * on the Genre Mix Discover page. Nothing here invents a recommendation —
 * every result traces back to a row the spreadsheet actually contains.
 */

import {
  ARTIST_SONG_RECOMMENDATIONS,
  type ArtistSongRecommendationRow,
  type RecommendedSong,
} from "./artistSongRecommendations";

/** Lowercases, strips accents/punctuation, and collapses whitespace so
 * "Bad Guy", "bad guy", and "BAD-GUY" all compare equal. */
export function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/** Splits a possibly multi-artist credit ("Martin Garrix, Bebe Rexha") into
 * individually-normalized names, so a track credited to several artists
 * still matches a spreadsheet row for just one of them. */
function splitArtists(artist: string): string[] {
  return artist
    .split(/,|&|\bfeat\.?\b|\bft\.?\b|\bx\b/i)
    .map((a) => normalizeText(a))
    .filter(Boolean);
}

/** Re-parses a "Song Title - Artist Name" cell — mirrors the offline
 * conversion script's logic: split on the first " - " only. */
export function parseRecommendedSong(cell: string): RecommendedSong {
  const trimmed = cell.trim();
  const idx = trimmed.indexOf(" - ");
  if (idx === -1) return { title: trimmed, artist: "" };
  return { title: trimmed.slice(0, idx).trim(), artist: trimmed.slice(idx + 3).trim() };
}

export interface CurrentTrackForMatch {
  title: string;
  /** May be a comma-joined multi-artist credit. */
  artist: string;
  /** Resolved genre, if known — only used for the tier-4 same-genre fallback. */
  genre?: string | null;
}

export type MatchTier = "exact" | "fuzzy" | "artist" | "genre";

export interface RecommendationMatch {
  row: ArtistSongRecommendationRow;
  tier: MatchTier;
}

/**
 * Finds a spreadsheet row for the given track, trying — in this exact
 * order — four tiers:
 *  1. Exact match: normalized title AND normalized artist both equal.
 *  2. Fuzzy-safe match: normalized title equal, artist contains/is-contained.
 *  3. Same-artist match: any row whose artist matches one of the track's
 *     credited artists (uses that artist's rows, regardless of song).
 *  4. Same-genre match: loose keyword overlap between the resolved genre
 *     and the spreadsheet's genre label.
 * Returns null only when none of the four tiers find anything — callers
 * should fall back to non-Excel logic only in that case.
 */
export function findRecommendationRowForTrack(track: CurrentTrackForMatch): RecommendationMatch | null {
  const trackTitle = normalizeText(track.title);
  const trackArtistFull = normalizeText(track.artist);
  const trackArtists = splitArtists(track.artist);

  for (const row of ARTIST_SONG_RECOMMENDATIONS) {
    if (normalizeText(row.song) === trackTitle && normalizeText(row.artist) === trackArtistFull) {
      return { row, tier: "exact" };
    }
  }

  for (const row of ARTIST_SONG_RECOMMENDATIONS) {
    if (normalizeText(row.song) !== trackTitle) continue;
    const rowArtist = normalizeText(row.artist);
    if (trackArtists.some((a) => rowArtist.includes(a) || a.includes(rowArtist))) {
      return { row, tier: "fuzzy" };
    }
  }

  for (const row of ARTIST_SONG_RECOMMENDATIONS) {
    const rowArtist = normalizeText(row.artist);
    if (trackArtists.some((a) => rowArtist === a || rowArtist.includes(a) || a.includes(rowArtist))) {
      return { row, tier: "artist" };
    }
  }

  if (track.genre) {
    const genreTokens = normalizeText(track.genre)
      .split(" ")
      .filter((t) => t.length > 2);
    if (genreTokens.length > 0) {
      for (const row of ARTIST_SONG_RECOMMENDATIONS) {
        const rowGenreTokens = normalizeText(row.genre)
          .split(" ")
          .filter((t) => t.length > 2);
        if (genreTokens.some((t) => rowGenreTokens.includes(t))) {
          return { row, tier: "genre" };
        }
      }
    }
  }

  return null;
}

/** Small deterministic hash so the same track always rotates to the same
 * starting recommendation (stable across renders) without ever needing
 * localStorage or randomness. */
function rotationIndex(seed: string, length: number): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  }
  return Math.abs(hash) % length;
}

/** Reorders a row's five recommendations starting from a deterministic
 * rotation point, so repeat plays of the same song don't always surface the
 * exact same suggestion first — the set of five is always exactly what the
 * spreadsheet lists, just reordered. */
export function rotateRecommendations(row: ArtistSongRecommendationRow): RecommendedSong[] {
  const start = rotationIndex(`${row.artist}:${row.song}`, row.recommendations.length);
  return [...row.recommendations.slice(start), ...row.recommendations.slice(0, start)];
}

/** Convenience wrapper: finds the matching row (if any) and returns its
 * recommendations already rotated into a resolution order. */
export function getExcelRecommendationsForTrack(
  track: CurrentTrackForMatch
): { match: RecommendationMatch; recommendations: RecommendedSong[] } | null {
  const match = findRecommendationRowForTrack(track);
  if (!match) return null;
  return { match, recommendations: rotateRecommendations(match.row) };
}

/**
 * Picks up to `limit` distinct spreadsheet rows for the Genre Mix Discover
 * page, prioritizing real listening data in this order: currently playing
 * track -> recently played artists -> top artists -> dominant genre -> a
 * curated sample (one row per distinct artist) as a last resort so the
 * page is never empty.
 */
export function pickGenreMatchedRows(params: {
  currentTrack?: { title: string; artist: string } | null;
  recentArtists: string[];
  topArtists: string[];
  dominantGenre?: string | null;
  limit: number;
}): ArtistSongRecommendationRow[] {
  const seen = new Set<string>();
  const picked: ArtistSongRecommendationRow[] = [];

  function addRow(row: ArtistSongRecommendationRow) {
    const key = `${row.artist}::${row.song}`;
    if (seen.has(key)) return;
    seen.add(key);
    picked.push(row);
  }

  function addByArtist(artistName: string) {
    const norm = normalizeText(artistName);
    for (const row of ARTIST_SONG_RECOMMENDATIONS) {
      if (picked.length >= params.limit) return;
      const rowArtist = normalizeText(row.artist);
      if (rowArtist === norm || rowArtist.includes(norm) || norm.includes(rowArtist)) addRow(row);
    }
  }

  if (params.currentTrack) {
    const match = findRecommendationRowForTrack(params.currentTrack);
    if (match) addRow(match.row);
  }

  for (const a of params.recentArtists) {
    if (picked.length >= params.limit) break;
    addByArtist(a);
  }

  for (const a of params.topArtists) {
    if (picked.length >= params.limit) break;
    addByArtist(a);
  }

  if (picked.length < params.limit && params.dominantGenre) {
    const genreTokens = normalizeText(params.dominantGenre)
      .split(" ")
      .filter((t) => t.length > 2);
    for (const row of ARTIST_SONG_RECOMMENDATIONS) {
      if (picked.length >= params.limit) break;
      const rowGenreTokens = normalizeText(row.genre)
        .split(" ")
        .filter((t) => t.length > 2);
      if (genreTokens.some((t) => rowGenreTokens.includes(t))) addRow(row);
    }
  }

  if (picked.length < params.limit) {
    const artistsSeen = new Set(picked.map((r) => r.artist));
    for (const row of ARTIST_SONG_RECOMMENDATIONS) {
      if (picked.length >= params.limit) break;
      if (artistsSeen.has(row.artist)) continue;
      artistsSeen.add(row.artist);
      addRow(row);
    }
  }

  return picked.slice(0, params.limit);
}
