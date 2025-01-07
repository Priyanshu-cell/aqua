import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatBoxRef.current && !chatBoxRef.current.contains(event.target)) {
        setMenuOpen(false); // Close the menu if clicked outside
        setIsChatOpen(false); // Close the chat if clicked outside
      }
    };

    const handleNavLinkClick = () => {
      setMenuOpen(false); // Close the menu when a navigation link is clicked
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Attach the smooth close behavior to all navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);

  return (
    <div ref={chatBoxRef} className="sticky top-0 z-50 bg-[#E0FFFF] shadow-lg">
      <nav className="bg-[#F0F8FF] border-b-2 border-[#FFD700]">
        <div className="max-w-screen-xl flex flex-wrap items-center align-middle justify-between mx-auto p-3">
          {/* Logo and Title */}
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/logo/RO2.jpg"
              className="h-12 w-12 rounded-full border-2 border-[#FFD700]"
              alt="Company Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#2C3E50]">
              <div name="home" className="text-lg">
                <span className="text-xl font-bold font">RO</span>{" "}
                <span className="text-xl font-bold">HUB</span>
              </div>
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-[#2C3E50] rounded-lg md:hidden hover:bg-[#D4AF37] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
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
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 rounded-lg md:space-x-8 md:flex-row md:border-0 text-center">
              <li>
                <Link
                  to="/home"
                  className="block py-2 px-3 text-white bg-[#32CD32] rounded md:bg-transparent md:text-[#2C3E50] md:p-0 md:pt-3 hover:text-white transition duration-300 md:hover:text-[#32CD32]"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block py-2 px-3 text-[#2C3E50] rounded hover:bg-[#FFD700] md:hover:bg-transparent md:border-0 md:hover:text-[#32CD32] md:p-0 transition duration-300 md:pt-3"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-[#2C3E50] rounded hover:bg-[#FFD700] md:hover:bg-transparent md:border-0 md:hover:text-[#32CD32] md:p-0 transition duration-300 md:pt-3"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-[#2C3E50] rounded hover:bg-[#FFD700] md:hover:bg-transparent md:border-0 md:hover:text-[#32CD32] md:p-0 transition duration-300 md:pt-3"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <div className="flex justify-center py-2">
                  <a
                    href="tel:+917579008065"
                    onClick={(e) => {
                      e.preventDefault();
                      if (
                        window.confirm("This will dial +917579008065. Proceed?")
                      ) {
                        window.location.href = "tel:+917579008065";
                      }
                    }}
                  >
                    <Avatar>
                      <AvatarImage
                        src="/logo/whatsapp.webp"
                        className="h-10 w-10"
                      ></AvatarImage>
                    </Avatar>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
