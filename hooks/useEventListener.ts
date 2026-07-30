"use client";

import { RefObject, useEffect, useRef } from "react";

type EventTargetType =
  | Window
  | Document
  | HTMLElement
  | SVGElement
  | MediaQueryList;

export default function useEventListener<
  K extends keyof WindowEventMap
>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element?: RefObject<EventTargetType | null>,
  options?: boolean | AddEventListenerOptions
) {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const target =
      element?.current ?? window;

    if (!(target && target.addEventListener)) {
      return;
    }

    const listener = (event: Event) => {
      savedHandler.current(
        event as WindowEventMap[K]
      );
    };

    target.addEventListener(
      eventName,
      listener,
      options
    );

    return () => {
      target.removeEventListener(
        eventName,
        listener,
        options
      );
    };
  }, [eventName, element, options]);
}