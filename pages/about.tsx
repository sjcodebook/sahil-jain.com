import Image from 'next/image';

import Container from 'components/Container';

export default function About() {
  return (
    <Container title="About – Sahil Jain">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Website:{' '}
              <a target="_blank" rel="noreferrer" href="https://sahiljain.io">
                https://sahiljain.io
              </a>
            </li>
            <li>
              Blogging Website:{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://webbrainsmedia.com/"
              >
                https://webbrainsmedia.com/
              </a>
            </li>
            <li>
              GitHub:{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sjcodebook"
              >
                @sjcodebook
              </a>
            </li>
            <li>
              LinkedIn:{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sjcodebook/"
              >
                @sjcodebook
              </a>
            </li>
            <li>
              FB Page:{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/webbrainsmedia"
              >
                @webbrainsmedia
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <p>
            Hey, I'm Sahil. I'm a full stack web3 developer, Passionate about
            decentralised tech. Why? Because i believe that technology is always
            going to move forward and eventually we are going to be shifted
            towards new and better tech and i want to play my part in making
            this transition for humanity.
          </p>
          <h2>Some Random Pics</h2>
          <div className="flex space-x-4">
            <a href="/static/images/sahil-jain-334.jpg">
              <Image
                alt="Sahil Jain Pics"
                width={400}
                height={400}
                quality={100}
                src="/static/images/sahil-jain-334.jpg"
                className="rounded-md"
              />
            </a>
            <a href="/static/images/sahil-jain-3232.jpg">
              <Image
                alt="Sahil Jain Pics"
                width={400}
                height={400}
                quality={100}
                src="/static/images/sahil-jain-3232.jpg"
                className="rounded-md"
              />
            </a>
            <a href="/static/images/sahil-jain-4334.jpg">
              <Image
                alt="Sahil Jain Pics"
                width={400}
                height={400}
                quality={100}
                src="/static/images/sahil-jain-4334.jpg"
                className="rounded-md"
              />
            </a>
          </div>
          <div className="flex space-x-4 mt-3">
            <a href="/static/images/sahil-jain-223.jpg">
              <Image
                alt="Sahil Jain Pics"
                width={400}
                height={400}
                quality={100}
                src="/static/images/sahil-jain-223.jpg"
                className="rounded-md"
              />
            </a>
            <a href="/static/images/sahil-jain-333.jpg">
              <Image
                alt="Sahil Jain Pics"
                width={400}
                height={400}
                quality={100}
                src="/static/images/sahil-jain-333.jpg"
                className="rounded-md"
              />
            </a>
            <a href="/static/images/sahil-jain-1212.jpg">
              <Image
                alt="Sahil Jain Pics"
                width={400}
                height={400}
                quality={100}
                src="/static/images/sahil-jain-1212.jpg"
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
