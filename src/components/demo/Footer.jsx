import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#1B1F3B] text-[#D4AF37] font-semibold">
      <div className="max-w-screen-xl mx-auto p-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Navigation Section */}
          <div>
            <h2 className="text-lg mb-4">Further information</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  className="hover:text-white transition duration-300"
                  to="/"
                >
                  +9100000000000
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition duration-300"
                  to="/about"
                >
                  +91 0000000000 (india)
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition duration-300"
                  to="/contact"
                >
                 000@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition duration-300"
                  to="/faq"
                >
                  address
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h2 className="text-lg mb-4">Services</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  className="hover:text-white transition duration-300"
                  to="/"
                >
                  Consultancy || 
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition duration-300"
                  to="/"
                >
                  
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition duration-300"
                  to="/shop"
                >
                 
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition duration-300"
                  to="/shop"
                >
                  
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">© Focus Thai</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-white transition duration-300 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition duration-300 text-sm"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
