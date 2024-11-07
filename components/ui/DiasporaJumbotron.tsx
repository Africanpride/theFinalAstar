'use client';
import React from 'react';
import Image from 'next/image';
import {
  LucideArrowUpRight,
  LucideGlobe,
  LucidePhoneIncoming,
  LucideVoicemail,
} from 'lucide-react';
import { bebas, poppins } from '@/config/fonts';
import ServiceCardWithBackgroundImage from './ServiceCardWithBackgroundImage';
import AfricanDiasporaServices from './AfricanDiasporaServices';

type Props = {};

const DiasporaJumbotron = (props: Props) => {
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
    <section className='min-h-screen h-auto grid   p-4 gap-4'>
      <div
        className={`${bebas.className} container mx-auto grid grid-cols-1 md:grid-cols-5 gap-4`}>
        <div className='col-span-1 md:col-span-3 bg-white p-4 md:p-8 rounded-2xl'>
          <div className='md:flex flex-col items-start justify-end h-full space-y-3 '>
            <h1 className='capitalize text-4xl md:text-5xl leading-[2.5rem] max-w-xl  md:leading-[3rem] '>
              Supporting the African diaspora.
            </h1>

            <p
              className={`${poppins.className} capitalize  text-gray-500 text-left text-base`}>
              Africa Diaspora 126+ is a non-profit organization working to help
              people of African descent to reconnect with their heritage. We
              advocate for the Right to Return, focusing on policies that
              facilitate the African Diaspora integration to the Motherland.
            </p>
          </div>
        </div>
        <div
          className='col-span-1   aspect-square relative bg-black rounded-2xl text-base leading-[1.12rem]
        flex flex-col justify-end text-white p-4 space-y-2'>
          <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
          <h1 className='text-yellow-500'>Our Mission</h1>
          <p className={`${poppins.className} text-sm`}>
            To champion the Right to Return by building collaborative networks
            with local partners, enabling descendants of the African Diaspora to
            reintegrate and thrive in their ancestral homeland.
          </p>
        </div>
        <ServiceCardWithBackgroundImage backgroundImage='mission4.jpg' />
      </div>

      <div
        className={`${bebas.className} container mx-auto grid grid-cols-1 md:grid-cols-5 gap-4`}>
        <div className='col-span-1 md:col-span-3 bg-white p-4 md:p-8 rounded-2xl'>
          <div className='md:flex flex-col items-start justify-end h-full space-y-3 '>
            <h1 className='capitalize text-3xl md:text-4xl leading-[2.5rem] max-w-xl text-yellow-600 
             md:leading-[3rem] '>
              Message to the Diaspora Community
            </h1>

            <p
              className={`${poppins.className} capitalize  text-gray-500 text-left text-base`}>
              Congratulations to all African Diaspora Descendants (HUG) who have
              successfully embraced their heritage through the citizenship
              process. Each journey home is a milestone, not just for the
              individual, but for all of us. It’s a testament to the resilience
              of African culture and the power of connection. Akwaaba! Welcome
              home.
            </p>
          </div>
        </div>
        <ServiceCardWithBackgroundImage backgroundImage='vision4.jpg' />
        <div
          className='col-span-1   aspect-square relative bg-black rounded-2xl text-base leading-[1.12rem]
        flex flex-col justify-end text-white p-4 space-y-2'>
          <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
          <h1 className='text-yellow-500'>Our Vision</h1>
          <p className={`${poppins.className} text-sm`}>
            We envision a vibrant Africa enriched by the presence, talents, and
            contributions of its Diaspora descendants. Through shared heritage
            and collective support, we strive for an Africa where everyone with
            roots in this land can once again call it home.
          </p>
        </div>
      </div>
      <div className='container mx-auto grid grid-cols-1  rounded-2xl aspect-square md:aspect-video   '>
        <div className=' rounded-3xl flex flex-col justify-center relative'>
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
      <AfricanDiasporaServices />
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 space-y-2 '>
        <ServiceCardWithBackgroundImage backgroundImage='contactus.jpg' />

        <div
          className='col-span-2   md:aspect-auto relative bg-black rounded-2xl text-base leading-[1.12rem]
        flex flex-col justify-center text-white p-4 md:p-8 space-y-2'>
          <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
          <h1 className='text-yellow-500 font-bold  '>Contact Us</h1>
          <p className={`${poppins.className} text-sm`}>
            Ready to learn more or start your journey home? Reach out to us and
            let us build a future of connection, community, and cultural pride.
          </p>
          <div className='space-y-3'>
           <div className='flex flex-col md:flex-row  md:items-center gap-x-4 text-yellow-500 '><span className='hidden md:inline-block'> <LucideVoicemail />  </span> Email: info@africadiaspora126+.com</div>
           <div className='flex flex-col md:flex-row  md:items-center gap-x-4 text-yellow-500 '><span className='hidden md:inline-block'>  <LucidePhoneIncoming /> </span>Phone: +233 269 173 378 </div>
           <div className='flex flex-col md:flex-row  md:items-center gap-x-4 text-yellow-500 '><span className='hidden md:inline-block'> <LucideGlobe />  </span>Address: 173/4 Otswe Street, Osu, Accra, Ghana</div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiasporaJumbotron;
