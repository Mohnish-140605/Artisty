import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { MusicPlayer } from '@/components/music-player';
import { Footer } from '@/components/footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Artistly - Find Talented Artists for Your Events',
  description: 'Discover and book talented artists, performers, and speakers for your next event.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background`}>
        <video autoPlay muted loop playsInline id="background-video">
          <source src="/stars.mp4" type="video/mp4" />
        </video>
        <MusicPlayer />
        <main className="relative z-10">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
