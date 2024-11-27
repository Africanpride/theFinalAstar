'use client';

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { ClerkProvider } from '@clerk/nextjs';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    function onScroll({ scroll, limit, velocity, direction, progress }: any) {
      // console.log(scroll, limit, velocity, direction, progress);
    }
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      // Check if the window width is greater than 768 pixels
      if (window.innerWidth > 768) {
        const locomotiveScroll = new LocomotiveScroll({
          autoResize: true,
          scrollCallback: onScroll,
          lenisOptions: {
            // wrapper: document.querySelector('#scroll-wrapper') as HTMLElement,
            // content: document.querySelector('#scroll-content') as HTMLElement,
            lerp: 0.1,
            duration: 1.2,
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou,
          },
        });
      }

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();

    const paragraphs = document.querySelectorAll('p');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once it has faded in
        }
      });
    });

    paragraphs.forEach((p) => {
      observer.observe(p); // Observe each paragraph
    });
  }, []);

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider
        {...{
          ...themeProps,
          defaultTheme: 'light',
          disableTransitionOnChange: true,
        }}>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
