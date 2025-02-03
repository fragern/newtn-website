import localFont from "next/font/local";

export const generalSansFont = localFont({
  src: [
    {
      path: "../assets/fonts/GeneralSans-Variable.woff2",
      style: "normal",
    },
    {
      path: "../assets/fonts/GeneralSans-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-sans",
});
