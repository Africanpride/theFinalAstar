import React from 'react';
import { TextGenerateEffect } from './TextGenerateEffect';

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
    <div className='bg-neutral-200 mb-8  ' data-scroll data-scroll-speed={0.1}>
      <div className='max-w-7xl px-4 lg:px-8 py-12 lg:py-24 mx-auto '>
        <blockquote className='max-w-5xl mx-auto min-h-dvh h-auto flex flex-col justify-center items-start'>
          <p className='mb-6 md:text-lg'>
            <span className='font-semibold text-lime-600'>{name},</span>{' '}
            <span className='text-neutral-500'>{title}</span>
          </p>

          <div>
            {/* {text} */}
            <TextGenerateEffect words={text} />
          </div>
        </blockquote>
      </div>
    </div>
  );
};

export default Quote;
