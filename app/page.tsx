"use client"
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { bebas } from "@/config/fonts";
import Image from "next/image";
import { ThemeSwitch } from "@/components/theme-switch";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useCallback, useLayoutEffect } from "react";
import { LucideAArrowDown, LucideAlignLeft, LucideAlignRight, LucideArrowBigDown, LucideMove3d, LucideMoveDown } from "lucide-react";
import Menu from "@/components/ui/Menu";

export default function Home() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }


  return (
    <main className="  h-full ">
      <section className="min-h-screen h-dvh grid grid-cols-1 md:grid-cols-3 ">
        <div className="bg-gray-700 col-span-1 md:col-span-2 min-h-dvh h-full flex flex-col justify-between items-start p-4 md:p-6 relative">

          <div className={`${bebas.className} flex items-center justify-between w-full font-bebas`}>
            <div className="text-[1.2em]">The Strategic Voter</div>
            <Menu />
          </div>

          <div className="flex items-center justify-center max-w-4xl container relative">
            <Image src={'/images/globe.png'} alt="alt" width={400} height={400} className=" animation-duration-100 animate-pulse absolute  "

            />
            <div className="text-[3vw] leading-[0.9em] text-white text-center" data-scroll data-scroll-speed={0.2}>
              <span >A profound exploration of the strategic thinking</span><br />
              <span>behind informed voting decisions.</span>
            </div>
          </div>

          <div className="hidden md:block">
            <LucideMoveDown className="animate-bounce w-6 h-6" />
          </div>

        </div>
        <div className="bg-yellow-700 min-h-dvh relative p-2">
          <div className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/images/abubako.jpg")',
              filter: 'contrast(118%) brightness(124%) saturate(2)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '100%',
              minHeight: '100%',
              width: '100%',
              minWidth: '100%',
              position: 'absolute',
            }}>
          </div>

          <div className=" relative h-full flex flex-col justify-between items-start z-10">

            <p className='text-md text-yellow-500 '>THE KINGDOM PATTERNS SERIES &#x2014; VOLUME ONE</p>
            <div data-scroll data-scroll-speed={0.1} className="space-y-4">
              <LucideMove3d className="text-yellow-500 text-[2.9em]" />
              <div className="text-[3em] text-white">
                <p className="leading-[0.9em] ">The <br />Strategic <br />  Voter </p>
              </div>
              <div>
                <p className='text-md text-yellow-500 '>&mdash; Authored By: Dr. Abu Bako</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
