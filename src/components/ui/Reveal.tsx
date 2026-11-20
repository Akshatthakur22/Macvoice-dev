"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/*
 * Section reveals: fade + 12px rise when 15% of an element is visible.
 * Targets reached by an anchor jump (and everything above them) appear
 * instantly instead.
 *
 * Each <Reveal> marks itself in its own effect, i.e. only after it has
 * hydrated, so React never sees an attribute it didn't render. State is a
 * data attribute (data-in), never a class, because React owns className.
 * One IntersectionObserver is shared by every <Reveal> on the page.
 */

let io: IntersectionObserver | null = null;
const live = new Set<HTMLElement>();
/** Document Y above which elements show instantly (set by anchor jumps). */
let instantAbove = -Infinity;

function observer() {
  if (!io) {
    io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).setAttribute("data-in", "");
          io?.unobserve(e.target);
          live.delete(e.target as HTMLElement);
        }
      },
      { threshold: 0.15 }
    );
  }
  return io;
}

function docTop(el: Element) {
  return el.getBoundingClientRect().top + window.scrollY;
}

function revealAbove(y: number) {
  instantAbove = Math.max(instantAbove, y);
  for (const el of live) {
    if (docTop(el) < y) {
      el.setAttribute("data-in", "instant");
      io?.unobserve(el);
      live.delete(el);
    }
  }
}

type RevealProps<T extends React.ElementType> = {
  as?: T;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;

export function Reveal<T extends React.ElementType = "div">({ as, children, ...rest }: RevealProps<T>) {
  const Tag = (as ?? "div") as React.ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.setAttribute("data-in", "");
      return;
    }
    if (docTop(el) < instantAbove) {
      el.setAttribute("data-in", "instant");
      return;
    }
    live.add(el);
    observer().observe(el);
    return () => {
      io?.unobserve(el);
      live.delete(el);
    };
  }, []);

  return (
    <Tag ref={ref} data-reveal="" {...rest}>
      {children}
    </Tag>
  );
}

/** Mounted once in the root layout: handles anchor jumps and #hash loads. */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const target = (hash: string) => {
      if (hash.length < 2) return null;
      try {
        return document.getElementById(decodeURIComponent(hash.slice(1)));
      } catch {
        return null;
      }
    };
    const jumpTo = (el: HTMLElement | null) => {
      if (el) revealAbove(el.getBoundingClientRect().bottom + window.scrollY + window.innerHeight);
    };

    instantAbove = -Infinity;
    jumpTo(target(window.location.hash));

    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href*='#']") as HTMLAnchorElement | null;
      if (!a || a.pathname !== window.location.pathname) return;
      jumpTo(target(a.hash));
    };
    const onHash = () => jumpTo(target(window.location.hash));

    document.addEventListener("click", onClick, true);
    window.addEventListener("hashchange", onHash);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("hashchange", onHash);
    };
  }, [pathname]);

  return null;
}
