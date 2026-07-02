# Spotify AI-Native MVP — Discovery Mode

## Background

Spotify has built one of the world's strongest music recommendation systems, but many users still experience repetitive listening behavior. A large percentage of listening continues to come from repeat playlists, familiar artists, already-discovered tracks, and algorithmically safe recommendations.

For playlist-heavy Premium users, this creates a clear discovery gap. They do not necessarily want completely random music. They want fresh music that still feels relevant to their current taste, genre, mood, and listening context.

The problem is not that Spotify lacks recommendations. The problem is that users do not have enough control over how fresh, familiar, or exploratory those recommendations should be.

## Objective

Design and build an AI-native Spotify MVP called "Discovery Mode".

The goal is to show how AI can help Spotify reduce repetitive listening by recommending music that is:

- Similar enough to feel relevant
- Fresh enough to break repetition
- Explainable enough to build trust
- Adaptive enough to improve with user feedback

The MVP should look and feel like a real Spotify mobile app feature, not a generic dashboard.

## Real-World Problem to Solve

A Spotify user is listening to a familiar song or playlist and feels stuck in a repeat loop.

Example user situation:

"I like this genre, but Spotify keeps giving me the same artists and songs. I want something fresher, but not random."

The system should allow the user to control discovery through a Freshness Slider:

1. Familiar — close to current taste
2. Fresh — similar, but newer and less repetitive
3. Hidden Gems — underrated, less mainstream, but still relevant

The system should recommend tracks based on the current song's:

- Genre
- Sub-genre
- Mood
- Tempo
- Energy
- Artist similarity
- Freshness level
- Mainstream score
- User feedback

## Target Segment

Playlist-heavy Spotify Premium users who already use Spotify frequently but feel trapped in repetitive listening loops.

They are valuable because:

- They already have strong Spotify habits
- They listen through playlists often
- They are more likely to notice repetition
- They are more likely to save, replay, and add new songs when discovery feels relevant
- They represent a strong growth and retention opportunity for Spotify

## MVP Solution

Build a Spotify-like mobile MVP called "Discovery Mode".

Discovery Mode is a genre-aware AI discovery layer that appears while the user is already listening to a song.

While a user is listening, Spotify detects the current song's genre, sub-genre, mood, tempo, and listening context. It then surfaces same-genre but fresher tracks in a lightweight pop-up.

Example:
If the user is listening to an Indie Pop song, Discovery Mode should suggest underrated Indie Pop, Dream Pop, Bedroom Pop, or Indie Alternative artists that feel close to the current song, but are fresher and less repetitive.

The user should see:

- A lightweight Discovery Mode pop-up while listening
- A Freshness Slider:
  - Familiar
  - Fresh
  - Hidden Gems
- A Discovery Mode column/queue where all suggested songs are stored
- Interested / Not Interested buttons on each suggested song
- Save and Add to Playlist actions
- A short AI explanation for why each song was suggested

The MVP should include:

- Home screen
- Search screen
- Your Library screen
- Now Playing screen
- Bottom mini-player
- Bottom navigation
- AI Discovery Mode pop-up/card inside the listening experience
- Freshness Slider
- Discovery Queue
- AI explanation for each recommendation
- Feedback buttons:
  - Interested
  - Not Interested
  - Save
  - Add to Playlist
- "Why AI?" explanation page for evaluators

The MVP must work in demo mode without requiring Spotify OAuth or real Spotify API access.

## Unique Product Mechanism

The MVP should use a defensible AI concept:

# Genre Anchor + Freshness Ladder + Discovery Memory

## 1. Genre Anchor

The current song becomes the anchor.

The AI should identify the current song's:

- Main genre
- Sub-genre
- Mood
- Tempo range
- Energy level
- Mainstream/freshness level

The recommendation must stay connected to this anchor so the user does not feel the suggestion is random.

Example:
Current song: Indie Pop  
Genre Anchor: Indie Pop  
Allowed nearby zones:
- Indie Pop
- Dream Pop
- Bedroom Pop
- Indie Alternative
- Tamil Indie if mood/tempo matches

## 2. Freshness Ladder

The Freshness Slider should not simply filter songs. It should change the recommendation strategy.

Familiar:
- Same genre
- Similar mood
- More recognizable sound
- Lower novelty
- Lower risk

Fresh:
- Same genre or nearby sub-genre
- Less repeated artist style
- Medium popularity
- Higher freshness
- Still safe for the user's taste

Hidden Gems:
- Same genre family
- Lower mainstream score
- Higher freshness score
- Less obvious artists
- Underrated tracks
- Still connected by mood, tempo, or sound profile

This makes the feature feel controlled, not random.

## 3. Discovery Memory

The system should remember lightweight feedback during the session.

If the user taps Interested:
- Boost that genre, sub-genre, mood, and freshness range
- Show more songs with similar freshness profile
- Increase confidence in that discovery direction

If the user taps Not Interested:
- Reduce that artist style, mood, or sub-genre
- Avoid showing too many similar songs again
- Move the next recommendation slightly away, but still within the same genre family

If the user taps Save or Add to Playlist:
- Treat it as stronger positive feedback than Interested
- Mark the song as successful discovery
- Avoid recommending the exact same track again

This creates a mini feedback loop that traditional static recommendation rows do not show clearly.

## Why Traditional Recommendation Systems Are Insufficient

Traditional recommendation systems are strong at predicting what users already like. They rely heavily on listening history, collaborative filtering, similar users, familiar artists, and past engagement signals.

This creates a comfort loop.

However, these systems are weaker at understanding when a user wants controlled novelty. They do not always know:

- Whether the user wants familiar, slightly fresh, or very fresh music
- How much novelty the user is ready for
- Why a recommendation feels relevant
- How to avoid repeating the same artists, playlists, or genre clusters
- How to explain the recommendation in a user-friendly way
- How to respond immediately to "Interested" or "Not Interested" feedback

As a result, the user may stay inside a repetitive recommendation loop even when they want discovery.

## What AI Unlocks

AI can combine multiple signals in real time:

- Current song context
- Genre and sub-genre
- Mood
- Tempo
- Energy
- Freshness preference
- Mainstream score
- Hidden-gem potential
- User feedback
- Listening intent

This allows the system to recommend songs that are not just "more of the same," but "more like this, with the right amount of freshness."

AI also unlocks explanation. Instead of silently recommending a song, the system can say:

"Recommended because it keeps the same indie-pop mood but introduces a fresher, less mainstream artist."

This makes discovery feel more transparent, controllable, and trustworthy.

## How AI Changes the User Experience

AI changes music discovery from a passive recommendation feed into an interactive discovery loop.

Before:
Spotify recommends songs based mostly on past behavior, and the user either listens, skips, or leaves the app to discover music elsewhere.

After:
The user controls how fresh the recommendation should be, receives a relevant suggestion while listening, understands why it was recommended, and teaches the system through quick feedback.

The user experience becomes:

- More controllable
- Less repetitive
- More exploratory
- More explainable
- More personal over time

## Core User Flow

1. User opens the Spotify-like MVP.
2. User selects or plays a song.
3. User opens the Now Playing screen.
4. Discovery Mode detects the current track's genre.
5. A lightweight pop-up appears:
   "Fresh finds in Indie Pop"
   or
   "Fresh finds in Tamil Indie"
6. User adjusts the Freshness Slider.
7. AI recommends a fresh but relevant track.
8. User reads a short "Recommended because…" explanation.
9. User taps Interested, Not Interested, Save, or Add to Playlist.
10. The recommendation updates based on feedback.
11. Suggested songs are stored in the Discovery Queue.
12. User feels they are discovering new music without leaving Spotify.

## Required MVP Output

The final MVP should demonstrate:

- A Spotify-like consumer app interface
- A working Now Playing experience
- A working Discovery Mode pop-up
- A working Discovery Queue
- AI-simulated recommendation logic
- Freshness Slider behavior
- Feedback-based learning
- Explainable recommendations
- A "Why AI?" page explaining the product rationale
- Production readiness for deployment on Vercel

## Success Criteria

The MVP is successful if:

- The UI feels like a native Spotify-style mobile feature
- The user can clearly understand the Discovery Mode concept in under 30 seconds
- Recommendations change when the Freshness Slider changes
- Feedback changes future recommendations
- Discovery Queue stores suggested tracks during the session
- The app clearly shows why AI is better than traditional recommendation logic
- The app can be deployed to production
- The project can be demonstrated as Part 4 of a Product Management Graduation Project

One-line product pitch:
Discovery Mode turns repeat listening into controlled discovery.

Full product pitch:
While a user listens, Spotify surfaces same-genre but fresher tracks through a lightweight AI pop-up, lets the user control freshness, and learns from Interested / Not Interested feedback.
