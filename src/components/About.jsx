import React, { Fragment } from "react";
import aboutImg from "../assets/mobile_login.png";
import { companyStats } from "../data/about";

/* Motion */
import { motion } from "framer-motion";
import { fadeIn } from "../animation";
import NumberCounter from "./NumberCounter";

const About = () => {
  return (
    <section id="about">
      <div className="px-4 mx-auto my-8 max-w-screen-2xl lg:px-14">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <motion.figure
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className="flex-shrink-0"
          >
            <img src={aboutImg} alt="mobile login image" />
          </motion.figure>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className=" md:w-2/3"
          >
            <h2 className="mb-4 text-4xl font-semibold md:w-4/5 text-neutralDGray ">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="mb-8 text-sm md:w-3/4 text-neutralGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="btn-primary">Learn More</button>
          </motion.div>
        </div>
      </div>

      {/* Company Stats */}
      <div className="px-4 py-16 mx-auto bg-neutralSilver lg:px-14 max-w-screen-2xl">
        <div className="flex flex-col items-start justify-between gap-8 md:items-center md:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="md:w-1/2"
          >
            <h2 className="mb-4 text-4xl font-semibold text-neutralDGray md:w-2/3">
              Helping a local{" "}
              <span className="text-brandPrimary">
                business reinvent itself
              </span>
            </h2>
            <p>We reached here with our hard work and dedication</p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="grid gap-12 pr-4 mx-auto lg:grid-cols-2"
          >
            {companyStats.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center justify-center flex-shrink-0 gap-4"
              >
                <img src={item.img} alt={item.title} />
                <div className="flex flex-col justify-between">
                  <h4 className="text-2xl font-semibold text-neutralDGray">
                    <NumberCounter
                      initialValue={0}
                      endValue={item.stats}
                      targetTimer={20}
                    />
                  </h4>
                  <p className="whitespace-nowrap">{item.title}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
