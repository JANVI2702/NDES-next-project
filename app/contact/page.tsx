import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[400px] w-full mt-32">
                <Image
                    src="/h1-slider-2.jpg"
                    alt="Contact Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
                        <p className="text-white text-xl max-w-3xl mx-auto">
                            Get in touch with us for any inquiries about our services or projects.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Contact Information Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Contact Form */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                                    placeholder="Your message here..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-secondary text-white py-3 px-6 rounded-lg hover:bg-secondary/90 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information Sidebar */}
                    <div className="space-y-8">
                        <div className=" p-8 rounded-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-secondary/10 p-3 rounded-full">
                                        <FaPhoneAlt className="text-secondary text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                        <p className="text-gray-600">+1 (555) 987-6543</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-secondary/10 p-3 rounded-full">
                                        <FaEnvelope className="text-secondary text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                                        <p className="text-gray-600">info@example.com</p>
                                        <p className="text-gray-600">support@example.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-secondary/10 p-3 rounded-full">
                                        <FaMapMarkerAlt className="text-secondary text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">Address</h4>
                                        <p className="text-gray-600">123 Business Street</p>
                                        <p className="text-gray-600">New York, NY 10001</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-secondary/10 p-3 rounded-full">
                                        <FaClock className="text-secondary text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">Working Hours</h4>
                                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className=" p-8 rounded-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
                            <div className="flex gap-4">
                                <a href="#" className="bg-secondary/10 p-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                                    <FaFacebook className="text-secondary text-xl" />
                                </a>
                                <a href="#" className="bg-secondary/10 p-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                                    <FaTwitter className="text-secondary text-xl" />
                                </a>
                                <a href="#" className="bg-secondary/10 p-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                                    <FaInstagram className="text-secondary text-xl" />
                                </a>
                                <a href="#" className="bg-secondary/10 p-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                                    <FaLinkedin className="text-secondary text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact; 