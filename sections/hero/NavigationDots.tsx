"use client";

import { CAROUSEL_CONFIG } from "@/constants";

interface NavigationDotsProps {
    count: number;
    active: number;
    onSelect: (index: number) => void;
    // Optional: pass in a mobile flag or className to adapt styles
    className?: string;
    dotSize?: "normal" | "small";
}

export function NavigationDots({ count, active, onSelect, className, dotSize = "normal" }: NavigationDotsProps) {
    return (
        <div
            className={className}
            role="tablist"
            aria-label="Carousel navigation"
        >
            {Array.from({ length: count }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onSelect(index)}
                    aria-label={`Go to slide ${index + 1} of ${count}`}
                    aria-selected={index === active}
                    role="tab"
                    tabIndex={index === active ? 0 : -1}
                    style={{ transitionDuration: `${CAROUSEL_CONFIG.TRANSITION_DURATION}ms` }}
                    className={`
            transition-all rounded-full touch-manipulation flex items-center justify-center
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
            ${index === active
                            ? dotSize === "normal" ? "w-5 h-2 md:w-6 md:h-3 lg:w-6 lg:h-3 bg-primary" : "w-4 h-2 bg-primary"
                            : dotSize === "normal" ? "w-2 h-2 md:w-3 md:h-3 lg:w-3 lg:h-3 bg-primary/50" : "w-2 h-2 bg-primary/50"
                        }
          `}
                />
            ))}
        </div>
    );
}
