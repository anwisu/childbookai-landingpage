import React from "react";
import { ErrorView } from "@/components/shared/ErrorView";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ code: string }>;
};

const ERROR_MESSAGES: Record<string, { title: string; description: string }> = {
    "401": {
        title: "Unauthorized",
        description: "Hold up! You don't have permission to access these scrolls.",
    },
    "403": {
        title: "Forbidden",
        description: "This area is off-limits! Only authorized wizards allowed.",
    },
    "404": {
        title: "Page Not Found",
        description: "The page you are looking for seems to have wandered off into a fairyland.",
    },
    "500": {
        title: "Internal Server Error",
        description: "An unexpected spell glitch occurred. Our wizards are working on it!",
    },
    "502": {
        title: "Bad Gateway",
        description: "The gateway to the story realm seems to be acting up. Please try again.",
    },
    "503": {
        title: "Service Unavailable",
        description: "The library is currently closed for maintenance. Please come back later!",
    },
    "504": {
        title: "Gateway Timeout",
        description: "The server took too long to respond. It might be taking a nap.",
    },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const code = resolvedParams.code;
    const errorInfo = ERROR_MESSAGES[code] || { title: "Error" };

    return {
        title: `${errorInfo.title} | Childbook.ai`,
        description: `Error ${code}: ${errorInfo.description}`,
    };
}

export default async function DynamicErrorPage({ params }: Props) {
    const resolvedParams = await params;
    const code = resolvedParams.code;
    const errorInfo = ERROR_MESSAGES[code] || {
        title: "Unknown Error",
        description: "Something mysterious happened!",
    };

    return (
        <ErrorView
            title={errorInfo.title}
            description={errorInfo.description}
            code={code}
        />
    );
}

export async function generateStaticParams() {
    return Object.keys(ERROR_MESSAGES).map((code) => ({
        code,
    }));
}
