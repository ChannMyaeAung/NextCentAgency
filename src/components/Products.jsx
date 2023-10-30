import React from "react";
import mobileLoginTwo from "../assets/mobile_login_2.png";

import customerLogoMain from "../assets/Customers/customer.png";

import customerLogo1 from "../assets/Customers/customer_logo_1.svg";
import customerLogo2 from "../assets/Customers/customer_logo_2.svg";
import customerLogo3 from "../assets/Customers/customer_logo_3.svg";
import customerLogo4 from "../assets/Customers/customer_logo_4.svg";
import customerLogo5 from "../assets/Customers/customer_logo_5.svg";
import customerLogo6 from "../assets/Customers/customer_logo_6.svg";

import arrowRight from "../assets/Customers/arrow_right.png";

import { motion } from "framer-motion";
import { fadeIn } from "../animation";

const Products = () => {
  return (
    <section id="about">
      <div className="px-4 mx-auto my-10 lg:px-14 max-w-screen-2xl">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <motion.figure
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <img src={mobileLoginTwo} alt="mobile login image two" />
          </motion.figure>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="mx-auto md:w-3/4"
          >
            <h2 className="mb-4 text-4xl font-semibold md:w-4/5 text-neutralDGray ">
              How to design your site footer like we did
            </h2>
            <p className="mb-8 text-sm md:w-3/4 text-neutralGray">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button className="btn-primary">Learn More</button>
          </motion.div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto bg-neutralSilver lg:px-14 max-w-screen-2xl">
        <div className="flex flex-col items-center justify-between gap-8 md:items-start md:flex-row">
          <motion.figure
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="w-auto h-auto"
          >
            <img
              src={customerLogoMain}
              alt="customer main logo"
              className="w-full h-full"
            />
          </motion.figure>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="md:w-11/12"
          >
            <p className="mb-6 text-sm text-neutralGray">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h5 className="mb-2 text-xl font-semibold text-brandPrimary">
              Tim Smith
            </h5>
            <p className="mb-8 text-sm text-neutralLGray">
              British Dragon Boat Racing Association
            </p>

            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex flex-wrap items-center lg:flex-nowrap lg:gap-x-6 gap-x-8 gap-y-4"
            >
              <img src={customerLogo1} alt="customer logo 1" />
              <img src={customerLogo2} alt="customer logo 2" />
              <img src={customerLogo3} alt="customer logo 3" />
              <img src={customerLogo4} alt="customer logo 4" />
              <img src={customerLogo5} alt="customer logo 5" />
              <img src={customerLogo6} alt="customer logo 6" />

              <div className="flex items-center gap-8">
                <a
                  href="/"
                  className="font-bold duration-200 hover:text-neutral-700 text-brandPrimary"
                >
                  Meet all customers
                  <img
                    src={arrowRight}
                    alt="arrow right"
                    className="inline-block ml-2"
                  />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
