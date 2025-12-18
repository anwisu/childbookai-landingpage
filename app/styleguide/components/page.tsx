import { AppButton } from "@/components/shared/AppButton";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const Sparkle = () => (
  <Image src="/illustrations/sparkle.png" alt="" width={24} height={24} aria-hidden />
);


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
          className="w-[190px] text-heading-sm shadow-[0_5px_0_var(--button-shadow)] hover:translate-y-[1px] hover:shadow-[0_4px_0_var(--button-shadow)] focus-visible:translate-y-[1px] focus-visible:shadow-[0_4px_0_var(--button-shadow)] active:translate-y-[3px] active:shadow-[0_3px_0_var(--button-shadow)]"
        >
          Next Step
        </AppButton>
        {/* Save character – 190x45, radius 14px, grey background, with shadow */}
        <AppButton
          variant="secondary"
          size="md"
          className="w-[190px] text-heading-sm shadow-[0_5px_0_#99AAAB] hover:translate-y-[1px] hover:shadow-[0_4px_0_#99AAAB] focus-visible:translate-y-[1px] focus-visible:shadow-[0_4px_0_#99AAAB] active:translate-y-[3px] active:shadow-[0_3px_0_#99AAAB] rounded-[15px]"
        >
          Save character
        </AppButton>
      </section>

      {/* Secondary row: smaller buttons */}
      <section className="flex gap-4 items-center">
        {/* See guide – 105x40, radius 14px, with shadow */}
        <AppButton 
          size="sm" 
          className="w-[105px] shadow-[0_5px_0_var(--button-shadow)] hover:translate-y-[1px] hover:shadow-[0_4px_0_var(--button-shadow)] focus-visible:translate-y-[1px] focus-visible:shadow-[0_4px_0_var(--button-shadow)] active:translate-y-[3px] active:shadow-[0_3px_0_var(--button-shadow)]"
        >
          <span className="text-heading-sm">See guide</span>
        </AppButton>
        {/* Next – 62x32, radius 10px, no shadow */}
        <AppButton
          size="sm"
          className="w-[62px] h-[32px] rounded-[10px] px-[10px] shadow-none hover:shadow-none active:shadow-none hover:translate-y-0 active:translate-y-0"
        >
          <span className="text-heading-sm">Next</span>
        </AppButton>
      </section>

      <section className="flex gap-4 items-center">
        {/* Disabled button with proper background and shadow */}
        <AppButton 
          disabled 
          className="shadow-[0_5px_0_var(--grey-disabled-shadow)]"
        >
          Next Step
        </AppButton>
        {/* Icon button – 44x44, radius 10px, no shadow */}
        <AppButton
          iconOnly
          size="sm"
          className="w-[44px] h-[44px] rounded-[10px] p-[10px] shadow-none hover:shadow-none active:shadow-none hover:translate-y-0 active:translate-y-0"
        >
          <ArrowLeft className="h-5 w-5" />
        </AppButton>
        <AppButton
          iconOnly
          size="sm"
          loading
          className="w-[44px] h-[44px] rounded-[10px] p-[10px] shadow-none hover:shadow-none active:shadow-none hover:translate-y-0 active:translate-y-0"
        />
      </section>
    </div>
  );
}
