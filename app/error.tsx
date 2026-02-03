"use client";

import { useEffect } from "react";
import { ErrorView } from "@/components/shared/ErrorView";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <ErrorView
            title="Something Went Wrong"
            description="We encountered an unexpected spell glitch. Our wizards are working on it!"
            code={500}
            actionLabel="Try Again"
            onAction={reset}
        />
    );
}
