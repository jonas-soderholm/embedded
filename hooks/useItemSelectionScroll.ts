"use client";

import { useRef } from "react";

export function useItemSelectionScroll() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      console.log("Scrolling left...");
      console.log(
        "Current scroll position BEFORE:",
        containerRef.current.scrollLeft
      );
      containerRef.current.scrollBy({ left: -2000, behavior: "smooth" });
      setTimeout(() => {
        console.log(
          "Current scroll position AFTER:",
          containerRef.current?.scrollLeft
        );
      }, 500); // ✅ Wait for scroll to apply
    } else {
      console.warn("scrollLeft called but containerRef is null");
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      console.log("Scrolling right...");
      console.log(
        "Current scroll position BEFORE:",
        containerRef.current.scrollLeft
      );
      containerRef.current.scrollBy({ left: 2000, behavior: "smooth" });
      setTimeout(() => {
        console.log(
          "Current scroll position AFTER:",
          containerRef.current?.scrollLeft
        );
      }, 500); // ✅ Wait for scroll to apply
    } else {
      console.warn("scrollRight called but containerRef is null");
    }
  };

  return { containerRef, scrollLeft, scrollRight };
}
