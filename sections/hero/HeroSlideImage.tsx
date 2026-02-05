"use client";

import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { carouselFade } from "@/utils/animations";

interface HeroSlideImageProps {
    active: number;
    slides: ReadonlyArray<{ id: number; src: StaticImageData; alt: string }>;
    isImageLoaded: boolean;
    onImageLoad: () => void;
    onAnimationComplete: () => void;
    clipPathUrl: string;
}

export function HeroSlideImage({
    active,
    slides,
    isImageLoaded,
    onImageLoad,
    onAnimationComplete,
    clipPathUrl
}: HeroSlideImageProps) {
    return (
        <AnimatePresence mode="sync" initial={false}>
            {slides[active] && (
                <motion.div
                    key={active}
                    className="absolute inset-0"
                    style={{ clipPath: `url(${clipPathUrl})` }}
                    variants={carouselFade}
                    initial="enter"
                    animate={active === 0 ? (isImageLoaded ? "center" : "enter") : "center"}
                    exit="exit"
                    onAnimationComplete={() => {
                        if (active === 0 && isImageLoaded) onAnimationComplete();
                    }}
                >
                    <Image
                        src={slides[active].src}
                        alt={`${slides[active].alt} - Slide ${active + 1} of ${slides.length}`}
                        fill
                        priority={active === 0}
                        className="object-cover"
                        sizes="100vw"
                        quality={85}
                        fetchPriority={active === 0 ? "high" : "auto"}
                        onLoad={() => {
                            if (active === 0) onImageLoad();
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
