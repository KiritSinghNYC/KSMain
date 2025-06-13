import React, { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Kirit Singh | Senior Producer',
  description: 'Portfolio of Kirit Singh, Senior Producer and Line Producer based in NYC.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
} 