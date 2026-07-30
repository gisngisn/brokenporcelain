"use client";

import { useEffect } from "react";

/**
 * Dynamically updates document title.
 */
export default function useDocumentTitle(
  title: string
) {
  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const previousTitle =
      document.title;

    document.title = title;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}