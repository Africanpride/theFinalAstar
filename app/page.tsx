'use client';

import Start from '@/components/Start';
import { title } from '../components/primitives';
import Jumbotron from '@/components/ui/Jumbotron';
import CallToAction from '@/components/ui/CallToAction';
import ServiceIntroduction from '@/components/ui/ServiceIntroduction';
import Quote from '@/components/ui/Quotes';

export default function Home() {
  return (
    <main className='  h-full'>
      <Start>
        <span>Unlocking Africa's Potential through</span>
        <br />
        <span>Strategic Commodity Trade and Investment.</span>
      </Start>
      <Jumbotron />
      <Quote />
      <ServiceIntroduction />

      <CallToAction />
    </main>
  );
}
