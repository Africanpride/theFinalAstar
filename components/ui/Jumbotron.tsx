import { LucideBuilding, LucideDam, LucideFactory, LucideTheater } from 'lucide-react';
import React from 'react';
import ServiceCard from './ServiceCard';
import { Button } from '@nextui-org/button';
import ServiceCardWithBackgroundImage from './ServiceCardWithBackgroundImage';
import { bebas } from '@/config/fonts';

type Props = {};

const Jumbotron = (props: Props) => {
  return (
    <section className={`${bebas.className} container mx-auto  h-auto py-8  rounded-2xl `}>
      <div className='flex flex-col justify-between h-auto '>
        <div>
          <>
            {/* Hero */}
            <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
              <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10'>
                {/* Announcement Banner */}
                <div className='flex justify-center'></div>
                {/* End Announcement Banner */}

                {/* Title */}
                <div className='mt-5 max-w-5xl text-center mx-auto'>
                  <h1
                    className={`${bebas.className} block  text-gray-800 text-3xl md:text-5xl lg:text-5xl dark:text-neutral-100`}
                    data-scroll
                    data-scroll-speed={0.0}>
                    At ASTAR LLC, we believe in Africa’s vast potential and are
                    committed to unlocking opportunities through strategic
                    commodity trading and investment.
                  </h1>
                </div>
                {/* End Title */}

                {/* End Buttons */}
              </div>
            </div>
            {/* End Hero */}
          </>
        </div>

        <div
          className='grid grid-cols-1 md:grid-cols-6 align-baseline gap-4 p-4 h-auto py-12'>
          <ServiceCard text='Intra-African Trade Facilitation' />
          <ServiceCardWithBackgroundImage backgroundImage='farmer.jpg' />
          <ServiceCard text='Investment Opportunities' icon={<LucideTheater />} />
          <ServiceCardWithBackgroundImage />
          <ServiceCard text='Commodity Trading ' icon={<LucideBuilding />} />
          <ServiceCardWithBackgroundImage backgroundImage='vision3.jpg' />
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
