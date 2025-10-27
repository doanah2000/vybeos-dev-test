import React from 'react';
import localFont from 'next/font/local';
import './globals.css';

// Load PP Neue Machina font with multiple weights
export const machina = localFont({
  src: [
    {
      path: '../../public/fonts/NeueMachina-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueMachina-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-machina',
});

// Load PP Neue Montreal font with multiple weights
export const montreal = localFont({
  src: [
    {
      path: '../../public/fonts/NeueMontreal-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueMontreal-Medium.woff2',
      weight: '500',
      style: 'regular',
    },
  ],
  display: 'swap',
  variable: '--font-montreal',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${machina.variable} ${montreal.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
