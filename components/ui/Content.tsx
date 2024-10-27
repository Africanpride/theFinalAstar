import Link from 'next/link'
import React from 'react'
import { siteConfig } from '../../config/site';

export default function Content() {
    return (
        <div className='bg-[#4E4E5A] py-8 px-12  h-full w-full flex flex-col justify-between'>
            <Nav />
            <Section2 />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-[14vw] leading-[0.8] mt-10'>Strategic Voter</h1>
            <Link href={'/'}>{siteConfig.year} &copy; copyright</Link>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>About</h3>
                <Link href={'/about'}>About Author</Link>
                <Link href={'/'}>Projects</Link>
                <Link href={'/'}>Our Mission</Link>
                <Link href={'/'}>Contact Us</Link>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Affiliations</h3>
                <Link href={'/'}>COSTrAD</Link>
                <Link href={'/'}>Gapnet</Link>
                <Link href={'/'}>Logos-Rhema Foundation</Link>
            </div>
        </div>
    )
}