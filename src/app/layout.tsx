import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/global.css";

import Footer from "./_components/Footer";
import Header from "./_components/Header";

export const metadata: Metadata = {
  title: "Newtn",
  description: "Turning ideas into reality.",
};

const generalSansFont = localFont({
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <body className={`${generalSansFont.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
