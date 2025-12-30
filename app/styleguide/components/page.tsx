import { AppButton } from "@/components/shared/AppButton";
import { Sparkle } from "@/components/shared/Sparkle";
import { ArrowLeft } from "lucide-react";

export default function ComponentsPage() {
  return (
    <div className="space-y-10 p-10">
      <h1 className="text-heading-lg">Buttons</h1>

      {/* Primary CTA row */}
      <section className="flex gap-4 flex-wrap items-center">
        {/* Create a Book – hero button with shadow */}
        <AppButton
          variant="hero"
          size="lg"
          leading={<Sparkle />}
          trailing={<Sparkle />}
        >
          Create a Book
        </AppButton>
        {/* Next step – 190x45, radius 14px, with shadow */}
        <AppButton 
          size="md" 
          shadow
          className="w-[190px] text-heading-sm"
        >
          Next Step
        </AppButton>
        {/* Save character – 190x45, radius 14px, grey background, with shadow */}
        <AppButton
          variant="secondary"
          size="md"
          shadow
          className="w-[190px] text-heading-sm rounded-[15px]"
        >
          Save character
        </AppButton>
      </section>

      {/* Secondary row: smaller buttons */}
      <section className="flex gap-4 items-center">
        {/* See guide – 105x40, radius 14px, with shadow */}
        <AppButton 
          size="sm" 
          shadow
          className="w-[105px]"
        >
          <span className="text-heading-sm">See guide</span>
        </AppButton>
        {/* Next – 62x32, radius 10px, no shadow */}
        <AppButton
          size="sm"
          shadow={false}
          className="w-[62px] h-[32px] rounded-[10px] px-[10px]"
        >
          <span className="text-heading-sm">Next</span>
        </AppButton>
      </section>

      <section className="flex gap-4 items-center">
        {/* Disabled button with proper background and shadow */}
        <AppButton 
          disabled 
          shadow
        >
          Next Step
        </AppButton>
        {/* Icon button – 44x44, radius 10px, no shadow */}
        <AppButton
          iconOnly
          size="sm"
          shadow={false}
          className="w-[44px] h-[44px] rounded-[10px] p-[10px]"
        >
          <ArrowLeft className="h-5 w-5" />
        </AppButton>
        <AppButton
          iconOnly
          size="sm"
          loading
          shadow={false}
          className="w-[44px] h-[44px] rounded-[10px] p-[10px]"
        />
      </section>
    </div>
  );
}
