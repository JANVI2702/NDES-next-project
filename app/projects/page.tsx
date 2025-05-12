'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

const allProjects = [
  {
    id: 1,
    title: 'Modern Villa Design',
    category: 'Residential',
    image: '/h1-slider-1.jpg',
    description: 'A stunning modern villa design with contemporary architecture and luxurious amenities.'
  },
  {
    id: 2,
    title: 'Commercial Complex',
    category: 'Commercial',
    image: '/h1-slider-2.jpg',
    description: 'State-of-the-art commercial complex designed for optimal business operations.'
  },
  {
    id: 3,
    title: 'Luxury Apartment',
    category: 'Residential',
    image: '/h1-slider-3.jpg',
    description: 'Elegant luxury apartment with premium finishes and modern design elements.'
  },
  {
    id: 4,
    title: 'Office Building',
    category: 'Commercial',
    image: '/office.jpeg',
    description: 'Modern office building with sustainable design and efficient workspace planning.'
  },
  {
    id: 5,
    title: 'Modern Kitchen',
    category: 'Interior',
    image: '/kitchen.jpeg',
    description: 'Contemporary kitchen design with smart storage solutions and premium appliances.'
  },
  {
    id: 6,
    title: 'Luxury Bedroom',
    category: 'Interior',
    image: '/badroom.jpeg',
    description: 'Luxurious bedroom design with custom furniture and elegant lighting solutions.'
  }
];

const categories = ['All', 'Residential', 'Commercial', 'Interior'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <div className="relative h-[400px] w-full mt-32">
        <Image
          src="/h1-slider-2.jpg"
          alt="Projects Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore our portfolio of exceptional projects that showcase our expertise in construction and design.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Search and Filter Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full transition-colors text-lg font-medium ${
                    selectedCategory === category
                      ? 'bg-secondary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link 
              href={`/projects/${project.id}`}
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-72 w-full">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-white/90 text-sm font-medium">{project.category}</span>
                    <h3 className="text-white text-2xl font-bold mt-2">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-lg text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className="text-secondary font-medium hover:text-secondary/80 transition-colors">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </main>
  );
} 