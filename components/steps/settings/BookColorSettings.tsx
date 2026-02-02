"use client";

import React from "react";
import { SettingsCard } from "@/components/ui/settings-card";
import { ColorPicker } from "@/components/ui/color-picker";
import { BOOK_COLORS } from "@/lib/constants/book-settings";

type BookColorSettingsProps = {
    selectedColor: string;
    onColorChange: (color: string) => void;
};

export function BookColorSettings({
    selectedColor,
    onColorChange,
}: BookColorSettingsProps) {
    return (
        <SettingsCard
            title="Book Color"
            description="Select page color"
        >
            <div className="flex items-center justify-center">
                <ColorPicker
                    value={selectedColor}
                    onChange={onColorChange}
                    primaryColors={BOOK_COLORS.primary}
                    extendedColors={BOOK_COLORS.extended}
                />
            </div>
        </SettingsCard>
    );
}
