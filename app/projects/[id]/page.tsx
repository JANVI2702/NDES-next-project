import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

interface ProjectDetails {
    title: string;
    category: string;
    image: string;
    description: string;
    fullDescription: string;
    details: {
        client: string;
        location: string;
        completion: string;
        size: string;
        type: string;
    };
    features: string[];
    gallery: string[];
}

interface ProjectDetailsMap {
    [key: string]: ProjectDetails;
}

// This would typically come from a database or API
const projectDetails: ProjectDetailsMap = {
    "1": {
        title: 'Modern Villa Design',
        category: 'Residential',
        image: '/h1-slider-1.jpg',
        description: 'A stunning modern villa design with contemporary architecture and luxurious amenities.',
        fullDescription: `This modern villa project showcases the perfect blend of contemporary design and luxurious living. 
        The property features an open-concept layout, floor-to-ceiling windows, and sustainable materials throughout.
        
        The design incorporates smart home technology, energy-efficient systems, and premium finishes to create a 
        sophisticated living space that meets the highest standards of modern architecture.`,
        details: {
            client: 'Private Client',
            location: 'Beverly Hills, CA',
            completion: '2023',
            size: '8,500 sq ft',
            type: 'Residential Villa'
        },
        features: [
            'Smart Home Integration',
            'Solar Power System',
            'Home Automation',
            'Security System',
            'Landscaped Garden',
            'Swimming Pool'
        ],
        gallery: [
            '/h1-slider-1.jpg',
            '/h1-slider-2.jpg',
            '/h1-slider-3.jpg',
            '/office.jpeg',
            '/kitchen.jpeg',
            '/badroom.jpeg'
        ]
    },
    "2": {
        title: 'Commercial Complex',
        category: 'Commercial',
        image: '/h1-slider-2.jpg',
        description: 'State-of-the-art commercial complex designed for optimal business operations.',
        fullDescription: `This commercial complex represents the pinnacle of modern business architecture. 
        The design focuses on creating an efficient, productive, and inspiring workspace for businesses of all sizes.
        
        The complex features advanced technology integration, sustainable design elements, and flexible spaces 
        that can adapt to various business needs.`,
        details: {
            client: 'Corporate Client',
            location: 'Downtown Business District',
            completion: '2023',
            size: '50,000 sq ft',
            type: 'Commercial Complex'
        },
        features: [
            'Smart Building Management',
            'Energy-Efficient Systems',
            'Flexible Office Spaces',
            'Advanced Security',
            'Parking Facility',
            'Green Spaces'
        ],
        gallery: [
            '/h1-slider-2.jpg',
            '/h1-slider-1.jpg',
            '/h1-slider-3.jpg',
            '/office.jpeg',
            '/kitchen.jpeg',
            '/badroom.jpeg'
        ]
    },
    "3": {
        title: 'Luxury Apartment',
        category: 'Residential',
        image: '/h1-slider-3.jpg',
        description: 'Elegant luxury apartment with premium finishes and modern design elements.',
        fullDescription: `This luxury apartment project redefines urban living with its sophisticated design 
        and premium amenities. Each unit is crafted with attention to detail and high-end finishes.
        
        The development includes state-of-the-art facilities, stunning views, and a focus on creating 
        a luxurious yet comfortable living environment.`,
        details: {
            client: 'Real Estate Developer',
            location: 'City Center',
            completion: '2023',
            size: '2,500 sq ft',
            type: 'Luxury Apartment'
        },
        features: [
            'Premium Finishes',
            'Smart Home Features',
            'Rooftop Garden',
            'Fitness Center',
            'Concierge Service',
            'Secure Parking'
        ],
        gallery: [
            '/h1-slider-3.jpg',
            '/h1-slider-1.jpg',
            '/h1-slider-2.jpg',
            '/office.jpeg',
            '/kitchen.jpeg',
            '/badroom.jpeg'
        ]
    },
    "4": {
        title: 'Office Building',
        category: 'Commercial',
        image: '/office.jpeg',
        description: 'Modern office building with sustainable design and efficient workspace planning.',
        fullDescription: `This contemporary office building sets new standards for workplace design and sustainability. 
        The architecture emphasizes natural light, open spaces, and environmental responsibility.
        
        The building incorporates cutting-edge technology and sustainable features while maintaining 
        a professional and productive atmosphere.`,
        details: {
            client: 'Tech Corporation',
            location: 'Business Park',
            completion: '2023',
            size: '30,000 sq ft',
            type: 'Office Building'
        },
        features: [
            'LEED Certification',
            'Natural Lighting',
            'Collaborative Spaces',
            'Green Roof',
            'EV Charging',
            'Smart Building Systems'
        ],
        gallery: [
            '/office.jpeg',
            '/h1-slider-1.jpg',
            '/h1-slider-2.jpg',
            '/h1-slider-3.jpg',
            '/kitchen.jpeg',
            '/badroom.jpeg'
        ]
    },
    "5": {
        title: 'Modern Kitchen',
        category: 'Interior',
        image: '/kitchen.jpeg',
        description: 'Contemporary kitchen design with smart storage solutions and premium appliances.',
        fullDescription: `This modern kitchen design combines functionality with aesthetic appeal. 
        The space features innovative storage solutions, high-end appliances, and a clean, contemporary aesthetic.
        
        The design focuses on creating an efficient workflow while maintaining a luxurious feel 
        that serves as the heart of the home.`,
        details: {
            client: 'Homeowner',
            location: 'Residential Property',
            completion: '2023',
            size: '400 sq ft',
            type: 'Kitchen Renovation'
        },
        features: [
            'Smart Appliances',
            'Custom Cabinetry',
            'Quartz Countertops',
            'LED Lighting',
            'Pull-out Storage',
            'Breakfast Bar'
        ],
        gallery: [
            '/kitchen.jpeg',
            '/h1-slider-1.jpg',
            '/h1-slider-2.jpg',
            '/h1-slider-3.jpg',
            '/office.jpeg',
            '/badroom.jpeg'
        ]
    },
    "6": {
        title: 'Luxury Bedroom',
        category: 'Interior',
        image: '/badroom.jpeg',
        description: 'Luxurious bedroom design with custom furniture and elegant lighting solutions.',
        fullDescription: `This luxury bedroom design creates a serene and sophisticated retreat. 
        The space features custom-designed furniture, premium materials, and carefully planned lighting.
        
        The design emphasizes comfort and luxury while maintaining a clean, modern aesthetic 
        that promotes relaxation and rest.`,
        details: {
            client: 'Private Client',
            location: 'Master Suite',
            completion: '2023',
            size: '300 sq ft',
            type: 'Bedroom Design'
        },
        features: [
            'Custom Headboard',
            'Smart Lighting',
            'Walk-in Closet',
            'Premium Bedding',
            'Sound System',
            'Blackout Solutions'
        ],
        gallery: [
            '/badroom.jpeg',
            '/h1-slider-1.jpg',
            '/h1-slider-2.jpg',
            '/h1-slider-3.jpg',
            '/office.jpeg',
            '/kitchen.jpeg'
        ]
    }
};

export default function ProjectDetail({ params }: { params: { id: string } }) {
    const project = projectDetails[params.id];

    if (!project) {
        return (
            <main className="min-h-screen bg-white pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
                        <p className="text-xl text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
                        <Link 
                            href="/projects"
                            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
                        >
                            <FaArrowLeft /> Back to Projects
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[500px] w-full mt-32">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
                        <p className="text-xl max-w-3xl mx-auto">{project.description}</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Back Button */}
                <Link 
                    href="/projects"
                    className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors mb-12"
                >
                    <FaArrowLeft /> Back to Projects
                </Link>

                {/* Project Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                        <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line mb-12">
                            {project.fullDescription}
                        </p>

                        {/* Project Gallery */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.gallery.map((image, index) => (
                                <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                                    <Image
                                        src={image}
                                        alt={`${project.title} - Image ${index + 1}`}
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className=" p-8 rounded-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <FaBuilding className="text-secondary w-5 h-5" />
                                    <div>
                                        <p className="text-sm text-gray-500">Client</p>
                                        <p className="text-lg font-medium">{project.details.client}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaMapMarkerAlt className="text-secondary w-5 h-5" />
                                    <div>
                                        <p className="text-sm text-gray-500">Location</p>
                                        <p className="text-lg font-medium">{project.details.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaCalendarAlt className="text-secondary w-5 h-5" />
                                    <div>
                                        <p className="text-sm text-gray-500">Completion</p>
                                        <p className="text-lg font-medium">{project.details.completion}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" p-8 rounded-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                            <ul className="space-y-3">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-secondary rounded-full" />
                                        <span className="text-lg text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 