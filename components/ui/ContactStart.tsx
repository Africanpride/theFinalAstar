'use client';
import { bebas, poppins } from '@/config/fonts';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { GoogleMap } from './GoogleMap';
import OpenStreetMap from './OpenStreetMap';

type Props = {};

const ContactStart = (props: Props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Network response was not ok');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className='min-h-dvh h-auto z-20 pb-5 text-xl'>
      <div className='grid grid-cols-1 md:grid-cols-3 p-4'>
        <div
          className='md:rounded-2xl  bg-neutral-200 col-span-1 h-auto  p-4
        flex flex-col justify-start md:justify-center items-center py-8 md:p-6'>
          <div className={`${bebas.className} text-3xl p5-5 m-5 `}>
            Let us Connect and Build Africa’s Future Together.
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='w-full space-y-4'>
            <Input {...register('name')} placeholder='Name' required />
            <Input
              {...register('email')}
              placeholder='Email'
              type='email'
              required
            />
            <Input {...register('company')} placeholder='Company' />
            <textarea
              {...register('message')}
              placeholder='Send us a Message'
              className='border p-2 w-full rounded-xl min-h-16'
              
            />
            <Button
              color='success'
              radius='full'
              type='submit'
              className='w-full mt-4  text-white p-2'>
              Submit
            </Button>
          </form>
        </div>

        <div className='md:col-span-2 h-auto min-h-full p-4 md:p-16 text-base '>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4'>
            <div>
              <div className={`${bebas.className} text-3xl block`}>
                Our Office Location
              </div>
              <p className=' block'>178 Otswe Street, <br /> Osu, Accra - Ghana</p>
            </div>

            <div>
              <div className={`${bebas.className} text-3xl block`}>
                Contact Details
              </div>
              <p className=' block'>
                Email: info@astar-trade.com <br /> Phone: (+233) 26 917 3378
              </p>
            </div>
          </div>

          <div className='block pt-12'>
            <GoogleMap />
            {/* <OpenStreetMap /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactStart;
