import { CoverStyle } from "@/types/story";

// Book color options
export const BOOK_COLORS = {
    primary: [
        { name: "White", color: "#FFFFFF" },
        { name: "Yellow", color: "#F8DB5D" },
        { name: "Blue", color: "#5DB5F8" },
        { name: "Green", color: "#5DF8A0" },
        { name: "Red", color: "#F89F5D" },
        { name: "Black", color: "#000000" },
    ],
    extended: [
        { name: "White", color: "#FFFFFF" },
        { name: "Yellow", color: "#F8DB5D" },
        { name: "Blue", color: "#5DB5F8" },
        { name: "Green", color: "#5DF8A0" },
        { name: "Red", color: "#F89F5D" },
        { name: "Black", color: "#000000" },
        { name: "Light Yellow", color: "#FFF8A0" },
        { name: "Light Blue", color: "#A0DBF8" },
        { name: "Light Green", color: "#A0F8C5" },
        { name: "Light Red", color: "#F8C5A0" },
    ],
} as const;

export const COVER_OPTIONS: { id: CoverStyle; label: string; image: string }[] = [
    { id: "old", label: "Old Style", image: "/images/old-style.png" },
    { id: "new", label: "New Style", image: "/images/new-style.png" },
    { id: "premium", label: "Premium", image: "/images/premium.png" },
];
