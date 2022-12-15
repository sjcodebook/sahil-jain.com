import Image from 'next/image';

import { getRandomGradientColor } from '../utils/common';

import siteData from '../data.json';

export default function WorkExperienceCard() {
  return (
    <>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {siteData.work_experience.map((work) => (
          <li className="mb-10 ml-6" key={work.company}>
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <Image
                alt={work.company}
                height={18}
                width={18}
                src={work.company_logo_src}
                priority
                className="rounded-full shadow-lg"
              />
            </span>
            <div
              className="transform hover:scale-[1.01] transition-all
            rounded-xl p-1"
              style={{
                backgroundImage: getRandomGradientColor()
              }}
            >
              <div
                className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600 backdrop-blur-lg
               [ bg-gradient-to-b from-white/5 to-white/10 ]
               [ shadow-black/20 shadow-2xl ]"
              >
                <div className="justify-between items-center mb-3 sm:flex">
                  <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                    {work.date}
                  </time>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
                    <div className="font-bold text-gray-900 dark:text-white">
                      {work.position}
                    </div>
                    <a
                      href={work.company_website}
                      className="underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {work.company}
                    </a>
                    <svg
                      fill="#2a2a2a"
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
                  </div>
                </div>
                <div className="p-3 text-xs italic font-normal text-gray-500 bg-gray-200 rounded-lg border border-gray-200 dark:bg-gray-900 dark:border-gray-500 dark:text-gray-300">
                  <ul className="space-y-1 list-disc list-inside text-gray-500 dark:text-gray-200">
                    {work.description.map((desc) => {
                      let result = '';
                      desc.forEach((d) => {
                        if (d.type === 'text') {
                          result += ' ' + d.text;
                        }
                        if (d.type === 'link') {
                          result += ` <a href="${d.href}" class="underline" target="_blank"
                          rel="noreferrer">${d.text}</a> <svg 
                          fill="#000000"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 128 128"
                          class="h-4 w-4 inline"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z"
                          />
                        </svg>`;
                        }
                      });
                      return (
                        <li
                          key={JSON.stringify(desc)}
                          dangerouslySetInnerHTML={{ __html: result }}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <Image
        alt="Starting Point"
        height={40}
        width={40}
        src="/static/images/rocket.svg"
        className="-ml-5"
      />
    </>
  );
}
