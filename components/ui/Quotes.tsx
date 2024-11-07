import React from 'react';
import Image from 'next/image';
import { bebas } from '@/config/fonts';

interface Props {
  text?: string;
  name?: string;
  title?: string;
}

const Quote: React.FC<Props> = ({
  text = `With deep market knowledge, a dependable supply chain, and a vast network, we’re the trusted choice in commodity trading. Our commitment to reliability and expertise makes us a valuable partner, helping you navigate complex markets with ease.`,
  name = ' ASTAR LLC',
  title = 'Market Dynamics',
}) => {
  return (
    <div
      className='bg-neutral-200 mb-8 relative  '
      data-scroll
      data-scroll-speed={0.1}>
      <Image
        src='/images/homepage.png'
        alt='Laboratory professional at work'
        layout='fill'
        className='absolute inset-0 w-full h-full object-cover'
      />
      <div className='max-w-7xl px-4 lg:px-8 py-16 lg:py-32 mx-auto relative '>
        <blockquote className='max-w-5xl mx-auto  h-auto flex flex-col justify-center items-start'>
          <p className='mb-6 md:text-lg  font-bold'>
            <span className=' text-lime-600'>{name},</span>{' '}
            <span className='text-neutral-500'>{title}</span>
          </p>

          <h1 className={`${bebas.className} text-white md:text-4xl `}>
            {text}
            {/* <TextGenerateEffect words={text} /> */}
          </h1>
        </blockquote>
      </div>
    </div>
  );
};

export default Quote;
