"use client";

import { CheckListItem } from "./check-list-item";
import { cn } from "@/lib/utils";

export interface FeatureListProps {
  /** Array of feature strings */
  features: string[];
  /** Number of columns: 1 for single column, 2 for two columns */
  columns?: 1 | 2;
  /** Text size variant: "sm" (text-body-sm) or "md" (text-xs md:text-body) */
  textSize?: "sm" | "md";
  /** Icon size variant: "sm" (w-3 h-3 sm:w-4 sm:h-4) or "md" (w-5 h-5 sm:w-5 sm:h-5) */
  iconSize?: "sm" | "md";
  /** Additional className for container */
  className?: string;
}

export function FeatureList({
  features,
  columns = 1,
  textSize = "sm",
  iconSize = "md",
  className,
}: FeatureListProps) {
  const textSizeClass =
    // Make feature text responsive: smaller on xs/sm, keep current size on md+
    textSize === "sm"
      ? "text-xs sm:text-sm md:text-body-sm lg:text-body-sm"
      : "text-xs md:text-body";

  // For two columns, split features in half
  const midPoint = columns === 2 ? Math.ceil(features.length / 2) : features.length;
  const leftColumnFeatures = features.slice(0, midPoint);
  const rightColumnFeatures = columns === 2 ? features.slice(midPoint) : [];

  if (columns === 1) {
    // Single column layout (IndividualPricing pattern)
    return (
      <ul
        className={cn(
          "space-y-0 xl:space-y-2 -mt-12 mb-3",
          className
        )}
      >
        {features.map((feature, index) => {
          const isLast = index === features.length - 1;
          return (
            <CheckListItem
              key={index}
              iconSize={iconSize}
              isLast={isLast}
              className={textSizeClass}
            >
              {feature}
            </CheckListItem>
          );
        })}
      </ul>
    );
  }

  // Two column layout (BusinessPricing pattern)
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2 -mt-12 mb-3",
        className
      )}
    >
      {/* Left Column */}
      <ul className="space-y-0 xl:space-y-2">
        {leftColumnFeatures.map((feature, index) => (
          <CheckListItem
            key={index}
            iconSize={iconSize}
            className={textSizeClass}
          >
            {feature}
          </CheckListItem>
        ))}
      </ul>

      {/* Right Column */}
      <ul className="space-y-0 xl:space-y-2">
        {rightColumnFeatures.map((feature, index) => {
          const isLast = index === rightColumnFeatures.length - 1;
          return (
            <CheckListItem
              key={index}
              iconSize={iconSize}
              isLast={isLast}
              className={textSizeClass}
            >
              {feature}
            </CheckListItem>
          );
        })}
      </ul>
    </div>
  );
}
