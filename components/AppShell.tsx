"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MiniPlayer } from "./MiniPlayer";
import { BottomNav } from "./BottomNav";

const HIDE_SHELL = ["/now-playing"];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showMiniPlayer = !HIDE_SHELL.includes(pathname);

  return (
    <div className="relative mx-auto min-h-screen max-w-[430px] overflow-x-hidden bg-spotify-dark">
      <main className={`min-h-screen ${showMiniPlayer ? "pb-40" : "pb-6"}`}>
        {children}
      </main>
      {showMiniPlayer && <MiniPlayer />}
      <BottomNav />
    </div>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="px-5 pt-12 pb-4">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
      {subtitle && <p className="mt-1 text-sm text-spotify-muted">{subtitle}</p>}
    </header>
  );
}

export function SectionTitle({ children, href }: { children: React.ReactNode; href?: string }) {
  if (href) {
    return (
      <Link href={href} className="mb-3 block px-5 text-lg font-bold text-white hover:underline">
        {children}
      </Link>
    );
  }
  return <h2 className="mb-3 px-5 text-lg font-bold text-white">{children}</h2>;
}

export function Toast({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <div className="fixed left-1/2 top-20 z-50 w-full max-w-[430px] -translate-x-1/2 px-4">
      <div className="mx-auto w-fit rounded-full bg-spotify-green px-5 py-2 text-sm font-semibold text-black shadow-lg animate-fade-in">
        {message}
      </div>
    </div>
  );
}
