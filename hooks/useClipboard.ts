"use client";

import { useCallback, useState } from "react";

export interface UseClipboardReturn {
  copied: boolean;
  copy: (text: string) => Promise<boolean>;
}

export default function useClipboard(
  resetDelay = 2000
): UseClipboardReturn {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      try {
        if (
          typeof navigator === "undefined" ||
          !navigator.clipboard
        ) {
          return false;
        }

        await navigator.clipboard.writeText(text);

        setCopied(true);

        window.setTimeout(() => {
          setCopied(false);
        }, resetDelay);

        return true;
      } catch {
        setCopied(false);
        return false;
      }
    },
    [resetDelay]
  );

  return {
    copied,
    copy,
  };
}