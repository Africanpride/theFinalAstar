import React from 'react';
import Link from 'next/link';
import { LucideArrowUpRight } from 'lucide-react';

import { poppins } from '@/config/fonts';

type ServiceIntroComponentProps = {
  title: string;
  description: React.ReactNode;
  url?: string;
  color?: string;
};

const ServiceIntroComponent: React.FC<ServiceIntroComponentProps> = ({
  title,
  description,
  url = '/services',
  color = 'lime'
}) => {
  return (
    <div
      className={`hover:bg- rounded-3xl bg-white  relative flex h-auto min-h-full  flex-col items-start justify-start space-y-2 border border-neutral-300 p-4 md:aspect-video md:p-8`}
      data-scroll
      data-scroll-speed={0.1}
    >
      <div className="flex w-full items-center justify-between ">
        <h2 className="text-xl">{title}</h2>
        <div className={`bg-${color}-600 absolute right-2 top-2 flex aspect-square items-center justify-center rounded-full`}>
          <Link href={url}>
            <LucideArrowUpRight className="text-white" />
          </Link>
        </div>
      </div>
      <div className={`${poppins.className} text-small  font-light`}>
        {description}
      </div>
      {/* <div>
        <Link href={url} className={`hover:text-${color}-600`}>
          Read More ...
        </Link>
      </div> */}
    </div>
  );
};

export default ServiceIntroComponent;
