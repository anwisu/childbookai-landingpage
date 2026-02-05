"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AppButton } from "@/ui/app-button";
import { HeadingText } from "@/components/typography";
import { heroText, staggerContainer, fadeInUp } from "@/utils/animations";

interface HeroSlideContentProps {
    title: string;
    active: number;
}

export function HeroSlideContent({ title }: Omit<HeroSlideContentProps, 'active'>) {
    return (
        <motion.div
            className="w-full max-w-[620px] p-4 md:p-6 lg:p-6 ml-8 md:ml-10 lg:ml-16 xl:ml-[100px] overflow-visible"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={staggerContainer}
        >
            <motion.div variants={heroText}>
                <HeadingText
                    title={title}
                    variant="display"
                    className="font-bold text-3xl xs:text-4xl sm:text-5xl lg:text-6xl leading-tight"
                    glyphs={[
                        {
                            word: "Become",
                            position: 3,
                        },
                        {
                            word: "hero",
                            position: 3,
                            variant: "blue2",
                        },
                    ]}
                    coloredPhrases={[
                        {
                            text: "Become the hero",
                            color: "text-primary",
                        },
                    ]}
                    defaultTextColor="text-white"
                    defaultGlyphVariant="blue1"
                    glyphSizeClassName="w-[0.5em] h-[0.5em] sm:w-[0.5em] sm:h-[0.5em] md:w-[0.6em] md:h-[0.6em]"
                    endl={["hero of your own", "story"]}
                />
            </motion.div>
            <motion.div className="overflow-visible pt-3 pb-3" variants={fadeInUp}>
                <Link href="/createbook">
                    <AppButton
                        variant="primary"
                        size="hero"
                        shadow
                        withSparkles
                        className="mt-4 transition-all duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Create a Book
                    </AppButton>
                </Link>
            </motion.div>
        </motion.div>
    );
}

interface HeroSlideContentMobileProps {
    title: string;
    active: number;
    onSelect: (index: number) => void;
    slidesCount: number;
    NavigationDots: React.ComponentType<{ count: number; active: number; onSelect: (index: number) => void; className?: string; dotSize?: "normal" | "small" }>;
}

export function HeroSlideContentMobile({ title, active, onSelect, slidesCount, NavigationDots }: HeroSlideContentMobileProps) {
    return (
        <motion.div
            className="w-full max-w-[620px] px-4 ml-4 overflow-visible"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={staggerContainer}
        >
            <motion.div variants={heroText}>
                <HeadingText
                    title={title}
                    variant="display"
                    className="font-bold text-3xl xs:text-4xl leading-tight"
                    glyphs={[
                        {
                            word: "Become",
                            position: 3,
                        },
                        {
                            word: "hero",
                            position: 3,
                            variant: "blue2",
                        },
                    ]}
                    coloredPhrases={[
                        {
                            text: "Become the hero",
                            color: "text-primary",
                        },
                    ]}
                    defaultTextColor="text-white"
                    defaultGlyphVariant="blue1"
                    glyphSizeClassName="w-[0.5em] h-[0.5em]"
                    endl={["hero of your own", "story"]}
                />
            </motion.div>
            <motion.div className="overflow-visible pt-3 pb-3" variants={fadeInUp}>
                <Link href="/createbook">
                    <AppButton
                        variant="primary"
                        size="hero"
                        shadow
                        withSparkles
                        className="mt-3 transition-all duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Create a Book
                    </AppButton>
                </Link>
            </motion.div>

            <NavigationDots
                count={slidesCount}
                active={active}
                onSelect={onSelect}
                className="mt-4 flex items-center gap-2 justify-start"
                dotSize="small"
            />
        </motion.div>
    );
}

