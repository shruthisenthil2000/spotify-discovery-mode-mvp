import type { Track } from "./types";

export const demoTracks: Track[] = [
  // Indie Pop — Familiar
  { id: "ip-01", title: "Golden Hour Glow", artist: "Luna Vale", album: "Soft Horizons", genre: "Indie Pop", subGenre: "Indie Pop", mood: "Dreamy", tempo: 108, energy: 0.55, popularity: 78, freshness: 0.3, mainstreamScore: 0.72, releaseYear: 2022, artworkGradient: "from-violet-600 to-indigo-900", reasonTags: ["indie-pop", "dreamy", "familiar"] },
  { id: "ip-02", title: "Paper Lanterns", artist: "The Willow Lines", album: "Quiet Streets", genre: "Indie Pop", subGenre: "Indie Pop", mood: "Melancholic", tempo: 95, energy: 0.42, popularity: 75, freshness: 0.25, mainstreamScore: 0.68, releaseYear: 2021, artworkGradient: "from-purple-500 to-blue-800", reasonTags: ["indie-pop", "melancholic"] },
  { id: "ip-03", title: "Sunset Echo", artist: "Maris Cole", album: "Coastal Light", genre: "Indie Pop", subGenre: "Indie Pop", mood: "Uplifting", tempo: 118, energy: 0.65, popularity: 80, freshness: 0.35, mainstreamScore: 0.75, releaseYear: 2023, artworkGradient: "from-orange-400 to-pink-600", reasonTags: ["indie-pop", "uplifting"] },
  // Indie Pop — Fresh
  { id: "ip-04", title: "Velvet Static", artist: "Nora Finch", album: "New Bloom", genre: "Indie Pop", subGenre: "Dream Pop", mood: "Dreamy", tempo: 110, energy: 0.58, popularity: 52, freshness: 0.72, mainstreamScore: 0.45, releaseYear: 2024, artworkGradient: "from-teal-500 to-purple-700", reasonTags: ["dream-pop", "fresh"] },
  { id: "ip-05", title: "Moonlit Sidewalk", artist: "Cedar & June", album: "Afterglow EP", genre: "Indie Pop", subGenre: "Bedroom Pop", mood: "Intimate", tempo: 102, energy: 0.48, popularity: 48, freshness: 0.78, mainstreamScore: 0.38, releaseYear: 2024, artworkGradient: "from-rose-400 to-violet-600", reasonTags: ["bedroom-pop", "fresh"] },
  { id: "ip-06", title: "Glass Garden", artist: "The Pale Atlas", album: "Translucent", genre: "Indie Pop", subGenre: "Indie Alternative", mood: "Reflective", tempo: 105, energy: 0.52, popularity: 55, freshness: 0.7, mainstreamScore: 0.42, releaseYear: 2024, artworkGradient: "from-cyan-400 to-blue-700", reasonTags: ["indie-alternative", "fresh"] },
  // Indie Pop — Hidden Gems
  { id: "ip-07", title: "Frosted Window", artist: "Elara Quinn", album: "Unseen Rooms", genre: "Indie Pop", subGenre: "Bedroom Pop", mood: "Dreamy", tempo: 98, energy: 0.4, popularity: 18, freshness: 0.92, mainstreamScore: 0.12, releaseYear: 2024, artworkGradient: "from-slate-400 to-indigo-800", reasonTags: ["hidden-gem", "bedroom-pop"] },
  { id: "ip-08", title: "Borrowed Light", artist: "Hollow Pines", album: "Whisper Archive", genre: "Indie Pop", subGenre: "Indie Alternative", mood: "Melancholic", tempo: 92, energy: 0.38, popularity: 15, freshness: 0.95, mainstreamScore: 0.08, releaseYear: 2023, artworkGradient: "from-gray-500 to-purple-900", reasonTags: ["hidden-gem", "underrated"] },
  { id: "ip-09", title: "Silver Thread", artist: "Mira Ashford", album: "Small Hours", genre: "Indie Pop", subGenre: "Dream Pop", mood: "Intimate", tempo: 100, energy: 0.45, popularity: 22, freshness: 0.88, mainstreamScore: 0.15, releaseYear: 2024, artworkGradient: "from-pink-300 to-violet-800", reasonTags: ["hidden-gem", "dream-pop"] },

  // Tamil Indie — Familiar
  { id: "ti-01", title: "Neer Mazhai", artist: "Kavi & The Rain", album: "Monsoon Letters", genre: "Tamil Indie", subGenre: "Tamil Indie", mood: "Nostalgic", tempo: 88, energy: 0.4, popularity: 70, freshness: 0.3, mainstreamScore: 0.6, releaseYear: 2022, artworkGradient: "from-emerald-600 to-teal-900", reasonTags: ["tamil-indie", "nostalgic"] },
  { id: "ti-02", title: "Velaiyil Oru Paatu", artist: "Anitha Ramesh", album: "City Whispers", genre: "Tamil Indie", subGenre: "Tamil Indie", mood: "Reflective", tempo: 92, energy: 0.45, popularity: 68, freshness: 0.28, mainstreamScore: 0.58, releaseYear: 2021, artworkGradient: "from-green-500 to-blue-900", reasonTags: ["tamil-indie", "reflective"] },
  // Tamil Indie — Fresh
  { id: "ti-03", title: "Kaatru Varum", artist: "The Madras Echo", album: "Coastal Tamil", genre: "Tamil Indie", subGenre: "Tamil Indie", mood: "Uplifting", tempo: 96, energy: 0.55, popularity: 45, freshness: 0.75, mainstreamScore: 0.35, releaseYear: 2024, artworkGradient: "from-lime-500 to-emerald-800", reasonTags: ["tamil-indie", "fresh"] },
  { id: "ti-04", title: "Iravu Thoongum", artist: "Surya Iyer", album: "Night Bloom", genre: "Tamil Indie", subGenre: "Soft Pop", mood: "Dreamy", tempo: 85, energy: 0.42, popularity: 40, freshness: 0.8, mainstreamScore: 0.3, releaseYear: 2024, artworkGradient: "from-indigo-400 to-purple-800", reasonTags: ["tamil-indie", "dreamy"] },
  // Tamil Indie — Hidden Gems
  { id: "ti-05", title: "Silence Between Notes", artist: "Priya Vel", album: "Unheard Rooms", genre: "Tamil Indie", subGenre: "Lo-fi", mood: "Intimate", tempo: 78, energy: 0.32, popularity: 12, freshness: 0.94, mainstreamScore: 0.1, releaseYear: 2024, artworkGradient: "from-teal-400 to-slate-800", reasonTags: ["hidden-gem", "tamil-indie"] },
  { id: "ti-06", title: "Malarin Thalai", artist: "Karthik Nair", album: "Petals & Dust", genre: "Tamil Indie", subGenre: "Alternative", mood: "Melancholic", tempo: 82, energy: 0.35, popularity: 16, freshness: 0.9, mainstreamScore: 0.12, releaseYear: 2023, artworkGradient: "from-amber-400 to-green-900", reasonTags: ["hidden-gem", "tamil-indie"] },

  // Pop — Familiar / Fresh / Hidden
  { id: "pop-01", title: "Starlight Parade", artist: "Nova Reyes", album: "Bright Side", genre: "Pop", subGenre: "Pop", mood: "Uplifting", tempo: 122, energy: 0.78, popularity: 85, freshness: 0.25, mainstreamScore: 0.82, releaseYear: 2023, artworkGradient: "from-yellow-400 to-orange-600", reasonTags: ["pop", "uplifting"] },
  { id: "pop-02", title: "Crystal Heart", artist: "Ava Sinclair", album: "Shimmer", genre: "Pop", subGenre: "Soft Pop", mood: "Dreamy", tempo: 115, energy: 0.62, popularity: 50, freshness: 0.7, mainstreamScore: 0.4, releaseYear: 2024, artworkGradient: "from-pink-400 to-rose-700", reasonTags: ["soft-pop", "fresh"] },
  { id: "pop-03", title: "Neon Confetti", artist: "Zara Bloom", album: "Underground Pop", genre: "Pop", subGenre: "Indie Pop", mood: "Playful", tempo: 118, energy: 0.7, popularity: 20, freshness: 0.9, mainstreamScore: 0.15, releaseYear: 2024, artworkGradient: "from-fuchsia-400 to-purple-800", reasonTags: ["hidden-gem", "pop"] },

  // R&B
  { id: "rb-01", title: "Midnight Silk", artist: "Jordan Hale", album: "Velvet Nights", genre: "R&B", subGenre: "R&B", mood: "Sensual", tempo: 85, energy: 0.5, popularity: 76, freshness: 0.3, mainstreamScore: 0.7, releaseYear: 2022, artworkGradient: "from-red-700 to-purple-900", reasonTags: ["r&b", "sensual"] },
  { id: "rb-02", title: "Slow Burn City", artist: "Amara Keys", album: "After Hours", genre: "R&B", subGenre: "Soft Pop", mood: "Intimate", tempo: 78, energy: 0.42, popularity: 48, freshness: 0.75, mainstreamScore: 0.38, releaseYear: 2024, artworkGradient: "from-rose-600 to-indigo-900", reasonTags: ["r&b", "fresh"] },
  { id: "rb-03", title: "Honey & Smoke", artist: "The Velvet Room", album: "Unlisted", genre: "R&B", subGenre: "Creator Trend", mood: "Dreamy", tempo: 80, energy: 0.38, popularity: 14, freshness: 0.93, mainstreamScore: 0.1, releaseYear: 2024, artworkGradient: "from-amber-600 to-red-900", reasonTags: ["hidden-gem", "r&b"] },

  // Hip-Hop
  { id: "hh-01", title: "City Pulse", artist: "Dre Knox", album: "Metro Lines", genre: "Hip-Hop", subGenre: "Hip-Hop", mood: "Confident", tempo: 95, energy: 0.75, popularity: 82, freshness: 0.28, mainstreamScore: 0.78, releaseYear: 2023, artworkGradient: "from-gray-700 to-yellow-600", reasonTags: ["hip-hop", "confident"] },
  { id: "hh-02", title: "Late Night Cipher", artist: "Maya Rhymes", album: "Underground Crown", genre: "Hip-Hop", subGenre: "Creator Trend", mood: "Reflective", tempo: 88, energy: 0.65, popularity: 42, freshness: 0.78, mainstreamScore: 0.35, releaseYear: 2024, artworkGradient: "from-zinc-600 to-orange-700", reasonTags: ["hip-hop", "fresh"] },
  { id: "hh-03", title: "Basement Tapes Vol. 2", artist: "Cipher Lane", album: "Raw Cuts", genre: "Hip-Hop", subGenre: "Alternative", mood: "Gritty", tempo: 92, energy: 0.72, popularity: 16, freshness: 0.91, mainstreamScore: 0.12, releaseYear: 2024, artworkGradient: "from-stone-600 to-red-800", reasonTags: ["hidden-gem", "hip-hop"] },

  // Electronic
  { id: "el-01", title: "Pulse Wave", artist: "Synth Haven", album: "Digital Dawn", genre: "Electronic", subGenre: "Electronic", mood: "Energetic", tempo: 128, energy: 0.85, popularity: 74, freshness: 0.32, mainstreamScore: 0.68, releaseYear: 2022, artworkGradient: "from-blue-500 to-cyan-700", reasonTags: ["electronic", "energetic"] },
  { id: "el-02", title: "Aurora Drift", artist: "Neon Cascade", album: "Frequency", genre: "Electronic", subGenre: "Lo-fi", mood: "Dreamy", tempo: 105, energy: 0.55, popularity: 46, freshness: 0.76, mainstreamScore: 0.36, releaseYear: 2024, artworkGradient: "from-indigo-500 to-teal-700", reasonTags: ["electronic", "fresh"] },
  { id: "el-03", title: "Ghost Frequency", artist: "Null Signal", album: "Deep Web", genre: "Electronic", subGenre: "Alternative", mood: "Hypnotic", tempo: 112, energy: 0.6, popularity: 13, freshness: 0.94, mainstreamScore: 0.09, releaseYear: 2024, artworkGradient: "from-violet-700 to-black", reasonTags: ["hidden-gem", "electronic"] },

  // Lo-fi
  { id: "lf-01", title: "Rainy Study Session", artist: "Calm Desk", album: "Focus Hours", genre: "Lo-fi", subGenre: "Lo-fi", mood: "Calm", tempo: 72, energy: 0.25, popularity: 72, freshness: 0.3, mainstreamScore: 0.65, releaseYear: 2022, artworkGradient: "from-slate-500 to-blue-700", reasonTags: ["lo-fi", "calm"] },
  { id: "lf-02", title: "Coffee Steam", artist: "Mellow Keys", album: "Morning Pages", genre: "Lo-fi", subGenre: "Lo-fi", mood: "Cozy", tempo: 68, energy: 0.22, popularity: 44, freshness: 0.77, mainstreamScore: 0.32, releaseYear: 2024, artworkGradient: "from-amber-500 to-brown-800", reasonTags: ["lo-fi", "fresh"] },
  { id: "lf-03", title: "Window Seat", artist: "Quiet Trains", album: "Unlisted Journeys", genre: "Lo-fi", subGenre: "Electronic", mood: "Reflective", tempo: 70, energy: 0.2, popularity: 11, freshness: 0.96, mainstreamScore: 0.07, releaseYear: 2024, artworkGradient: "from-gray-400 to-indigo-900", reasonTags: ["hidden-gem", "lo-fi"] },

  // Alternative
  { id: "alt-01", title: "Broken Compass", artist: "The Driftwood", album: "Off Route", genre: "Alternative", subGenre: "Alternative", mood: "Intense", tempo: 115, energy: 0.72, popularity: 70, freshness: 0.32, mainstreamScore: 0.62, releaseYear: 2022, artworkGradient: "from-red-600 to-gray-800", reasonTags: ["alternative", "intense"] },
  { id: "alt-02", title: "Fault Lines", artist: "Echo Ridge", album: "Tectonic", genre: "Alternative", subGenre: "Indie Alternative", mood: "Reflective", tempo: 108, energy: 0.58, popularity: 47, freshness: 0.74, mainstreamScore: 0.34, releaseYear: 2024, artworkGradient: "from-orange-600 to-stone-800", reasonTags: ["alternative", "fresh"] },
  { id: "alt-03", title: "Static Prayer", artist: "Wolves & Wire", album: "Basement Hymns", genre: "Alternative", subGenre: "Indie Alternative", mood: "Melancholic", tempo: 102, energy: 0.48, popularity: 17, freshness: 0.92, mainstreamScore: 0.11, releaseYear: 2023, artworkGradient: "from-zinc-500 to-red-900", reasonTags: ["hidden-gem", "alternative"] },

  // Creator Trend
  { id: "ct-01", title: "Viral Loop", artist: "Trendwave", album: "For You Page", genre: "Creator Trend", subGenre: "Creator Trend", mood: "Playful", tempo: 120, energy: 0.8, popularity: 88, freshness: 0.35, mainstreamScore: 0.85, releaseYear: 2024, artworkGradient: "from-pink-500 to-yellow-500", reasonTags: ["creator-trend", "viral"] },
  { id: "ct-02", title: "Algorithm Dreams", artist: "Byte Beats", album: "Scroll Sound", genre: "Creator Trend", subGenre: "Pop", mood: "Uplifting", tempo: 125, energy: 0.82, popularity: 51, freshness: 0.73, mainstreamScore: 0.42, releaseYear: 2024, artworkGradient: "from-cyan-400 to-pink-600", reasonTags: ["creator-trend", "fresh"] },
  { id: "ct-03", title: "Underground Viral", artist: "Clip Culture", album: "Before It Hits", genre: "Creator Trend", subGenre: "Hip-Hop", mood: "Confident", tempo: 98, energy: 0.74, popularity: 19, freshness: 0.89, mainstreamScore: 0.14, releaseYear: 2024, artworkGradient: "from-lime-400 to-purple-700", reasonTags: ["hidden-gem", "creator-trend"] },

  // Soft Pop
  { id: "sp-01", title: "Blush & Blue", artist: "Claire Hart", album: "Soft Focus", genre: "Soft Pop", subGenre: "Soft Pop", mood: "Dreamy", tempo: 100, energy: 0.48, popularity: 73, freshness: 0.28, mainstreamScore: 0.66, releaseYear: 2022, artworkGradient: "from-rose-300 to-blue-500", reasonTags: ["soft-pop", "dreamy"] },
  { id: "sp-02", title: "Feather Light", artist: "Iris Moon", album: "Gentle Tide", genre: "Soft Pop", subGenre: "Dream Pop", mood: "Intimate", tempo: 94, energy: 0.4, popularity: 43, freshness: 0.79, mainstreamScore: 0.33, releaseYear: 2024, artworkGradient: "from-pink-200 to-violet-600", reasonTags: ["soft-pop", "fresh"] },
  { id: "sp-03", title: "Whispered Goodbye", artist: "Ella Frost", album: "Quiet Corners", genre: "Soft Pop", subGenre: "Bedroom Pop", mood: "Melancholic", tempo: 88, energy: 0.35, popularity: 14, freshness: 0.93, mainstreamScore: 0.09, releaseYear: 2024, artworkGradient: "from-sky-300 to-indigo-700", reasonTags: ["hidden-gem", "soft-pop"] },

  // Extra tracks for diversity
  { id: "ip-10", title: "Cloud Nine Walk", artist: "Luna Vale", album: "Soft Horizons II", genre: "Indie Pop", subGenre: "Dream Pop", mood: "Uplifting", tempo: 112, energy: 0.6, popularity: 58, freshness: 0.65, mainstreamScore: 0.48, releaseYear: 2024, artworkGradient: "from-sky-400 to-violet-600", reasonTags: ["indie-pop", "dream-pop"] },
  { id: "el-04", title: "Binary Sunset", artist: "Synth Haven", album: "Digital Dusk", genre: "Electronic", subGenre: "Electronic", mood: "Energetic", tempo: 124, energy: 0.8, popularity: 62, freshness: 0.55, mainstreamScore: 0.52, releaseYear: 2023, artworkGradient: "from-orange-500 to-blue-800", reasonTags: ["electronic", "energetic"] },
  { id: "hh-04", title: "Rooftop Stories", artist: "Dre Knox", album: "Skyline", genre: "Hip-Hop", subGenre: "Hip-Hop", mood: "Reflective", tempo: 90, energy: 0.68, popularity: 60, freshness: 0.6, mainstreamScore: 0.5, releaseYear: 2024, artworkGradient: "from-gray-600 to-amber-700", reasonTags: ["hip-hop", "reflective"] },
  { id: "rb-04", title: "Velvet Morning", artist: "Jordan Hale", album: "Dawn Sessions", genre: "R&B", subGenre: "R&B", mood: "Sensual", tempo: 82, energy: 0.45, popularity: 55, freshness: 0.62, mainstreamScore: 0.44, releaseYear: 2024, artworkGradient: "from-purple-600 to-rose-800", reasonTags: ["r&b", "sensual"] },
  { id: "lf-04", title: "Notebook Sketches", artist: "Calm Desk", album: "Draft Pages", genre: "Lo-fi", subGenre: "Lo-fi", mood: "Calm", tempo: 74, energy: 0.28, popularity: 38, freshness: 0.68, mainstreamScore: 0.28, releaseYear: 2024, artworkGradient: "from-stone-400 to-teal-700", reasonTags: ["lo-fi", "calm"] },
];

export function getTrackById(id: string): Track | undefined {
  return demoTracks.find((t) => t.id === id);
}

export function getTracksByGenre(genre: string): Track[] {
  return demoTracks.filter((t) => t.genre === genre);
}

export function getRecentlyPlayed(): Track[] {
  return [demoTracks[0], demoTracks[9], demoTracks[18], demoTracks[27], demoTracks[36]];
}

export function getMadeForYou(): Track[] {
  return demoTracks.filter((_, i) => i % 5 === 0).slice(0, 6);
}

export function getDiscoveryRow(): Track[] {
  return demoTracks.filter((t) => t.freshness > 0.7).slice(0, 8);
}

export const genreChips = [
  "Indie Pop", "Tamil Indie", "Hidden Gems", "Creator Trends",
  "Fresh R&B", "Lo-fi Focus", "Alternative Finds", "Soft Pop",
  "Fresh Hip-Hop", "Electronic Finds",
];

export const moodChips = ["Dreamy", "Uplifting", "Calm", "Energetic", "Melancholic", "Intimate"];

export const libraryPlaylists = [
  { id: "pl-1", name: "Liked Songs", count: 247, gradient: "from-purple-600 to-blue-700" },
  { id: "pl-2", name: "Discovery Mode", count: 12, gradient: "from-green-500 to-teal-700" },
  { id: "pl-3", name: "Fresh Finds", count: 34, gradient: "from-orange-500 to-pink-600" },
  { id: "pl-4", name: "Hidden Gems", count: 18, gradient: "from-indigo-600 to-violet-800" },
  { id: "pl-5", name: "Indie Mix", count: 56, gradient: "from-rose-500 to-purple-700" },
  { id: "pl-6", name: "Late Night", count: 42, gradient: "from-slate-600 to-blue-900" },
];
