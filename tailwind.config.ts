import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2F4157",
        secondary: "#C7D9E5"
      },
      fontFamily: {
        generalsans: ["GeneralSans", "sans-serif"], 
      },
    },
  },
  plugins: [],
} satisfies Config;
