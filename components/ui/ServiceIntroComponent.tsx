import React from 'react';
import Link from 'next/link';
import { LucideArrowUpRight } from 'lucide-react';

type ServiceIntroComponentProps = {
  title: string;
  description: string;
  url?: string;
};

const ServiceIntroComponent: React.FC<ServiceIntroComponentProps> = ({
  title,
  description,
  url = '/services',
}) => {
  return (
    <div
      className='rounded-3xl bg-neutral-100 hover:bg-lime-300/30 p-4 md:p-8 aspect-square md:aspect-video flex flex-col justify-center items-start border border-neutral-300 space-y-2 relative'
      data-scroll
      data-scroll-speed={0.1}>
      <div className='w-full text-lg flex justify-between items-center'>
        <div className='text-3xl'>{title}</div>
        <div className='bg-lime-600 rounded-full w-8 aspect-square flex justify-center items-center absolute top-2 right-2'>
          <Link href={url}>
            <LucideArrowUpRight className='text-white' />
          </Link>
        </div>
      </div>
      <div className={`text-[1.1rem] leading-[1rem] font-light uppercase`}>
        {description}
      </div>
      <div>
        <Link href={url} className='hover:text-lime-600'>
          {' '}
          Read More ...
        </Link>
      </div>
    </div>
  );
};

export default ServiceIntroComponent;
