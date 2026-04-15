import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Anna Kobzar Model',
  description:
    'Welcome to the official website of Anna Kobzar, a professional photo and fashion model. Explore her portfolio, latest projects, and get in touch for collaborations.',
  keywords: [
    'Anna Kobzar',
    'fashion model',
    'photo model',
    'modeling portfolio',
    'fashion photography',
    'model projects',
    'collaborations'
  ],
  openGraph: {
    title: 'Anna Kobzar Model',
    description: 'Welcome to the official website of Anna Kobzar, a professional photo and fashion model.',
    type: 'website',
    images: [
      {
        url: '/1.PNG',
        alt: 'Anna Kobzar Model - Portfolio Image 1',
      },
      {
        url: '/2.PNG',
        alt: 'Anna Kobzar Model - Portfolio Image 2',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anna Kobzar Model',
    description: 'Welcome to the official website of Anna Kobzar, a professional photo and fashion model.',
    images: ['/1.PNG', '/2.PNG'],
  },
  verification: {
    google: 'PW43WjXI65rpxjTYnNJSxfhGIsCNoNn_5CTrw0H3LNs'
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
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
