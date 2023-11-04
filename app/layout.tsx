import { Metadata } from 'next';

import '@/app/ui/global.css';
// import '@/app/ui/fonts'

import { inter } from '@/app/ui/fonts'

export const metadata: Metadata = {
  title: {
    template: '%s | Hunberto Asca Dashboard Sample',
    default: 'Hunberto Asca Dashboard Sample',
  },
  description: 'Humberto Asca and Next.js 14 Dashboard, built with App Router.',
  metadataBase: new URL('https://nextjs-dashboard-humberto-asca.vercel.app/dashboard'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
