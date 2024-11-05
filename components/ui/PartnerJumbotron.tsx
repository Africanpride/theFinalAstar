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

type Props = {};

const PartnerJumbotron = (props: Props) => {
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
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl h-auto  '>
        <div
          id='real_estate_services'
          className={`${bebas.className} col-span-1    aspect-video relative bg-black text-white  rounded-2xl text-base leading-[1.12rem]
        flex flex-col justify-end  p-4 md:p-8 space-y-3`}>
          <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
          <h1 className='text-lime-600 text-5xl leadig-[2.9rem] '>
            Real Estate <br /> Services
          </h1>
          <p
            className={`${poppins.className} capitalize  text-white text-left text-base`}>
            We specialize in real estate services that cater to diasporas
            looking to invest in their homeland. Our offerings cover everything
            from land acquisition to home purchasing. We provide land searches,
            arrange professional surveyors, facilitate land purchases, and
            connect clients with reputable architects and contractors to build
            their dream homes.
            <br />
          </p>
        </div>
        <div className='col-span-1 md:col-span-2 rounded-3xl flex flex-col justify-center relative'>
          <Image
            src='/images/real-estate2.jpg'
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
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl h-auto  '>
        <div
          id='real_estate_services'
          className={`${bebas.className} col-span-1    aspect-video relative bg-black text-white  rounded-2xl text-base leading-[1.12rem]
        flex flex-col justify-end  p-4 md:p-8 space-y-3`}>
          <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
          <h1 className='text-lime-600 text-5xl leadig-[2.9rem] '>
            Real Estate <br /> Services
          </h1>
          <p
            className={`${poppins.className} capitalize  text-white text-left text-base`}>
            We specialize in real estate services that cater to diasporas
            looking to invest in their homeland. Our offerings cover everything
            from land acquisition to home purchasing. We provide land searches,
            arrange professional surveyors, facilitate land purchases, and
            connect clients with reputable architects and contractors to build
            their dream homes.
            <br />
          </p>
        </div>
        <div className='col-span-1 md:col-span-2 rounded-3xl flex flex-col justify-center relative'>
          <Image
            src='/images/real-estate2.jpg'
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
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl h-auto  '>
        <div
          id='real_estate_services'
          className={`${bebas.className} col-span-1    aspect-video relative bg-black text-white  rounded-2xl text-base leading-[1.12rem]
        flex flex-col justify-end  p-4 md:p-8 space-y-3`}>
          <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
          <h1 className='text-lime-600 text-5xl leadig-[2.9rem] '>
            Real Estate <br /> Services
          </h1>
          <p
            className={`${poppins.className} capitalize  text-white text-left text-base`}>
            We specialize in real estate services that cater to diasporas
            looking to invest in their homeland. Our offerings cover everything
            from land acquisition to home purchasing. We provide land searches,
            arrange professional surveyors, facilitate land purchases, and
            connect clients with reputable architects and contractors to build
            their dream homes.
            <br />
          </p>
        </div>
        <div className='col-span-1 md:col-span-2 rounded-3xl flex flex-col justify-center relative'>
          <Image
            src='/images/real-estate2.jpg'
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





    </section>
  );
};

export default PartnerJumbotron;
