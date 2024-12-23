import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="container mx-auto px-2  py-20">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
