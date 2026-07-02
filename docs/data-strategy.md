# Data Strategy — Discovery Mode MVP

## Current MVP Data Source

Phase 1 is **fully local and demo-driven**:

- Fully demo dataset in `lib/demoTracks.ts`
- Local TypeScript objects — no database
- No dependency on Spotify OAuth or API credentials
- Track metadata manually created for MVP demonstration
- Fictional track names, fictional artist names, original gradient artwork only
- No real album covers or copyrighted brand assets

The app runs with `NEXT_PUBLIC_DEMO_MODE=true` (default) and works even when all Spotify env vars are empty.

## Data Fields

Each track includes:

| Field | Purpose |
|-------|---------|
| id | Unique identifier |
| title | Track name |
| artist | Artist name |
| album | Album name |
| genre | Primary genre anchor |
| subGenre | Sub-genre for adjacency matching |
| mood | Mood matching |
| tempo | BPM for tempo similarity |
| energy | 0–1 energy level |
| popularity | 0–100 popularity score |
| freshness | 0–1 novelty score |
| mainstreamScore | 0–1 mainstream level |
| releaseYear | Recency signal |
| artworkGradient | Tailwind gradient for placeholder art |
| reasonTags | Tags for explanation generation |

## Feedback Data

Stored in localStorage via `feedbackStore.ts`:

- interestedGenres, rejectedGenres
- interestedSubGenres, rejectedSubGenres
- interestedMoods, rejectedMoods
- savedTrackIds, playlistTrackIds
- rejectedArtistNames

## Future Data Extension

Later phases can integrate:

- **Spotify Web API** for playback and user playlists
- **Audio features** (tempo, energy, valence) from Spotify
- **User listening history** for personalization
- **Saved tracks and playlist adds** as strong signals
- **Skip behavior** as negative signal
- **Real-time feedback signals** streamed to backend
- **LLM-based explanation generation** via API route with track context

## Phase Statement

**Phase 1 is fully local/demo-driven.**  
Later phases can integrate real Spotify APIs and live user behavior without changing the core Discovery Mode UX.
