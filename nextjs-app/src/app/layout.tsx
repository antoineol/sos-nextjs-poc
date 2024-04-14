import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './_core/Providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Fast tracker',
  description: 'Track your billed time in no time!',
};

export const runtime = 'edge';
export const preferredRegion = 'auto';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable}`}>
        <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
