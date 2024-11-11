'use client';
import React from 'react';
import Image from 'next/image';
import { LucideArrowUpRight } from 'lucide-react';
import { Button, Link } from '@nextui-org/react';

import { bebas, poppins } from '@/config/fonts';

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
    <section className='grid h-auto min-h-screen grid-cols-1  gap-4 p-4'>
      <div className='container mx-auto grid h-auto grid-cols-1 gap-4 rounded-2xl md:grid-cols-3  '>
        <div
          id='real_estate_services'
          className={`${bebas.className} relative    col-span-2 flex aspect-auto flex-col  justify-end space-y-3 rounded-2xl
        bg-lime-700 p-4 text-base  leading-[1.12rem] text-white md:p-8`}>
          <LucideArrowUpRight className='absolute right-3 top-3 text-white ' />
          <h1 className='leadig-[2.9rem] text-5xl text-lime-300 '>
            African Diaspora 126+
          </h1>
          <p
            className={`${poppins.className} text-left  text-base capitalize text-white`}>
            A non-profit organization focused on supporting the African
            diaspora. We advocate for the Right of Return, ensuring that people
            of African descent have the opportunity to reconnect with their
            heritage. Our work includes lobbying for policies that recognize and
            facilitate the return of diasporas to their ancestral homes. 
            <br />
          </p>
          <Button
            variant='flat'
            as={Link}
            href='/african-diaspora-126-plus'
            className='text-white md:w-1/4 '>
            Read More ...
          </Button>
        </div>
        <div className='relative col-span-1 flex flex-col justify-center rounded-3xl md:col-span-1'>
          <Image
            src='/images/aaha.jpg'
            alt='Vision Background'
            layout='fill'
            objectFit='cover'
            className='absolute inset-0 z-10 rounded-2xl'
            quality={100}
          />
          <div className=' container z-20 mx-auto flex flex-col items-center justify-center space-y-3 '>
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
      <div className='container mx-auto grid h-auto grid-cols-1 gap-4 rounded-2xl md:grid-cols-3  '>
        <div className='relative col-span-1 flex flex-col justify-center rounded-3xl md:col-span-1'>
          <Image
            src='/images/real-estate2.jpg'
            alt='Vision Background'
            layout='fill'
            objectFit='cover'
            className='absolute inset-0 z-10 rounded-2xl'
            quality={100}
          />
        </div>
        <div
          id='real_estate_services'
          className={`${bebas.className} relative    col-span-2 flex aspect-auto flex-col  justify-center space-y-3 rounded-2xl
        bg-black p-4 text-base  leading-[1.12rem] text-white md:p-8`}>
          <LucideArrowUpRight className='absolute right-3 top-3 text-white ' />
          <h1 className='leadig-[2.9rem] text-5xl text-lime-600 '>
            Real Estate Services
          </h1>
          <p
            className={`${poppins.className} text-left  text-base capitalize text-white`}>
            We specialize in real estate services that cater to diasporas
            looking to invest in their homeland. Our offerings cover everything
            from land acquisition to home purchasing. We provide land searches,
            arrange professional surveyors, facilitate land purchases, and
            connect clients with reputable architects and contractors to build
            their dream homes.
            <br />
          </p>
          <Button
            variant='flat'
            as={Link}
            href='/real-estate'
            className='text-white md:w-1/4 '>
            Read More ...
          </Button>
        </div>
      </div>

      <div className='container mx-auto grid h-auto grid-cols-1 gap-4 rounded-2xl md:grid-cols-3  '>
      <div
          id='real_estate_services'
          className={`${bebas.className} relative    col-span-2 flex aspect-auto flex-col  justify-center space-y-3 rounded-2xl
        bg-blue-700 p-4 text-base  leading-[1.12rem] text-white md:p-8`}>
          <LucideArrowUpRight className='absolute right-3 top-3 text-white ' />
          <h1 className='leadig-[2.9rem] text-5xl text-blue-400 '>
            Access Africa Home & Abroad (AAHA):
          </h1>
          <p
            className={`${poppins.className} text-left  text-base capitalize text-white`}>
            AAHA is committed to supporting individuals in pursuing global
            opportunities, whether for employment, education, or specialized
            training. We primarily focus on assisting those interested in
            journeys to the UK, US, or Canada, providing guidance tailored to
            each destination.
            <br />
          </p>
          <Button
            variant='flat'
            as={Link}
            href='/aaha'
            className='text-white md:w-1/4'>
            Read More ...
          </Button>
        </div>
       <div className='relative col-span-1 flex flex-col justify-center rounded-3xl md:col-span-1'>
          <Image
            src='/images/airport2.jpg'
            alt='Vision Background'
            layout='fill'
            objectFit='cover'
            className='absolute inset-0 z-10 rounded-2xl'
            quality={100}
          />
        </div>

      </div>
    </section>
  );
};

export default PartnerJumbotron;
