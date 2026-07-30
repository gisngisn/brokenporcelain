"use client";

import { useEffect, useState } from "react";

/**
 * 防止 SSR / CSR Hydration 不一致
 */
export default function useIsMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return mounted;
}