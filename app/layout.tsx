import type { Metadata } from "next";
import { AppShell } from "@/components/AppShell";
import { PlayerProvider } from "@/lib/PlayerContext";
import { ClientToast } from "./ClientToast";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discovery Mode — Spotify AI MVP",
  description: "AI-native music discovery that turns repeat listening into controlled discovery.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PlayerProvider>
          <div className="min-h-screen bg-spotify-darker">
            <AppShell>{children}</AppShell>
            <ClientToast />
          </div>
        </PlayerProvider>
      </body>
    </html>
  );
}
