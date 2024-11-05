import React from 'react';
import Image from 'next/image';

import AAHAJumbotron from '@/components/ui/AAHAJumbotron';
import PartnerJumbotron from '@/components/ui/PartnerJumbotron';
import ServiceJumbotron from '@/components/ui/ServiceJumbotron';
import { bebas, poppins } from '@/config/fonts';
import { LucideArrowUpRight } from 'lucide-react';

type Props = {};

const ServicePage = (props: Props) => {
  return (
    <section className='min-h-screen h-auto grid   p-5 gap-4'>
      <div className='container mx-auto grid grid-cols-1  rounded-2xl aspect-square md:aspect-video   '>
        <div className=' rounded-3xl flex flex-col justify-center relative'>
          <Image
            src='/images/real-estate3.jpg'
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
        <div className='col-span-1 md:col-span-3 bg-white p-4 md:p-8 rounded-2xl'>
          <div className='md:flex flex-col items-start justify-end h-full space-y-3 '>
            <h1 className='capitalize text-4xl md:text-5xl leading-[2.5rem] max-w-xl  md:leading-[3rem] '>
              Building Made Easy
            </h1>

            <p
              className={`${poppins.className} capitalize  text-gray-500 text-left text-base`}>
              Whether you’re interested in constructing a new property from the
              ground up or buying a pre-built home, our commitment is to guide
              you through each stage, making the process seamless and
              stress-free.
            </p>
          </div>
        </div>
        <div
          className='col-span-1   aspect-square relative bg-black rounded-2xl text-base leading-[1.12rem]
        flex flex-col justify-end text-white p-4 space-y-2'>
          <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
          <h1 className='text-lime-500'>Our ultimate goal</h1>
          <p className={`${poppins.className} text-sm`}>
            Our ultimate goal is to create long-term opportunities for
            individuals and families within the diaspora to secure their future
            by establishing real estate investments and reconnecting with their
            roots
          </p>
        </div>
        <div
          className='col-span-1   aspect-square relative bg-lime-600 rounded-2xl text-base leading-[1.12rem]
        flex flex-col justify-end text-black p-4 space-y-2'>
          <LucideArrowUpRight className='text-white absolute right-3 top-3 ' />
          <h1>Diasporan Empowerment</h1>
          <p className={`${poppins.className} text-sm text-white`}>
            Our mission is to empower individuals and families within the
            diaspora to build lasting opportunities, enabling them to secure
            their futures through meaningful investments and deepen their
            connection to their heritage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
