import type { Metadata } from 'next';
import Header from '@/components/Header';
import './globals.css';

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    'https://ann-kobzar-model-svelte.vercel.app'
);
const description =
  'Welcome to the official website of Anna Kobzar, a professional photo and fashion model. Explore her portfolio, latest projects, and get in touch for collaborations.';
const socialDescription =
  'Welcome to the official website of Anna Kobzar, a professional photo and fashion model.';
const socialImage =
  'https://ann-kobzar-model-svelte.vercel.app/anna-kobzar-social-preview-20260726.jpg';

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: 'Anna Kobzar Model',
  description,
  keywords: [
    'Anna Kobzar',
    'fashion model',
    'photo model',
    'modeling portfolio',
    'fashion photography',
    'model projects',
    'collaborations'
  ],
  alternates: {
    canonical: '/'
  },
  manifest: '/site.webmanifest',
  icons: {
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    icon: [
      {
        url: '/favicon-32x32.png',
        type: 'image/png',
        sizes: '32x32'
      },
      {
        url: '/favicon-16x16.png',
        type: 'image/png',
        sizes: '16x16'
      }
    ]
  },
  verification: {
    google: 'PW43WjXI65rpxjTYnNJSxfhGIsCNoNn_5CTrw0H3LNs'
  },
  openGraph: {
    title: 'Anna Kobzar Model',
    description: socialDescription,
    type: 'website',
    url: '/',
    images: [
      {
        url: socialImage,
        secureUrl: socialImage,
        type: 'image/jpeg',
        width: 1600,
        height: 1067,
        alt: 'Anna Kobzar fashion model portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anna Kobzar Model',
    description: socialDescription,
    images: [
      {
        url: socialImage,
        alt: 'Anna Kobzar fashion model portfolio'
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/88f10bf18a36407ef36bf30bc25a3618.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/d1a580023d40c546276decde1c711e60.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/georgiab.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
