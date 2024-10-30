"use client"

import Start from "@/components/Start";
import { title } from '../components/primitives';
import Jumbotron from "@/components/ui/Jumbotron";

export default function Home() {



  return (
    <main className="  h-full space-y-3 ">
      <Jumbotron />
      <Start />
      <Start title="Mining Services" />
    </main>
  );
}
