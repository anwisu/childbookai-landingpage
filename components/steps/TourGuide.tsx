"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import Image from "next/image";
import { AppButton } from "../shared/AppButton";
import { cn } from "@/lib/utils";
import { CloseCircle } from "iconsax-react";

// ============================================================================
// Types
// ============================================================================

export type TourStep = {
  id: number;
  leftImage: string;
  rightImage?: string; // Optional - if not provided, show single centered image
  heading: string;
  description: string;
  isGoodExample?: boolean; // If true, shows checkmark instead of X
};

export type TourGuideProps = {
  steps: TourStep[];
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

// ============================================================================
// Component
// ============================================================================

export function TourGuide({
  steps,
  trigger,
  open: controlledOpen,
  onOpenChange,
}: TourGuideProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const handleOpenChange = isControlled ? onOpenChange : setInternalOpen;

  const currentStepData = steps[currentStep];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleOpenChange?.(false);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    handleOpenChange?.(false);
    setCurrentStep(0); // Reset to first step when closed
  };

  const handleOpenChangeInternal = (newOpen: boolean) => {
    handleOpenChange?.(newOpen);
    if (!newOpen) {
      setCurrentStep(0); // Reset to first step when closed
    }
  };

  if (!currentStepData) return null;

  return (
    <Popover open={open} onOpenChange={handleOpenChangeInternal}>
      {trigger && <PopoverTrigger asChild>{trigger}</PopoverTrigger>}
      <PopoverContent
        align="end"
        side="right"
        className="w-[300px] max-w-[90vw] p-0 bg-blue-800 text-white border-none rounded-lg shadow-lg"
        sideOffset={16}
      >
        <div className="relative flex flex-col">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 flex items-center justify-center hover:bg-primary/30 rounded-full"
            aria-label="Close tour guide"
          >
            <CloseCircle size={24} color="#ffffff" variant="Bold" />
          </button>

          {/* Top Paragraph */}
          <div className="px-6 pt-12 pb-4 text-center">
            <p className="text-white text-sm">
              To help our AI draw your child beautifully in the story, please make sure:
            </p>
          </div>

          {/* Image Layout - Single or Two Column */}
          <div className="px-6 pb-4">
            {currentStepData.rightImage ? (
              /* Two-Column Layout */
              <div className="grid grid-cols-2 gap-1">
                {/* Left Image */}
                <div className="relative">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-200">
                    <Image
                      src={currentStepData.leftImage}
                      alt={currentStepData.heading}
                      fill
                      className="object-cover"
                    />
                    {/* Overlay Icon */}
                    <div className="absolute bottom-2 right-2">
                      {currentStepData.isGoodExample ? (
                        <Image
                          src="/images/correct-icon.png"
                          alt="Good Example"
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      ) : (
                        <Image
                          src="/images/wrong-icon.png"
                          alt="Bad Example"
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-200">
                    <Image
                      src={currentStepData.rightImage}
                      alt={currentStepData.heading}
                      fill
                      className="object-cover"
                    />
                    {/* Overlay Icon */}
                    <div className="absolute bottom-2 right-2">
                      {currentStepData.isGoodExample ? (
                        <Image
                          src="/images/correct-icon.png"
                          alt="Good Example"
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      ) : (
                        <Image
                          src="/images/wrong-icon.png"
                          alt="Bad Example"
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Single Centered Image */
              <div className="flex justify-center">
                <div className="relative w-full max-w-[120px] aspect-square">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-200">
                    <Image
                      src={currentStepData.leftImage}
                      alt={currentStepData.heading}
                      fill
                      className="object-cover"
                    />
                    {/* Overlay Icon */}
                    <div className="absolute bottom-2 right-2">
                      {currentStepData.isGoodExample ? (
                        <Image
                          src="/images/correct-icon.png"
                          alt="Good Example"
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      ) : (
                        <Image
                          src="/images/wrong-icon.png"
                          alt="Bad Example"
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Heading and Description */}
          <div className="px-6 pb-4 text-center">
            <h5 className="text-xl font-semibold text-white">
              {currentStepData.heading}
            </h5>
            <p className="text-white text-sm">{currentStepData.description}</p>
          </div>

          {/* Navigation Dots */}
          <div className="px-6 pb-4 flex justify-center gap-1">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index <= currentStep
                    ? "bg-primary"
                    : "bg-white border border-white/50"
                )}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="px-6 pb-6 flex items-center justify-center gap-3">
            {!isFirstStep && (
              <AppButton
                variant="secondary"
                size="sm"
                onClick={handleBack}
                className="bg-transparent text-white hover:bg-primary/30 w-16"
              >
                Back
              </AppButton>
            )}
            <AppButton
              variant="primary"
              size="sm"
              onClick={handleNext}
              className="font-semibold w-16"
            >
              {isLastStep ? "Okay" : "Next"}
            </AppButton>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
