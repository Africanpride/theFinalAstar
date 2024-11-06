'use client';
import { bebas, poppins } from '@/config/fonts';
import React, { useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import { LucideBadgeCheck } from 'lucide-react';
import { GoogleMap } from '@/components/ui/GoogleMap';

interface InputsData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<InputsData>({
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  });
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');
  const { executeRecaptcha } = useGoogleReCaptcha();

  const checkForToken = useCallback(async () => {
    if (!token && executeRecaptcha) {
      try {
        const recaptchaToken = await executeRecaptcha('inquirySubmit');
        if (recaptchaToken) {
          // console.log("Token received from Google::::::::", recaptchaToken);
          setToken(recaptchaToken); // Set the token in state
          // verify token with handleCaptchaSubmission
          handleCaptchaSubmission(recaptchaToken);
        }
      } catch (error) {
        console.error('Error executing reCAPTCHA:', error);
      }
    } else {
      // console.log("Token already present or executeRecaptcha not available");
    }
  }, [token, executeRecaptcha]);

  // checkForToken();

  // // Call the checkForToken function when the component mounts or when executeRecaptcha changes
  useEffect(() => {
    // console.log("EXECUTING USEEFECT...")
    checkForToken();
  }, [checkForToken]);

  //   // verify token and then submit form
  //   // const response = await handleCaptchaSubmission(recaptchaToken)
  // }, [checkForToken]);

  async function notifyAllParties(
    firstName: string,
    email: string,
    gdueMemberId: string
  ) {
    try {
      const response = await fetch('/api/notification/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, email, gdueMemberId }),
      });

      if (response.ok) {
        return;
      } else {
        console.error('Notification not sent successfully');
      }
    } catch (error) {
      console.error('An error occurred while sending the notification:', error);
    }
  }

  async function handleCaptchaSubmission(token: string | null) {
    const response = axios
      .post('/api/recaptchaVerification/', { token })
      .then(function (response) {
        if (response.status !== 200) {
          toast.error('Verification failed ...');
          return;
        }

        setIsVerified(true);
      })
      .catch(function (error) {
        setIsVerified(false);
        console.error('Verification failed:', error);
      });
  }

  const onSubmit: SubmitHandler<InputsData> = async (
    data: InputsData | undefined
  ) => {
    // Create a promise for the axios request
    const myPromise = axios.post('/api/notification/', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Use toast.promise to handle the toast notifications
    toast.promise(
      myPromise,
      {
        loading: 'Submitting your Message...',
        success: (response) => {


          // Log the membershipNumber
          // console.log('Membership Number:', membershipNumber);
          // reset();
          // window.location.reload();
          return 'Your Message has been delivered. ';
        },
        error: (err) => {
          if (axios.isAxiosError(err)) {
            if (err.response) {
              // Handle specific status codes
              if (err.response.status === 409) {
                return 'Message already sent!';
              }
              return 'Submission Error. Contact Astar Trading on info@astar-trading.com';
            } else {
              return 'Submission Error. Contact Astar Trading on info@astar-trading.com';
            }
          } else {
            return 'An unexpected error occurred. Please try again later.';
          }
        },
      },
      {
        style: {
          minWidth: '250px',
        },
        success: {
          duration: 18000,
          icon: <LucideBadgeCheck color='limegreen' />,
        },
      }
    );

    try {
      // Await the promise to ensure that errors are caught
      await myPromise;
      // wait a while and reload the page
      setTimeout(() => {
        window.location.reload();
      }, 5000);
      // window.location.reload();
    } catch (error) {
      // Additional error handling (if needed)
      console.error('Submission failed:', error);
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
              isLoading={!isVerified} // Button shows loading until isVerified is true
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
              <p className=' block'>
                178 Otswe Street, <br /> Osu, Accra - Ghana
              </p>
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
}
