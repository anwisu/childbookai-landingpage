"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export interface CheckListItemProps {
  /** Feature text */
  children: React.ReactNode;
  /** Additional className for the list item */
  className?: string;
  /** Icon size variant: "sm" (w-3 h-3 sm:w-4 sm:h-4) or "md" (w-5 h-5 sm:w-5 sm:h-5) */
  iconSize?: "sm" | "md";
  /** Whether this is the last item (adds pt-2 pb-4 instead of py-2) */
  isLast?: boolean;
}

export function CheckListItem({
  children,
  className,
  iconSize = "md",
  isLast = false,
}: CheckListItemProps) {
  const iconSizeClass =
    iconSize === "sm"
      ? "w-3 h-3 sm:w-4 sm:h-4"
      : "w-5 h-5 sm:w-5 sm:h-5";

  return (
    <li
      className={cn(
        "flex items-start text-foreground",
        isLast ? "pt-2 pb-4" : "py-2",
        className
      )}
    >
      <Image
        src="/illustrations/check-icon.svg"
        alt=""
        width={20}
        height={20}
        className={cn("mr-2 shrink-0 mt-0.5", iconSizeClass)}
        sizes="20px"
      />
      <span>{children}</span>
    </li>
  );
}
