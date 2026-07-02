import { getFeedbackScore } from "./feedbackStore";
import type {
  DiscoveryRecommendation,
  FreshnessLevel,
  Track,
  UserFeedback,
} from "./types";
import { GENRE_ADJACENCY } from "./types";

type ScoredTrack = {
  track: Track;
  score: number;
  anchorMatch: string;
  feedbackInfluence: string;
};

function clamp(value: number, min = 0, max = 1): number {
  return Math.max(min, Math.min(max, value));
}

function tempoSimilarity(a: number, b: number): number {
  const diff = Math.abs(a - b);
  return clamp(1 - diff / 60);
}

function energySimilarity(a: number, b: number): number {
  return clamp(1 - Math.abs(a - b));
}

function genreAnchorScore(current: Track, candidate: Track): number {
  if (candidate.genre === current.genre) return 1;
  const adjacent = GENRE_ADJACENCY[current.genre] ?? [];
  if (adjacent.includes(candidate.subGenre) || adjacent.includes(candidate.genre)) return 0.75;
  if (candidate.subGenre === current.subGenre) return 0.85;
  return 0.2;
}

function subGenreMatchScore(current: Track, candidate: Track): number {
  if (candidate.subGenre === current.subGenre) return 1;
  const adjacent = GENRE_ADJACENCY[current.genre] ?? [];
  if (adjacent.includes(candidate.subGenre)) return 0.7;
  return 0.3;
}

function moodMatchScore(current: Track, candidate: Track): number {
  if (candidate.mood === current.mood) return 1;
  const similarMoods: Record<string, string[]> = {
    Dreamy: ["Intimate", "Reflective", "Melancholic"],
    Uplifting: ["Playful", "Confident", "Energetic"],
    Melancholic: ["Reflective", "Dreamy", "Intimate"],
    Calm: ["Cozy", "Reflective", "Dreamy"],
    Energetic: ["Confident", "Playful", "Uplifting"],
    Intimate: ["Dreamy", "Melancholic", "Sensual"],
    Reflective: ["Melancholic", "Dreamy", "Calm"],
    Sensual: ["Intimate", "Dreamy"],
    Confident: ["Energetic", "Uplifting"],
    Playful: ["Uplifting", "Energetic"],
    Gritty: ["Intense", "Confident"],
    Intense: ["Gritty", "Energetic"],
    Hypnotic: ["Dreamy", "Energetic"],
    Cozy: ["Calm", "Intimate"],
    Nostalgic: ["Reflective", "Melancholic"],
  };
  const related = similarMoods[current.mood] ?? [];
  return related.includes(candidate.mood) ? 0.65 : 0.25;
}

function freshnessLadderScore(candidate: Track, level: FreshnessLevel): number {
  switch (level) {
    case "familiar":
      return clamp(candidate.mainstreamScore * 0.6 + (1 - candidate.freshness) * 0.4);
    case "fresh":
      return clamp(
        candidate.freshness * 0.5 +
          (1 - Math.abs(candidate.mainstreamScore - 0.45)) * 0.3 +
          candidate.popularity / 200
      );
    case "hidden_gems":
      return clamp(
        candidate.freshness * 0.45 +
          (1 - candidate.mainstreamScore) * 0.35 +
          (1 - candidate.popularity / 100) * 0.2
      );
  }
}

function hiddenGemScore(candidate: Track, level: FreshnessLevel): number {
  if (level !== "hidden_gems") return 0.5;
  return clamp((1 - candidate.mainstreamScore) * 0.5 + candidate.freshness * 0.5);
}

function mainstreamReductionScore(candidate: Track, level: FreshnessLevel): number {
  if (level === "familiar") return candidate.mainstreamScore;
  if (level === "fresh") return 1 - Math.abs(candidate.mainstreamScore - 0.45);
  return 1 - candidate.mainstreamScore;
}

function popularityScore(candidate: Track, level: FreshnessLevel): number {
  const normalized = candidate.popularity / 100;
  if (level === "familiar") return clamp(normalized);
  if (level === "fresh") return clamp(1 - Math.abs(normalized - 0.5));
  return clamp(1 - normalized);
}

function diversityPenalty(
  candidate: Track,
  current: Track,
  recentArtists: string[]
): number {
  let penalty = 0;
  if (candidate.artist === current.artist) penalty += 0.4;
  if (recentArtists.includes(candidate.artist)) penalty += 0.25;
  return penalty;
}

function hasAnchorConnection(current: Track, candidate: Track): boolean {
  if (candidate.genre === current.genre) return true;
  const adjacent = GENRE_ADJACENCY[current.genre] ?? [];
  if (adjacent.includes(candidate.subGenre) || adjacent.includes(candidate.genre)) return true;
  if (candidate.subGenre === current.subGenre) return true;
  if (moodMatchScore(current, candidate) >= 0.65) return true;
  if (tempoSimilarity(current.tempo, candidate.tempo) >= 0.7) return true;
  if (energySimilarity(current.energy, candidate.energy) >= 0.75) return true;
  return false;
}

function buildExplanation(
  current: Track,
  candidate: Track,
  level: FreshnessLevel,
  feedbackInfluence: string
): string {
  const parts: string[] = [];

  if (candidate.genre === current.genre) {
    parts.push(`Same ${current.genre.toLowerCase()} mood`);
  } else if (candidate.subGenre !== current.subGenre) {
    parts.push(`Nearby ${candidate.subGenre.toLowerCase()} sound`);
  } else {
    parts.push(`Connected ${candidate.mood.toLowerCase()} energy`);
  }

  if (level === "familiar") {
    parts.push("with a recognizable, safe feel");
  } else if (level === "fresh") {
    parts.push("but from a fresher, less repetitive artist");
  } else {
    parts.push("from a low-mainstream hidden-gem artist");
  }

  if (candidate.mood === current.mood) {
    parts.push(`keeping the ${current.mood.toLowerCase()} vibe`);
  } else if (tempoSimilarity(current.tempo, candidate.tempo) >= 0.7) {
    parts.push("at a similar mellow tempo");
  }

  if (feedbackInfluence) {
    parts.push(feedbackInfluence);
  }

  const base = parts.slice(0, 2).join(", ");
  const extra = parts.slice(2).join(", ");
  return extra ? `${base}, ${extra}.` : `${base}.`;
}

function getFeedbackInfluenceText(feedback: UserFeedback, candidate: Track): string {
  if (feedback.interestedGenres.includes(candidate.genre)) {
    return "tuned toward genres you liked";
  }
  if (feedback.interestedMoods.includes(candidate.mood)) {
    return "matching moods you showed interest in";
  }
  if (feedback.rejectedMoods.length > 0) {
    return "steering away from styles you skipped";
  }
  return "";
}

function scoreTrack(
  current: Track,
  candidate: Track,
  level: FreshnessLevel,
  feedback: UserFeedback,
  recentArtists: string[],
  excludeIds: string[]
): ScoredTrack | null {
  if (candidate.id === current.id) return null;
  if (excludeIds.includes(candidate.id)) return null;
  if (!hasAnchorConnection(current, candidate)) return null;

  const anchor = genreAnchorScore(current, candidate);
  const subGenre = subGenreMatchScore(current, candidate);
  const mood = moodMatchScore(current, candidate);
  const tempo = tempoSimilarity(current.tempo, candidate.tempo);
  const energy = energySimilarity(current.energy, candidate.energy);
  const freshness = freshnessLadderScore(candidate, level);
  const hiddenGem = hiddenGemScore(candidate, level);
  const mainstream = mainstreamReductionScore(candidate, level);
  const popularity = popularityScore(candidate, level);
  const feedbackScore = getFeedbackScore(feedback, candidate);
  const diversity = diversityPenalty(candidate, current, recentArtists);

  let total: number;
  if (level === "familiar") {
    total =
      anchor * 0.2 +
      subGenre * 0.12 +
      mood * 0.15 +
      tempo * 0.1 +
      energy * 0.08 +
      freshness * 0.15 +
      mainstream * 0.1 +
      popularity * 0.05 +
      feedbackScore * 0.05 -
      diversity * 0.1;
  } else if (level === "fresh") {
    total =
      anchor * 0.15 +
      subGenre * 0.12 +
      mood * 0.12 +
      tempo * 0.08 +
      energy * 0.07 +
      freshness * 0.2 +
      mainstream * 0.1 +
      popularity * 0.06 +
      feedbackScore * 0.08 -
      diversity * 0.12;
  } else {
    total =
      anchor * 0.12 +
      subGenre * 0.1 +
      mood * 0.12 +
      tempo * 0.08 +
      energy * 0.07 +
      freshness * 0.15 +
      hiddenGem * 0.15 +
      mainstream * 0.12 +
      popularity * 0.05 +
      feedbackScore * 0.08 -
      diversity * 0.15;
  }

  const feedbackInfluence = getFeedbackInfluenceText(feedback, candidate);
  const anchorMatch =
    candidate.genre === current.genre
      ? current.genre
      : `${candidate.subGenre} (${current.genre} family)`;

  return { track: candidate, score: total, anchorMatch, feedbackInfluence };
}

export function getAIDiscoveryRecommendations({
  currentTrack,
  freshnessLevel,
  userFeedback,
  allTracks,
  excludeIds = [],
  recentArtists = [],
  count = 1,
}: {
  currentTrack: Track;
  freshnessLevel: FreshnessLevel;
  userFeedback: UserFeedback;
  allTracks: Track[];
  excludeIds?: string[];
  recentArtists?: string[];
  count?: number;
}): DiscoveryRecommendation[] {
  const scored = allTracks
    .map((t) =>
      scoreTrack(currentTrack, t, freshnessLevel, userFeedback, recentArtists, excludeIds)
    )
    .filter((s): s is ScoredTrack => s !== null)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) {
    const fallback = allTracks.find(
      (t) => t.id !== currentTrack.id && t.genre === currentTrack.genre
    );
    if (!fallback) return [];
    return [
      {
        track: fallback,
        score: 0.5,
        freshnessLevel,
        explanation: `Closest ${currentTrack.genre.toLowerCase()} match available in demo catalog.`,
        reasonTags: fallback.reasonTags,
        anchorMatch: currentTrack.genre,
        feedbackInfluence: "",
      },
    ];
  }

  return scored.slice(0, count).map((s) => ({
    track: s.track,
    score: s.score,
    freshnessLevel,
    explanation: buildExplanation(
      currentTrack,
      s.track,
      freshnessLevel,
      s.feedbackInfluence
    ),
    reasonTags: s.track.reasonTags,
    anchorMatch: s.anchorMatch,
    feedbackInfluence: s.feedbackInfluence,
  }));
}
