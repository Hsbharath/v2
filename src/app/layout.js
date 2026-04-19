import { StoreProvider } from '@/store/StoreProvider';
import GoogleAnalytics from '@/components/Analytics/page';

import { SpeedInsights } from '@vercel/speed-insights/next';

import React from 'react';

import { Rajdhani } from 'next/font/google';
import Script from 'next/script';

import './globalicon.css';
import './globals.css';
import { Providers } from './providers';

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-Raj',
});

export const metadata = {
  title: 'Bharath Hunkunda Sreenivasa',
  description: 'Robotics & Full Stack Developer — 7+ years experience.',
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang='en' suppressHydrationWarning>
        <head>
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
          <link
            href='https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@400;500;600;700&family=Orbitron:wght@400;700;900&display=swap'
            rel='stylesheet'
          />
        </head>
        <body className={rajdhani.variable}>
          <Providers>
            {children}
            <SpeedInsights />
            <Script
              id='clarity-script'
              strategy='afterInteractive'
              type='text/javascript'
            >
              {`
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.CLARITY}");
              `}
            </Script>
          </Providers>
        </body>
      </html>
    </StoreProvider>
  );
}
