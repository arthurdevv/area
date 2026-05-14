import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import type { Metadata } from "next";
import { Crimson_Text, DM_Sans, Roboto_Mono } from "next/font/google";

import Navigation from "@/components/Navigation";
import { SmoothScroll } from "@/components/SmoothScroll";

import "./globals.css";
import "lenis/dist/lenis.css";

export const metadata: Metadata = {
  title: "Area",
  description: "Modern Product Launch",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-crimson-text",
  weight: ["400", "600", "700"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html
        lang="en"
        className={`${dmSans.variable} ${crimsonText.variable} ${robotoMono.variable} h-full antialiased`}
      >
        <body>
          <div className="tablet:px-10 mx-auto flex min-h-full max-w-7xl flex-col items-center px-4">
            <Navigation />
            <SmoothScroll>{children}</SmoothScroll>
          </div>
        </body>
      </html>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
