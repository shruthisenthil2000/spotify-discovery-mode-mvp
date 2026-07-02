# Architecture — Discovery Mode MVP

## Product Objective

Build an AI-native Spotify feature called Discovery Mode that reduces repetitive listening by surfacing same-genre but fresher tracks while the user is already listening, with controllable freshness and explainable, feedback-driven recommendations.

## High-Level System View

```
User
  → Spotify-like Mobile App Shell
  → Current Track State
  → Genre Anchor Detection
  → AI Discovery Engine
  → Freshness Slider
  → Recommendation Scoring
  → Explanation Generator
  → Discovery Queue
  → Feedback Learning Store
  → Updated Recommendation
  → Why AI / MVP Rationale Page
```

## Core Modules

| Module | Responsibility |
|--------|----------------|
| App Shell | Mobile-first layout, navigation, mini-player |
| Demo Music Dataset | 40+ fictional tracks with rich metadata |
| Current Track Player State | Playback, progress, active track |
| Genre Anchor Layer | Connect recommendations to current song context |
| Freshness Ladder | Familiar / Fresh / Hidden Gems scoring strategies |
| AI Discovery Engine | Multi-signal scoring and ranking |
| Discovery Mode Pop-Up | In-listening UI for recommendations |
| Discovery Queue | Session history of suggested tracks |
| Feedback Learning Store | Interested / Not Interested / Save signals |
| Explanation Generator | Consumer-friendly recommendation reasons |
| Spotify-like UI Components | Cards, rows, sliders, player |
| Why AI Page | Evaluator-facing product rationale |
| Deployment Setup | Vercel-ready Next.js app |

## User Flow

1. User opens app → Home with recently played and discovery rows
2. User taps a track → Mini-player appears
3. User opens Now Playing → Full player + Discovery Mode card
4. Engine anchors on current track genre/mood/tempo
5. User adjusts Freshness Slider → New recommendation
6. User gives feedback → Engine re-ranks next suggestion
7. Suggestions accumulate in Discovery Queue
8. Evaluator visits Why AI page for rationale

## Data Flow

```
demoTracks.ts
  → PlayerContext (currentTrack)
  → discoveryEngine.ts (scoring)
  → DiscoveryModeCard (UI)
  → feedbackStore.ts (persist signals)
  → discoveryEngine.ts (re-score)
  → DiscoveryQueue (session list)
```

## State Management

- **React Context (`PlayerContext`)**: Current track, playback, freshness level, recommendation, discovery queue, toast messages
- **localStorage (`feedbackStore`)**: Persistent user feedback across page refreshes
- **Component local state**: Search filters, UI toggles

## Genre Anchor Logic

The current track defines the anchor genre, sub-genre, mood, tempo, and energy. Candidate tracks must connect via at least one of: same genre, adjacent sub-genre (from `GENRE_ADJACENCY` map), similar mood, similar tempo, or similar energy. Random unrelated tracks are excluded.

## Freshness Ladder Logic

| Level | Strategy |
|-------|----------|
| Familiar | High mainstream, lower freshness, same genre/mood |
| Fresh | Medium popularity, higher freshness, adjacent sub-genres |
| Hidden Gems | Low mainstream, high freshness, low popularity, same genre family |

## AI Recommendation Logic

12 scoring dimensions: genre anchor, sub-genre match, mood match, tempo similarity, energy similarity, freshness ladder, hidden gem score, mainstream reduction, popularity, feedback memory, diversity penalty, repeat artist penalty.

Weights shift per freshness level to change strategy, not just filter.

## Discovery Queue Logic

- Append on slider change and new recommendations
- Deduplicate by track ID
- Cap at 20 items
- Persist for session (in-memory via React state)
- Each item tracks feedback and save/playlist status

## Feedback Learning Loop

- **Interested**: Boost genre, sub-genre, mood
- **Not Interested**: Penalize mood and artist
- **Save / Playlist**: Strong positive signal, exclude track from future recs
- Scores applied gently to avoid overfitting

## Explanation Generator

Template-based natural language from anchor match, freshness level, mood/tempo connection, and feedback influence. No technical scores exposed to users.

## Deployment Architecture

- **Framework**: Next.js 15 App Router
- **Hosting**: Vercel (static + SSR capable)
- **Environment**: Demo mode by default (`NEXT_PUBLIC_DEMO_MODE=true`)
- **No backend required** for MVP demo

## Future Spotify API Integration

- OAuth for user authentication
- Spotify Web API for real playback and playlists
- Audio features endpoint for tempo/energy
- User listening history and saved tracks
- LLM-based explanation generation via API route
