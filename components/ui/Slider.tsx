import React from 'react';
import Image from 'next/image';
import { bebas } from '@/config/fonts';
import { Button } from '@nextui-org/button';
import { LucideArrowRight } from 'lucide-react';
import { Link } from '@nextui-org/link';

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
    <div className='relative flex flex-col justify-center items-center  md:min-h-[350px] md:h-[80dvh] h-dvh '>
      <Image
        src={`/images/${image}`}
        alt='Vision Background'
        layout='fill'
        objectFit='cover'
        className='absolute inset-0 z-10 '
        quality={100}
      />
      <div className='absolute inset-0 z-10 bg-black/35' ></div>
      <div className='space-y-3 md:space-y-4 px-2 z-30'>
        <h1
          className={`${bebas.className} text-lime-500 text-4xl max-w-2xl hidden`}>
          {heading}
        </h1>
        <p className='max-w-6xl text-2xl md:text-4xl text-neutral-100 uppercase  font-bold md:px-2  line-clamp-4'>
          {description}
        </p>
        <Button
          as={Link}
          href={link}
          endContent={<LucideArrowRight className='text-white' />}
          className='rounded-full md:w-2/12 bg-lime-700  text-white '
          variant='solid'
        >
          Read More
        </Button>
      </div>


    </div>
  );
};

export default Slider;
