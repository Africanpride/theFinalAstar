import Image from 'next/image';
import Link from 'next/link';

import { bebas } from '@/config/fonts';

interface BlogCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  avatarSrc?: string;
  author?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, imageAlt, title, description, avatarSrc = '/images/logo.png', author = 'By Astar Team' }) => {
  return (
    <Link
      className=' group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-3 transition duration-300 hover:border-transparent hover:shadow-lg focus:border-transparent focus:shadow-lg focus:outline-none dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40'
      href='#'>
      <div className='aspect-w-16 aspect-h-11'>
        <Image
          className='w-full rounded-xl object-cover'
          src={imageSrc}
          alt={imageAlt}
          width={560}
          height={320}
          priority
        />
      </div>
      <div className='my-6'>
        <h3 className={`${bebas.className} text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white`}>
          {title}
        </h3>
        <p className='mt-5 text-gray-600 dark:text-neutral-400'>
          {description}
        </p>
      </div>
      <div className='mt-auto flex items-center gap-x-3'>
        <Image
          className='size-8 rounded-full'
          src={avatarSrc}
          alt='Avatar'
          width={320}
          height={320}
        />
        <div>
          <h5 className='text-sm text-gray-800 dark:text-neutral-200'>
            {author}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;