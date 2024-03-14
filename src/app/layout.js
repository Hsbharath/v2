import { StoreProvider } from '@/store/StoreProvider';

import React from 'react';

import { Inter, Merriweather } from 'next/font/google';
import Script from 'next/script';

import './globalicon.css';
import './globals.css';
import { Providers } from './providers';

// Define font variables
const inter = Inter({ subsets: ['latin'], variable: '--font-In' });
const merri = Merriweather({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-Ur',
});

// Metadata
export const metadata = {
  title: 'Bharath Hunkunda Sreenivasa',
  description:
    'Experienced web developer with 7 years of expertise in front-end and back-end development.',
};

// Layout component
export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang='en' suppressHydrationWarning>
        <head>
          <Script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-23J51D86PP'
          ></Script>
          <Script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', ${'${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}'});
            `}
          </Script>
        </head>
        <body className={`${inter.variable} ${merri.variable} font-In`}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </StoreProvider>
  );
}
