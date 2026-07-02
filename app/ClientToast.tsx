"use client";

import { Toast } from "@/components/AppShell";
import { usePlayer } from "@/lib/PlayerContext";

export function ClientToast() {
  const { toast } = usePlayer();
  return <Toast message={toast} />;
}
