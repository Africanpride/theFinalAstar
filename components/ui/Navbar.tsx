"use client"
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/ui/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
	Logo,
} from "@/components/ui/icons";
import { motion } from "framer-motion";
import { bebas, playfair_display } from "@/config/fonts";
import { LucideArrowUpRight, LucideScanFace } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import { useMediaQuery } from "react-responsive";
import MainLogo from "../MainLogo";

export const Navbar = () => {
    // media query for mobile etc
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  
    const pathname = usePathname();
  
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  
    const handleMenuItemClick = () => {
      setIsMenuOpen(false);
    };

	const searchInput = (
		<Input
			aria-label='Search'
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className='hidden lg:inline-block' keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement='outside'
			placeholder='Search...'
			startContent={
				<SearchIcon className='text-base text-default-400 pointer-events-none flex-shrink-0' />
			}
			type='search'
		/>
	);

	const isDarkMode = useMediaQuery({ query: '(prefers-color-scheme: dark)' });


	return (
		<NextUINavbar 
			className={`navbar ${isMenuOpen ? 'menu-open' : ''} md:py-2`}
			style={{ maxWidth: 'full' }}
		>

			<NavbarContent justify='start' className='md:!px-0'>

				<NavbarBrand>
					<div className='flex justify-between items-center gap-x-2'>
						<Link href={"/"}>
							<NavbarItem className='flex items-center'>
								<motion.div
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
								>
									<MainLogo />
                  
								</motion.div>
								<div
									className={`hidden md:block md:text-md text-sm md:leading-4 px-2 border-s`}
								>
									AStar Trading & Agro 
									<br />
									Processing Company Limited
									
								</div>
							</NavbarItem>
						</Link>
					</div>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className={`${bebas.className} hidden sm:flex gap-x-4  px-16 rounded-full`}
				justify='center'
			>
				{siteConfig.navItems.map((item) => (
					<NavbarItem key={item.href}>
						<NextLink
							className={clsx(
								linkStyles({ color: "foreground" }),
								{
									"data-[active=true]:text-primary data-[active=true]:font-medium hover:text-lime-600":
										true,
									"text-lime-600": pathname === item.href, // Highlight active link
								}
							)}
							color='foreground'
							href={item.href}
						>
							{item.label}
						</NextLink>
					</NavbarItem>
				))}

				<NavbarItem>
					<div className="border-s  px-5 hidden md:flex items-center gap-x-2 ">
						<div className="pt-1">
        					<ThemeSwitch />
						</div>
						
					</div>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify='end'>
				<NavbarItem>
					<div
						className={`${bebas.className} flex items-center gap-x-2 font-medium text-gray-500 hover:text-lime-600 py-2 md:py-0 md:my-6 md:ps-6`}
					>
						<Link href={"/contact"}>
							<Button
								className='uppercase bg-lime-600 text-white rounded-full pl-5 pr-1'
								size={"sm"}
								// color={'success'}
								variant='solid'
								endContent={
									<LucideArrowUpRight className='bg-white  text-black rounded-full' />
								}
							>
								<span className=' text-[0.9rem] '>Get In Touch</span>
							</Button>
						</Link>

					</div>
				</NavbarItem>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className='sm:hidden'
				/>

			</NavbarContent>

			<NavbarMenu>
				<div className='flex flex-col items-start justify-center h-auto pt-[20%]'>
					<motion.ul
						initial='hidden'
						animate='visible'
						variants={{
							hidden: { y: 20 },
							visible: {
								y: 0,
								transition: {
									ease: "easeOut",
									duration: 2,
									staggerChildren: 0.5,
								},
							},
						}}
						className='space-y-2 font-poppins font-extrabold uppercase italic '
					>
						{siteConfig.navItems.map((item, index) => (
							<motion.li
								key={`${item}-${index}`}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
							>
								<Link
									onClick={() =>
										setIsMenuOpen(
											(isMenuOpen) => !isMenuOpen
										)
									}
									className={clsx(
										linkStyles({ color: "foreground" }),
										{
											"data-[active=true]:text-primary data-[active=true]:font-bold hover:text-lime-600 text-lg":
												true,
											"text-lime-600":
												pathname === item.href,
										}
									)}
									color='foreground'
									href={item.href}
								>
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
