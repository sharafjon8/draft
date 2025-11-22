import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import Providers from './_providers/query-provider';
import './i18n';

export const metadata: Metadata = {
  title: 'IT Академия в Бохтаре',
  icons: {
    icon: [
      { url: "/images/logo-black.png?v=1", type: "image/png", sizes: "512x512" },
    ],
    apple: "/images/logo-black.png?v=1",
    shortcut: "/images/whitelogo.png?v=1",
  },
  description: 'Современные IT курсы в Бохтаре от JNR Tech: программирование, дизайн, маркетинг. Онлайн и оффлайн обучение с сертификацией.',
  openGraph: {
    title: 'IT Академия в Бохтаре',
    description: 'Современные IT курсы в Бохтаре от JNR Tech: программирование, дизайн, маркетинг. Онлайн и оффлайн обучение с сертификацией.',
    url: 'https://jnrftech.com/',
    siteName: 'JNR Tech',
    type: 'website',
    images: [
      {
        url: "https://jnrftech.com/images/logo-black.png",
        width: 1200,
        height: 630,
        alt: "IT Академия в Бохтаре | JNR Tech",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Академия в Бохтаре',
    description: 'Современные IT курсы в Бохтаре от JNR Tech: программирование, дизайн, маркетинг. Онлайн и оффлайн обучение с сертификацией.',
    images: ['https://jnrftech.com/images/logo-black.png'],
  },
  alternates: {
    canonical: 'https://jnrftech.com/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="dark">
      <body className="bg-white dark:bg-black">
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
