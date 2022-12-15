import 'styles/global.css';

import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
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
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <main className={interVariable.className}>
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
    </SessionProvider>
  );
}
