/**
 * Turns every song referenced by the Excel recommendation matrix (source
 * rows and their five recommendations alike) into a playable demo Track —
 * this project runs fully in demo mode (see spotifyApiPlaceholder.ts), so
 * there is no Spotify Web API to resolve real artwork/audio from. Title,
 * artist, and genre always come verbatim from the spreadsheet; only the
 * extra fields this project's Track shape requires (mood, tempo, energy,
 * popularity, freshness, mainstreamScore, releaseYear, artworkGradient) are
 * synthesized, deterministically, from a hash of the song itself — so the
 * same song always renders identically and nothing is randomized per-render.
 */

import type { Track } from "./types";
import { normalizeText } from "./recommendationMatrix";
import {
  ARTIST_SONG_RECOMMENDATIONS,
  type ArtistSongRecommendationRow,
  type RecommendedSong,
} from "./artistSongRecommendations";

const MOODS = [
  "Dreamy",
  "Uplifting",
  "Melancholic",
  "Calm",
  "Energetic",
  "Intimate",
  "Reflective",
  "Sensual",
  "Confident",
  "Playful",
  "Gritty",
  "Intense",
  "Hypnotic",
  "Cozy",
  "Nostalgic",
];

const GRADIENTS = [
  "from-violet-600 to-indigo-900",
  "from-purple-500 to-blue-800",
  "from-orange-400 to-pink-600",
  "from-teal-500 to-purple-700",
  "from-rose-400 to-violet-600",
  "from-cyan-400 to-blue-700",
  "from-slate-400 to-indigo-800",
  "from-gray-500 to-purple-900",
  "from-pink-300 to-violet-800",
  "from-emerald-600 to-teal-900",
  "from-green-500 to-blue-900",
  "from-lime-500 to-emerald-800",
  "from-indigo-400 to-purple-800",
  "from-amber-500 to-red-900",
  "from-fuchsia-400 to-purple-800",
  "from-red-700 to-purple-900",
  "from-cyan-500 to-pink-600",
];

function hashString(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function pickFrom<T>(seed: string, salt: string, arr: T[]): T {
  return arr[hashString(`${seed}::${salt}`) % arr.length];
}

function rangeFrom(seed: string, salt: string, min: number, max: number): number {
  const h = hashString(`${seed}::${salt}`);
  return min + ((h % 1000) / 1000) * (max - min);
}

function slugify(value: string): string {
  return normalizeText(value).replace(/\s+/g, "-");
}

function splitGenre(genreLabel: string): { genre: string; subGenre: string } {
  const parts = genreLabel
    .split("/")
    .map((p) => p.trim())
    .filter(Boolean);
  if (parts.length >= 2) return { genre: parts[0], subGenre: parts[1] };
  return { genre: parts[0] ?? genreLabel, subGenre: parts[0] ?? genreLabel };
}

function buildTrack(candidate: RecommendedSong, genreLabel: string): Track {
  const seed = `${candidate.artist}::${candidate.title}`;
  const { genre, subGenre } = splitGenre(genreLabel);
  const popularity = Math.round(rangeFrom(seed, "popularity", 10, 92));
  const freshness = Math.max(
    0,
    Math.min(1, 1 - popularity / 100 + rangeFrom(seed, "freshness-jitter", -0.08, 0.08))
  );
  const mainstreamScore = Math.max(
    0,
    Math.min(1, popularity / 100 + rangeFrom(seed, "mainstream-jitter", -0.1, 0.1))
  );

  return {
    id: `xl-${slugify(candidate.artist)}-${slugify(candidate.title)}`,
    title: candidate.title,
    artist: candidate.artist,
    album: `${candidate.artist} — Genre Mix`,
    genre,
    subGenre,
    mood: pickFrom(seed, "mood", MOODS),
    tempo: Math.round(rangeFrom(seed, "tempo", 68, 132)),
    energy: Math.round(rangeFrom(seed, "energy", 0.2, 0.9) * 100) / 100,
    popularity,
    freshness: Math.round(freshness * 100) / 100,
    mainstreamScore: Math.round(mainstreamScore * 100) / 100,
    releaseYear: 2021 + (hashString(`${seed}::year`) % 4),
    artworkGradient: pickFrom(seed, "gradient", GRADIENTS),
    reasonTags: [slugify(genre), "genre-mix"],
  };
}

const catalogMap = new Map<string, Track>();

function getOrBuildTrack(candidate: RecommendedSong, genreLabel: string): Track {
  const key = `${slugify(candidate.artist)}::${slugify(candidate.title)}`;
  const existing = catalogMap.get(key);
  if (existing) return existing;
  const track = buildTrack(candidate, genreLabel);
  catalogMap.set(key, track);
  return track;
}

// Built once, at module load — every source song and every recommendation
// across all 200 spreadsheet rows becomes a stable, cached Track.
for (const row of ARTIST_SONG_RECOMMENDATIONS) {
  getOrBuildTrack({ title: row.song, artist: row.artist }, row.genre);
  for (const rec of row.recommendations) {
    getOrBuildTrack(rec, row.genre);
  }
}

export const excelTrackCatalog: Track[] = Array.from(catalogMap.values());

export function getTrackForRecommendation(candidate: RecommendedSong, genreLabel: string): Track {
  return getOrBuildTrack(candidate, genreLabel);
}

export function getTrackForRow(row: ArtistSongRecommendationRow): Track {
  return getOrBuildTrack({ title: row.song, artist: row.artist }, row.genre);
}
