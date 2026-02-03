import { ErrorView } from "@/components/shared/ErrorView";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page Not Found | Childbook.ai",
    description: "The page you are looking for does not exist.",
};

export default function NotFound() {
    return (
        <ErrorView
            title="Page Not Found"
            description="Oops! The page you are looking for seems to have wandered off into a fairyland."
            code={404}
            actionLabel="Go Back"
        />
    );
}
