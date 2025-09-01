// app/components/CookiebotScript.tsx
'use client';

import { useEffect } from 'react';

export default function CookiebotScript() {
  useEffect(() => {
    // Prevent double-loading
    if (document.getElementById('Cookiebot')) return;

    const script = document.createElement('script');
    script.id = 'Cookiebot';
    script.src = 'https://consent.cookiebot.com/uc.js';
    script.setAttribute('data-cbid', 'c05fc2f7-db53-4cc3-852b-8b8e77a03151');
    script.setAttribute('data-blockingmode', 'auto');
    script.type = 'text/javascript';
    script.async = true;

    document.head.appendChild(script);

    // Optional: cleanup on unmount
    return () => {
      const el = document.getElementById('Cookiebot');
      if (el) el.remove();
    };
  }, []);

  return null;
}
