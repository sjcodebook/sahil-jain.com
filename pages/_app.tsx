import 'styles/global.css';

import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import ScrollToTop from 'react-scroll-to-top';

const interVariable = Inter();

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <ThemeProvider attribute="class">
      <main className={interVariable.className}>
        <Script
          id="google-analytics"
          src="https://www.googletagmanager.com/gtag/js?id=G-SWXEJFP6GG"
          strategy="lazyOnload"
        />
        <Script id="google-analytics-code" strategy="lazyOnload">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-SWXEJFP6GG');
        `}
        </Script>

        <Component {...pageProps} />
        <ScrollToTop
          smooth
          component={
            <Image
              width={35}
              height={35}
              src="/static/images/arrow-up.png"
              alt="Up Arrow"
            />
          }
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        />
        <Analytics />
      </main>
    </ThemeProvider>
  );
}
