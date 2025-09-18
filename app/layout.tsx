// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import CookiebotScript from "@/components/CookiebotScript";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
// ADD THIS IMPORT FOR GEO-TARGETING (CRITICAL)
import { headers } from 'next/headers';

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
  // GET CURRENT PATH FOR HREFLANG (ADDED - PRESERVES ALL EXISTING CODE)
  const headersList = headers();
  const pathname = headersList.get('x-invoke-path') || '/';

  return (
    <html lang="fr">
      <head>
        <CookiebotScript />
        <link rel="icon" type="image/svg+xml" href="/Asteraki_favicon.svg" />
        
        {/* ===== CRITICAL ADDITION: FRANCE GEO-TARGETING (INSERTED HERE) ===== */}
        {/* 1. French country signals (MUST be before tracking scripts) */}
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="France" />
        <meta name="geo.position" content="46.2276;2.2137" />
        <meta name="ICBM" content="46.2276, 2.2137" />
        
        {/* 2. Hreflang for French-France (FIXES .com domain issue) */}
        <link 
          rel="alternate" 
          hrefLang="fr-fr" 
          href={`https://asterakistudio.com${pathname}`} 
        />
        <link 
          rel="alternate" 
          hrefLang="x-default" 
          href={`https://asterakistudio.com${pathname}`} 
        />
        {/* ===== END CRITICAL ADDITION ===== */}
        
        {/* Prevent iOS from auto-linking (UNCHANGED) */}
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />

        {/* Google Ads Global Site Tag (REQUIRED by Google Ads) (UNCHANGED) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17350258945"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17350258945');
            `,
          }}
        />
        {/* End Google Ads Global Site Tag */}
        
        {/* Google Tag Manager (Keep this for other tracking) (UNCHANGED) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P2DHPMWQ');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) (UNCHANGED) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-P2DHPMWQ"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}