import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

type AppButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  "variant" | "size"
> & {
  variant?: "primary" | "secondary" | "ghost" | "hero";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  iconOnly?: boolean;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  shadow?: boolean;
};

const variantStyles = {
  primary:
    "bg-primary text-foreground hover:bg-blue-600 focus-visible:bg-blue-600 active:bg-blue-800 disabled:bg-grey-disabled disabled:hover:bg-grey-disabled disabled:focus-visible:bg-grey-disabled disabled:active:bg-grey-disabled",
  secondary:
    "bg-[var(--grey-100)] text-foreground hover:bg-[var(--grey-hover)] focus-visible:bg-[var(--grey-hover)] active:bg-[var(--grey-active)] disabled:bg-[var(--grey-disabled)] disabled:hover:bg-[var(--grey-disabled)] disabled:focus-visible:bg-[var(--grey-disabled)] disabled:active:bg-[var(--grey-disabled)]",
  ghost: "bg-transparent text-foreground hover:bg-muted disabled:bg-grey-disabled disabled:hover:bg-grey-disabled",
  hero: "bg-primary text-foreground text-cta rounded-[20px] shadow-[0_8px_0_var(--button-shadow)] hover:bg-blue-600 hover:translate-y-[1px] hover:shadow-[0_7px_0_var(--button-shadow)] focus-visible:bg-blue-600 focus-visible:translate-y-[1px] focus-visible:shadow-[0_7px_0_var(--button-shadow)] active:bg-blue-800 active:translate-y-[3px] active:shadow-[0_5px_0_var(--button-shadow)] disabled:bg-grey-disabled disabled:hover:bg-grey-disabled disabled:focus-visible:bg-grey-disabled disabled:active:bg-grey-disabled disabled:hover:translate-y-0 disabled:hover:shadow-[0_5px_0_var(--grey-disabled-shadow)] disabled:focus-visible:translate-y-0 disabled:focus-visible:shadow-[0_5px_0_var(--grey-disabled-shadow)] disabled:active:translate-y-0 disabled:active:shadow-[0_5px_0_var(--grey-disabled-shadow)]",
} as const;


// Core size tokens based on Figma specs
// - md: 190x45, radius 14px, text 20/20 semi-bold
// - sm: 105x40, radius 14px, text 20/20 semi-bold (width usually overridden per button)
// - lg: used for larger buttons (e.g. hero) with slightly larger text
// Note: Shadows are applied conditionally via className - only on buttons that should have them
const sizeStyles = {
  sm: "h-[40px] px-6 rounded-[14px]",
  md: "h-[45px] px-8 rounded-[14px]",
  lg: "h-[56px] px-10 rounded-2xl",
} as const;



const heroSize = "w-[295px] h-[65px] flex items-center justify-center";

// Shadow styles for different variants
const getShadowStyles = (variant: "primary" | "secondary" | "ghost" | "hero", shadow: boolean, disabled: boolean) => {
  if (!shadow) {
    return "shadow-none hover:shadow-none active:shadow-none focus-visible:shadow-none disabled:hover:shadow-none disabled:active:shadow-none disabled:focus-visible:shadow-none hover:translate-y-0 active:translate-y-0 focus-visible:translate-y-0 disabled:hover:translate-y-0 disabled:active:translate-y-0 disabled:focus-visible:translate-y-0";
  }

  if (disabled) {
    return "shadow-[0_5px_0_var(--grey-disabled-shadow)] disabled:hover:shadow-[0_5px_0_var(--grey-disabled-shadow)] disabled:active:shadow-[0_5px_0_var(--grey-disabled-shadow)] disabled:focus-visible:shadow-[0_5px_0_var(--grey-disabled-shadow)]";
  }

  if (variant === "hero") {
    return "";
  }

  if (variant === "secondary") {
    return "shadow-[0_5px_0_#99AAAB] hover:translate-y-[1px] hover:shadow-[0_4px_0_#99AAAB] focus-visible:translate-y-[1px] focus-visible:shadow-[0_4px_0_#99AAAB] active:translate-y-[3px] active:shadow-[0_3px_0_#99AAAB]";
  }

  return "shadow-[0_5px_0_var(--button-shadow)] hover:translate-y-[1px] hover:shadow-[0_4px_0_var(--button-shadow)] focus-visible:translate-y-[1px] focus-visible:shadow-[0_4px_0_var(--button-shadow)] active:translate-y-[3px] active:shadow-[0_3px_0_var(--button-shadow)]";
};

export function AppButton({
  variant = "primary",
  size = "md",
  loading = false,
  // iconOnly = false,
  leading,
  trailing,
  disabled,
  shadow,
  className,
  children,
  ...props
}: AppButtonProps) {
  const hasShadow = shadow !== undefined ? shadow : variant === "hero";
  
  return (
    <Button
      disabled={disabled || loading}
      className={cn(
        "transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        variant === "hero" ? heroSize : sizeStyles[size],
        variantStyles[variant],
        getShadowStyles(variant, hasShadow, disabled || loading),
        className
      )}
      {...props}
    >
      {loading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <span className="flex items-center gap-2">
          {leading}
          {children}
          {trailing}
        </span>
      )}
    </Button>
  );
}

