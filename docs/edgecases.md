# Edge Cases — Discovery Mode MVP

## Recommendation Edge Cases

### User selects Hidden Gems but no hidden-gem track exists
**Handling**: Engine falls back to closest genre match with highest freshness score in catalog. Explanation notes limited catalog availability.

### User rejects the same genre repeatedly
**Handling**: Feedback store penalizes rejected moods/artists. Engine shifts toward adjacent sub-genres within same genre family rather than leaving genre entirely.

### User saves a track and then taps Not Interested
**Handling**: Save is treated as stronger positive; Not Interested on a different track applies separately. Saved track excluded from future recommendations regardless.

### Current track has no genre match
**Handling**: `hasAnchorConnection` requires at least mood, tempo, or energy match. If no candidates pass, fallback returns closest same-genre track from catalog.

### Current genre has too few related songs
**Handling**: `GENRE_ADJACENCY` map expands search to nearby sub-genres. Fallback recommendation with user-friendly explanation.

### All recommendations become too similar
**Handling**: Diversity penalty and repeat-artist penalty increase with each recent suggestion. Exclude IDs list grows as user interacts.

### User changes slider quickly
**Handling**: Each change triggers immediate re-score. Queue deduplicates by track ID to avoid spam.

### Hidden Gems becomes too random
**Handling**: Anchor connection requirement enforced even at hidden_gems level — must match genre, sub-genre, mood, tempo, or energy.

### Feedback overfits too aggressively
**Handling**: Feedback score weights capped (±0.3 max impact). Multiple signals required; single rejection doesn't eliminate entire genre.

## UI Edge Cases

### Discovery Queue becomes too long
**Handling**: Queue capped at 20 items, most recent first.

### Mini-player covers bottom content
**Handling**: Main content has `pb-36` padding when mini-player visible. Now Playing page hides mini-player.

### App has no Spotify OAuth credentials
**Handling**: Demo mode is default. All features work with local dataset.

### User refreshes the page
**Handling**: Feedback persists via localStorage. Discovery queue resets (session-only). Current track resets to default.

### Recommendation explanation becomes too technical
**Handling**: Template-based consumer copy only. Scores never shown to user.

### Desktop layout looks stretched
**Handling**: App constrained to 430px max-width, centered on dark background.
