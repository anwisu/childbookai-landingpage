"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AppButton } from "@/components/shared/AppButton";
import { Sparkle } from "@/components/shared/Sparkle";
import styles from "./Sections.module.css";
import { DecorativeGlyph } from "@/components/typography/DecorativeGlyph";

const slides = [
  {
    id: 1,
    src: "/images/child-studying-2 1.png",
    alt: "Child reading a book",
    title: "Become the hero of your own story",
  },
  {
    id: 2,
    src: "/images/child-reading-2.jpg",
    alt: "Child reading a book",
    title: "Become the hero of your own story",
  },
  {
    id: 3,
    src: "/images/child-studying-2 1.png",
    alt: "Child reading a book",
    title: "Become the hero of your own story",
  },
  {
    id: 4,
    src: "/images/child-reading-2.jpg",
    alt: "Child reading a book",
    title: "Become the hero of your own story",
  },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full">
      <div className={`${styles.maskedCarousel} relative w-full`}>
        {/* Background Image */}
        <Image
          src={slides[active].src}
          alt={slides[active].alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/2 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-[140px] -translate-y-[56%] max-w-[620px] px-4 sm:px-0 w-[calc(100%-2rem)] sm:w-auto py-2 overflow-hidden">
            {/* Semantic headline */}
            <h1 className="sr-only">Become the hero of your own story</h1>

            {/* Visual headline */}
            <h1 aria-hidden="true" className="text-display leading-tight">
              <span className="block text-primary">
                Bec
                <DecorativeGlyph
                  variant="blue1"
                  sizeClassName="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                />
                me the
              </span>

              <span className="block">
                <span className="inline-flex items-baseline text-primary">
                  her
                  <DecorativeGlyph
                    variant="blue2"
                    sizeClassName="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                  />
                </span>
                <span className="text-white ml-4">of your own</span>
              </span>

              <span className="block text-white">story</span>
            </h1>

            {/* CTA */}
            <AppButton
              variant="hero"
              size="lg"
              leading={<Sparkle />}
              trailing={<Sparkle />}
              className="min-h-[44px] w-full sm:w-auto sm:min-w-[295px] my-6 sm:my-8 md:my-10"
            >
              Create a Book
            </AppButton>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute left-4 sm:left-6 md:left-8 lg:left-12 xl:left-[140px] top-1/2 translate-y-[180px] sm:translate-y-[200px] z-10 flex items-center gap-2 sm:gap-3 max-w-full overflow-hidden">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                transition-all duration-300 rounded-full touch-manipulation flex items-center justify-center
                ${
                  index === active
                    ? "w-6 h-3 bg-primary"
                    : "w-3 h-3 bg-primary/50"
                }
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
