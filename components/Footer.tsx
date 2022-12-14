import Link from 'next/link';

import NowPlaying from 'components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-3xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <NowPlaying />
      <div className="w-full max-w-4xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/sjcodebook">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/sjcodebook/">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://www.facebook.com/webbrainsmedia">
            Facebook Page
          </ExternalLink>
          <ExternalLink href="https://webbrainsmedia.com/">
            WebBrainsMedia
          </ExternalLink>
          <ExternalLink href="resume">Résumé / CV</ExternalLink>
        </div>
      </div>
    </footer>
  );
}
