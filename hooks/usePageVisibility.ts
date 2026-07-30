"use client";

import { useEffect, useState } from "react";

/**
 * 页面是否处于可见状态
 *
 * true  = 当前标签页可见
 * false = 标签页隐藏（切后台）
 */
export default function usePageVisibility() {
  const getVisibility = () => {
    if (typeof document === "undefined") {
      return true;
    }

    return !document.hidden;
  };

  const [visible, setVisible] = useState(getVisibility);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setVisible(!document.hidden);
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, []);

  return visible;
}