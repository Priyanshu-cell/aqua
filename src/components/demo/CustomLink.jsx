import React from "react";
import { Link as ScrollLink } from "react-scroll"; // For smooth scrolling
import { Link as RouterLink, useLocation } from "react-router-dom"; // For navigation

const CustomLink = ({ to, scrollTo, children }) => {
  const location = useLocation();

  return location.pathname === "/" ? (
    // If on home page, use react-scroll for smooth scrolling
    <ScrollLink
      to={scrollTo}
      smooth={true}
      
      className="block py-2 px-3 text-[#2C3E50] rounded hover:bg-[#FFD700] md:hover:bg-transparent md:border-0 md:hover:text-[#32CD32] md:p-0 transition duration-300 md:pt-3 cursor-pointer !important"
    >
      {children}
    </ScrollLink>
  ) : (
    // If on another page, use react-router-dom Link to navigate
    <RouterLink to="/" className="block py-2 px-3 text-[#2C3E50] rounded hover:bg-[#FFD700] md:hover:bg-transparent md:border-0 md:hover:text-[#32CD32] md:p-0 transition duration-300 md:pt-3 cursor-pointer !important">
      {children}
    </RouterLink>
  );
};

export default CustomLink;