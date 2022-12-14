import Link from 'next/link';
import cn from 'classnames';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';

export default function BlogPostCard({
  title,
  slug,
  gradient,
  imageSrc,
  style = {}
}) {
  return (
    <Link
      href={`https://webbrainsmedia.com/blogs/${slug}`}
      target="_blank"
      className={cn(
        'transform hover:scale-[1.01] transition-all',
        'rounded-xl w-full md:w-[32%] p-1'
      )}
      style={{
        ...style,
        backgroundImage: gradient
      }}
    >
      <Tilt
        className="h-full w-full"
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
      >
        <div
          className="flex flex-col justify-start h-full bg-white dark:bg-gray-900 rounded-lg p-2 backdrop-blur-lg
               [ bg-gradient-to-b from-white/5 to-white/10 ]
               [ shadow-black/20 shadow-2xl ]"
        >
          <div className="h-44 md:h-32">
            <Image
              alt={title}
              height={200}
              width={200}
              src={imageSrc}
              className="rounded-md w-full h-full"
              priority
            />
          </div>
          <div className="flex flex-row justify-start mt-3">
            <h4 className="text-lg  font-medium  w-full text-gray-900 dark:text-gray-100">
              {title}{' '}
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
            </h4>
          </div>
        </div>
      </Tilt>
    </Link>
  );
}
