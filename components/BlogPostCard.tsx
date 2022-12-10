import Link from 'next/link';
import cn from 'classnames';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';

export default function BlogPostCard({ title, slug, gradient, imageSrc }) {
  return (
    <Link
      href={`https://webbrainsmedia.com/blogs/${slug}`}
      target="_blank"
      className={cn(
        'transform hover:scale-[1.01] transition-all',
        'rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1',
        gradient
      )}
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
          <Image
            alt="Sahil Jain"
            height={200}
            width={200}
            src={imageSrc}
            className="rounded-md w-full mb-3"
            priority
          />
          <div className="flex flex-row justify-start">
            <h4 className="text-lg  font-medium  w-full text-gray-900 dark:text-gray-100">
              {title}
            </h4>
          </div>
        </div>
      </Tilt>
    </Link>
  );
}
