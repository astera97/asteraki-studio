// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookiebotScript from "@/components/CookiebotScript"; // ← New Client Component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asteraki | Creative Video Agency",
  description:
    "Professional video production for businesses. We create content that leaves a lasting impression and drives results.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/svg+xml" href="/Asteraki_favicon.svg" />
        {/* Prevent iOS from auto-linking */}
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
        <CookiebotScript /> {/* Loaded only on client */}
      </body>
    </html>
  );
}