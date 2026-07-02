import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: "#1DB954",
          dark: "#121212",
          darker: "#0a0a0a",
          card: "#181818",
          elevated: "#282828",
          muted: "#b3b3b3",
        },
      },
    },
  },
  plugins: [],
};

export default config;
