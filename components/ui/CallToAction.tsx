import {
  LucideArrowUpRight,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';

import { bebas } from '@/config/fonts';

export default function CallToAction() {
  return (
    <section className='w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        {/* Image Column */}
        <div className='relative h-[400px] md:h-full'>
          <Image
            src='/images/calltoaction2.jpg'
            alt='Laboratory professional at work'
            layout='fill'
            className='absolute inset-0 size-full object-cover'
          />
        </div>

        {/* Content Column */}
        <div className='flex flex-col justify-center bg-blue-950 p-8 md:p-12 lg:p-16'>
          <div className='max-w-md'>
            <h2 className={`mb-8 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl ${bebas.className}`}>
              Join a thriving network.
              <br />
              Stay connected to Growth and Oppportunity.
            </h2>

            <form className='space-y-8'>
              <div className='relative'>
                <Input
                  type='email'
                  placeholder='Your Email Address'
                  className='w-full  border-0 py-8 text-lg focus:ring-2 focus:ring-white'
                  required
                  aria-label='Email Address'
                />
                <Button
                  className='w-full rounded-full bg-lime-600 pl-5 pr-1 uppercase text-white'
                  size={'lg'}
                  // color={'success'}
                  variant='solid'
                  endContent={
                    <LucideArrowUpRight className='rounded-full  bg-white text-black' />
                  }>
                  <span className=' text-[1.2rem] '>Subscribe</span>
                </Button>
              </div>

              <p className='text-lg text-white/90'>
                Subscribe for updates, news, events, and community resources.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
