'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Nav from './Nav';

import { IoMenu, IoClose } from 'react-icons/io5';
import Button from './Button';
import { FaUser } from 'react-icons/fa';
import Image from 'next/image';

const Header = () => {
	const [ active, setActive ] = useState(false);
	const [ menuopened, setMenuOpened ] = useState(false);
	const toggleMenu = () => setMenuOpened(!menuopened);

	useEffect(() => {
		const handleScroll = () => {
			// detect scroll
			setActive(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header
			className={`${active
				? 'bg-black shadow-lg  z-50 px-4'
				: 'bg-black  z-50'} fixed top-0 w-full px-4 z-50 left-0 transition-all duration-200 `}
		>
			<div className="max_padd_container flexBetween">
				{/* logo */}
				<Link href={'/'} className="flexCenter ">
					<Image src={'/primary-logo.png'} alt="logo" height={99} width={133} />
				</Link>
				{/* Nav */}
				<Nav
					containerStyles={'hidden lg:flex gap-x-10 items-start justify-center text-white'}
					linkStyles={'capitalize cursor-pointer my-2 relative transition-all text-white'}
				/>
				{/* nav for mobile */}
				<Nav
					containerStyles={`${menuopened
						? 'flex items-start flex-col  justify-center fixed top-20 p-12 mt-2 bg-white rounded-lg transition-all duration-500 shadow-md right-0 w-60 '
						: 'flex items-start flex-col  justify-center fixed top-20 p-12 mt-2 md:mt-0 bg-white rounded-lg transition-all duration-500 shadow-md right-[-100%] w-60'}`}
					linkStyles={'capitalize cursor-pointer my-4 relative trasition-all'}
				/>
				{/* button */}
				<div className="flexCenter">
					<div className="hidden lg:block">
						<Link href="/contact">
							<Button
								type="button"
								title="get in touch"
								icon={<FaUser size={20} />}
								variant="btn_secondary_rounded"
							/>
						</Link>
					</div>
					{!menuopened ? (
						<IoMenu
							className="lg:hidden inline-block cursor-pointer regular-24 text-white hover:text-secondary "
							onClick={toggleMenu}
						/>
					) : (
						<IoClose
							className="lg:hidden inline-block cursor-pointer regular-24  text-white hover:text-secondary "
							onClick={toggleMenu}
						/>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
