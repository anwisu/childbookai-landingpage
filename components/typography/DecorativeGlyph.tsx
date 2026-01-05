"use client";

import Image from "next/image";
import clsx from "clsx";

export type DecorativeGlyphVariant = "blue1" | "blue2" | "black1" | "white1";

interface DecorativeGlyphProps {
  variant: DecorativeGlyphVariant;
  className?: string;
  /**
   * Size classes for the glyph image. Use Tailwind classes for responsive sizing.
   * Default: "w-[1em] h-[1em]" (scales with font size)
   * Examples:
   * - "w-4 h-4 sm:w-6 h-6 md:w-8 h-8" (fixed sizes, responsive)
   * - "w-[0.8em] h-[0.8em] sm:w-[1em] sm:h-[1em]" (em-based, responsive)
   * - "w-12 h-12" (fixed size)
   */
  sizeClassName?: string;
}

/**
 * DecorativeGlyph
 *
 * - Purely decorative
 * - Scales with surrounding text via `em` by default
 * - Supports custom and responsive sizing via sizeClassName
 * - Safe for i18n & accessibility
 */
export function DecorativeGlyph({ 
  variant, 
  className,
  sizeClassName = "w-[1em] h-[1em]"
}: DecorativeGlyphProps) {
  const srcMap: Record<DecorativeGlyphVariant, string> = {
    blue1: "/illustrations/blue-1.svg",
    blue2: "/illustrations/blue-2.svg",
    black1: "/illustrations/black-1.svg",
    white1: "/illustrations/white-1.svg",
  };

  return (
    <span
      aria-hidden="true"
      className={clsx("inline-flex items-baseline align-baseline", className)}
    >
      <Image
        src={srcMap[variant]}
        alt=""
        width={40}
        height={40}
        className={sizeClassName}
        sizes="(max-width: 640px) 1em, (max-width: 768px) 1em, 1em"
      />
    </span>
  );
}
