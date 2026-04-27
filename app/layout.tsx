import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Minailstore | Soft Luxury Nails',
  description: 'Pink and blue luxury nail studio website with booking and services.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
