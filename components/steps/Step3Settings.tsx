"use client";

import React, { useState } from "react";
import { HeadingText } from "../typography";
import { CharacterCard } from "../ui/character-card";
import type { Character } from "@/lib/types/character";
import { AppButton } from "@/components/ui/app-button";
import type { StoryData, CoverStyle } from "@/lib/types/story";
import Step3Creating from "./Step3Creating";

// Imported sub-components
import { AudiobookSettings } from "./settings/AudiobookSettings";
import { BookColorSettings } from "./settings/BookColorSettings";
import { CoverStyleSettings } from "./settings/CoverStyleSettings";
import { PageCountSettings } from "./settings/PageCountSettings";
import { ExtrasSettings } from "./settings/ExtrasSettings";

export type Step3SettingsProps = {
  storyData: StoryData;
  characters: Character[];
  onShowMoreToggle?: () => void;
  showMore?: boolean;
  onCreateClick?: () => void;
};

const Step3Settings: React.FC<Step3SettingsProps> = ({ storyData, characters, onShowMoreToggle, showMore = false, onCreateClick }) => {
  // State
  const [isAudiobookEnabled, setIsAudiobookEnabled] = useState(true);
  const [selectedVoice, setSelectedVoice] = useState("ruth");
  const [selectedBookColor, setSelectedBookColor] = useState("#FFFFFF");
  const [selectedCoverStyle, setSelectedCoverStyle] = useState<CoverStyle>("new");
  const [selectedPageCount, setSelectedPageCount] = useState(12);
  const [adnotation, setAdnotation] = useState("By childbook.ai");
  const [extrasLongerText, setExtrasLongerText] = useState("standard");
  const [extrasRhymingStory, setExtrasRhymingStory] = useState("disabled");
  const [isRhymingStoryChecked, setIsRhymingStoryChecked] = useState(false);
  const [maximizedCover, setMaximizedCover] = useState<CoverStyle | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateClick = () => {
    setIsCreating(true);
    onCreateClick?.();
  };

  // Show creating state UI
  if (isCreating) {
    return <Step3Creating />;
  }

  return (
    <div className="relative w-full flex flex-col items-center justify-center gap-8">
      {/* Heading */}
      <HeadingText
        variant="h1"
        title="Create Settings"
        className="text-center font-bold text-foreground pt-16 lg:pt-10"
      />

      {/* Story Information */}
      <div className="w-full max-w-2xl flex flex-col items-center gap-4">
        <div className="w-full text-center">
          <HeadingText
            variant="h3"
            title={storyData.title}
            className="text-center font-bold text-foreground"
          />
          <p className="text-base sm:text-lg text-gray-500 max-w-md w-full mx-auto px-4">
            {storyData.description}
          </p>
        </div>
      </div>

      {/* Character Cards */}
      {characters.length > 0 && (
        <div className="w-full flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-5">
            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
              />
            ))}
          </div>
        </div>
      )}

      {/* Select Settings Section */}
      <div className="w-full max-w-[650px] flex flex-col gap-6">
        {/* Section Header */}
        <div className="flex items-end justify-center relative">
          <HeadingText
            variant="h3"
            title="Select settings"
            className="font-bold text-foreground"
          />
          <button
            type="button"
            onClick={onShowMoreToggle}
            className="absolute right-0 text-blue-800 hover:text-blue-600 transition-colors font-medium text-sm"
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        </div>

        {/* Audiobook Settings */}
        <AudiobookSettings
          isEnabled={isAudiobookEnabled}
          onEnabledChange={setIsAudiobookEnabled}
          selectedVoice={selectedVoice}
          onVoiceChange={setSelectedVoice}
        />

        {showMore && (
          <>
            <BookColorSettings
              selectedColor={selectedBookColor}
              onColorChange={setSelectedBookColor}
            />

            <CoverStyleSettings
              selectedStyle={selectedCoverStyle}
              onStyleChange={setSelectedCoverStyle}
              maximizedCover={maximizedCover}
              onMaximizeCover={setMaximizedCover}
            />

            <PageCountSettings
              selectedCount={selectedPageCount}
              onCountChange={setSelectedPageCount}
            />

            <ExtrasSettings
              adnotation={adnotation}
              onAdnotationChange={setAdnotation}
              longerText={extrasLongerText}
              onLongerTextChange={setExtrasLongerText}
              rhymingStory={extrasRhymingStory}
              onRhymingStoryChange={setExtrasRhymingStory}
              isRhymingChecked={isRhymingStoryChecked}
              onRhymingCheckedChange={setIsRhymingStoryChecked}
            />

            {/* Bottom Create CTA */}
            <div className="w-full flex justify-center pb-2 mt-2">
              <AppButton
                variant="primary"
                size="md"
                shadow
                className="w-full sm:w-auto sm:min-w-[190px] text-sm sm:text-heading-sm min-h-[44px] sm:font-semibold"
                onClick={handleCreateClick}
              >
                Create
              </AppButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Step3Settings;
