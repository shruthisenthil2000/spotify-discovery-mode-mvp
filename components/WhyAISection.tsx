export function WhyAISection() {
  const metrics = [
    { label: "Discovery Mode adoption", value: "Target +18%" },
    { label: "New-track save rate", value: "Target +24%" },
    { label: "Playlist additions", value: "Target +15%" },
    { label: "Repeat-loop reduction", value: "Target -12%" },
    { label: "Recommendation feedback rate", value: "Target +40%" },
    { label: "Session depth after discovery", value: "Target +22%" },
    { label: "Hidden-gem engagement rate", value: "Target +30%" },
  ];

  return (
    <div className="space-y-8 px-5 pb-32 pt-12">
      <header>
        <p className="text-xs font-semibold uppercase tracking-widest text-spotify-green">
          For Evaluators
        </p>
        <h1 className="mt-2 text-3xl font-bold text-white">Why AI?</h1>
        <p className="mt-2 text-sm text-spotify-muted">
          Discovery Mode turns repeat listening into controlled discovery.
        </p>
      </header>

      <Section title="Why traditional recommendation systems are insufficient">
        Traditional recommendation systems are strong at predicting what users already like, but
        they often reinforce familiar artists, repeat playlists, and past listening patterns. This
        creates comfort, but it can also trap users in repetition loops. They do not always
        understand when a user wants controlled novelty, genre-adjacent exploration, hidden gems, or
        trend-aware discovery.
      </Section>

      <Section title="What AI unlocks">
        AI can combine listening context, genre, mood, tempo, energy, artist similarity, freshness
        preference, and feedback signals in real time. This allows the experience to recommend
        tracks that are not just similar, but similar in the right way: familiar enough to feel
        relevant, fresh enough to reduce repetition.
      </Section>

      <Section title="How AI changes the user experience">
        AI changes discovery from passive recommendations into an interactive loop. Users can
        control freshness, give feedback instantly, understand why a track is recommended, and
        receive better suggestions over time. Instead of leaving Spotify to discover music
        elsewhere, users can explore fresh music inside the listening moment.
      </Section>

      <Section title="Why this cannot be solved well by a normal recommendation row">
        Traditional recommendation rows are usually passive. They show songs based on historical
        similarity, but they do not let the user control how fresh the recommendation should be in
        the listening moment.
        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-spotify-muted">
          <li>It understands listening context in real time</li>
          <li>It balances familiarity with novelty</li>
          <li>It explains why a track appeared</li>
          <li>It adapts from user feedback</li>
          <li>It creates a discovery queue while the user listens</li>
        </ul>
        <p className="mt-3 font-medium text-white/90">
          The feature is not just &ldquo;more recommendations.&rdquo; It is controlled discovery
          inside the listening moment.
        </p>
      </Section>

      <div>
        <h2 className="mb-4 text-lg font-bold text-white">MVP Success Metrics</h2>
        <div className="grid grid-cols-2 gap-3">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl bg-spotify-card p-4 ring-1 ring-white/5"
            >
              <p className="text-[11px] text-spotify-muted">{m.label}</p>
              <p className="mt-1 text-sm font-bold text-spotify-green">{m.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-spotify-card p-5 ring-1 ring-spotify-green/20">
        <h2 className="text-lg font-bold text-white">AI-Native Feature Summary</h2>
        <div className="mt-4 space-y-3">
          <Compare
            label="Traditional system"
            text="People like you also listened to this."
          />
          <Compare
            label="AI-native system"
            text="You are listening to this mood and genre right now; here is something fresher, with your preferred novelty level."
          />
        </div>
        <p className="mt-5 text-center text-sm font-semibold text-spotify-green">
          Discovery Mode turns repeat listening into controlled discovery.
        </p>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-lg font-bold text-white">{title}</h2>
      <div className="text-sm leading-relaxed text-spotify-muted">{children}</div>
    </section>
  );
}

function Compare({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-lg bg-white/5 p-3">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-spotify-green">
        {label}
      </p>
      <p className="mt-1 text-sm text-white/90">&ldquo;{text}&rdquo;</p>
    </div>
  );
}
