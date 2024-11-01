import { bebas, inter, playfair_display } from '@/config/fonts';
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
      className={`${bebas.className} min-h-screen h-auto grid grid-cols-1 md:grid-cols-3`}>
      <div className={` md:aspect-square relative p-4 md:p-6 `}>
        {/* <BackgroundImageWrapper backgroundImage='/images/farmer3.jpg' /> */}

        <div className=' relative h-full flex flex-col justify-start space-y-3 items-start z-10'>
          <p className='text-lime-500 text-[3em] leading-[0.9em] '>
            Our Services &#x2014;
          </p>

          <p className='text-xl text-lime-900 leading-[1.25rem] '>
            ASTAR LLC connects buyers, sellers, and investors across Africa in
            agriculture, minerals, and energy. We simplify trade, foster
            sustainable growth, and offer end-to-end support for reliable,
            impactful partnerships in emerging markets.
          </p>

        </div>
      </div>

      <div
        className={` col-span-1 md:col-span-2  h-auto grid grid-cols-1 md:grid-cols-2 gap-2 p-4 md:p-6 relative `}>
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
        <ServiceIntroComponent
          title='Real Estate'
          url='/services'
          description={`We specialize in real estate services that cater to diasporas looking to invest in their 
                homeland. Our offerings cover everything from land acquisition to home purchasing. `}
        />
        <ServiceIntroComponent
          title='Africa Diaspora 126+'
          url='/services'
          description={`AAHA is dedicated to helping individuals pursue opportunities abroad, whether for 
                work, education, or specialized training. Our primary focus is on providing assistance 
                to those aiming to travel to the UK, US, or Canada `}
        />
      </div>
    </section>
  );
};

export default Start;
