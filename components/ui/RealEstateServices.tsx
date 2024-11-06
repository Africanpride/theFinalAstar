'use client';
import {
  bebas,
  inter,
  montserrat,
  playfair_display,
  poppins,
} from '@/config/fonts';
import {
  LucideMoveDown,
  LucideMove3d,
  LucideArrowUpRight,
  LucideGlobe,
  LucidePhoneIncoming,
  LucideVoicemail,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import BackgroundImageWrapper from '../BackgroundImageWrapper';
import Link from 'next/link';
import ServiceIntroComponent from './ServiceIntroComponent';
import ServiceCardWithBackgroundImage from './ServiceCardWithBackgroundImage';
// Removed imports for MainMenu and BackgroundImageWrapper due to errors

type Props = {
  title?: string;
  order?: number;
  children?: React.ReactNode;
};

const RealEstateServices = ({ title, order = 1, children }: Props) => {
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
    <div className='pb-4'>
      <section className='min-h-screen h-auto grid   p-5 gap-4'>
        <div
          className={`${bebas.className} container mx-auto grid grid-cols-1 md:grid-cols-5 gap-2`}>
          <div className='col-span-1 md:col-span-3 bg-white p-4 md:p-8 rounded-2xl'>
            <div className='md:flex flex-col items-start justify-end h-full space-y-3 '>
              <h1 className='text-lime-600 capitalize text-3xl md:text-3xl leading-[2.5rem] max-w-xl  md:leading-[3rem] '>
              Empower, Invest and Belong
              </h1>

              <p
                className={`${poppins.className} capitalize  text-gray-500 text-left text-base`}>
                We are committed to creating lasting opportunities for
                individuals and families, particularly within the diaspora to
                invest in real estate and establish roots in their home country.
                Whether you are searching for a land, building a property, or
                purchasing a home, our comprehensive services are designed to
                support you every step of the way.
              </p>
            </div>
          </div>
          <div
            className='col-span-1   aspect-square relative bg-black rounded-2xl text-base leading-[1.12rem]
        flex flex-col justify-end text-white p-4 space-y-2'>
            <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
            <h1 className='text-lime-500'>Our Goal</h1>
            <p className={`${poppins.className} text-sm`}>
              Our goal is to make real estate investment easy and accessible for
              all, especially for those abroad who may find it challenging to
              navigate the local market.
            </p>
          </div>
          <ServiceCardWithBackgroundImage backgroundImage='real-estate-goal.jpg' />
        </div>
        <div
          className={`${bebas.className} container mx-auto grid grid-cols-1 md:grid-cols-5 gap-2`}>
          <div className='col-span-1 md:col-span-3 bg-white p-4 md:p-8 rounded-2xl'>
            <div className='md:flex flex-col items-start justify-end h-full space-y-3 '>
              <h1 className='text-lime-600 capitalize text-3xl md:text-3xl leading-[2.5rem] max-w-xl  md:leading-[3rem] '>
                Comprehensive Service
              </h1>

              <p
                className={`${poppins.className} capitalize  text-gray-500 text-left text-base`}>
                From land search to handing over the keys to your property, we
                take care of every detail so you can focus on the bigger
                picture.
              </p>
            </div>
          </div>
          <ServiceCardWithBackgroundImage backgroundImage='trust.jpg' />
          <div
            className='col-span-1   aspect-square relative bg-black rounded-2xl text-base leading-[1.12rem]
        flex flex-col justify-end text-white p-4 space-y-2'>
            <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
            <h1 className='text-lime-500'>Trust and Professionalism</h1>
            <p className={`${poppins.className} text-sm`}>
              We are dedicated to delivering high-quality, trustworthy service.
              We prioritize your piece of mind ensuring that your real estate
              investment is safe, secure, and hassle-free.
            </p>
          </div>
        </div>
      </section>

      <section
        className={`${bebas.className} min-h-screen h-auto flex flex-col justify-center `}>
        <div className={`  relative p-4 md:p-6 space-y-6 `}>
          <div className=' relative h-auto flex flex-col justify-RealEstateServices space-y-3 md:px-2 items-RealEstateServices z-10'>
            <h1 className='text-lime-500 text-[2em] '>
              Diaspora Focused Solutions

            </h1>

            <p className={`${poppins.className} text-lg  max-w-4xl `}>
              We specialize in helping members of the diaspora reconnect with
              their roots by facilitating land acquisition, construction, and
              home buying with ease and transparency.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <ServiceIntroComponent
              title='Land Search and Acquisition'
              description='For those in the diaspora eager to reconnect with their
              roots through land investment, we oversee the entire process. From meticulously
              searching for suitable plots to coordinating with reputable surveyors, we ensure due
              diligence is upheld, providing you with authentic and verified land that aligns with your
              vision.'
            />
            <ServiceIntroComponent
              title='Surveying and Land Purchase'
              url='/services'
              description={`Once we identify the perfect parcel of land, our
                        experienced team collaborates with professional surveyors to validate and secure your
                        investment, giving you peace of mind as you move forward.`}
            />
            <ServiceIntroComponent
              title='Construction Services'
              url='/services'
              description={`Whether you aspire to build a cozy family home or a thriving
                commercial space, we work with a network of trusted contractors and skilled architects.
                Together, we bring your vision to life, ensuring that your property is crafted to your
                exact specifications and desires.`}
            />
            <ServiceIntroComponent
              title='Architectural and Contracting Support'
              url='/services'
              description={`Whether you aspire to build a cozy family home or a thriving
                commercial space, we work with a network of trusted contractors and skilled architects.
                Together, we bring your vision to life, ensuring that your property is crafted to your
                exact specifications and desires.`}
            />
            <ServiceIntroComponent
              title='Construction Services'
              url='/services'
              description={`Whether you aspire to build a cozy family home or a thriving
                commercial space, we work with a network of trusted contractors and skilled architects.
                Together, we bring your vision to life, ensuring that your property is crafted to your
                exact specifications and desires.`}
            />
            <ServiceIntroComponent
              title='Home Buying Assistance'
              url='/services'
              description={`If you prefer to purchase a home rather than build, we are
                here to guide you through the local market with confidence. We offer a curated selection
                of homes tailored to your preferences, lifestyle, and budget, making the home-buying
                process smooth and enjoyable.`}
            />
          </div>
        </div>
      </section>

      <section>
        <div className='container text-2xl hidden'>
          Whether you are looking to invest in land, build a home, or purchase
          property in your homeland, ASTAR LLC is here to support you through
          the entire process. Together, we can turn your dreams into reality,
          creating a lasting legacy for you and your family.
        </div>
      </section>
    </div>
  );
};

export default RealEstateServices;
