import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Community = () => {
  return (
    <div>
      <div className="hero  mt-10 md:mt-52 max-w-5xl mx-auto">
        <div className="  hero-content flex-col lg:flex-row">
          <div className="flex-1 bg-gray-50 rounded-2xl flex justify-center">
            <img
              src="https://i.ibb.co.com/SRVRNZX/imgpsh-fullsize-anim-1.png"
              className="w-[300px] md:py-16 py-10 px-2 rounded-lg"
            />
          </div>
          <div className="flex-1 text-left  ">
            <div className="border-2 border-blue-500 w-10 rounded-lg mb-2">

            </div>
            <h1 className="text-4xl font-bold ">
              Your Community for Women Ready to Go <br /> Abroad
            </h1>
            <p className="py-3">
              We’re thrilled you found us! At Expat Global Girls, we empower
              women to pursue their dreams abroad. Our platform connects women
              seeking housemates for international moves and trips, offering a
              safe, supportive community and a searchable directory to help you
              find the perfect living companion.
            </p>
            <div>
              <button className="flex items-center gap-2 py-2 px-4 rounded-lg bg-blue-500 text-white">
                Become a Member
              <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
