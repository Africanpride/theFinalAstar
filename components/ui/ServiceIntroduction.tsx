import { bebas, inter, montserrat, playfair_display, poppins } from '@/config/fonts';
import { LucideMoveDown, LucideMove3d, LucideArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import BackgroundImageWrapper from '../BackgroundImageWrapper';
import Link from 'next/link';
import ServiceIntroComponent from './ServiceIntroComponent';
// Removed imports for MainMenu and BackgroundImageWrapper due to errors

type Props = {
  title?: string;
  order?: number;
  children?: React.ReactNode;
};

const Start = ({ title, order = 1, children }: Props) => {
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
    <section
      className={`${bebas.className} h-auto grid grid-cols-1 `}>
      <div className={`  relative p-4 md:p-6 space-y-6 `}>
        <div className=' relative h-auto flex flex-col justify-start space-y-3 md:px-2 items-start z-10'>
          <h1 className='text-lime-500 text-[3em] leading-[0.9em] '>
            Our Services &#x2014;
          </h1>

          <p className={`${poppins.className} text-lg  max-w-4xl `}>
            ASTAR LLC connects buyers, sellers, and investors across Africa in
            agriculture, minerals, and energy. We simplify trade, foster
            sustainable growth, and offer end-to-end support for reliable,
            impactful partnerships in emerging markets.
          </p>

        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <ServiceIntroComponent
          title='Agriculture'
          description='We trade high-quality agricultural products, fostering sustainable farming practices and supporting local economies. Products such as Soya Beans, Shea Butter, Cashew, Palm Oil, Maize, Rice etc'
        />
        <ServiceIntroComponent
          title='Minerals & Natural Resources'
          url='/services'
          description={`Facilitating the trade of Africa's abundant natural resources and minerals such as, Mining (Gold, Diamond, Tanzanite) Crude Oil etc`}
        />
        <ServiceIntroComponent
          title='Energy'
          url='/services'
          description={`Involved in the regional trade of key energy products, contributing to Africa's energy security. Green Energy or Solar Wind, Hydro Power etc.`}
        />
        </div>
      </div>

    </section>
  );
};

export default Start;
