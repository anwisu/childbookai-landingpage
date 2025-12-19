"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AppButton } from "@/components/shared/AppButton";

const Sparkle = () => (
  <Image src="/illustrations/sparkle.png" alt="" width={24} height={24} aria-hidden />
);

const Blue1 = () => (
  <Image src="/illustrations/blue-1.svg" alt="" width={40} height={40} aria-hidden />
);
const Blue2 = () => (
  <Image src="/illustrations/blue-2.svg" alt="" width={40} height={40} aria-hidden />
);

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
    <div className="relative w-full h-[640px]">
      <div className="masked-carousel relative w-full h-full">
        {/* Background Image */}
        <Image
          src={slides[active].src}
          alt={slides[active].alt}
          fill
          className="object-cover"
          priority
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10">
          <div className=" absolute top-1/2 left-[140px] -translate-y-[56%] max-w-[620px]">
            <h1 className="text-display text-primary mb-10 leading-tight">
              <span className="block">
                <span className="inline-flex items-baseline gap-[2px]">
                  Bec
                  <span className="inline-flex">
                    <Blue1 />
                  </span>
                  me the
                </span>
              </span>
              <span className="block">
                <span className="inline-flex items-baseline gap-2">
                  her
                  <span className="inline-flex">
                    <Blue2 />
                  </span>
                  <span className="text-white">of your own</span>
                </span>
              </span>

              <span className="block text-white">story</span>
            </h1>

            <AppButton
              variant="hero"
              size="lg"
              leading={<Sparkle />}
              trailing={<Sparkle />}
            >
              Create a Book
            </AppButton>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute left-[140px] top-1/2 translate-y-[200px] z-10 flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
        transition-all duration-300 rounded-full
        ${index === active ? "w-6 h-3 bg-primary" : "w-3 h-3 bg-primary/50"}
      `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
