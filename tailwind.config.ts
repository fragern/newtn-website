import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "horizontal-left-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "horizontal-right-scroll": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" },
        },
      },
      animation: {
        "horizontal-left-scroll": "horizontal-left-scroll 45s linear infinite",
        "horizontal-right-scroll":
          "horizontal-right-scroll 45s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      fontFamily: {
        sans: ["GeneralSans", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
