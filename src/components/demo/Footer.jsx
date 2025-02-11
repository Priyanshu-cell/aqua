import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa"; // Importing icons from react-icons

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
                  href="tel:+917579008065"
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
                  to="/services"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  Water Purifier
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  Domestic RO
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  Commercial RO
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  Industrial RO
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  Water Softener
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
                  to="/about"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  FAQ
                </Link>
              </li>
              <li className="flex space-x-4 justify-start">
                <a
                  href="https://www.instagram.com/shreeanshaquasolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  <FaInstagram className="text-2xl text-red-500" />
                </a>
                <a
                  href="https://www.facebook.com/people/Shreeansh-aqua-solutions/61562594014516/?sk=about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  <FaFacebookF className="text-2xl text-blue-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">&copy; 2025 RO HUB All rights reserved.</div>
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