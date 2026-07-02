/**
 * Placeholder for future Spotify Web API integration.
 * MVP runs fully in demo mode without OAuth or API credentials.
 */

export const isDemoMode = (): boolean => {
  return process.env.NEXT_PUBLIC_DEMO_MODE !== "false";
};

export async function fetchSpotifyTrack(): Promise<null> {
  if (isDemoMode()) return null;
  // Future: Spotify Web API call
  return null;
}

export async function searchSpotify(): Promise<[]> {
  if (isDemoMode()) return [];
  return [];
}
