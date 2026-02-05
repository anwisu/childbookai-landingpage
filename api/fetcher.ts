import { toast } from "sonner";

type FetcherOptions = RequestInit;

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

async function fetcher<T>(endpoint: string, options: FetcherOptions = {}): Promise<T> {
    const url = `${BASE_URL}${endpoint}`;
    const headers = {
        "Content-Type": "application/json",
        ...options.headers,
    };

    try {
        const response = await fetch(url, {
            ...options,
            headers,
        });

        if (!response.ok) {
            // Handle non-2xx responses
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `API Error: ${response.statusText}`);
        }

        // Handle 204 No Content
        if (response.status === 204) {
            return null as T;
        }

        return await response.json();
    } catch (error) {
        // Log error or show toast
        console.error("Fetch error:", error);
        if (typeof window !== "undefined") {
            toast.error(error instanceof Error ? error.message : "An error occurred");
        }
        throw error;
    }
}

export const api = {
    get: <T>(endpoint: string, options?: FetcherOptions) => fetcher<T>(endpoint, { ...options, method: "GET" }),
    post: <T>(endpoint: string, body: unknown, options?: FetcherOptions) => fetcher<T>(endpoint, { ...options, method: "POST", body: JSON.stringify(body) }),
    put: <T>(endpoint: string, body: unknown, options?: FetcherOptions) => fetcher<T>(endpoint, { ...options, method: "PUT", body: JSON.stringify(body) }),
    delete: <T>(endpoint: string, options?: FetcherOptions) => fetcher<T>(endpoint, { ...options, method: "DELETE" }),
    patch: <T>(endpoint: string, body: unknown, options?: FetcherOptions) => fetcher<T>(endpoint, { ...options, method: "PATCH", body: JSON.stringify(body) }),
};
