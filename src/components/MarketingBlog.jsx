import React from "react";
import { blogs } from "../data/blogs";

import arrowRight from "../assets/Customers/arrow_right.png";

const MarketingBlog = () => {
  return (
    <section
      id="MarketingBlog"
      className="px-4 mx-auto my-12 lg:px-14 max-w-screen-2xl"
    >
      <div className="mx-auto text-center md:w-1/2">
        <h2 className="mb-4 text-4xl font-semibold text-neutralDGray">
          Caring is the new marketing
        </h2>
        <p className="mx-auto mb-8 text-sm text-neutralGray">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </p>
      </div>

      {/* All Blogs */}
      <div className="flex flex-wrap items-center justify-between gap-8 lg:grid-cols-3 md:grid md:grid-cols-2">
        {blogs.map((blog) => (
          <div key={blog.id} className="relative mx-auto mb-12 cursor-pointer">
            <img
              src={blog.img}
              alt={blog.title}
              className="transition-all duration-300 hover:scale-95"
            />

            <div className="absolute left-0 right-0 px-4 py-8 mx-auto text-center bg-white rounded-md shadow-lg -bottom-12 md:w-3/4">
              <h3 className="mb-3 text-base font-semibold text-neutralGray">
                {blog.title}
              </h3>
              <div className="flex items-center justify-center gap-8">
                <a
                  href="/"
                  className="self-center font-bold text-center duration-200 hover:text-neutral-700 text-brandPrimary"
                >
                  Read More
                  <img
                    src={arrowRight}
                    alt="arrow right"
                    className="inline-block ml-2 "
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketingBlog;
