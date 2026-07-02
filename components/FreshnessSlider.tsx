"use client";

import type { FreshnessLevel } from "@/lib/types";
import { FRESHNESS_LABELS } from "@/lib/types";

const levels: FreshnessLevel[] = ["familiar", "fresh", "hidden_gems"];

export function FreshnessSlider({
  value,
  onChange,
}: {
  value: FreshnessLevel;
  onChange: (level: FreshnessLevel) => void;
}) {
  const index = levels.indexOf(value);

  return (
    <div className="px-1">
      <div className="relative mb-2 flex justify-between">
        {levels.map((level) => (
          <button
            key={level}
            type="button"
            onClick={() => onChange(level)}
            className={`text-xs font-medium transition ${
              value === level ? "text-spotify-green" : "text-spotify-muted"
            }`}
          >
            {FRESHNESS_LABELS[level]}
          </button>
        ))}
      </div>
      <div className="relative h-1.5 rounded-full bg-white/10">
        <div
          className="absolute h-full rounded-full bg-spotify-green transition-all duration-300"
          style={{ width: `${(index / (levels.length - 1)) * 100}%` }}
        />
        <div className="absolute inset-0 flex justify-between">
          {levels.map((level, i) => (
            <button
              key={level}
              type="button"
              onClick={() => onChange(level)}
              className="relative flex h-4 w-4 -translate-y-[3px] items-center justify-center"
              aria-label={FRESHNESS_LABELS[level]}
            >
              <span
                className={`h-3 w-3 rounded-full border-2 transition ${
                  i <= index
                    ? "border-spotify-green bg-spotify-green"
                    : "border-spotify-muted bg-spotify-card"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
      <p className="mt-2 text-center text-[11px] text-spotify-muted">
        Learning your freshness preference
      </p>
    </div>
  );
}
