"use client";

import { BackgroundShape, MobileBackgroundCard } from "./";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export interface SectionContainerProps {
  /** Section content */
  children: ReactNode;
  /** BackgroundShape viewBox */
  viewBox: string;
  /** BackgroundShape path */
  path: string;
  /** BackgroundShape fill color (default: "white") */
  fill?: string;
  /** BackgroundShape className */
  backgroundShapeClassName?: string;
  /** MobileBackgroundCard className */
  mobileCardClassName?: string;
  /** Section element className */
  sectionClassName?: string;
  /** Content wrapper className */
  contentClassName?: string;
  /** Content wrapper max-width (default: "max-w-7xl") */
  maxWidth?: string;
  /** Optional overlay rendered after content wrapper but inside section (e.g. absolute footers) */
  overlay?: ReactNode;
}

/**
 * SectionContainer component
 * Reusable wrapper for sections with BackgroundShape and MobileBackgroundCard
 * Preserves exact styling patterns from Services, Features, CreateABook, and Pricing sections
 */
export function SectionContainer({
  children,
  viewBox,
  path,
  fill = "white",
  backgroundShapeClassName,
  mobileCardClassName,
  sectionClassName,
  contentClassName,
  maxWidth = "max-w-7xl",
  overlay,
}: SectionContainerProps) {
  return (
    <section className={cn("relative w-full", sectionClassName)}>
      {/* Desktop / large screens: SVG background */}
      <BackgroundShape
        viewBox={viewBox}
        path={path}
        fill={fill}
        className={cn("hidden lg:flex", backgroundShapeClassName)}
      />

      {/* Tablet / mobile: soft white background card */}
      <MobileBackgroundCard className={mobileCardClassName} />

      {/* Content */}
      <div className={cn("relative z-10", maxWidth, "mx-auto", contentClassName)}>
        {children}
      </div>

      {overlay}
    </section>
  );
}
