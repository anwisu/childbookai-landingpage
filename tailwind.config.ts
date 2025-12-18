import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          100: "var(--grey-100)",
          200: "var(--grey-200)",
          hover: "var(--grey-hover)",
          active: "var(--grey-active)",
          disabled: "var(--grey-disabled)",
        },
        blue: {
          100: "var(--blue-100)",
          200: "var(--blue-200)",
          400: "var(--blue-400)",
          600: "var(--blue-600)",
          800: "var(--blue-800)",
          1000: "var(--blue-1000)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
