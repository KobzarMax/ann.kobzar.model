import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Providers from './providers';

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
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body className="font-sans">
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
