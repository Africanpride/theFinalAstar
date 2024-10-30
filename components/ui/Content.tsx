"use client"
import Link from 'next/link'
import React, { useCallback, useLayoutEffect, useRef } from 'react'
import { siteConfig } from '../../config/site';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Marquee from './marquee';



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
    const slider = useRef(null);
    let xPercent = 0;
    const directionRef = useRef(-1);

    const animate = useCallback(() => {
        if (xPercent < -100) {
            xPercent = 0;
        }
        else if (xPercent > 0) {
            xPercent = -97;
        }
        gsap.set(firstText.current, { xPercent: xPercent })
        gsap.set(secondText.current, { xPercent: xPercent })
        requestAnimationFrame(animate);
        xPercent += 0.1 * directionRef.current;
    }, []);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => directionRef.current = e.direction * -1
            },
            x: "-500px",
        })
        requestAnimationFrame(animate);
    }, [animate])

    return (

        <div className='flex justify-between items-end relative '>

            <div className='text-[2rem] leading-[0.8] mt-10 absolute -left-14 bottom-5 '>

                <div className="w-full opacity-80 text-lime-200">
                    <Marquee className=' ' speed={70} >
                        <p ref={firstText}> AStar Trading & Agro Processing Co. Ltd. &#x2014;  </p>
                        <p ref={secondText}> AStar Trading & Agro Processing Co. Ltd. &#x2014;  </p>
                    </Marquee>
                </div>
            </div>
            <div className='w-full md:flex items-center justify-between'>
                <div>
                    <Link href={'/'}>{siteConfig.year} &copy; copyright &#x2014; All Rights Reserved.</Link>
                </div>
                <div className='flex items-center gap-10'>
                    <Link href={'/'}>LinkedIn</Link>
                    <Link href={'/'}>Facebook</Link>
                    <Link href={'/'}>Twitter</Link>
                </div>
            </div>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex items-start shrink-0 gap-12 z-50 md:pt-[20dvh]'>
            <div className='flex flex-col'>
                <h3 className='mb-2 uppercase text-white'>About</h3>
                <Link href={'/about'}>About Us</Link>
                <Link href={'/'}>Projects</Link>
                <Link href={'/'}>Our Mission</Link>
                <Link href={'/'}>Contact Us</Link>
            </div>
            <div className='flex flex-col'>
                <h3 className='mb-2 uppercase text-white'>Quick Links</h3>
                <Link href={'/privacy'}>Privacy Policy</Link>
                <Link href={'/cookie'}>Cookie Policy</Link>
                <Link href={'/terms'}>Terms & Conditions</Link>
            </div>
            <div className='flex flex-col'>
                <h3 className='mb-2 uppercase text-white'>Services</h3>
                <Link href={'/agriculture'}>Agriculture</Link>
                <Link href={'/natural-resources'}>Minerals & Natural Resources</Link>
                <Link href={'/real-estate'}>Real Estate</Link>
                <Link href={'/technology'}>Technology</Link>
            </div>
        </div>
    )
}