# Implementation Plan — Discovery Mode MVP

## Phase 0: Documentation ✅

- problemStatement.md
- architecture.md
- implementation-plan.md
- data-strategy.md
- edgecases.md
- evals.md

## Phase 1: Spotify-like App Shell ✅

- Next.js App Router setup with Tailwind
- Home, Search, Library, Now Playing, Why AI pages
- BottomNav with 4 tabs
- MiniPlayer with play/pause and Now Playing link
- Mobile-first centered frame on desktop
- Dark theme with green accent

## Phase 2: Demo Dataset ✅

- `lib/demoTracks.ts` with 40+ fictional tracks
- 10 genre clusters with familiar, fresh, and hidden-gem variants
- Original gradient artwork (no copyrighted assets)

## Phase 3: AI Discovery Engine ✅

- `lib/discoveryEngine.ts` with 12-dimension scoring
- Freshness ladder behavior for familiar / fresh / hidden_gems
- Genre anchor connection requirement
- Consumer-friendly explanation generator

## Phase 4: Discovery Mode Pop-Up ✅

- `DiscoveryModeCard` on Now Playing screen
- FreshnessSlider component
- RecommendationCard with explanation and action buttons
- Dynamic genre context line

## Phase 5: Discovery Queue ✅

- `DiscoveryQueue` component below Discovery Mode card
- Session-based queue with deduplication
- Per-item feedback buttons and save/playlist status

## Phase 6: Feedback Learning ✅

- `lib/feedbackStore.ts` with localStorage persistence
- Interested / Not Interested / Save / Playlist signals
- Integration with discovery engine scoring

## Phase 7: Why AI Page ✅

- Evaluator-facing rationale sections
- Success metrics cards
- Traditional vs AI-native comparison

## Phase 8: Polish and Production Readiness ✅

- Spotify-like visual polish
- Toast notifications for feedback
- README and .env.example
- Build verification

## Phase 9: Deployment

- Push to GitHub
- Connect to Vercel
- Set `NEXT_PUBLIC_DEMO_MODE=true`
- Verify production build
