"use client";

import { useEffect, useState } from "react";

/**
 * Returns true once the component has mounted on the client.
 * Useful for preventing hydration mismatches.
 */
export default function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}