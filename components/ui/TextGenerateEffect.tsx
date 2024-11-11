"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

import { bebas } from "@/config/fonts";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${bebas.className} text-base-content text-xl font-extrabold opacity-0 md:text-3xl md:leading-tight`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={`font-bold`}>
      <div className="mt-4">
        <div className=" ">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
