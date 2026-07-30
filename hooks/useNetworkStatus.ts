"use client";

import { useEffect, useState } from "react";

export type NetworkStatus = {
  online: boolean;
  connection?: string;
};

/**
 * Tracks browser network status.
 */
export default function useNetworkStatus() {
  const getStatus = (): NetworkStatus => {
    if (typeof navigator === "undefined") {
      return {
        online: true,
      };
    }

    const connection =
      (
        navigator as Navigator & {
          connection?: {
            effectiveType?: string;
          };
        }
      ).connection?.effectiveType;

    return {
      online: navigator.onLine,
      connection,
    };
  };

  const [status, setStatus] =
    useState<NetworkStatus>(getStatus);

  useEffect(() => {
    const handleOnline = () => {
      setStatus(getStatus());
    };

    const handleOffline = () => {
      setStatus(getStatus());
    };

    window.addEventListener(
      "online",
      handleOnline
    );

    window.addEventListener(
      "offline",
      handleOffline
    );

    return () => {
      window.removeEventListener(
        "online",
        handleOnline
      );

      window.removeEventListener(
        "offline",
        handleOffline
      );
    };
  }, []);

  return status;
}