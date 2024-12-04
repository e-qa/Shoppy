import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ weight: '500', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shoppy',
  description: 'Shoppy E-commerce App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="container mx-auto px-4  py-20">{children}</div>
      </body>
    </html>
  );
}
