'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { LucideArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { bebas } from '@/config/fonts';
import toast, { Toaster } from 'react-hot-toast';
// import GoogleCaptchaWrapper from '../GoogleCaptchaWrapper';
// import {
//   GoogleReCaptchaContext,
//   useGoogleReCaptcha,
// } from 'react-google-recaptcha-v3';
import axios from 'axios';

interface NewsletterForm {
  firstname: string;
  lastname: string;
  email: string;
}

export default function CallToAction() {
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');
  // const { executeRecaptcha } = useGoogleReCaptcha();

  // useEffect(() => {
  //   let timeoutId: NodeJS.Timeout;

  //   const loadToken = async () => {
  //     if (!executeRecaptcha) {
  //       console.error('reCAPTCHA not initialized');
  //       return;
  //     }

  //     try {
  //       const token = await executeRecaptcha('inquirySubmit');
  //       if (token) {
  //         setToken(token);
  //         handleCaptchaSubmission(token);
  //       }
  //     } catch (error) {
  //       console.error('Error executing reCAPTCHA:', error);
  //     }
  //   };

  //   if (executeRecaptcha) {
  //     loadToken();
  //     // Refresh token every 2 minutes
  //     timeoutId = setInterval(loadToken, 120000);
  //   }

  //   return () => {
  //     if (timeoutId) clearInterval(timeoutId);
  //   };
  // }, [executeRecaptcha]);

  // check the recaptcher response
  async function handleCaptchaSubmission(token: string | null) {
    try {
      const response = await axios.post('/api/recaptchaVerification/', {
        token,
      });
      if (response.status !== 200) {
        toast.error('Verification failed ...');
        return;
      }
      setIsVerified(true);
    } catch (error) {
      setIsVerified(false);
      console.error('Verification failed:', error);
    }
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterForm>({
    defaultValues: { firstname: '', lastname: '', email: '' },
  });

  const onSubmit: SubmitHandler<NewsletterForm> = async (data) => {
    // if (!isVerified) {
    //   toast.error('Please wait for verification...', {
    //     duration: 4000,
    //     position: 'top-center',
    //   });
    //   return;
    // }

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, token }),
      });

      if (response.ok) {
        toast.success('Subscription successful!', {
          duration: 4000,
          position: 'top-center',
        });
        reset();
      } else {
        toast.error('Failed to create subscription.', {
          duration: 4000,
          position: 'top-center',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred while submitting the form.');
    }
  };
  return (
    <section className='w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        {/* Image Column */}
        <div className='relative h-[400px] md:h-full'>
          <Image
            src='/images/calltoaction2.jpg'
            alt='Astar trading professionals at work'
            fill={true}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{ objectFit: 'cover' }}
            className='absolute inset-0 z-10'
            quality={100}
          />
        </div>
        {/* Content Column */}
        <div className='flex flex-col justify-center items-center bg-blue-950 p-4 md:p-8 lg:p-12'>
          <div className='py-8'>
            <h2
              className={`mb-8 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl ${bebas.className}`}>
              Join a thriving network.
              <br />
              Stay connected to Growth and Opportunity.
            </h2>
            <form
              id='newsletter'
              onSubmit={handleSubmit(onSubmit)}
              className='space-y-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  {' '}
                  <Input
                    {...register('firstname', { required: 'First Name is required' })}
                    placeholder='Your Name'
                    className='w-full rounded-none border-0 focus:ring-2 focus:ring-white'
                    aria-label='firstname'
                  />
                  {errors.firstname && (
                    <p className='text-red-500'>{errors.firstname.message}</p>
                  )}
                </div>
                <div>
                  {' '}
                  <Input
                    {...register('lastname', { required: 'Last Name is required' })}
                    placeholder='Your Name'
                    className='w-full rounded-none border-0 focus:ring-2 focus:ring-white'
                    aria-label='lastname'
                  />
                  {errors.lastname && (
                    <p className='text-red-500'>{errors.lastname.message}</p>
                  )}
                </div>
              </div>

              <Input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address',
                  },
                })}
                placeholder='Your Email Address'
                type='email'
                className='w-full rounded-none border-0 focus:ring-2 focus:ring-white'
                aria-label='Email Address'
              />
              {errors.email && (
                <p className='text-red-500'>{errors.email.message}</p>
              )}

              <Button
                type='submit'
                className='w-full rounded-full mt-5 bg-lime-600 uppercase text-white'
                size='lg'
                variant='solid'
                // isDisabled={!isVerified}
                endContent={
                  <LucideArrowUpRight className='rounded-full bg-white text-black' />
                }>
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
      {/* Toaster */}
      <Toaster position='bottom-center' reverseOrder={false} />
    </section>
  );
}
