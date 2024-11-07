import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Slider from '@/components/ui/Slider';
import { LucideArrowLeft, LucideArrowRight } from 'lucide-react';

type Props = {};

const MainSlider = (props: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay({
    delay: 9000
  })]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container relative'>
        <div className='embla__slide'>
          <Slider image='farming.jpg' />
        </div>
        <div className='embla__slide'>
          <Slider
            description='Lobbying for policies that recognize and facilitate the return of diasporas to their ancestral homes.'
            link='/african-diaspora-126-plus'
          />
        </div>
        <div className='embla__slide'>
          <Slider
            image='airport2.jpg'
            link='/aaha'
            heading='Unlock Opportunities Abroad'
            description='Helping individuals pursue opportunities abroad, whether for 
            work, education, or specialized training.'
          />
        </div>
      </div>
      <div className='absolute bottom-4 right-5 md:right-16 flex items-center gap-x-4 z-10 '>
        <button
          className='embla__prev h-auto p-2 aspect-square bg-lime-600 hover:bg-lime-500 rounded-full '
          onClick={scrollPrev}>
          <LucideArrowLeft className='text-white' />
        </button>
        <button
          className='embla__next  h-auto p-2 aspect-square bg-lime-600 hover:bg-lime-500 rounded-full '
          onClick={scrollNext}>
          <LucideArrowRight className='text-white' />
        </button>
      </div>
    </div>
  );
};

export default MainSlider;
