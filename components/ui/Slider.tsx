import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { LucideArrowRight } from 'lucide-react';
import { Link } from '@nextui-org/link';

import { bebas } from '@/config/fonts';

type Props = {
  image?: string;
  description?: string;
  heading?: string;
  link?: string;
};

const descriptionTemplate = `ASTAR LLC was founded on the belief that Africa's future lies in its ability to collaborate, trade, and invest within the continent, promoting sustainable regional growth. `;

const Slider = ({
  image = 'aaha.jpg',
  description = descriptionTemplate,
  heading = `Unlocking Africa's Potential`,
  link = `/about`,
}: Props) => {
  return (
    <div className='relative flex h-dvh flex-col items-center  justify-center md:h-[80dvh] md:min-h-[350px] '>
      <Image
        src={`/images/${image}`}
        alt='Vision Background'
        fill={true}
         style={{objectFit: "cover"}} 
        className='absolute inset-0 z-10 '
        quality={100}
      />
      <div className='absolute inset-0 z-10 bg-black/45' ></div>
      <div className='z-30 space-y-3 px-2 md:space-y-4'>
        <h1
          className={`${bebas.className} hidden max-w-2xl text-4xl text-lime-500`}>
          {heading}
        </h1>
        <p className='line-clamp-4 max-w-6xl text-2xl font-bold uppercase  text-neutral-100 md:px-2  md:text-4xl'>
          {description}
        </p>
        <Button
          as={Link}
          href={link}
          endContent={<LucideArrowRight className='text-white' />}
          className='rounded-full bg-lime-700 text-white  md:w-2/12 '
          variant='solid'
        >
          Read More
        </Button>
      </div>


    </div>
  );
};

export default Slider;
