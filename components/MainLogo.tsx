import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

type Props = {
  width?: number;
  height?: number;
};

const MainLogo = (props: Props) => {
  // media query for mobile etc
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // Set default dimensions based on media query
  const logoWidth = isMobile ? 30 : props.width || 90;
  const logoHeight = isMobile ? 30 : props.height || 90;
  return (
    <div>
      <Image
        alt='Astar Trading & Agro Processing Company Limited'
        priority
        src='/images/logo.png'
        width={30}
        height={30}
        sizes='(max-width: 700px) 16vw, 70px'
        style={{
          width: '100%',
          height: 'auto',
        }}
        className='pr-2 rounded-full'
      />
    </div>
  );
};

export default MainLogo;
