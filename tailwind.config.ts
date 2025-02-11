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
        primary: {
          DEFAULT: "var(--primary)",
          60: "rgb(47, 65, 87, 0.6)",
        },
        secondary: "var(--secondary)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        portfolio: "0px 3.066px 15.332px 0px rgba(47, 65, 87, 0.3)",
      },
    },
  },
  plugins: [],
} satisfies Config;
