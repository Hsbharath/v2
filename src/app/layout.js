import { StoreProvider } from '@/store/StoreProvider';

import { Inter, Merriweather } from 'next/font/google';

import './globalicon.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-In' });
const merri = Merriweather({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-Ur',
});

export const metadata = {
  title: 'Bharath Hunkunda Sreenivasa',
  description:
    'Experienced web developer with 7 years of expertise in front-end and back-end development.',
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang='en'>
        <body className={`${inter.variable} ${merri.variable} font-In`}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
