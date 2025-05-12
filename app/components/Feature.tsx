'use client';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import Slider from 'react-slick';
import { FEATURE } from '@/constant';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const Feature = () => {
	const NextArrow = (props: any) => {
		const { onClick } = props;
		return (
			<div
				onClick={onClick}
				className="bg-white text-2xl p-3 inline-block rounded-lg shadow-md absolute top-1/2 right-0 lg:-top-24 lg-right-4 z-10 ring-1 ring-slate-900/5 hover:bg-primary"
			>
				<RiArrowRightSLine />
			</div>
		);
	};
	const PrevArrow = (props: any) => {
		const { onClick } = props;
		return (
			<div
				onClick={onClick}
				className="bg-white text-2xl p-3 inline-block rounded-lg shadow-md absolute top-1/2  lg:-top-24 lg:right-20 z-10 ring-1 ring-slate-900/5 hover:bg-primary"
			>
				<RiArrowLeftSLine />
			</div>
		);
	};
	const settings = {
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	};

	return (
		<section className="max_padd_container py-20 xl:py-32  bg-white" id="services">
			<div className="w-full max-w-[1440px] m-auto px-4">
				<div className="mx-4">
					<h4 className="inline-flex items-center justify-start bold-18 text-secondary">
						<span>
							<MdKeyboardDoubleArrowRight size={23} />
						</span>Our Services
					</h4>
					<h3 className="h3 max-w-lg">Explore our services</h3>
					<p className="max-w-lg">
						NDES BIM & 3D Visualization continues to transform concepts into captivating visual stories,
						helping clients envision the future of residential living with precision and creativity.
					</p>
				</div>
				{/* container */}
				<div className="pt-10">
					<Slider {...settings}>
						{FEATURE.map((feature) => (
							<FeatureItem key={feature.URL} URL={feature.URL} title={feature.title} des={feature.des} />
						))}
					</Slider>
				</div>
			</div>
		</section>
	);
};
type FeatureItem = {
	URL: string;
	title: string;
	des: string;
};

const FeatureItem = ({ title, URL, des }: FeatureItem) => {
	return (
		<div className="mx-4 overflow-hidden group">
			<Link href="/" className="overflow-hidden relative block h-[400px] lg:h-[500px]">
				<div className="relative w-full h-full">
					<Image
						src={URL}
						alt="Image"
						fill
						className="hover:scale-105 transition-all duration-700 overflow-hidden object-cover"
						priority
					/>
				</div>
                <h4 className="capitalize regular-22 absolute top-6 left-0 px-2 py-2 text-gray-400 group-hover:text-secondary rounded-r-full group-hover:bg-white group-hover:!pl-4  transation-all duration-300 ">
					{title}
				</h4>
				<p className="regular-18 absolute bottom-6 right-0 bg-tertiary text-white px-4 py-2 rounded-l-full group-hover:bg-secondary group-hover:!pr-8 transation-all duration-300">
					{des}
				</p>
			</Link>
		</div>
	);
};

export default Feature;
