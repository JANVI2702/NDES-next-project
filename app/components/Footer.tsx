'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max_padd_container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
   
          <div className="space-y-6">
            <h3 className="bold-24 text-white">Your Company</h3>
            <p className="regular-16 text-gray-300">
              We are dedicated to providing the best service and solutions for our clients.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <FaFacebook size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <FaLinkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>

         
          <div>
            <h3 className="bold-20 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="regular-16 text-gray-300 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="regular-16 text-gray-300 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="regular-16 text-gray-300 hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="regular-16 text-gray-300 hover:text-secondary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="regular-16 text-gray-300 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

    
          <div>
            <h3 className="bold-20 mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="regular-16 text-gray-300 hover:text-secondary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="regular-16 text-gray-300 hover:text-secondary transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="#" className="regular-16 text-gray-300 hover:text-secondary transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="#" className="regular-16 text-gray-300 hover:text-secondary transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="regular-16 text-gray-300 hover:text-secondary transition-colors">
                  SEO Services
                </Link>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="bold-20 mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-secondary mt-1" size={20} />
                <span className="regular-16 text-gray-300">
                  123 Business Street, New York, NY 10001
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MdPhone className="text-secondary mt-1" size={20} />
                <span className="regular-16 text-gray-300">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MdEmail className="text-secondary mt-1" size={20} />
                <span className="regular-16 text-gray-300">
                  info@example.com
                </span>
              </li>
            </ul>
          </div>
        </div>

       
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="regular-16 text-gray-300">
              © {currentYear} Your Company. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="regular-16 text-gray-300 hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="regular-16 text-gray-300 hover:text-secondary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
