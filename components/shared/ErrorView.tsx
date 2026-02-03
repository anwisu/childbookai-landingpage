"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HeadingText, ParagraphText } from "@/components/typography";
import { AppButton } from "@/components/ui/app-button";
import bookFaceImg from "@/public/illustrations/not-found-illustration (3).svg";

type ErrorViewProps = {
    title: string;
    description: string;
    code?: string | number;
    actionLabel?: string;
    onAction?: () => void;
    showHomeButton?: boolean;
    imageSrc?: string | any; // Type 'any' used to support StaticImport from next/image
};

export const ErrorView: React.FC<ErrorViewProps> = ({
    title,
    description,
    code,
    actionLabel = "Go Back",
    onAction,
    showHomeButton = true,
    imageSrc = bookFaceImg,
}) => {
    const router = useRouter();

    const handleAction = () => {
        if (onAction) {
            onAction();
        } else {
            router.back();
        }
    };

    const handleHome = () => {
        router.push("/");
    };

    return (
        <main className="min-h-screen w-full flex flex-col items-center justify-center bg-blue-800 p-4">
            <div className="relative w-full max-w-2xl flex flex-col items-center text-center">

                {/* Illustration */}
                <div className="relative w-48 h-48 sm:w-80 sm:h-80 flex items-center justify-center animate-in fade-in zoom-in duration-500">
                    <Image
                        src={imageSrc}
                        alt="Error Illustration"
                        fill
                        className="object-contain opacity-90"
                        priority
                    />
                </div>

                {/* Text Content */}
                <div className="flex flex-col items-center gap-2 z-10">
                    {code && (
                        <span className="text-6xl sm:text-8xl font-bold text-foreground font-baloo leading-none select-none">
                            {code}
                        </span>
                    )}

                    <HeadingText
                        variant="h1"
                        title={title}
                        className="text-white font-bold"
                    />

                    <ParagraphText
                        className="text-white/80 max-w-md text-lg"
                    >
                        {description}
                    </ParagraphText>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                    <AppButton
                        onClick={handleAction}
                        variant="secondary"
                        size="lg"
                        className="min-w-[160px]"
                        shadow
                    >
                        {actionLabel}
                    </AppButton>

                    {showHomeButton && (
                        <AppButton
                            onClick={handleHome}
                            variant="primary"
                            size="lg"
                            className="min-w-[160px]"
                            shadow
                        >
                            Go Home
                        </AppButton>
                    )}
                </div>
            </div>

            {/* Background Decor */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-1/4 left-10 w-12 h-12 bg-white/10 rounded-full blur-xl" />
                <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl" />
            </div>
        </main>
    );
};
