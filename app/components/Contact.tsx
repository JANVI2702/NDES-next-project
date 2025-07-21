'use client';

import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Button from './Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="max_padd_container py-20 xl:py-32 bg-white" id="contact">
      <div className="w-full max-w-[1440px] m-auto px-4">
      
        <div className="text-center mb-16">
          <h4 className="inline-flex items-center justify-center bold-18 text-secondary mb-4">
            <span className="mr-2">Contact Us</span>
          </h4>
          <h2 className="h2 mb-6">Get In Touch</h2>
          <p className="regular-16 text-gray-50 max-w-[600px] mx-auto">
            Have questions or want to discuss your project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 p-4 rounded-full">
                <FaPhoneAlt className="text-secondary text-xl" />
              </div>
              <div>
                <h3 className="bold-20 mb-2">Phone</h3>
                <p className="regular-16 text-gray-50">+1 (555) 123-4567</p>
                <p className="regular-16 text-gray-50">+1 (555) 987-6543</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 p-4 rounded-full">
                <FaEnvelope className="text-secondary text-xl" />
              </div>
              <div>
                <h3 className="bold-20 mb-2">Email</h3>
                <p className="regular-16 text-gray-50">info@example.com</p>
                <p className="regular-16 text-gray-50">support@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 p-4 rounded-full">
                <FaMapMarkerAlt className="text-secondary text-xl" />
              </div>
              <div>
                <h3 className="bold-20 mb-2">Address</h3>
                <p className="regular-16 text-gray-50">123 Business Street</p>
                <p className="regular-16 text-gray-50">New York, NY 10001</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 p-4 rounded-full">
                <FaClock className="text-secondary text-xl" />
              </div>
              <div>
                <h3 className="bold-20 mb-2">Working Hours</h3>
                <p className="regular-16 text-gray-50">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="regular-16 text-gray-50">Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

        
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block bold-16 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block bold-16 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block bold-16 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block bold-16 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                title="Send Message"
                variant="btn_secondary_rounded"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 