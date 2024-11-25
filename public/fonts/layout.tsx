import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const IRANSans = localFont({
  src: [
    {
      path: '../public/fonts/IRANSansWeb_UltraLight.woff2',
      weight: '200',
    },
    {
      path: '../public/fonts/IRANSansWeb_Light.woff2',
      weight: '300',
    },
    {
      path: '../public/fonts/IRANSansWeb.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/IRANSansWeb_Medium.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/IRANSansWeb_Bold.woff2',
      weight: '700',
    },
    {
      path: '../public/fonts/IRANSansWeb_Black.woff2',
      weight: '900',
    },
  ],
  variable: '--font-iran-sans',
});

export const metadata: Metadata = {
  title: 'مربی نظم',
  description: 'خودتو با خود انضباطی ارتقا بده.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa">
      <body className={`${IRANSans.variable} font-iran antialiased`} dir="rtl">
        {children}
      </body>
    </html>
  );
}
