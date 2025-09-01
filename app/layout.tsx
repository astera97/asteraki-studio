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
  title: "Asteraki | Agence de production vidéo pour entreprises",
  description:
    "Création de contenus percutants pour marques inspirantes. Expertise, créativité et qualité au service de votre image.",
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

        {/* Google Ads Conversion Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17523897704"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17523897704');
            `,
          }}
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