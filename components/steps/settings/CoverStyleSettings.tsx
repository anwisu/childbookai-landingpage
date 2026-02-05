"use client";

import React from "react";
import Image from "next/image";
import { Crown, InfoCircle } from "iconsax-react";
import { Maximize2 } from "lucide-react";
import { SettingsCard } from "@/ui/settings-card";
import { AppButton } from "@/ui/app-button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";
import { Dialog, DialogContent, DialogTitle } from "@/ui/dialog";
import { cn } from "@/utils";
import { COVER_OPTIONS } from "@/constants/book-settings";
import type { CoverStyle } from "@/types/story";

type CoverStyleSettingsProps = {
    selectedStyle: CoverStyle;
    onStyleChange: (style: CoverStyle) => void;
    maximizedCover: CoverStyle | null;
    onMaximizeCover: (style: CoverStyle | null) => void;
};

export function CoverStyleSettings({
    selectedStyle,
    onStyleChange,
    maximizedCover,
    onMaximizeCover,
}: CoverStyleSettingsProps) {
    return (
        <>
            <SettingsCard
                title="Cover Style"
                description="Choose cover design for your book"
            >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {COVER_OPTIONS.map((option) => (
                        <div key={option.id} className="flex flex-col gap-3 items-center sm:items-start">
                            {option.id === "premium" ? (
                                <div className="relative w-[190px] h-[190px] shrink-0 overflow-hidden rounded-md">
                                    <Image
                                        src={option.image}
                                        alt={option.label}
                                        fill
                                        className="object-cover rounded-md"
                                        sizes="190px"
                                    />
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <button
                                                type="button"
                                                className="absolute top-2 right-2 z-10 hover:opacity-80 transition-opacity"
                                                aria-label="Premium information"
                                            >
                                                <InfoCircle size="26" color="#FFFFFF" variant="Bold" />
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Premium cover style with enhanced features</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => onStyleChange(option.id)}
                                    className={cn(
                                        "relative w-[190px] h-[190px] shrink-0 overflow-hidden rounded-md transition-all",
                                        selectedStyle === option.id && "ring-2 ring-blue-800 ring-offset-2"
                                    )}
                                    aria-pressed={selectedStyle === option.id}
                                    aria-label={`${option.label} cover`}
                                >
                                    <Image
                                        src={option.image}
                                        alt={option.label}
                                        fill
                                        className="object-cover rounded-md"
                                        sizes="190px"
                                    />
                                    {selectedStyle === option.id && (
                                        <span
                                            className="absolute inset-0 flex items-center justify-center rounded-md bg-primary/30 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onMaximizeCover(option.id);
                                            }}
                                            aria-label="Maximize cover image"
                                        >
                                            <span className="rounded-full bg-white p-2" aria-hidden>
                                                {/* Note: Maximize2 was imported from lucide-react in original, but iconsax also has it or similar. 
                            Using iconsax if available or lucide. Original file used lucide-react for Maximize2. 
                            Let's check imports. I'll use iconsax if compatible or lucide if needed. 
                            Actually, Step3Settings imported Maximize2 from lucide-react. 
                            I'll switch the import to lucide-react for Maximize2 to match original specific icon. */
                                                }
                                                <Maximize2 size={20} className="text-blue-800" />
                                                {/* Wait, I imported Maximize2 from iconsax-react above. Let me fix that. */}
                                            </span>
                                        </span>
                                    )}
                                </button>
                            )}
                            {option.id === "premium" ? (
                                <div className="flex w-[190px] items-center justify-between gap-2">
                                    <div className="flex items-center gap-1.5">
                                        <Crown size={20} color="#EDBD38" variant="Bold" className="shrink-0" />
                                        <span className="font-semibold text-foreground text-lg">{option.label}</span>
                                    </div>
                                    <AppButton
                                        variant="primary"
                                        size="sm"
                                        className="shrink-0 font-semibold w-12"
                                    >
                                        Buy
                                    </AppButton>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center gap-1">
                                    <span className="font-semibold text-foreground text-lg">{option.label}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </SettingsCard>

            {/* Maximized Cover Image Dialog */}
            <Dialog open={maximizedCover !== null} onOpenChange={(open) => !open && onMaximizeCover(null)}>
                <DialogContent
                    className="max-w-4xl w-full p-0 bg-transparent border-none shadow-none"
                    showCloseButton={true}
                >
                    <DialogTitle className="sr-only">
                        {maximizedCover
                            ? `${COVER_OPTIONS.find(opt => opt.id === maximizedCover)?.label || "Cover"} preview`
                            : "Cover preview"}
                    </DialogTitle>
                    {maximizedCover && (
                        <div className="relative w-full h-auto max-h-[90vh] flex items-center justify-center">
                            <Image
                                src={COVER_OPTIONS.find(opt => opt.id === maximizedCover)?.image || ""}
                                alt={COVER_OPTIONS.find(opt => opt.id === maximizedCover)?.label || "Cover preview"}
                                width={800}
                                height={800}
                                className="object-contain rounded-lg w-full h-auto max-h-[90vh]"
                                sizes="(max-width: 768px) 100vw, 800px"
                            />
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}
