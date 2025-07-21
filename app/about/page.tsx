'use client';

import React from 'react';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

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
        <main className="min-h-screen bg-white">
          
            <div className="relative h-[400px] w-full mt-32">
                <Image
                    src="/h1-slider-3.jpg"
                    alt="About Us Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-6">About Us</h1>
                        <p className="text-xl max-w-3xl mx-auto text-white">
                            Building Dreams Into Reality with Excellence and Innovation
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    {/* Image Section */}
                    <div className="relative h-[500px] rounded-lg overflow-hidden group">
                        <Image
                            src="/h1-slider-3.jpg"
                            alt="About Us"
                            fill
                            className="object-cover group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                            <h3 className="text-3xl font-bold mb-4">25+ Years of Excellence</h3>
                            <p className="text-white text-lg">In Construction & Design</p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-10">
                        <div>
                            <h4 className="text-secondary font-semibold text-lg mb-4">
                                About Us
                            </h4>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Building Dreams Into Reality</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                At NDES BIM & 3D Visualization, we transform architectural concepts into stunning realities. 
                                With over two decades of experience, we specialize in creating spaces that inspire and endure.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="bg-secondary p-2 rounded-full mt-1">
                                        <FaCheck className="text-white text-sm" />
                                    </div>
                                    <p className="text-lg text-gray-600">{feature}</p>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-secondary mb-3">500+</h3>
                                <p className="text-lg text-gray-600">Projects Completed</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-secondary mb-3">98%</h3>
                                <p className="text-lg text-gray-600">Client Satisfaction</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-secondary mb-3">25+</h3>
                                <p className="text-lg text-gray-600">Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div className=" p-10 rounded-lg shadow-lg">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            To deliver exceptional construction and design solutions that exceed client expectations 
                            while maintaining the highest standards of quality, safety, and sustainability.
                        </p>
                    </div>
                    <div className=" p-10 rounded-lg shadow-lg">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            To be the leading force in innovative construction and design, creating spaces that 
                            inspire and enhance the lives of our clients and communities.
                        </p>
                    </div>
                </div>

                {/* Team Section */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Leadership Team</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Meet the experienced professionals who lead our company with expertise and passion.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default About; 