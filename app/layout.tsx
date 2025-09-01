// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

        {/* === 🔥 Cookiebot - Load Early in Head === */}
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="c05fc2f7-db53-4cc3-852b-8b8e77a03151"
          data-blockingmode="auto"
          type="text/javascript"
          async
        />
        {/* ========================================= */}

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

        {/* Google Tag Manager (GTM) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TB9X7VPG');`,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TB9X7VPG"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
        {/* ❌ Do NOT include <CookiebotScript /> here */}
      </body>
    </html>
  );
}