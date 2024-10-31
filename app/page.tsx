"use client"

import Start from "@/components/Start";
import { title } from '../components/primitives';
import Jumbotron from "@/components/ui/Jumbotron";

export default function Home() {



  return (
    <main className="  h-full space-y-3 ">
      <Start>

    <span>Unlocking Africa's Potential through</span>
            <br />
            <span>Strategic Commodity Trade and Investment.</span>
       
      </Start>
      <Jumbotron />
    </main>
  );
}
