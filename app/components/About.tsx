'use client';

import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link as ScrollLink } from 'react-scroll';
import Button from './Button';
import Link from 'next/link';

const About = () => {
    const features = [
        "Expert Team of Professionals",
        "Innovative Design Solutions",
        "Quality Construction Materials",
        "Timely Project Completion",
        "Customer Satisfaction Guaranteed",
        "Sustainable Building Practices"
    ];

    return (
        <section className="max_padd_container py-20 xl:py-32 bg-white scroll-mt-32" id="about">
            <div className="w-full max-w-[1440px] m-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden group">
                        <Image
                            src="/h1-slider-3.jpg"
                            alt="About Us"
                            fill
                            className="object-cover group-hover:scale-105 transition-all duration-700"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                            <h3 className="bold-32 mb-4">25+ Years of Excellence</h3>
                            <p className="regular-18 text-white">In Construction & Design</p>
                        </div>
                    </div>

                   
                    <div className="space-y-8">
                        <div>
                            <h4 className="inline-flex items-center justify-start bold-18 text-secondary mb-4">
                                <span className="mr-2">About Us</span>
                            </h4>
                            <h2 className="h2 mb-6">Building Dreams Into Reality</h2>
                            <p className="regular-16 text-gray-600 mb-8">
                                At NDES BIM & 3D Visualization, we transform architectural concepts into stunning realities. 
                                With over two decades of experience, we specialize in creating spaces that inspire and endure.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className="bg-secondary p-1 rounded-full mt-1">
                                        <FaCheck className="text-white text-sm" />
                                    </div>
                                    <p className="regular-16 text-gray-600">{feature}</p>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                            <div className="text-center">
                                <h3 className="bold-32 text-secondary mb-2">500+</h3>
                                <p className="regular-16 text-gray-600">Projects Completed</p>
                            </div>
                            <div className="text-center">
                                <h3 className="bold-32 text-secondary mb-2">98%</h3>
                                <p className="regular-16 text-gray-600">Client Satisfaction</p>
                            </div>
                            <div className="text-center">
                                <h3 className="bold-32 text-secondary mb-2">50+</h3>
                                <p className="regular-16 text-gray-600">Expert Team Members</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Scroll Button */}
                <div className="flex justify-center mt-16">
                    <Link href="#services" className="inline-block">
                        <Button
                            type="button"
                            title="EXPLORE MORE"
                            icon={<MdKeyboardDoubleArrowRight size={15} />}
                            variant="btn_secondary_rounded"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About; 