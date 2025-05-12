import Image from 'next/image';
import React from 'react';
import Button from './Button';
import { FaUser } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import Link from 'next/link';

const Hero = () => {
	return (
		<section
			className="hero-container w-full flex-col mt-32 sm:mt-[132px]  relative flexCenter md:h-screen"
			id="home"
		>
			<div className="absolute h-full w-full bg-[#2f6a7f2f] top-0 bottom-0 z-10" />
			<Image
				src={'/h1-slider-2.jpg'}
				alt=""
				layout="fill"
				objectFit="cover"
				className="absolute top-0 bottom-0 left-0 right-0 z-0 "
			/>
			{/* content */}
			<div className="w-full h-max  flex items-center justify-center   gap-y-3    z-20 ">
				<div className="px-0 py-8 md:py-0 text-white   ">
					<p className="uppercase  font-bold  md:regular-18  text-black  md:tracking-widest">
						Best Visulization export
					</p>
					<h1 className=" h2 max-width-[777px] inline-block  ">
						Building Your Vision with <span className="text-secondary">"NDES"</span>
					</h1>
					<div className="block">
						<Link href="#about" className="inline-block">
							<Button
								type="button"
								title="EXPLORE"
								icon={<MdKeyboardDoubleArrowRight size={15} />}
								variant="btn_secondary_rounded"
							/>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
