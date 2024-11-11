
'use client';
import React from 'react';
import Image from 'next/image';
import {
  LucideArrowUpRight,
} from 'lucide-react';
import { bebas, poppins } from '@/config/fonts';

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
    <section className='min-h-screen h-auto grid   p-4 gap-4'>
      <div
        className={`${bebas.className} container mx-auto grid grid-cols-1 md:grid-cols-5 gap-4`}>

        <div className='col-span-1 md:col-span-3 bg-white p-4 md:p-8 rounded-2xl'>
          <div className='md:flex flex-col items-start justify-end h-full space-y-3 '>
            <h1 className='capitalize text-4xl md:text-5xl leading-[2.5rem] max-w-xl  md:leading-[3rem] '>
              About Astar LLC
            </h1>

            <p
              className={`${poppins.className} capitalize  text-gray-500 text-left text-lg`}>
              ASTAR LLC was founded on the belief that Africa's future lies in its ability to collaborate, trade, and invest within the continent, promoting sustainable regional growth. Our team brings
              decades of experience in commodities trading and investment
              management, with a special focus on the African continent.
            </p>
          </div>
        </div>
        <div
          className='col-span-1   aspect-square relative bg-black rounded-2xl text-base leading-[1.12rem]
        flex flex-col justify-end text-white p-4 space-y-2'>
          <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
          <h1 className='text-lime-500'>Our Vision</h1>
          <p className={`${poppins.className} text-sm`}>
            Our Vision is a united Africa where regional trade flows seamlessly, fostering mutual growth and long-term prosperity.
          </p>
        </div>
        <div
          className='col-span-1   aspect-square relative bg-lime-600 rounded-2xl text-base leading-[1.12rem]
        flex flex-col justify-end text-black p-4 space-y-2'>
          <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
          <h1>Our Mission</h1>
          <p className={`${poppins.className} text-sm text-white`}>
            To drive Africa’s economic growth by enabling seamless commodity
            trading and fostering impactful investment opportunities across
            regional markets
          </p>
        </div>
      </div>
      <div className='container mx-auto grid grid-cols-1  rounded-2xl aspect-auto md:aspect-video   '>
        <div className=' rounded-3xl flex flex-col justify-center relative'>
          {/* <div className='absolute inset-0 z-20 bg-black/35 rounded-2xl' ></div> */}
          <Image
            src='/images/mission.jpg'
            alt='Vision Background'
            layout='fill'
            objectFit='cover'
            className='absolute inset-0 z-10 rounded-2xl'
            quality={100}
          />
          <div className=' z-30 container  mx-auto flex flex-col justify-center items-center space-y-3 '>

            {/* <div>
              <div
                className='max-w-6xl text-xl md:text-4xl text-neutral-100 md:uppercase leading-[1.5rem]  md:font-bold md:px-2 p-5 md:p-8'
                data-scroll
                data-scroll-speed={0.1}>
                ASTAR LLC was founded on the belief that Africa's future lies in its ability to collaborate, trade, and invest within the continent, promoting sustainable regional growth. Our team brings
                decades of experience in commodities trading and investment
                management, with a special focus on the African continent.
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div
        className={`${bebas.className} container mx-auto grid grid-cols-1 md:grid-cols-5 gap-4`}>
        <div className='col-span-1 md:col-span-3 bg-white p-4 md:p-8 rounded-2xl'>
          <div className='md:flex flex-col justify-center h-full space-y-2 '>
            <h1 className='capitalize text-4xl md:text-5xl leading-[2.5rem] max-w-xl  md:leading-[3rem] '>
              A Quest For sustainable <br /> regional growth
            </h1>

            <p className={`${poppins.className} capitalize  text-gray-500 text-left text-lg`}>
              Our team brings decades of experience in commodities trading and
              investment management, with a special focus on the African
              continent.
            </p>
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


      {/* <div
        className={`${bebas.className} container mx-auto grid grid-cols-1 md:grid-cols-5 gap-4`}>
        <div className='col-span-1 md:col-span-3 bg-white p-4 md:p-8 rounded-2xl  flex flex-col justify-center'>
          <div className='space-y-2 '>
            <h1 className='capitalize text-4xl md:text-5xl leading-[2.5rem] max-w-xl  md:leading-[3rem] '>
              Our Vision
            </h1>

            <p className={`${poppins.className} capitalize  text-gray-500 text-left text-lg`}>
              Our Vision is a united Africa where regional trade flows seamlessly, fostering mutual growth and long-term prosperity.
            </p>
          </div>
        </div>
        <div
          className='col-span-1   aspect-square relative bg-lime-600 rounded-2xl text-xl leading-[1.3rem]
        flex flex-col justify-end text-white p-4'>
          <LucideArrowUpRight className='text-white absolute right-3 top-3' />
          Empowering regional <br /> markets
        </div>
        <div
          className='col-span-1   aspect-square relative bg-black rounded-2xl text-xl leading-[1.3rem]
        flex flex-col justify-end text-white p-4'>
          <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
          African trade <br /> expertise
        </div>
      </div> */}

      {/* <div
        className={`${bebas.className} container mx-auto grid grid-cols-1 md:grid-cols-5 gap-4`}>
        <div
          className='col-span-1   aspect-square relative bg-lime-600 rounded-2xl text-xl leading-[1.3rem]
        flex flex-col justify-end text-white p-4'>
          <LucideArrowUpRight className='text-white absolute right-3 top-3' />
          Empowering regional <br /> markets
        </div>
        <div
          className='col-span-1   aspect-square relative bg-black rounded-2xl text-xl leading-[1.3rem]
        flex flex-col justify-end text-white p-4'>
          <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
          African trade <br /> expertise
        </div>
        <div className='col-span-1 md:col-span-3 bg-white p-4 md:p-8 rounded-2xl  flex flex-col justify-center'>
          <div className='space-y-2 '>
            <h1 className='capitalize text-4xl md:text-5xl leading-[2.5rem] max-w-xl  md:leading-[3rem] '>
              Our Mission
            </h1>

            <p className={`${poppins.className} capitalize  text-gray-500 text-left text-lg`}>
              To drive Africa’s economic growth by enabling seamless commodity
              trading and fostering impactful investment opportunities across
              regional markets
            </p>
          </div>
        </div>
      </div> */}


      {/* <div className='container mx-auto grid grid-cols-1 bg-white rounded-2xl aspect-square md:aspect-video   '>
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
            <div
              className='max-w-5xl md:text-3xl text-white  p-4 md:p-8'
              data-scroll
              data-scroll-speed={0.1}>
              Our Vision is a united Africa where regional trade flows
              seamlessly, fostering mutual growth and long-term prosperity
            </div>

          </div>
        </div>
      </div> */}

      <>
        {/* Approach */}
        <div className='bg-white pt-5'>
          {/* Approach */}
          <div className='max-w-5xl rounded-3xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto'>
            {/* Title */}
            <div className='max-w-3xl mb-10 lg:mb-14'>
              <h2
                className={`${bebas.className}  font-semibold text-2xl md:text-4xl md:leading-tight`}>
                Partnerships
              </h2>
              <p className='mt-1 text-neutral-600'>
                ASTAR LLC works closely with businesses, governments, and
                private investors to create mutually beneficial partnerships
                that foster regional trade and growth. If you’re interested in
                working together, learn more about how we can collaborate
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center'>
              <div className='aspect-w-16 aspect-h-9 lg:aspect-none'>
                <Image
                  className='w-full object-cover rounded-xl'
                  src='/images/vision3.jpg'
                  alt='Features Image'
                  layout='responsive'
                  width={480}
                  height={600}
                />
              </div>

              <div className='text-black'>
                <div className='mb-4'>
                  <h2
                    className={`${bebas.className} font-semibold text-2xl md:text-4xl md:leading-tight`}>
                    Our Core Values
                  </h2>
                </div>

                <div className='flex gap-x-5 ms-1'>
                  <div className='relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800'>
                    <div className='relative z-10 size-8 flex justify-center items-center'>
                      <span className='flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-lime-700 font-semibold text-xs uppercase rounded-full'>
                        1
                      </span>
                    </div>
                  </div>
                  <div className='grow pt-0.5 pb-8 sm:pb-12'>
                    <p className='text-sm lg:text-base text-neutral-600'>
                      <span className={`${bebas.className} font-bold text-black pr-3 text-xl`}>Integrity:</span> <br />
                      We believe in transparency and ethical practices in every
                      transaction.
                    </p>
                  </div>
                </div>

                <div className='flex gap-x-5 ms-1'>
                  <div className='relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800'>
                    <div className='relative z-10 size-8 flex justify-center items-center'>
                      <span className='flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-lime-700 font-semibold text-xs uppercase rounded-full'>
                        2
                      </span>
                    </div>
                  </div>
                  <div className='grow pt-0.5 pb-8 sm:pb-12'>
                    <p className='text-sm lg:text-base text-neutral-600'>
                      <span className={`${bebas.className} font-bold text-black pr-3 text-xl`}>Sustainability:</span> <br />
                      We prioritize sustainable investments that benefit
                      communities and the environment.
                    </p>
                  </div>
                </div>

                <div className='flex gap-x-5 ms-1'>
                  <div className='relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800'>
                    <div className='relative z-10 size-8 flex justify-center items-center'>
                      <span className='flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-lime-700 font-semibold text-xs uppercase rounded-full'>
                        3
                      </span>
                    </div>
                  </div>
                  <div className='grow pt-0.5 pb-8 sm:pb-12'>
                    <p className='text-sm md:text-base text-neutral-600'>
                      <span className={`${bebas.className} font-bold text-black pr-3 text-xl`}>Collaboration:</span> <br />
                      We are stronger together and believe in the power of
                      partnerships to drive progress.
                    </p>
                  </div>
                </div>

                <div className='flex gap-x-5 ms-1'>
                  <div className='relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800'>
                    <div className='relative z-10 size-8 flex justify-center items-center'>
                      <span className='flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-lime-700 font-semibold text-xs uppercase rounded-full'>
                        4
                      </span>
                    </div>
                  </div>
                  <div className='grow pt-0.5 pb-8 sm:pb-12'>
                    <p className='text-sm md:text-base text-neutral-600'>
                      <span className={`${bebas.className} font-bold text-black pr-3 text-xl`}>Innovation</span> <br />
                      We embrace forward-thinking solutions to stay ahead in the
                      ever-evolving market.
                    </p>
                  </div>
                </div>
                <a
                  className='group inline-flex items-center gap-x-2 py-2 px-3 bg-lime-500 font-medium text-sm text-neutral-800 rounded-full focus:outline-none'
                  href='/contact'>
                  <svg
                    className='shrink-0 size-4'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
                    <path
                      className='opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition'
                      d='M14.05 2a9 9 0 0 1 8 7.94'
                    />
                    <path
                      className='opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition'
                      d='M14.05 6A5 5 0 0 1 18 10'
                    />
                  </svg>
                  Schedule a call
                </a>
              </div>
              {/* End Timeline */}
            </div>
            {/* End Grid */}
          </div>
        </div>
        {/* End Approach */}
      </>
    </section>
  );
};

export default JumbotronAbout;
