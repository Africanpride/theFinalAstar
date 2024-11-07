import { bebas, playfair_display } from "@/config/fonts";
import { LucideMoveDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import BackgroundImageWrapper from "./BackgroundImageWrapper";

type Props = {
  title?: string;
  order?: number;
  children?: React.ReactNode;
};

const Start = ({ title, order = 1, children }: Props) => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    function onScroll({ scroll, limit, velocity, direction, progress }: any) {
    //   console.log(scroll, limit, velocity, direction, progress);
    }
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        autoResize: true,
        scrollCallback: onScroll,
        lenisOptions: {
        //   wrapper: document.querySelector('#scroll-wrapper') as HTMLElement,
        //   content: document.querySelector('#scroll-content') as HTMLElement,
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
    <section className={`${bebas.className} min-h-screen h-dvh grid grid-cols-1 md:grid-cols-3`}>
              <div className={` min-h-dvh relative p-4 md:p-6 order-${order}`}>
        <BackgroundImageWrapper backgroundImage="/images/farmer3.jpg" />

        <div className=" relative h-full flex flex-col justify-between items-start z-10">
          <p className="text-xl text-lime-900 pt-2 leading-[1.25rem]">
          Our vast network, market expertise, and commitment to reliable supply make us a trusted 
          partner in commodity trading
          </p>
          <div data-scroll data-scroll-speed={0.1} className="space-y-4">
            {/* <LucideMove3d className="text-lime-500 text-[2.9em]" /> */}
            <div className="text-[3em] text-white">
              <p className="leading-[0.9em] ">
                Access Our Strategic <br />
                Investment <br /> Opportunities{" "}
              </p>
            </div>

          </div>
        </div>
      </div>
      <div className={`bg-neutral-100 col-span-1 md:col-span-2 min-h-dvh h-full hidden md:flex flex-col justify-between items-start p-4 md:p-6 relative order-${3 - order}`}>
        <div
          className={`${bebas.className} flex items-center justify-between w-full font-bebas`}
        >
          {/* <MainMenu /> */}
          <div className={`text-[1.7em] text-white ${playfair_display.className}`}>
            {title}
          </div>
        </div>

        <div className="flex items-center justify-center max-w-4xl container relative">
          <Image
            src={"/images/world.png"}
            alt="alt"
            width={400}
            height={400}
            className="animation-duration-100 animate-pulse absolute"
            style={{ width: "auto", height: "auto" }}
          />
          <div
            className="text-[3vw] leading-[0.9em] text-lime-800 text-center"
            data-scroll
            data-scroll-speed={0.3}
          >
            {children}
          </div>
        </div>

        <div className="hidden md:block">
          <LucideMoveDown className="animate-bounce w-6 h-6 text-white" />
        </div>
      </div>

    </section>
  );
};

export default Start;