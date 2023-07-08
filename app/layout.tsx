import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';

import { ToasterProvider } from '@/providers/toast-provider';
import { ModalProvider } from '@/providers/modal-provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ecommerce Dashboard',
  description: 'Ecommerce admin dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
