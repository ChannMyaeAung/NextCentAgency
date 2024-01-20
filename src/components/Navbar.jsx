import React, { useEffect, useState, Fragment, useRef } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navMenuRef = useRef(null);

  const [isSticky, setIsSticky] = useState(false);

  /* Responsible for closing the modal when clicking outside of it on small screens */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navMenuRef.current && !navMenuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
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
    <header className="fixed left-0 top-0 w-full bg-white md:bg-transparent z-[999]">
      <nav
        className={`px-4 py-4 w-full ${
          isSticky ? "sticky top-0 left-0 border-b bg-white duration-300" : ""
        }`}
      >
        <div className="flex items-center justify-between overflow-hidden text-base lg:gap-8">
          <a href="/" className="flex items-center flex-shrink-0">
            <img src={Logo} alt="logo" className="" />
          </a>

          {/* For large screens */}
          <ul className="hidden lg:gap-6 lg:flex">
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

          {/* For mobile screens below 1024px */}
          <Fragment>
            {/* Mobile Menu Toggle */}
            <motion.div
              aria-label="mobile menu toggle"
              className="z-[999] "
              animate={isMenuOpen ? "open" : "closed"}
            >
              <button
                className="block lg:hidden"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              >
                <svg width="23" height="23" viewBox="0 0 23 23">
                  <motion.path
                    strokeWidth="3"
                    stroke="black"
                    strokeLinecap="round"
                    variants={{
                      closed: { d: "M 2 2.5 L 20 2.5" },
                      open: { d: "M 3 16.5 L 17 2.5" },
                    }}
                  />
                  <motion.path
                    strokeWidth="3"
                    stroke="black"
                    strokeLinecap="round"
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                  />
                  <motion.path
                    strokeWidth="3"
                    stroke="black"
                    strokeLinecap="round"
                    variants={{
                      closed: { d: "M 2 16.346 L 20 16.346" },
                      open: { d: "M 3 2.5 L 17 16.346" },
                    }}
                  />
                </svg>
              </button>
              {/* Nav Links Modal on mobile screens */}
            </motion.div>

            {/* Background overlay when nav modal is open */}
            {isMenuOpen && (
              <div
                id="overlay"
                aria-expanded={isMenuOpen}
                aria-hidden={isMenuOpen ? true : false}
                className="fixed top-0 z-[-1] left-0 w-full h-full bg-black opacity-20 lg:hidden"
              />
            )}
          </Fragment>
        </div>

        {/* Nav items for mobile devices */}
        <div
          className={`${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          } space-y-4 px-4 py-7 mt-16 bg-brandPrimary`}
          ref={navMenuRef}
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
