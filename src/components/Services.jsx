import React from "react";

/* Company Logo Images */
import Logo1 from "../assets/Client_Logo/Client_Logo_1.png";
import Logo2 from "../assets/Client_Logo/Client_Logo_2.png";
import Logo3 from "../assets/Client_Logo/Client_Logo_3.png";
import Logo4 from "../assets/Client_Logo/Client_Logo_4.png";
import Logo5 from "../assets/Client_Logo/Client_Logo_5.png";
import Logo6 from "../assets/Client_Logo/Client_Logo_6.png";
import Logo7 from "../assets/Client_Logo/Client_Logo_7.png";

const Services = () => {
  return (
    <section
      id="services"
      className="px-4 py-16 mx-auto md:px-14 max-w-screen-2xl"
    >
      {/* Our Clients and Logo */}
      <div id="our_clients" className="text-center">
        <h2 className="mb-2 text-4xl font-semibold text-neutralDGray">
          Our Clients
        </h2>
        <p className="text-neutralGray">
          We have been working with some Fortune 500+ clients
        </p>

        {/* Company Logos */}
        <div className="flex flex-wrap items-center justify-between gap-8 my-12">
          <img src={Logo1} alt="client logo 1" />
          <img src={Logo2} alt="client logo 2" />
          <img src={Logo3} alt="client logo 3" />
          <img src={Logo4} alt="client logo 4" />
          <img src={Logo5} alt="client logo 5" />
          <img src={Logo6} alt="client logo 6" />
          <img src={Logo7} alt="client logo 7" />
        </div>
      </div>

      {/* Community */}
      <div className="mx-auto mt-20 text-center md:w-1/2">
        <h2 className="mb-3 text-4xl font-semibold text-neutralDGray">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutralGray">Who is Nextcent suitable for?</p>
      </div>
    </section>
  );
};

export default Services;
