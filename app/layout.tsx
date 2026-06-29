import type {Metadata} from 'next';
import {Inter, JetBrains_Mono} from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cat Medication Dosage by Weight | Gabapentin, Clavamox, Cerenia & More',
  description: 'Calculate common cat medication dosages by weight with easy, fast, and clear calculators. Includes Feline Gabapentin, Clavamox, Cerenia, Prednisolone, and more.',
  metadataBase: new URL('https://gesime-admin.github.io/cat-dosage-calculator'),
  alternates: { canonical: 'https://gesime-admin.github.io/cat-dosage-calculator/' },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

