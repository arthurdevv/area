import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import type { Metadata } from "next";
import { Crimson_Text, DM_Sans } from "next/font/google";

import Navigation from "@/components/Navigation";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html
        lang="en"
        className={`${dmSans.variable} ${crimsonText.variable} h-full antialiased`}
      >
        <body className="tablet:px-10 flex min-h-full flex-col px-4">
          <Navigation />
          {children}
        </body>
      </html>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
