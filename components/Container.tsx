import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import cn from 'classnames';

import MobileMenu from 'components/MobileMenu';
import LazyLoad from 'components/common/LazyLoad';

function NavItem({
  href,
  text,
  gradientBtn = false,
  outbound = false,
  noIcon = false
}) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink
      href={href}
      target={outbound ? '_blank' : ''}
      className={cn(
        isActive
          ? 'font-semibold text-gray-800 dark:text-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400',
        cn(
          gradientBtn
            ? 'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg transition-all'
            : 'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
        )
      )}
    >
      <div className="flex flex-row justify-start">
        {gradientBtn ? (
          <span className="group relative inline-block focus:outline-none focus:ring dark:bg-gray-600">
            <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative inline-block border-2 border-current px-3 py-2 text-sm font-semibold  uppercase tracking-widest  group-active:text-opacity-75 ">
              <span className="dark:text-white">{text}</span>
            </span>
          </span>
        ) : (
          <span className="capsize">{text}</span>
        )}
        {outbound && !noIcon && (
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            className="h-4 w-4 ml-1 inline"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z"
            />
          </svg>
        )}
      </div>
    </NextLink>
  );
}

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const Footer = dynamic(() => import('components/Footer'));

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Sahil Jain – Full Stack Engineer',
    description: `Full Stack Engineer, Web3 enthusiast, and Content Creator.`,
    image: 'https://sahiljain.io/avatar.jpg',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://sahiljain.io${router.asPath}`}
        />
        <link rel="canonical" href={`https://sahiljain.io${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Sahil Jain" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sahiljaindotio" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      {/* <div className=" px-4 py-1 text-white bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400">
        <p className="text-center text-sm font-medium text-gray-800 dark:text-white animate-[pulse_3s_ease-in-out_infinite]">
          I am actively looking for a new role.
        </p>
      </div> */}
      <div className="flex flex-col justify-center px-6">
        <nav className="flex items-center justify-between w-full relative max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
          <div className="ml-[-0.60rem]">
            <MobileMenu />
            <NavItem href="/" text="Home" />
            <NavItem href="/about" text="About" />
            <NavItem href="/contact" text="Contact" />
            <NavItem
              href="https://github.com/sjcodebook"
              text="Github"
              outbound
            />
            <NavItem
              href="https://www.linkedin.com/in/sjcodebook/"
              text="LinkedIn"
              outbound
            />
            <NavItem
              href="/static/docs/Sahil_Jain_Resume.pdf"
              text="Résumé / CV"
              noIcon
              outbound
              gradientBtn
            />
          </div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-gray-800 dark:text-gray-200"
              >
                {resolvedTheme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </nav>
      </div>
      <main
        id="skip"
        className="flex flex-col justify-center px-6 bg-gray-50 dark:bg-gray-900"
      >
        {children}
        <LazyLoad component={<Footer />} />
      </main>
    </div>
  );
}
