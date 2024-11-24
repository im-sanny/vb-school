import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section with Logo and Quick Contact */}
      <div className="max-w-7xl mx-auto pt-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          {/* School Info Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">VB</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg">
                  Vishal Bharti
                </span>
                <span className="text-sm">School of Excellence</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering young minds with quality education and values for a
              brighter future. CBSE Affiliated School providing education from
              Nursery to Class XII.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/admission"
                  className="hover:text-blue-400 transition-colors"
                >
                  Admission Process
                </a>
              </li>
              <li>
                <a
                  href="/academics"
                  className="hover:text-blue-400 transition-colors"
                >
                  Academic Calendar
                </a>
              </li>
              <li>
                <a
                  href="/facilities"
                  className="hover:text-blue-400 transition-colors"
                >
                  School Facilities
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="hover:text-blue-400 transition-colors"
                >
                  Photo Gallery
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="hover:text-blue-400 transition-colors"
                >
                  Career Opportunities
                </a>
              </li>
              <li>
                <a
                  href="/alumni"
                  className="hover:text-blue-400 transition-colors"
                >
                  Alumni Network
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>123 School Address, City, State - PIN Code</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} />
                <span>info@vishalbharti.edu.in</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <p>Monday - Saturday</p>
                  <p>8:00 AM - 3:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Stay Updated
            </h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for updates and announcements.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Middle Section with Additional Links */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Important Links</h4>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    CBSE Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Student Login
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Parent Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Staff Login
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Downloads</h4>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    School Calendar
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Fee Structure
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Admission Form
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    School Handbook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Support</h4>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Help Desk
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © {new Date().getFullYear()} Vishal Bharti School. All rights
              reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
