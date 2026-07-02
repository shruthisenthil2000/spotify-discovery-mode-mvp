# Evaluations — Discovery Mode MVP

## Evaluation Cases

### 1. Freshness Slider Test — Familiar

**Input**: Current song is Indie Pop. Slider = Familiar.

**Expected**: Similar genre and mood, lower novelty, higher mainstream/popularity tracks (e.g., Luna Vale, Maris Cole).

**How to verify**: Open Now Playing with an Indie Pop track, set slider to Familiar, confirm recommendation stays Indie Pop with recognizable artists.

---

### 2. Freshness Slider Test — Hidden Gems

**Input**: Current song is Indie Pop. Slider = Hidden Gems.

**Expected**: Less mainstream, fresher track, still connected by mood or genre (e.g., Elara Quinn, Hollow Pines).

**How to verify**: Set slider to Hidden Gems, confirm low popularity/mainstream scores and hidden-gem artists.

---

### 3. Genre Anchor Test

**Input**: Current song is Tamil Indie.

**Expected**: Recommendation stays within Tamil Indie or adjacent soft/indie mood (Lo-fi, Soft Pop, Alternative).

**How to verify**: Play a Tamil Indie track, confirm recommendations don't jump to unrelated genres like Hip-Hop.

---

### 4. Feedback Test

**Input**: User taps Not Interested on Electronic mood track.

**Expected**: Future recommendations reduce Electronic mood/style and rejected artist.

**How to verify**: Tap Not Interested on an Electronic recommendation, observe next suggestion shifts away.

---

### 5. Discovery Queue Test

**Input**: User changes slider and receives multiple suggestions.

**Expected**: Suggested songs appear in Discovery Queue below Discovery Mode card.

**How to verify**: Move slider between Familiar → Fresh → Hidden Gems, confirm queue grows.

---

### 6. Explanation Test

**Input**: Recommendation generated.

**Expected**: Short user-friendly reason appears (e.g., "Same indie-pop mood, but from a fresher, less repetitive artist.").

**How to verify**: Check "Recommended because…" text — no scores or technical jargon.

---

### 7. UX Test

**Input**: User opens app on mobile.

**Expected**: Spotify-like home, mini-player, tab bar, Now Playing flow, and Discovery Mode pop-up are clear.

**How to verify**: Navigate Home → play track → Now Playing → interact with Discovery Mode.

---

### 8. AI Rationale Test

**Input**: User opens Why AI page.

**Expected**: Page clearly explains traditional recommendation limits, AI unlocks, and UX change.

**How to verify**: Visit `/why-ai`, confirm all 6 sections render with evaluator copy.

---

## Demo Script for Graduation Presentation

1. Open Home — show Spotify-like interface
2. Play "Golden Hour Glow" (Indie Pop)
3. Open Now Playing — show Discovery Mode card
4. Demo Freshness Slider: Familiar → Fresh → Hidden Gems
5. Show explanation text and give Interested feedback
6. Show Discovery Queue growing
7. Navigate to Why AI page for product rationale
8. Emphasize: "Discovery Mode turns repeat listening into controlled discovery"
