import {
  bebas,
  poppins,
} from '@/config/fonts';
import React from 'react';
import ServiceIntroComponent from './ServiceIntroComponent';

type Props = {
  title?: string;
  order?: number;
  children?: React.ReactNode;
};

const AfricanDiasporaServices = ({ title, order = 1, children }: Props) => {
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
      className={`${bebas.className} min-h-screen h-auto flex flex-col justify-center `}>

      <div className={`  relative md:p-6 gap-4 `}>
        <div className=' relative h-auto flex flex-col justify-center items-start space-y-3 pb-7 md:px-2 
         z-10'>
          <h1 className='text-yellow-500 text-[2em] '>
          African Diaspora 126+: Reconnecting the Diaspora to the Motherland
          </h1>

          <p className={`${poppins.className} text-lg  max-w-4xl `}>
            Join us as we work to make Africa an inclusive, welcoming space for
            all who seek to reconnect with their roots. Whether you are looking
            to volunteer, contribute to our mission, or participate in cultural
            exchanges, there’s a place for you at African Diaspora 126+.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <ServiceIntroComponent 
            color='yellow'
            title='Right to Return Advocacy'
            description='We actively advocate for policies that acknowledge the right of African descendants to return
                    and reside in Africa. Our team works with policymakers, local organizations, and
                    international partners to create pathways for citizenship and cultural integration.'
          />
          <ServiceIntroComponent 
            color='yellow'
            title='Community & Partnerships'
            url='/services'
            description={`Through partnerships with local stakeholders, we establish networks that provide returning
              descendants with the support they need—whether it’s legal guidance, housing resources, or
              community building. Each connection strengthens the foundation for a successful transition.`}
          />
          <ServiceIntroComponent 
            color='yellow'
            title='Cultural Reconnection Programs'
            url='/services'
            description={`We organize events, workshops, and traditional ceremonies that bring African heritage to life.
                  From language classes to cultural immersion activities, our programs allow you to experience
                  Africa as both a visitor and a long-lost family member returning home.`}
          />
        </div>
      </div>
    </section>
  );
};

export default AfricanDiasporaServices;
