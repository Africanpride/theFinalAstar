import {
  ArrowRight,
  LucideArrowUpRight,
  LucideSquareArrowRight,
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
            className='absolute inset-0 w-full h-full object-cover'
          />
        </div>

        {/* Content Column */}
        <div className='bg-blue-950 p-8 md:p-12 lg:p-16 flex flex-col justify-center'>
          <div className='max-w-md'>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight ${bebas.className}`}>
              Join a thriving network.
              <br />
              Stay connected to Growth and Oppportunity.
            </h2>

            <form className='space-y-8'>
              <div className='relative'>
                <Input
                  type='email'
                  placeholder='Your Email Address'
                  className='w-full  border-0 focus:ring-2 focus:ring-white py-8 text-lg'
                  required
                  aria-label='Email Address'
                />
                <Button
                  className='uppercase bg-lime-600 text-white w-full rounded-full pl-5 pr-1'
                  size={'lg'}
                  // color={'success'}
                  variant='solid'
                  endContent={
                    <LucideArrowUpRight className='bg-white  text-black rounded-full' />
                  }>
                  <span className=' text-[1.2rem] '>Subscribe</span>
                </Button>
              </div>

              <p className='text-white/90 text-lg'>
                Subscribe for updates, news, events, and community resources.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
