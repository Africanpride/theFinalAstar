import { bebas, playfair_display } from "@/config/fonts";
import { LucideMoveDown, LucideMove3d } from "lucide-react";
import Image from "next/image";
import React from "react";
import MainMenu from "./ui/Menu";
import BackgroundImageWrapper from "./BackgroundImageWrapper";

type Props = {};

const Start = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    function onScroll({ scroll, limit, velocity, direction, progress }: any) {
      console.log(scroll, limit, velocity, direction, progress);
    }
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        autoResize: true,
        scrollCallback: onScroll,
        lenisOptions: {
          wrapper: window,
          content: document.documentElement,
          lerp: 0.1,
          duration: 1.2,
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou,
        },
      });

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <section className="min-h-screen h-dvh grid grid-cols-1 md:grid-cols-3 ">
              <div className="bg-lime-700 min-h-dvh relative p-4 md:p-6">
        <BackgroundImageWrapper backgroundImage="/images/abubako.jpg" />

        <div className=" relative h-full flex flex-col justify-between items-start z-10">
          <p className="text-md text-lime-500 pt-2">
            THE KINGDOM PATTERNS SERIES &#x2014; VOLUME ONE
          </p>
          <div data-scroll data-scroll-speed={0.1} className="space-y-4">
            <LucideMove3d className="text-lime-500 text-[2.9em]" />
            <div className="text-[3em] text-white">
              <p className="leading-[0.9em] ">
                The <br />
                Strategic <br /> Voter{" "}
              </p>
            </div>
            <div>
              <p className="text-md text-lime-500 ">
                &mdash; Authored By: Dr. Abu Bako
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 col-span-1 md:col-span-2 min-h-dvh h-full flex flex-col justify-between items-start p-4 md:p-6 relative">
        <div
          className={`${bebas.className} flex items-center justify-between w-full font-bebas`}
        >
          <MainMenu />
          <div className={`text-[1.7em] ${playfair_display.className}`}>
            The Strategic Voter
          </div>
        </div>

        <div className="flex items-center justify-center max-w-4xl container relative">
          <Image
            src={"/images/globe.png"}
            alt="alt"
            width={400}
            height={400}
            className=" animation-duration-100 animate-pulse absolute  "
          />
          <div
            className="text-[3vw] leading-[0.9em] text-white text-center"
            data-scroll
            data-scroll-speed={0.3}
          >
            <span>A profound exploration of the strategic thinking</span>
            <br />
            <span>behind informed voting decisions.</span>
          </div>
        </div>

        <div className="hidden md:block">
          <LucideMoveDown className="animate-bounce w-6 h-6" />
        </div>
      </div>

    </section>
  );
};

export default Start;
