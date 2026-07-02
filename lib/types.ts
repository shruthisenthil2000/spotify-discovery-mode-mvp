export type FreshnessLevel = "familiar" | "fresh" | "hidden_gems";

export type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  subGenre: string;
  mood: string;
  tempo: number;
  energy: number;
  popularity: number;
  freshness: number;
  mainstreamScore: number;
  releaseYear: number;
  artworkGradient: string;
  reasonTags: string[];
};

export type UserFeedback = {
  interestedGenres: string[];
  rejectedGenres: string[];
  interestedSubGenres: string[];
  rejectedSubGenres: string[];
  interestedMoods: string[];
  rejectedMoods: string[];
  savedTrackIds: string[];
  playlistTrackIds: string[];
  rejectedArtistNames: string[];
};

export type DiscoveryRecommendation = {
  track: Track;
  score: number;
  freshnessLevel: FreshnessLevel;
  explanation: string;
  reasonTags: string[];
  anchorMatch: string;
  feedbackInfluence: string;
};

export type QueuedRecommendation = {
  id: string;
  track: Track;
  freshnessLevel: FreshnessLevel;
  explanation: string;
  saved: boolean;
  addedToPlaylist: boolean;
  interested: boolean | null;
  timestamp: number;
};

export const FRESHNESS_LABELS: Record<FreshnessLevel, string> = {
  familiar: "Familiar",
  fresh: "Fresh",
  hidden_gems: "Hidden Gems",
};

export const GENRE_ADJACENCY: Record<string, string[]> = {
  "Indie Pop": ["Dream Pop", "Bedroom Pop", "Indie Alternative", "Soft Pop"],
  "Tamil Indie": ["Tamil Indie", "Soft Pop", "Alternative", "Lo-fi"],
  Pop: ["Soft Pop", "Indie Pop", "Creator Trend"],
  "R&B": ["Soft Pop", "Creator Trend", "Pop"],
  "Hip-Hop": ["Creator Trend", "Electronic", "R&B"],
  Electronic: ["Lo-fi", "Creator Trend", "Alternative"],
  "Lo-fi": ["Electronic", "Alternative", "Tamil Indie"],
  Alternative: ["Indie Pop", "Indie Alternative", "Electronic"],
  "Creator Trend": ["Hip-Hop", "Pop", "Electronic"],
  "Soft Pop": ["Indie Pop", "Pop", "Dream Pop"],
};
