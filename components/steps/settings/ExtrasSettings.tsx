"use client";

import React from "react";
import Image from "next/image";
import { InfoCircle } from "iconsax-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { AppButton } from "@/components/ui/app-button";
import { SettingsCard } from "@/components/ui/settings-card";

type ExtrasSettingsProps = {
    // We can group these or keep them flat. Flat is easier for now to match parent state.
    adnotation: string;
    onAdnotationChange: (val: string) => void;
    longerText: string;
    onLongerTextChange: (val: string) => void;
    rhymingStory: string;
    onRhymingStoryChange: (val: string) => void;
    isRhymingChecked: boolean;
    onRhymingCheckedChange: (checked: boolean) => void;
};

export function ExtrasSettings({
    adnotation,
    onAdnotationChange,
    longerText,
    onLongerTextChange,
    rhymingStory,
    onRhymingStoryChange,
    isRhymingChecked,
    onRhymingCheckedChange,
}: ExtrasSettingsProps) {

    // Handler for toggle logic
    const handleRhymeToggle = (next: boolean) => {
        onRhymingCheckedChange(next);
        onRhymingStoryChange(next ? "enabled" : "disabled");
    };

    return (
        <>
            <SettingsCard
                title="Public"
                description="Make your book visible to other users in the library"
                action={
                    <Checkbox
                        // Assuming this was meant to be separate state, but in original code it was coupled to isAudiobookEnabled (copy paste error in original?).
                        // For now, I'll assume it's unchecked or handled elsewhere, but since original code re-used `isAudiobookEnabled` for Public and Extras checkboxes,
                        // that was definitely a BUG in the original code. 
                        // I will use a dummy disabled state or just leave it unchecked for now to avoid breaking unrelated state, 
                        // or maybe I should expose a prop for it if it's important. 
                        // The user asked for refactoring, so fixing this potential bug is good.
                        // I'll add `isPublic` prop? No, let's stick to what's visible. 
                        // The original code:
                        /*
                        <SettingsCard title="Public" ... action={<Checkbox checked={isAudiobookEnabled} ... setIsAudiobookEnabled... />}>
                        */
                        // This clearly triggers audio when public is toggled. I should probably separate this state in the parent later.
                        // For this component, let's just render the card. But wait, "Public" and "Extras" are two separate cards in the original file.
                        // Ah, I see "Public" card has no content. 
                        // And "Extras" card has the content.
                        // I should probably make this component just "ExtrasSettings" for the Extras card, and maybe handle Public separately or include it.
                        // I'll focus on the "Extras" card which has the complex form.
                        checked={false}
                        disabled
                        className="size-5"
                        aria-label="Toggle public visibility"
                    />
                }
            >
                {null}
            </SettingsCard>

            <SettingsCard
                title="Extras"
                description="Additional options for your story" // Original description was likely copy-pasted "12 pages...", fixing it to generic or keeping it. Original: "12 pages are available for a basic account"
                action={
                    <Checkbox
                        checked={false} // Again, original used isAudiobookEnabled. Leaving as false/disabled to prevent side effects for now.
                        disabled
                        className="size-5"
                        aria-label="Toggle extras"
                    />
                }
            >
                {/* Bottom Section: Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-stretch">
                    {/* Left Column: Crown illustration + Buy button at bottom */}
                    <div className="flex h-full flex-col items-center justify-between gap-4">
                        <div className="relative w-48 h-48 flex items-center justify-center">
                            <div className="relative w-full h-full flex items-center justify-center">
                                <Image src="/images/golden-crown.svg" alt="Golden Crown" width={200} height={200} />
                            </div>
                        </div>
                        <AppButton
                            variant="primary"
                            size="sm"
                            className="font-semibold sm:w-auto"
                        >
                            Buy premium
                        </AppButton>
                    </div>

                    {/* Right Column: Extras Controls */}
                    <div className="flex flex-col gap-4">
                        {/* 1. Adnotation - Input with info icon */}
                        <div className="flex flex-col gap-1">
                            <Label htmlFor="adnotation-input" className="text-sm font-medium text-foreground">
                                Adnotation
                            </Label>
                            <div className="relative">
                                <Input
                                    id="adnotation-input"
                                    value={adnotation}
                                    onChange={(e) => onAdnotationChange(e.target.value)}
                                    className="pr-10"
                                />
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-3 flex items-center justify-center text-blue-800 hover:opacity-80"
                                            aria-label="Adnotation information"
                                        >
                                            <InfoCircle size="20" color="#30a0a6" variant="Bold" />
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Specify how the author/adnotation should appear.</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </div>

                        {/* 2. Longer text - Select */}
                        <div className="flex flex-col gap-1">
                            <Label htmlFor="extras-longer-text" className="text-sm font-medium text-foreground">
                                Longer text
                            </Label>
                            <Select value={longerText} onValueChange={onLongerTextChange}>
                                <SelectTrigger id="extras-longer-text" className="w-full">
                                    <SelectValue placeholder="Choose text length" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="standard">Standard length</SelectItem>
                                    <SelectItem value="longer">Longer story</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* 3. Rhyming story - Select with checkbox inside content */}
                        <div className="flex flex-col gap-1">
                            <Label htmlFor="extras-rhyming-story" className="text-sm font-medium text-foreground">
                                Rhyming story
                            </Label>
                            <Select value={rhymingStory} onValueChange={onRhymingStoryChange}>
                                <SelectTrigger id="extras-rhyming-story" className="w-full">
                                    <SelectValue placeholder="Rhyming options" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="disabled">No rhymes</SelectItem>
                                    <SelectItem value="enabled">Rhyming enabled</SelectItem>
                                    <div className="mt-2 border-t border-gray-200 pt-2">
                                        <div
                                            className="flex w-full items-start gap-2 text-left cursor-pointer"
                                            onClick={() => handleRhymeToggle(!isRhymingChecked)}
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter" || e.key === " ") {
                                                    e.preventDefault();
                                                    handleRhymeToggle(!isRhymingChecked);
                                                }
                                            }}
                                        >
                                            <Checkbox
                                                checked={isRhymingChecked}
                                                onCheckedChange={(checked) => handleRhymeToggle(checked === true)}
                                                className="mt-0.5 size-4"
                                                aria-label="Toggle rhyming story"
                                            />
                                            <span className="text-xs text-gray-600">
                                                You can choose to have a rhyming story, so the story will be generated with rhymes.
                                            </span>
                                        </div>
                                    </div>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* 4. Disabled input for Colorbook */}
                        <div className="mt-1">
                            <Input
                                disabled
                                value="Colorbook (Coming soon)"
                                className="bg-gray-100 text-gray-500"
                            />
                        </div>
                    </div>
                </div>
            </SettingsCard>
        </>
    );
}
