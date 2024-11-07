"use client"
import Link from 'next/link'
import React, { useRef } from 'react'
import { siteConfig } from '../../config/site';
import Marquee from './marquee';
import { bebas } from '@/config/fonts';



export default function Content() {
    return (
        <div className='bg-lime-600 py-8 px-12  h-full w-full flex flex-col justify-between'>
            <Nav />
            <Section2 />
        </div>
    )
}

const Section2 = () => {
    const firstText = useRef(null);
    const secondText = useRef(null);

    return (

        <div className='flex justify-between items-end relative text-neutral-100 '>

            <div className='text-[3rem] leading-[0.8] mt-10 absolute -left-14  bottom-5  '>

                <div className="w-full opacity-35 text-lime-200 hidden md:block  ">
                    <Marquee className=' ' speed={70} >
                        <p ref={firstText}> AStar Trading & Agro Processing Co. Ltd. &#x2014;  </p>
                        <p ref={secondText}> AStar Trading & Agro Processing Co. Ltd. &#x2014;  </p>
                    </Marquee>
                </div>
            </div>
            <div className='w-full md:flex items-center justify-between pt-10'>
                <div>
                    <Link href={'/'}>{siteConfig.year} &copy; copyright &#x2014; All Rights Reserved.</Link>
                </div>
                <div className='flex items-center gap-10'>
                    <Link href={'/'}>LinkedIn</Link>
                    <Link href={'/'}>Facebook</Link>
                    <Link href={'/'}>Instagram</Link>
                </div>
            </div>
        </div>
    )
}

const Nav = () => {
    return (
        <div className={`${bebas.className} flex md:flex-row flex-col items-start shrink-0 gap-8 md:gap-12 z-50
         md:pt-[20dvh] text-neutral-300`}>
            <div className='flex flex-col'>
                <h3 className='mb-2 uppercase text-2xl text-white'>About</h3>
                <Link href={'/about'}>About Us</Link>
                <Link href={'/news'}>News</Link>
                <Link href={'/contact'}>Contact Us</Link>
            </div>
            <div className='flex flex-col'>
                <h3 className='mb-2 uppercase text-2xl text-white'>Disclaimers</h3>
                <Link href={'/privacy'}>Privacy Policy</Link>
                <Link href={'/cookies'}>Cookie Policy</Link>
                <Link href={'/terms'}>Terms & Conditions</Link>
            </div>
            <div className='flex flex-col'>
                <h3 className='mb-2 uppercase text-2xl text-white'>Services</h3>
                <Link href={'/services'}>Agriculture</Link>
                <Link href={'/services'}>Minerals & Natural Resources</Link>
                <Link href={'/services'}>Technology</Link>
            </div>
            <div className='flex flex-col'>
                <h3 className='mb-2 uppercase text-2xl text-white'>Partners</h3>
                <Link href={'/real-estate'}>Real Estate</Link>
                <Link href={'/african-diaspora-126-plus'}>Africa Diaspora 126+</Link>
                <Link href={'/aaha'}>Access Africa Home & Abroad (AAHA)</Link>
            </div>
        </div>
    )
}