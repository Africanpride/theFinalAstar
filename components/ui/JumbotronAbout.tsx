'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import {
  ArrowUpRight,
  LucideAArrowUp,
  LucideArrowUpRight,
  LucideMove3d,
  LucideMoveDown,
  Minus,
  Plus,
} from 'lucide-react';
import { bebas, playfair_display } from '@/config/fonts';
import { title } from 'process';
import BackgroundImageWrapper from '../BackgroundImageWrapper';
import MainMenu from './Menu';

type Props = {};

const JumbotronAbout = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    function onScroll({ scroll, limit, velocity, direction, progress }: any) {
      //   console.log(scroll, limit, velocity, direction, progress);
    }
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll({
        autoResize: true,
        scrollCallback: onScroll,
        lenisOptions: {
          //   wrapper: document.querySelector('#scroll-wrapper') as HTMLElement,
          //   content: document.querySelector('#scroll-content') as HTMLElement,
          lerp: 0.1,
          duration: 1.2,
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou,
        },
      });

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <section className='min-h-screen h-auto grid   p-5 gap-4'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-5 gap-2 '>
        <div className='col-span-1 md:col-span-3 bg-white p-4 md:p-8 rounded-2xl'>
          <div className='flex items-end justify-between h-full '>
            <div className='capitalize text-5xl text-gray-500 leading-[2.9rem] '>
              A Quest For sustainable <br />
              regional growth
            </div>

            <div className='capitalize  text-gray-500 text-left text-xl leading-[1.2rem]'>
              Our team brings decades of <br />
              experience in commodities trading and <br />
              investment management, with a <br /> special focus on the African
              continent.
            </div>
          </div>
        </div>
        <div
          className='col-span-1   aspect-square relative bg-black rounded-2xl text-xl leading-[1.3rem]
        flex flex-col justify-end text-white p-4'>
          <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
          African trade <br /> expertise
        </div>
        <div
          className='col-span-1   aspect-square relative bg-lime-600 rounded-2xl text-xl leading-[1.3rem]
        flex flex-col justify-end text-white p-4'>
          <LucideArrowUpRight className='text-white absolute right-3 top-3' />
          Fostering collaborative <br />
          partnerships.
        </div>
      </div>

      <div className='container mx-auto grid grid-cols-1 bg-white rounded-2xl aspect-square md:aspect-video  md:p-2 '>
        <div className=' rounded-3xl flex flex-col justify-center relative'>
          <Image
            src='/images/vision.jpg'
            alt='Vision Background'
            layout='fill'
            objectFit='cover'
            className='absolute inset-0 z-10 rounded-2xl'
            quality={100}
          />
          <div className=' z-20 container mx-auto flex flex-col justify-center items-center space-y-3 '>
            <div>
              <div
                className='max-w-5xl text-3xl text-white  p-4 md:p-8'
                data-scroll
                data-scroll-speed={0.1}>
                Founded on the belief that Africa’s future lies in its ability
                to collaborate, trade, and invest within itself, ASTAR LLC was
                created to promote sustainable regional growth. Our team brings
                decades of experience in commodities trading and investment
                management, with a special focus on the African continent.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JumbotronAbout;
