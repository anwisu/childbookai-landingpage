"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface LoadingContextType {
    heroLoaded: boolean;
    setHeroLoaded: (loaded: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
    const [heroLoaded, setHeroLoaded] = useState(false);

    return (
        <LoadingContext.Provider value={{ heroLoaded, setHeroLoaded }}>
            {children}
        </LoadingContext.Provider>
    );
}

export function useLoading() {
    const context = useContext(LoadingContext);
    if (context === undefined) {
        throw new Error("useLoading must be used within a LoadingProvider");
    }
    return context;
}
