"use client";

import Image from "next/image";
import React from "react";

// Decorative asset components - locally distributed
type DecorativeImageProps = {
  width?: number;
  height?: number;
};

const Blue1 = ({ width = 40, height = 40 }: DecorativeImageProps) => (
  <Image 
    src="/illustrations/blue-1.svg" 
    alt="" 
    width={width} 
    height={height} 
    aria-hidden 
    className="inline-block"
  />
);

const Blue2 = ({ width = 40, height = 40 }: DecorativeImageProps) => (
  <Image 
    src="/illustrations/blue-2.svg" 
    alt="" 
    width={width} 
    height={height} 
    aria-hidden 
    className="inline-block"
  />
);

const Sparkle = ({ width = 24, height = 24 }: DecorativeImageProps) => (
  <Image 
    src="/illustrations/sparkle.png" 
    alt="" 
    width={width} 
    height={height} 
    aria-hidden 
    className="inline-block"
  />
);

type DecorativeVariant = "blue1" | "blue2" | "sparkle";

const variantComponents: Record<DecorativeVariant, React.ComponentType<DecorativeImageProps>> = {
  blue1: Blue1,
  blue2: Blue2,
  sparkle: Sparkle,
};

export interface DecorativeTextProps {

  text: string;
  /**
   * Pattern(s) to replace with decorative components
   * Can be a single character/string or an array of objects for multiple replacements.
   * Use `occurrence` to replace a specific occurrence (1-based index) instead of all.
   */
  replace: string | Array<{ 
    pattern: string; 
    variant: DecorativeVariant;
    occurrence?: number; // 1-based index of which occurrence to replace (e.g., 1 = first, 2 = second)
    size?: { width?: number; height?: number }; // Optional size override for this replacement
  }>;
  /**
   * Variant to use when replace is a single string
   */
  variant?: DecorativeVariant;
  /**
   * Additional className for the container
   */
  className?: string;
  /**
   * Whether to replace all occurrences or just the first (only used when replace is a string)
   */
  replaceAll?: boolean;
}

/**
 * DecorativeText component that replaces specified letters/patterns in text
 * with decorative components. This makes translation easier by allowing
 * the full text string to be passed as a single translatable string.
 *
 * @example
 *
 * <DecorativeText text="Become the hero" replace="o" variant="blue1" />
 *
 * @example
 *
 * <DecorativeText 
 *   text="Become the hero" 
 *   replace={[
 *     { pattern: "o", variant: "blue1" },
 *     { pattern: "e", variant: "blue2" }
 *   ]} 
 * />
 * 
 * @example
 *
 * <DecorativeText 
 *   text="Become the hero of your own story" 
 *   replace={[
 *     { pattern: "o", variant: "blue1", occurrence: 1 },
 *     { pattern: "o", variant: "blue2", occurrence: 2 }
 *   ]} 
 * />
 */
export function DecorativeText({
  text,
  replace,
  variant = "blue1",
  className = "",
  replaceAll = true,
}: DecorativeTextProps) {
  const renderText = () => {
    // Normalize to array format for unified processing
    const replacements: Array<{ pattern: string; variant: DecorativeVariant; occurrence?: number; size?: { width?: number; height?: number } }> = Array.isArray(replace)
      ? replace
      : [{ pattern: replace, variant }];

    // Build a map of all positions where replacements should occur
    type Replacement = {
      index: number;
      length: number;
      variant: DecorativeVariant;
      size?: { width?: number; height?: number };
    };

    const replacementsList: Replacement[] = [];

    for (const { pattern, variant: replaceVariant, occurrence, size: replacementSize } of replacements) {
      const regex = new RegExp(
        pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "g"
      );
      let match;
      let occurrenceCount = 0;

      while ((match = regex.exec(text)) !== null) {
        occurrenceCount++;
        
        // If occurrence is specified, only add this match if it's the right occurrence
        if (occurrence !== undefined) {
          if (occurrenceCount === occurrence) {
            replacementsList.push({
              index: match.index,
              length: match[0].length,
              variant: replaceVariant,
              size: replacementSize,
            });
          }
        } else {
          // No occurrence specified, add all matches
          replacementsList.push({
            index: match.index,
            length: match[0].length,
            variant: replaceVariant,
            size: replacementSize,
          });
        }
      }
    }

    // Sort by index to process in order
    replacementsList.sort((a, b) => a.index - b.index);

    // Build the result by processing text segments and replacements
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let keyCounter = 0;

    for (const replacement of replacementsList) {
      // Skip if this replacement overlaps with a previous one
      if (replacement.index < lastIndex) continue;

      // Add text before replacement
      if (replacement.index > lastIndex) {
        parts.push(
          <React.Fragment key={`text-${keyCounter++}`}>
            {text.slice(lastIndex, replacement.index)}
          </React.Fragment>
        );
      }

      // Add decorative component
      const DecorativeComponent = variantComponents[replacement.variant];
      parts.push(
        <span key={`decorative-${keyCounter++}`} className="inline-flex items-baseline">
          <DecorativeComponent 
            width={replacement.size?.width}
            height={replacement.size?.height}
          />
        </span>
      );

      lastIndex = replacement.index + replacement.length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(
        <React.Fragment key={`text-${keyCounter++}`}>
          {text.slice(lastIndex)}
        </React.Fragment>
      );
    }

    return parts.length > 0 ? parts : text;
  };

  return <span className={className}>{renderText()}</span>;
}

