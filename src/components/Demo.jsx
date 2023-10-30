import React from "react";

import { ArrowRight } from "lucide-react";

const Demo = () => {
  return (
    <section
      id="demo"
      className="px-4 py-16 mx-auto lg:px-14 max-w-screen-2xl bg-neutralSilver"
    >
      <div className="flex items-center justify-center mx-auto lg:w-2/3">
        <div className="text-center">
          <h1 className="mb-6 text-3xl font-semibold leading-snug lg:leading-normal lg:text-5xl text-neutralBlack">
            Pellentesque suscipit fringilla libero eu.
          </h1>
          <div className="flex items-center justify-center ">
            <button className="flex items-center justify-center btn-primary">
              Get a demo
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
