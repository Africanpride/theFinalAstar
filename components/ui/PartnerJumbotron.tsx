'use client';
import React from 'react';
import Image from 'next/image';
import { LucideArrowUpRight } from 'lucide-react';
import { bebas, poppins } from '@/config/fonts';
import { Button, Link } from '@nextui-org/react';

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
        <div className='col-span-1 md:col-span-1 rounded-3xl flex flex-col justify-center relative'>
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
          className={`${bebas.className} col-span-2    aspect-video relative bg-black text-white  rounded-2xl text-base leading-[1.12rem]
        flex flex-col justify-center  p-4 md:p-8 space-y-3`}>
          <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
          <h1 className='text-lime-600 text-5xl leadig-[2.9rem] '>
            Real Estate Services
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
          <Button
            variant='flat'
            as={Link}
            href='/real-estate'
            className='text-white w-1/4 '>
            Read More ...
          </Button>
        </div>
      </div>

      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl h-auto  '>
        <div
          id='real_estate_services'
          className={`${bebas.className} col-span-1    aspect-video relative bg-lime-700 text-white  rounded-2xl text-base leading-[1.12rem]
        flex flex-col justify-end  p-4 md:p-8 space-y-3`}>
          <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
          <h1 className='text-lime-300 text-5xl leadig-[2.9rem] '>
            Africa Diaspora 126+
          </h1>
          <p
            className={`${poppins.className} capitalize  text-white text-left text-base`}>
            This non-profit organization is dedicated to empowering and
            uplifting the African diaspora. We champion the Right of Return,
            aiming to ensure that individuals of African heritage have
            meaningful opportunities to rediscover and reconnect with their
            cultural roots.
            <br />
          </p>
          <Button
            variant='flat'
            as={Link}
            href='/african-diaspora-126-plus'
            className='text-white'>
            Read More ...
          </Button>
        </div>
        <div className='col-span-1 md:col-span-2 rounded-3xl flex flex-col justify-center relative'>
          <Image
            src='/images/aaha.jpg'
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
      <div className='col-span-1 md:col-span-1 rounded-3xl flex flex-col justify-center relative'>
          <Image
            src='/images/airport2.jpg'
            alt='Vision Background'
            layout='fill'
            objectFit='cover'
            className='absolute inset-0 z-10 rounded-2xl'
            quality={100}
          />

        </div>
        <div
          id='real_estate_services'
          className={`${bebas.className} col-span-2    aspect-video relative bg-blue-700 text-white  rounded-2xl text-base leading-[1.12rem]
        flex flex-col justify-center  p-4 md:p-8 space-y-3`}>
          <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
          <h1 className='text-blue-400 text-5xl leadig-[2.9rem] '>
            Access Africa Home & Abroad (AAHA):
          </h1>
          <p
            className={`${poppins.className} capitalize  text-white text-left text-base`}>
            AAHA is committed to supporting individuals in pursuing global
            opportunities, whether for employment, education, or specialized
            training. We primarily focus on assisting those interested in
            journeys to the UK, US, or Canada, providing guidance tailored to
            each destination.
            <br />
          </p>
          <Button variant='flat' as={Link} href='/aaha' className='text-white md:w-1/4'>
            Read More ...
          </Button>
        </div>

      </div>
    </section>
  );
};

export default PartnerJumbotron;
