'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import {
  ArrowUpRight,
  Link,
  LucideAArrowUp,
  LucideArrowUpRight,
  LucideMove3d,
  LucideMoveDown,
  Minus,
  Plus,
} from 'lucide-react';
import { bebas, montserrat, playfair_display, poppins } from '@/config/fonts';
import { title } from 'process';
import BackgroundImageWrapper from '../BackgroundImageWrapper';
import MainMenu from './Menu';
import ServiceCardWithBackgroundImage from './ServiceCardWithBackgroundImage';

type Props = {};

const AAHAJumbotron = (props: Props) => {
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
      <div className='container mx-auto grid grid-cols-1  rounded-2xl aspect-square md:aspect-video   '>
        <div className=' rounded-3xl flex flex-col justify-center relative'>
          <Image
            src='/images/airplane.jpg'
            alt='Vision Background'
            layout='fill'
            objectFit='cover'
            className='absolute inset-0 z-10 rounded-2xl'
            quality={100}
          />
          <div className=' z-20 container mx-auto flex flex-col justify-center items-center space-y-3 '>
            <div>
              {/* <div
                className='max-w-5xl md:text-3xl text-white  p-4 md:p-8'
                data-scroll
                data-scroll-speed={0.1}>
                Founded on the belief that Africa’s future lies in its ability
                to collaborate, trade, and invest within itself, ASTAR LLC was
                created to promote sustainable regional growth. Our team brings
                decades of experience in commodities trading and investment
                management, with a special focus on the African continent.
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${bebas.className} container mx-auto grid grid-cols-1 md:grid-cols-5 gap-2`}>
        <div className='col-span-1 md:col-span-3 bg-white p-4 md:p-8 rounded-2xl'>
          <div className='md:flex flex-col items-start justify-end h-full space-y-3 '>
            <h1 className='capitalize text-4xl md:text-5xl leading-[2.5rem] max-w-xl  md:leading-[3rem] '>
              Pursue Opportunities Abroad
            </h1>

            <p
              className={`${poppins.className} capitalize  text-gray-500 text-left text-base`}>
              AAHA is dedicated to helping individuals pursue opportunities
              abroad, whether for work, education, or specialized training. Our
              primary focus is on providing assistance to those aiming to travel
              to the UK, US, or Canada. We handle everything from visa
              applications to securing employment or school placements, ensuring
              a hassle-free journey.
            </p>
          </div>
        </div>
        <div
          className='col-span-1   aspect-square relative bg-black rounded-2xl text-base leading-[1.12rem]
        flex flex-col justify-end text-white p-4 space-y-2'>
          <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
          <h1 className='text-lime-500'>Repatriation Services</h1>
          <p className={`${poppins.className} text-sm`}>
          For those looking to return home, AAHA also offers repatriation services, 
          aiding individuals in settling back into life in Africa with ease and confidence
          </p>
        </div>
        <ServiceCardWithBackgroundImage backgroundImage='aaha5.jpg' />
      </div>
    </section>
  );
};

export default AAHAJumbotron;
