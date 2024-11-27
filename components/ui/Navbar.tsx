'use client';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import { Kbd } from '@nextui-org/kbd';
import { Link } from '@nextui-org/link';
import { Input } from '@nextui-org/input';
import { link as linkStyles } from '@nextui-org/theme';
import NextLink from 'next/link';
import clsx from 'clsx';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import {
  BookMarked,
  LucideActivity,
  LucideArrowDownToDot,
  LucideArrowUpRight,
  LucideBook,
  LucideBookCheck,
  LucideGlobe,
  LucideGlobeLock,
  LucideHousePlus,
  LucidePlusSquare,
  LucideUser,
  SearchIcon,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';

import { bebas } from '@/config/fonts';
import { siteConfig } from '@/config/site';

import MainLogo from '../MainLogo';

import BlogCard from './BlogCard';

export const Navbar = () => {
  // media query for mobile etc
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const BookMarked = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
        fill='currentColor'>
        <path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z' />
      </svg>
    );
  };

  const searchInput = (
    <Input
      aria-label='Search'
      classNames={{
        inputWrapper: 'bg-default-100',
        input: 'text-sm',
      }}
      endContent={
        <Kbd className='hidden lg:inline-block' keys={['command']}>
          K
        </Kbd>
      }
      labelPlacement='outside'
      placeholder='Search...'
      startContent={
        <SearchIcon className='pointer-events-none shrink-0 text-base text-default-400' />
      }
      type='search'
    />
  );

  const isDarkMode = useMediaQuery({ query: '(prefers-color-scheme: dark)' });

  return (
    <NextUINavbar
      isBlurred={false}
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth='full'
      className={`navbar bg-white ${isMenuOpen ? 'menu-open' : ''} md:py-2`}
      style={{ maxWidth: 'full' }}>
      <NavbarContent justify='start' className='md:!px-0'>
        <NavbarBrand>
          <Link
            href={'/'}
            className='flex items-center justify-between gap-x-2'>
            <NavbarItem className='flex items-center'>
              <MainLogo />
              <span
                className={`md:text-md hidden border-s px-2 text-sm md:block md:leading-4`}>
                Astar Trading & Agro
                <br />
                Processing Company Limited
              </span>
            </NavbarItem>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className={`${bebas.className} hidden gap-x-4 rounded-full px-16  text-3xl sm:flex`}
        justify='center'>
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <NextLink
              className={clsx(linkStyles({ color: 'foreground' }), {
                'data-[active=true]:text-primary data-[active=true]:font-medium hover:text-lime-500':
                  true,
                'text-lime-500': pathname === item.href, // Highlight active link
              })}
              color='foreground'
              href={item.href}>
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}

        <NavbarItem>
          <div className='hidden  items-center gap-x-4 border-s px-5 md:flex '>
            {/* <div className="pt-1">
        					<ThemeSwitch />
						</div> */}

            <Link href='/'>
              <FaLinkedinIn className='text-2xl' />
            </Link>
            <Link href='/'>
              <FaFacebook className='text-2xl' />
            </Link>
            <Link href='/'>
              <FaInstagram className='text-2xl' />
            </Link>
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarItem>
          <div
            className={`${bebas.className} flex items-center gap-x-2 py-2 font-medium text-gray-500 hover:text-lime-500 md:my-6 md:py-0 md:ps-6`}>
            <Link href={'/contact'}>
              <Button
                className='rounded-full bg-lime-500 pl-5 pr-1 uppercase text-white'
                size={'sm'}
                // color={'success'}
                variant='solid'
                endContent={
                  <LucideArrowUpRight className='rounded-full  bg-white text-black' />
                }>
                <span className=' text-[0.9rem] '>Get In Touch</span>
              </Button>
            </Link>
          
          </div>
        </NavbarItem>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
      </NavbarContent>

      <NavbarMenu className='bg-white'>
        <div className='flex h-auto flex-col items-start justify-center pt-[20%]'>
          <motion.ul
            initial='hidden'
            animate='visible'
            variants={{
              hidden: { y: 20 },
              visible: {
                y: 0,
                transition: {
                  ease: 'easeOut',
                  duration: 2,
                  staggerChildren: 0.5,
                },
              },
            }}
            className='font-poppins space-y-2 font-extrabold uppercase  italic'>
            {siteConfig.navItems.map((item, index) => (
              <motion.li
                key={`${item}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  className={clsx(linkStyles({ color: 'foreground' }), {
                    'data-[active=true]:text-primary data-[active=true]:font-bold hover:text-lime-500 text-2xl':
                      true,
                    'text-lime-500': pathname === item.href,
                  })}
                  color='foreground'
                  href={item.href}>
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
