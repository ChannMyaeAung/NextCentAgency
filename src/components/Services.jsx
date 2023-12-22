import React, { useEffect } from "react";

/* Company Logo Images */
import Logo1 from "../assets/Client_Logo/Client_Logo_1.png";
import Logo2 from "../assets/Client_Logo/Client_Logo_2.png";
import Logo3 from "../assets/Client_Logo/Client_Logo_3.png";
import Logo4 from "../assets/Client_Logo/Client_Logo_4.png";
import Logo5 from "../assets/Client_Logo/Client_Logo_5.png";
import Logo6 from "../assets/Client_Logo/Client_Logo_6.png";
import Logo7 from "../assets/Client_Logo/Client_Logo_7.png";

/* Services Array from services.ts in data folder*/
import { services } from "../data/services";

/* Motion */
import { motion } from "framer-motion";
import { fadeIn } from "../animation";

const Services = () => {
  /* Responsible for adding extra clone nodes to smooth out the infinite scroll animation */
  useEffect(() => {
    const scrollers = document.querySelectorAll("#scroller");

    function addAnimation() {
      scrollers.forEach((scroller) => {
        const scrollerInner = scroller.querySelector("#scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }

    addAnimation();

    // Cleanup function: Remove cloned nodes when the component unmounts
    return () => {
      scrollers.forEach((scroller) => {
        const scrollerInner = scroller.querySelector("#scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // Remove the cloned nodes created during setup
        scrollerContent.forEach((item) => {
          if (item.getAttribute("aria-hidden")) {
            scrollerInner.removeChild(item);
          }
        });
      });
    };
  }, []);

  return (
    <section
      id="services"
      className="px-4 py-16 mx-auto md:px-14 max-w-screen-2xl"
    >
      {/* Our Clients and Logo */}
      <motion.div
        id="our_clients"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="mb-2 text-4xl font-semibold text-neutralDGray">
          Our Clients
        </h2>
        <p className="text-neutralGray">
          We have been working with some Fortune 500+ clients
        </p>

        {/* Company Logos */}
        {/* Note: Custom Animation classes are in App.css for better reusability */}
        <div
          id="scroller"
          style={{
            mask: "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
          }}
          className="max-w-[600px] overflow-hidden my-12"
        >
          <div
            id="scroller__inner"
            className="flex w-[max-content] items-center justify-between gap-8 py-4 "
          >
            <img src={Logo1} alt="client logo 1" />
            <img src={Logo2} alt="client logo 2" />
            <img src={Logo3} alt="client logo 3" />
            <img src={Logo4} alt="client logo 4" />
            <img src={Logo5} alt="client logo 5" />
            <img src={Logo6} alt="client logo 6" />
            <img src={Logo7} alt="client logo 7" />
          </div>
        </div>
      </motion.div>

      {/* Community */}
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="mx-auto mt-20 text-center md:w-1/2"
      >
        <h2 className="mb-3 text-4xl font-semibold text-neutralDGray">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutralGray">Who is Nextcent suitable for?</p>
      </motion.div>

      {/* NextCent Suitable Community  */}
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-12 mt-14 lg:grid lg:grid-cols-3"
      >
        {services.map((service, index) => (
          <div
            key={service.id}
            className={` px-4 py-5 flex h-full items-center justify-center text-center md:w-[300px] transition-all duration-300 hover:border-indigo-700 hover:border-b-4 hover:-translate-y-5 shadow cursor-pointer mx-auto md:h-80 rounded-md`}
          >
            <div className="w-full mx-auto">
              <figure className="mx-auto mb-4 h-14 w-14">
                <img src={service.img} alt={service.title} />
              </figure>
              <h4 className="px-2 mb-2 text-2xl font-bold text-neutralDGray">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGray">{service.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
