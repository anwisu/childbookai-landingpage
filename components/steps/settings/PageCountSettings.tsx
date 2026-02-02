"use client";

import React from "react";
import Image from "next/image";
import { Crown } from "iconsax-react";
import { Label } from "@/components/ui/label";
import { AppButton } from "@/components/ui/app-button";
import { RadioButton } from "@/components/ui/radio-button";
import { SettingsCard } from "@/components/ui/settings-card";

type PageCountSettingsProps = {
    selectedCount: number;
    onCountChange: (count: number) => void;
};

export function PageCountSettings({
    selectedCount,
    onCountChange,
}: PageCountSettingsProps) {
    return (
        <SettingsCard
            title="Page Count"
            description="12 pages are available for a basic account"
        >
            {/* Bottom Section: Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-center">
                {/* Left Column: Blue Book Image */}
                <div className="flex items-center justify-center">
                    <div className="relative w-48 h-48 flex items-center justify-center">
                        <div className="relative w-full h-full flex items-center justify-center">
                            <Image src="/images/blue-book.svg" alt="Blue Book" width={200} height={200} />
                        </div>
                    </div>
                </div>

                {/* Right Column: Page Count Selection */}
                <div className="flex flex-col gap-4">
                    {/* Quantity Label and Radio Buttons */}
                    <div className="flex flex-col gap-2">
                        <Label className="text-sm font-medium text-foreground">
                            Quantity
                        </Label>
                        <div className="flex flex-wrap gap-3">
                            <RadioButton
                                label="12"
                                isSelected={selectedCount === 12}
                                onClick={() => onCountChange(12)}
                                gap="sm"
                                paddingX="md"
                                paddingY="md"
                                iconSize="sm"
                                radius="lg"
                                fontSize="md"
                                unselectedBgColor="bg-white"
                            />
                            <RadioButton
                                label={
                                    <span className="flex items-center gap-1.5">
                                        <span>16</span>
                                        <Crown size={16} color="#82AAC7" variant="Bold" />
                                    </span>
                                }
                                isSelected={selectedCount === 16}
                                onClick={() => onCountChange(16)}
                                gap="sm"
                                paddingX="sm"
                                paddingY="md"
                                iconSize="sm"
                                radius="lg"
                                fontSize="md"
                                unselectedBgColor="bg-white"
                            />
                            <RadioButton
                                label={
                                    <span className="flex items-center gap-1.5">
                                        <span>20</span>
                                        <Crown size={16} color="#EDBD38" variant="Bold" />
                                    </span>
                                }
                                isSelected={selectedCount === 20}
                                onClick={() => onCountChange(20)}
                                gap="sm"
                                paddingX="sm"
                                paddingY="md"
                                iconSize="sm"
                                radius="lg"
                                fontSize="md"
                                unselectedBgColor="bg-white"
                            />
                            <RadioButton
                                label={
                                    <span className="flex items-center gap-1.5">
                                        <span>24</span>
                                        <Crown size={16} color="#EDBD38" variant="Bold" />
                                    </span>
                                }
                                isSelected={selectedCount === 24}
                                onClick={() => onCountChange(24)}
                                gap="sm"
                                paddingX="sm"
                                paddingY="md"
                                iconSize="sm"
                                radius="lg"
                                fontSize="md"
                                unselectedBgColor="bg-white"
                            />
                        </div>
                        <p className="text-xs text-gray-500">
                            You can choose how many pages your book will have.
                        </p>
                    </div>

                    {/* Buy Premium Button */}
                    <div className="flex justify-end">
                        <AppButton
                            variant="primary"
                            size="sm"
                            className="font-semibold"
                        >
                            Buy premium
                        </AppButton>
                    </div>
                </div>
            </div>
        </SettingsCard>
    );
}
