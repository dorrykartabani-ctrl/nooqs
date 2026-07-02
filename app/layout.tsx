import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { InstallPrompt } from '@/components/ui/install-prompt';

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
  applicationName: 'Nooqs',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Nooqs',
  },
  formatDetection: {
    telephone: false,
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Nooqs — Find space to do your thing',
    description: 'Book underused local spaces by the hour, day, or project.',
    type: 'website',
    siteName: 'Nooqs',
  },
  icons: {
    icon: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#003d7c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
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
