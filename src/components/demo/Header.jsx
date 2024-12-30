import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useState } from "react";
import { Link, Element } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-[#00FFFF] shadow-lg">
      <nav className="bg-[#00FFFF] border-b-2 border-[#D4AF37]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo and Title */}
          <Link
            to="home"
            smooth={true}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/logo/company-logo.png"
              className="h-12 w-12 rounded-full border-2 border-[#D4AF37]"
              alt="Company Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#D4AF37]">
              <Element name="home">Focus-Thai</Element>
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-400 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            aria-controls="navbar-dropdown"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  className="block py-2 px-3 text-white bg-[#D4AF37] rounded md:bg-transparent md:text-[#D4AF37] md:p-0 hover:text-white transition duration-300"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth={true}
                  className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#D4AF37] md:p-0 transition duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="consultancy"
                  smooth={true}
                  className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#D4AF37] md:p-0 transition duration-300"
                >
                  Consultancy
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#D4AF37] md:p-0 transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#D4AF37] md:p-0 transition duration-300"
                >
                  <a
                    href="tel:+66956943229"
                    onClick={(e) => {
                      e.preventDefault();
                      if (
                        window.confirm("This will dial +66956943229. Proceed?")
                      ) {
                        window.location.href = "tel:+66956943229";
                      }
                    }}
                  >
                    <Avatar>
                      <AvatarImage
                        src="/logo/whatsapp.webp"
                        className="flex pb-1"
                      ></AvatarImage>
                    </Avatar>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
