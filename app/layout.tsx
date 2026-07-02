import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nooqs — Find space to do your thing',
  description:
    'A purpose-driven marketplace for booking underused local spaces by the hour, day, or project. Work, create, gather, trade, park, or restore.',
  metadataBase: new URL('https://nooqs.com'),
  openGraph: {
    title: 'Nooqs — Find space to do your thing',
    description:
      'Book underused local spaces by the hour, day, or project.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
