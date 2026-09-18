import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ceylon Trails | Authentic Sri Lankan Tour Guide',
  description:
    'Discover the beauty of Sri Lanka with a trusted local guide. From ancient ruins to pristine beaches, explore cultural heritage, wildlife safaris, and adventure tours.',
  keywords: ['Sri Lanka tours', 'Sri Lanka guide', 'Ceylon travel', 'Sri Lanka safari', 'cultural tours Sri Lanka'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
