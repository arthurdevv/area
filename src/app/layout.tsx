import { SpeedInsights } from "@vercel/speed-insights/next";

import type { Metadata } from "next";
import {
  Crimson_Text,
  DM_Sans,
  Reddit_Mono,
  Rethink_Sans,
  Roboto_Mono,
} from "next/font/google";

import Navigation from "@/components/Navigation";

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

const redditMono = Reddit_Mono({
  subsets: ["latin"],
  variable: "--font-reddit-mono",
});

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${crimsonText.variable} ${robotoMono.variable} ${redditMono.variable} ${rethinkSans.variable} h-full antialiased`}
    >
      <body>
        <div className="relative flex min-h-full max-w-7xl flex-col items-center pb-5">
          <Navigation />
          {children}
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
