"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Image from "next/image";

export type ColorOption = 
  | string 
  | { readonly name: string; readonly color: string; readonly svg?: string };

export interface ColorPickerProps {
  /** Current selected value (color hex string or svg filename) */
  value: string;
  /** Callback when color is selected */
  onChange: (value: string) => void;
  /** Primary colors to display (strings or objects) */
  primaryColors: ReadonlyArray<ColorOption>;
  /** Extended colors for popover (strings or objects) */
  extendedColors: ReadonlyArray<ColorOption>;
  /** Optional label text */
  label?: string;
  /** Optional preview section (for eye color) */
  showPreview?: boolean;
  /** Preview image path template (e.g., "/illustrations/eye-color/{value}.svg") */
  previewImagePath?: string;
  /** Preview label text */
  previewLabel?: string;
  /** Additional className for container */
  className?: string;
}

// Helper to get color value from option (string or object)
const getColorValue = (option: ColorOption): string => {
  return typeof option === "string" ? option : option.color;
};

// Helper to get display value (for eye color, uses svg; otherwise uses color)
const getDisplayValue = (option: ColorOption, useSvg: boolean): string => {
  if (typeof option === "string") return option;
  return useSvg && option.svg ? option.svg : option.color;
};

// Helper to get name for aria-label
const getName = (option: ColorOption, index: number): string => {
  if (typeof option === "string") return `color ${index + 1}`;
  return option.name;
};

export function ColorPicker({
  value,
  onChange,
  primaryColors,
  extendedColors,
  label,
  showPreview = false,
  previewImagePath,
  previewLabel,
  className,
}: ColorPickerProps) {
  // Determine if we should use svg for value comparison (eye color case)
  const useSvgForValue = extendedColors.length > 0 && typeof extendedColors[0] !== "string" && "svg" in extendedColors[0];

  // Check if value matches an option
  const isSelected = (option: ColorOption): boolean => {
    if (useSvgForValue && typeof option !== "string" && option.svg) {
      return value === option.svg;
    }
    return value === getColorValue(option);
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Preview Section (for eye color) */}
      {showPreview && previewImagePath && (
        <div className="bg-gray-100 rounded-xl p-4 flex flex-col items-center justify-center gap-2 h-[240px]">
          <Label className="text-heading-sm text-center">{previewLabel || "Eye color"}</Label>
          <div className="relative w-38 h-38 p-12">
            <Image
              src={previewImagePath.replace("{value}", value)}
              alt={`${value} eyes`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* Color Picker Section */}
      <div className={cn("w-full", showPreview ? "space-y-2" : "")}>
        {label && (
          <Label className="text-sm text-center block">
            {label}
          </Label>
        )}
        <div className="flex items-center justify-center -space-x-2">
          {primaryColors.map((colorOption, index) => {
            const colorValue = getColorValue(colorOption);
            const selected = isSelected(colorOption);
            const ariaLabel = getName(colorOption, index);

            return (
              <button
                key={index}
                type="button"
                onClick={() => onChange(useSvgForValue ? getDisplayValue(colorOption, true) : colorValue)}
                className={cn(
                  "relative w-10 h-10 rounded-full border-2 transition-all hover:z-10",
                  selected
                    ? "border-blue-800 ring-2 ring-blue-800 ring-offset-1 z-10"
                    : "border-white hover:border-blue-800"
                )}
                style={{ backgroundColor: colorValue }}
                aria-label={`Select ${ariaLabel}`}
              />
            );
          })}

          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="relative w-10 h-10 rounded-full border-2 border-blue-800 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors hover:z-10 ml-2"
                aria-label="More color options"
              >
                <div className="flex gap-0.5">
                  <div className="w-1 h-1 rounded-full bg-blue-800" />
                  <div className="w-1 h-1 rounded-full bg-blue-800" />
                  <div className="w-1 h-1 rounded-full bg-blue-800" />
                </div>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-4 bg-[#F4FAFA]">
              <div className="grid grid-cols-3 gap-3">
                {extendedColors.map((colorOption, index) => {
                  const colorValue = getColorValue(colorOption);
                  const selected = isSelected(colorOption);
                  const ariaLabel = getName(colorOption, index);

                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => onChange(useSvgForValue ? getDisplayValue(colorOption, true) : colorValue)}
                      className={cn(
                        "w-10 h-10 rounded-full border-2 transition-all",
                        selected
                          ? "border-blue-800 ring-2 ring-blue-800 ring-offset-1"
                          : "border-gray-300 hover:border-blue-800"
                      )}
                      style={{ backgroundColor: colorValue }}
                      aria-label={`Select ${ariaLabel}`}
                    />
                  );
                })}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
