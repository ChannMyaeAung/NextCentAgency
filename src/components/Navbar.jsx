import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-scroll";

import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((s) => !s);
  };

  /* When users is leaving the hero section, set the state to true to make the nav sticky */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Close the menu when shifting from small screen to large screen */
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth > 1024) setIsMenuOpen(false);
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  /* NavItems */
  const navItems = [
    {
      link: "Home",
      path: "home",
    },
    {
      link: "Service",
      path: "service",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Product",
      path: "product",
    },
    {
      link: "Testimonial",
      path: "testimonial",
    },
    {
      link: "FAQ",
      path: "faq",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white md:bg-transparent z-[999]">
      <nav
        className={`px-4 py-4 lg:px-14 ${
          isSticky ? "sticky top-0 right-0 border-b bg-white duration-300" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-8 text-base">
          <a href="/" className="flex items-center space-x-3">
            <img src={Logo} alt="logo" className="items-center inline-block " />
          </a>

          {/* For large screens */}
          <ul className="hidden space-x-12 lg:flex">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                className="block text-base cursor-pointer text-textGray hover:text-brandPrimary first:font-medium"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* Button for large screens */}
          <div className="items-center hidden space-x-12 lg:flex">
            <a
              href="/"
              className="items-center hidden lg:flex text-brandPrimary hover:text-textGray"
            >
              Login
            </a>
            <button className="btn-primary whitespace-nowrap">Sign up</button>
          </div>

          {/* Menu Btn for mobile devices */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGray focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 " />
              ) : (
                <Menu className="w-6 h-6 " />
              )}
            </button>
          </div>
        </div>

        {/* Nav items for mobile devices */}
        <div
          className={`${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          } space-y-4 px-4 py-7 mt-16 bg-brandPrimary`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              className="block text-base text-white cursor-pointer hover:text-textGray first:font-medium"
            >
              {link}
            </Link>
          ))}
          <a
            href="/"
            className="flex items-center text-white hover:text-textGray"
          >
            Login
          </a>
          <button className="px-4 py-2 text-white transition-all duration-300 rounded bg-textGray whitespace-nowrap hover:bg-neutralDGray">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
