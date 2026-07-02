# Discovery Mode — Spotify AI-Native MVP

**Discovery Mode turns repeat listening into controlled discovery.**

An AI-native Spotify feature MVP for Product Management Graduation Project Part 4. While a user listens, the app surfaces same-genre but fresher tracks through a lightweight AI pop-up, lets the user control freshness, and learns from Interested / Not Interested feedback.

## Problem Solved

Playlist-heavy Premium users get trapped in repetitive listening loops. Traditional recommendation systems predict what users already like but don't let users control how fresh or exploratory new suggestions should be in the listening moment.

## MVP Features

- Spotify-like mobile UI (Home, Search, Library, Now Playing, Why AI)
- Bottom mini-player and tab navigation
- **Discovery Mode** pop-up on Now Playing screen
- **Freshness Slider**: Familiar → Fresh → Hidden Gems
- AI-simulated recommendation engine with 12 scoring dimensions
- Explainable "Recommended because…" copy
- **Discovery Queue** for session suggestions
- Feedback learning: Interested, Not Interested, Save, Add to Playlist
- Evaluator-facing **Why AI?** page

## Why AI Is Needed

Traditional systems rely on historical similarity and create comfort loops. AI combines real-time listening context (genre, mood, tempo, energy), freshness preference, and instant feedback to recommend tracks that are "similar in the right way" — not just more of the same.

## How to Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Demo Mode

The app runs fully in demo mode with a local fictional track catalog. No Spotify OAuth or API keys required.

Copy environment template (optional):

```bash
cp .env.example .env.local
```

## How to Deploy on Vercel

1. Push this repository to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Set environment variable: `NEXT_PUBLIC_DEMO_MODE=true`
4. Deploy — no additional configuration needed

```bash
npm run build  # verify locally first
```

## Project Structure

```
app/           → Pages (Home, Search, Library, Now Playing, Why AI)
components/    → UI components (Discovery Mode, Queue, Player, etc.)
lib/           → Demo data, discovery engine, feedback store
docs/          → Product and technical documentation
```

## Future Spotify API Integration

Optional future extension via `lib/spotifyApiPlaceholder.ts`:

- Spotify OAuth for authentication
- Web API for real playback and playlists
- Audio features for tempo/energy
- LLM-generated explanations

## Limitations

- Demo dataset only (40+ fictional tracks)
- No real audio playback
- Feedback stored in localStorage (client-side only)
- No backend or user accounts
- Explanations are template-based, not LLM-generated
- Does not use official Spotify branding or assets

## Documentation

- [Problem Statement](docs/problemStatement.md)
- [Architecture](docs/architecture.md)
- [Implementation Plan](docs/implementation-plan.md)
- [Data Strategy](docs/data-strategy.md)
- [Edge Cases](docs/edgecases.md)
- [Evaluations](docs/evals.md)

## License

Educational MVP for graduation project demonstration. Not affiliated with Spotify.
