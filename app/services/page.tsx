'use client';

import React from 'react';
import Image from 'next/image';
import { FaBuilding, FaHome, FaTools, FaPaintBrush, FaDraftingCompass, FaUsers } from 'react-icons/fa';

const services = [
    {
        id: 1,
        title: 'Architectural Design',
        icon: <FaBuilding className="w-8 h-8" />,
        description: 'Innovative architectural solutions that blend aesthetics with functionality, creating spaces that inspire and endure.',
        image: '/h1-slider-1.jpg'
    },
    {
        id: 2,
        title: 'Interior Design',
        icon: <FaHome className="w-8 h-8" />,
        description: 'Transform your spaces with our expert interior design services, combining style, comfort, and practicality.',
        image: '/h1-slider-2.jpg'
    },
    {
        id: 3,
        title: 'Construction',
        icon: <FaTools className="w-8 h-8" />,
        description: 'Comprehensive construction services delivered with precision, quality, and attention to detail.',
        image: '/h1-slider-3.jpg'
    },
    {
        id: 4,
        title: 'Renovation',
        icon: <FaPaintBrush className="w-8 h-8" />,
        description: 'Breathe new life into existing spaces with our professional renovation and remodeling services.',
        image: '/office.jpeg'
    },
    {
        id: 5,
        title: '3D Visualization',
        icon: <FaDraftingCompass className="w-8 h-8" />,
        description: 'Bring your projects to life with our cutting-edge 3D visualization and rendering services.',
        image: '/kitchen.jpeg'
    },
    {
        id: 6,
        title: 'Project Management',
        icon: <FaUsers className="w-8 h-8" />,
        description: 'Expert project management ensuring your construction projects are completed on time and within budget.',
        image: '/badroom.jpeg'
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section with Background */}
            <div className="relative h-[400px] w-full mt-32">
                <Image
                    src="/h1-slider-1.jpg"
                    alt="Services Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-6">Our Services</h1>
                        <p className="text-white text-xl max-w-3xl mx-auto">
                            Comprehensive construction and design solutions tailored to your needs
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-64 w-full">
                                <div className="absolute inset-0 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="text-white text-2xl font-bold">{service.title}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-secondary p-3 rounded-lg text-white">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                                </div>
                                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                                <button className="text-secondary font-medium hover:text-secondary/80 transition-colors flex items-center gap-2">
                                    Learn More
                                    <span className="text-lg">→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Why Choose Us Section */}
                <div className="mt-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We combine expertise, innovation, and dedication to deliver exceptional results
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-8 rounded-lg ">
                            <h3 className="text-3xl font-bold text-secondary mb-4">25+</h3>
                            <p className="text-lg text-gray-600">Years of Experience</p>
                        </div>
                        <div className="text-center p-8 rounded-lg ">
                            <h3 className="text-3xl font-bold text-secondary mb-4">500+</h3>
                            <p className="text-lg text-gray-600">Projects Completed</p>
                        </div>
                        <div className="text-center p-8 rounded-lg ">
                            <h3 className="text-3xl font-bold text-secondary mb-4">98%</h3>
                            <p className="text-lg text-gray-600">Client Satisfaction</p>
                        </div>
                        <div className="text-center p-8 rounded-lg ">
                            <h3 className="text-3xl font-bold text-secondary mb-4">50+</h3>
                            <p className="text-lg text-gray-600">Expert Team Members</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 