import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#1B1F3B] text-[#F0F8FF] font-medium">
      <div className="max-w-screen-xl mx-auto p-8 pt-12 md:pt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information Section */}
          <div>
            <h2 className="text-lg font-semibold text-[#D4AF37] mb-4">
              Contact Us
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+9100000000000"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  +91 7579008065
                </a>
              </li>
              <li>
                <a
                  href="mailto:000@gmail.com"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  rohub6@gmail.com
                </a>
              </li>
              <li>
                <p className="hover:text-[#D4AF37] transition duration-300">
                  Near Teachers Colony, Govind Garh, <br />
                  Dehradun, Uttarakhand <br /> India
                </p>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h2 className="text-lg font-semibold text-[#D4AF37] mb-4">
              Services
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/consultancy"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  Sales
                </Link>
              </li>
              <li>
                <Link
                  to="/development"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  Development Proposals
                </Link>
              </li>
              <li>
                <Link
                  to="/spa"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  Services-2
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-lg font-semibold text-[#D4AF37] mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">&copy; 2025 Aqua. All rights reserved.</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-[#D4AF37] transition duration-300 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-[#D4AF37] transition duration-300 text-sm"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
