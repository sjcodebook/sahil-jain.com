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
                          rel="noreferrer">${d.text}</a>`;
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
