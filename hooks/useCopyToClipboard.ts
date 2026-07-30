"use client";

import { useCallback, useState } from "react";

export interface UseCopyToClipboardReturn {
  copiedText: string | null;
  copy: (text: string) => Promise<boolean>;
  reset: () => void;
}

export default function useCopyToClipboard(): UseCopyToClipboardReturn {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copy = useCallback(async (text: string) => {
    if (
      typeof navigator === "undefined" ||
      !navigator.clipboard
    ) {
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch {
      return false;
    }
  }, []);

  const reset = useCallback(() => {
    setCopiedText(null);
  }, []);

  return {
    copiedText,
    copy,
    reset,
  };
}