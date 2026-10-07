import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const body = Nunito_Sans({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Gagey's Home Services | Lawn Care, Power Washing & Snow Removal in Kitchener",
  description:
    "Lawn care, grass cutting, power washing, junk removal, deck rebuilds and snow removal in Kitchener, ON. Run by Gage. 5.0 stars from 14 Google reviews. Call (519) 716-2427.",
  openGraph: {
    title: "Gagey's Home Services | Kitchener Lawn Care & Home Services",
    description: "Honest, hard-working lawn and home services in Kitchener. 5.0 stars on Google. Call (519) 716-2427.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={`${body.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
