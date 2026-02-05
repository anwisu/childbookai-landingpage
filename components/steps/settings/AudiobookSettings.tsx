"use client";

import React from "react";
import Image from "next/image";
import { VideoSquare } from "iconsax-react";
import { Label } from "@/ui/label";
import { Checkbox } from "@/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/ui/select";
import { SettingsCard } from "@/ui/settings-card";

type AudiobookSettingsProps = {
    isEnabled: boolean;
    onEnabledChange: (checked: boolean) => void;
    selectedVoice: string;
    onVoiceChange: (voice: string) => void;
};

export function AudiobookSettings({
    isEnabled,
    onEnabledChange,
    selectedVoice,
    onVoiceChange,
}: AudiobookSettingsProps) {
    return (
        <SettingsCard
            title="Audiobook"
            description="Add voice narration to your book"
            action={
                <Checkbox
                    checked={isEnabled}
                    onCheckedChange={(checked) => onEnabledChange(checked === true)}
                    className="size-5"
                    aria-label="Toggle audiobook"
                />
            }
        >
            {/* Bottom Section: Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-center">
                {/* Left Column: Megaphone Image */}
                <div className="flex items-center justify-center">
                    <div className="relative w-48 h-48 flex items-center justify-center">
                        <div className="relative w-full h-full flex items-center justify-center">
                            <Image src="/images/megaphone.svg" alt="Megaphone" width={200} height={200} />
                        </div>
                    </div>
                </div>

                {/* Right Column: Voice Selection Controls */}
                <div className="flex flex-col gap-4">
                    {/* Voice Label and Dropdown */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="voice-select" className="text-sm font-medium text-foreground">
                            Voice
                        </Label>
                        <Select value={selectedVoice} onValueChange={onVoiceChange}>
                            <SelectTrigger id="voice-select" className="w-full">
                                <SelectValue placeholder="Select a voice" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ruth">US - Female Adult - Ruth</SelectItem>
                                <SelectItem value="john">US - Male Adult - John</SelectItem>
                                <SelectItem value="emily">US - Female Child - Emily</SelectItem>
                                <SelectItem value="mike">US - Male Child - Mike</SelectItem>
                            </SelectContent>
                        </Select>
                        <p className="text-xs text-gray-500">
                            You can choose the voice of the narrator
                        </p>
                    </div>

                    {/* Voice Preview Button */}
                    <div className="flex flex-col gap-2">
                        <button
                            type="button"
                            className="w-full flex items-center justify-between px-3 py-2 border-2 border-blue-800 rounded-md bg-transparent hover:bg-blue-50 transition-colors text-left"
                            aria-label="Play voice preview"
                        >
                            <span className="text-sm text-foreground">Voice Preview</span>
                            <VideoSquare size={20} color="#30a0a6" variant="Bold" />
                        </button>
                        <p className="text-xs text-gray-500">
                            You can choose the voice of the narrator
                        </p>
                    </div>
                </div>
            </div>
        </SettingsCard>
    );
}
