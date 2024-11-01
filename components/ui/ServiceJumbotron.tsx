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
import { bebas, playfair_display } from '@/config/fonts';
import { title } from 'process';
import BackgroundImageWrapper from '../BackgroundImageWrapper';
import MainMenu from './Menu';

type Props = {};

const ServiceJumbotron = (props: Props) => {
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
      <div
        className={`${bebas.className} container mx-auto grid grid-cols-1 md:grid-cols-5 gap-2`}>
        <div className='col-span-1 md:col-span-3 bg-white p-4 md:p-8 rounded-2xl'>
          <div className='md:flex flex-col items-start justify-end h-full space-y-3 '>
            <div className=' text-left capitalize text-3xl md:text-4xl leading-[1.8rem] max-w-md  md:leading-[2rem] '>
              Commodity Trading
            </div>

            <div className='capitalize  text-gray-500 text-left text-xl leading-[1.2rem]'>
              ASTAR LLC specializes in the trade of essential commodities within
              Africa’s booming markets. From agriculture to minerals, we connect
              sellers and buyers, ensuring smooth transactions and reliable
              supply chains.
            </div>
          </div>
        </div>
        <div
          className='col-span-1   aspect-square relative bg-black rounded-2xl text-lg leading-[1.12rem]
        flex flex-col justify-end text-white p-4 space-y-2'>
          <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
          <div className='text-lime-500'>
            Sectors of <br /> Operation
          </div>
          <p>
            We focus on high-growth sectors, including energy, agriculture,
            infrastructure, and technology, offering investors unique
            opportunities for meaningful returns.
          </p>
        </div>
        <div
          className='col-span-1   aspect-square relative bg-lime-600 rounded-2xl text-lg leading-[1.12rem]
        flex flex-col justify-end text-black p-4 space-y-2'>
          <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
          <div className='text-white'>
            Our <br /> Approach
          </div>
          <p>
            We combine data-driven insights with on-the-ground knowledge to help
            investors navigate Africa’s emerging markets and make informed
            investment decisions.
          </p>
        </div>
      </div>

      <div className='container mx-auto grid grid-cols-1  rounded-2xl aspect-square md:aspect-video  md:p-2 '>
        <div className=' rounded-3xl flex flex-col justify-center relative'>
          <Image
            src='/images/services4.jpg'
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
        <div
          className='col-span-2   aspect-auto relative bg-black rounded-2xl text-xl leading-tight
        flex flex-col justify-end text-white p-4 space-y-2'>
          <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
          <div className='text-lime-500'>End-To-End Facilitation</div>
          <p>
            We offer end-to-end trade facilitation services, including market
            access support, regulatory guidance, and logistics management.
          </p>
        </div>
        {/* <div
          className='col-span-1   aspect-square relative bg-lime-600 rounded-2xl text-lg leading-[1.12rem]
        flex flex-col justify-end text-black p-4 space-y-2'>
          <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
          <div className='text-white'>
            Our <br /> Approach
          </div>
          <p>
            We combine data-driven insights with on-the-ground knowledge to help
            investors navigate Africa’s emerging markets and make informed
            investment decisions.
          </p>
        </div> */}

        <div className='col-span-1 md:col-span-3 bg-white p-4 md:p-8 rounded-2xl'>
          <div className='md:flex flex-col items-start justify-end h-full space-y-3 '>
            <div className=' text-left capitalize text-3xl md:text-4xl leading-[1.8rem] max-w-md  md:leading-[2rem] '>
              Intra-African Trade <br /> Facilitation
            </div>

            <div className='capitalize  text-gray-500 text-left text-xl leading-[1.2rem]'>
              African markets are full of untapped potential, but navigating
              regional trade regulations, logistics, and supply chains can be
              complex. ASTAR LLC simplifies this process, helping businesses and
              investors unlock the power of Africa's intra-regional trade.
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto grid grid-cols-1  rounded-2xl aspect-square md:aspect-video  md:p-2 '>
        <div className=' rounded-3xl flex flex-col justify-center relative'>
          <Image
            src='/images/services3.jpg'
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

      <div className='container grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl h-auto  '>
        <div
          className={`${bebas.className} col-span-1 md:col-span-1   aspect-auto relative bg-black text-white  rounded-2xl text-lg leading-[1.12rem]
        flex flex-col justify-end  p-4 space-y-3`}>
          <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
          <div className='text-lime-600 text-5xl leadig-[2.9rem] '>
            Real Estate <br /> Services
          </div>
          <p>
            We specialize in real estate services that cater to diasporas
            looking to invest in their homeland. Our offerings cover everything
            from land acquisition to home purchasing. We provide land searches,
            arrange professional surveyors, facilitate land purchases, and
            connect clients with reputable architects and contractors to build
            their dream homes.
            <br />
            <br />
            Whether you’re interested in constructing a new property from the
            ground up or buying a pre-built home, our commitment is to guide you
            through each stage, making the process seamless and stress-free. Our
            ultimate goal is to create long-term opportunities for individuals
            and families within the diaspora to secure their future by
            establishing real estate investments and reconnecting with their
            roots
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

export default ServiceJumbotron;
