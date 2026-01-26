"use client";

import { Card, CardContent } from "@/components/ui/card";
import { HeadingText } from "@/components/typography";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface SettingsCardProps {
  /** Title text for the card header */
  title: string;
  /** Description text below the title */
  description?: string;
  /** Main content of the card */
  children?: ReactNode;
  /** Optional action element (e.g., Checkbox) to display on the right side of the header */
  action?: ReactNode;
  /** Additional className for the card container */
  className?: string;
  /** Additional className for the header section */
  headerClassName?: string;
  /** Additional className for the content section */
  contentClassName?: string;
}

export function SettingsCard({
  title,
  description,
  children,
  action,
  className,
  headerClassName,
  contentClassName,
}: SettingsCardProps) {
  return (
    <Card className={cn("border-none bg-blue-100 px-6 py-4 shadow-sm rounded-lg ", className)}>
      <CardContent className={cn("flex flex-col gap-6 px-0", contentClassName)}>
        {/* Header Section */}
        {(title || description || action) && (
          <div className={cn("flex items-start justify-between", headerClassName)}>
            {(title || description) && (
              <div className="flex flex-col gap-1">
                {title && (
                  <HeadingText
                    variant="h5"
                    title={title}
                    className="font-semibold text-foreground"
                  />
                )}
                {description && (
                  <p className="text-sm text-gray-600">
                    {description}
                  </p>
                )}
              </div>
            )}
            {action && (
              <div className="shrink-0">
                {action}
              </div>
            )}
          </div>
        )}

        {/* Content Section */}
        {children}
      </CardContent>
    </Card>
  );
}
