import React from 'react'
import Content from './Content';
import { bebas } from '@/config/fonts';

export default function Footer() {
  return (
    <div
      className={`${bebas.className} relative h-[50dvh] md:h-screen` }
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className='fixed bottom-0 h-[50dvh] md:h-screen w-full'>
        <Content />
      </div>
    </div>
  )
}