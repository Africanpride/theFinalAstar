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
    <div className='bg-neutral-200 mb-8  ' data-scroll data-scroll-speed={-0.1}>
      <div className='max-w-7xl px-4 lg:px-8 py-12 lg:py-24 mx-auto '>
        <blockquote className='max-w-5xl mx-auto min-h-dvh h-auto flex flex-col justify-center items-start'>
          <p className='mb-6 md:text-lg'>
            <span className='font-semibold text-lime-600'>{name},</span>{' '}
            <span className='text-neutral-500'>{title}</span>
          </p>

          <p>
            {/* {text} */}
            <TextGenerateEffect words={text} />
          </p>

          <footer className='mt-6 md:mt-10 '>
            <div className='border-neutral-700'>
              {/* <button
                type='button'
                className='group inline-flex items-center gap-x-3 text-neutral-400 text-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none'>
                <span className='size-8 md:size-10 flex flex-col justify-center items-center bg-blue-400 text-black rounded-full group-hover:bg-lime-400 group-focus:bg-lime-400'>
                  <svg
                    className='flex-shrink-0 size-5'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    viewBox='0 0 16 16'>
                    <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393' />
                  </svg>
                </span>
                Watch the Video
              </button> */}
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default Quote;
