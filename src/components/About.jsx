import React, { Fragment } from "react";
import aboutImg from "../assets/mobile_login.png";
import { companyStats } from "../data/about";
const About = () => {
  return (
    <section id="about">
      <div className="px-4 mx-auto my-8 lg:px-14 max-w-screen-2xl">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <figure>
            <img src={aboutImg} alt="mobile login image" />
          </figure>
          <div className="mx-auto md:w-3/4">
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
          </div>
        </div>
      </div>

      {/* Company Stats */}
      <div className="px-4 py-16 mx-auto bg-neutralSilver lg:px-14 max-w-screen-2xl">
        <div className="flex flex-col items-start justify-between gap-8 md:items-center md:flex-row">
          <div className="md:w-1/2">
            <h2 className="mb-4 text-4xl font-semibold text-neutralDGray md:w-2/3">
              Helping a local{" "}
              <span className="text-brandPrimary">
                business reinvent itself
              </span>
            </h2>
            <p>We reached here with our hard work and dedication</p>
          </div>

          <div className="grid gap-12 pr-4 mx-auto lg:grid-cols-2">
            {companyStats.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center justify-center flex-shrink-0 gap-4 border"
              >
                <img src={item.img} alt={item.title} />
                <div className="flex flex-col justify-between">
                  <h4 className="text-2xl font-semibold text-neutralDGray">
                    {item.stats}
                  </h4>
                  <p className="whitespace-nowrap">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;