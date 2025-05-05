import React from "react";
import banner from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className="w-full px-36 flex flex-col md:flex-row-reverse justify-between items-center mt-5 text-white">
              <div className="md:w-1/2 w-full flex item md:justify-end">
         <img src={banner} alt="" />
      </div>
      <div className="md:w-1/2">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          New Realeses This Week
        </h1>
        <p className="mb-10">
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone
        </p>
        <button className="bg-amber-300 text-black hover:transition-colors hover:bg-blue-950 hover:text-white px-7 py-1 rounded-md ">
          Subscribe
        </button>
      </div>

    </div>
  );
};

export default Banner;
