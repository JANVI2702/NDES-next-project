'use client';

import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import Button from './Button';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import Link from 'next/link';

const projects = [
	{
		id: 1,
		title: 'Modern Villa Design',
		category: 'Residential',
		image: '/h1-slider-1.jpg'
	},
	{
		id: 2,
		title: 'Commercial Complex',
		category: 'Commercial',
		image: '/h1-slider-2.jpg'
	},
	{
		id: 3,
		title: 'Luxury Apartment',
		category: 'Residential',
		image: '/h1-slider-3.jpg'
	},
	{
		id: 4,
		title: 'Office Building',
		category: 'Commercial',
		image: '/office.jpeg'
	},
	{
		id: 5,
		title: 'Modern Kitchen',
		category: 'Interior',
		image: '/kitchen.jpeg'
	},
	{
		id: 6,
		title: 'Luxury BadRoom',
		category: 'Interior',
		image: '/badroom.jpeg'
	}
];

const Projects = () => {
	return (
		<section className="max_padd_container py-20 xl:py-32 bg-slate-10" id="projects">
			<div className="w-full max-w-[1440px] m-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h4 className="inline-flex items-center justify-center bold-18 text-secondary mb-4">
						<span className="mr-2">Our Projects</span>
					</h4>
					<h2 className="h2 mb-6">Featured Works</h2>
					<p className="regular-16 text-gray-50 max-w-[600px] mx-auto">
						Explore our portfolio of exceptional projects that showcase our expertise in construction and
						design.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<div key={project.id} className="group relative overflow-hidden rounded-lg">
							<div className="relative h-[300px] w-full">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

								{/* Hover Content */}
								<div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<div className="flex items-center justify-between">
										<div>
											<span className="text-white/80 regular-14">{project.category}</span>
											<h3 className="text-white bold-20 mt-1">{project.title}</h3>
										</div>
										<button className="bg-secondary p-3 rounded-full text-white hover:bg-secondary/90 transition-colors">
											<FaSearch className="text-lg" />
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* View More Button */}
				<div className="flex justify-center items-center mt-12">
					<Link href="/projects">
						<Button
							type="button"
							title="VIEW MORE..."
							icon={<MdKeyboardDoubleArrowRight size={15} />}
							variant="btn_secondary_rounded"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Projects;
