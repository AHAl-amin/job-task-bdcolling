import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { IoIosStarOutline } from "react-icons/io";
import { Tilt } from "react-tilt";

const Testimonials = () => {
  return (
    <div className="py-20">
      <h1 className="bg-[#0873ba95] py-2 px-3 rotate-[-10deg] inline-block rounded-lg mb-3">
        {" "}
        Testimonial
      </h1>
      <h1 className="md:font-bold md:text-4xl text-2xl ">
        What Our Members Say
      </h1>
      <p className="text-gray-400 mt-3 mb-6 md:w-2/3 w-full mx-auto">
        Hear from women who share your passion for exploring new cultures,
        experiencing life abroad, and making the most of every opportunity.
      </p>
      <div className="bg-white max-w-5xl mx-auto flex md:flex-row flex-col-reverse rounded-lg  ">
          <div className="md:w-2/5 w-full ">
        <Tilt>
            <div className="bg-blue-500  text-white text-left rounded-l-lg p-10 ">
              <div className="flex justify-between">
                <img src="https://i.ibb.co.com/84dbpd0/image.png" alt="" />
                <div className="flex items-center  ">
                  <IoIosStarOutline className="mr-2 text-2xl" />
                  <p>5.0</p>
                </div>
              </div>
              <h1 className="font-semibold text-2xl">Sarah Thompson</h1>
              <div className="text-gray-100 text-[14px]">
                <p>Teacher • Non - smoker • Married</p>
                <p>Silom, Bangkok</p>
                <p> Dec 3.8</p>
              </div>
            </div>
        </Tilt>
          </div>
        <div className="w-3/5 ">
          <div className="flex justify-end py-4 mr-2">
            <button className="mr-2 text-blue-500 border px-3 py-1 rounded-lg">
              <FaArrowLeftLong />
            </button>
            <button className="mr-2 text-blue-500 border px-3 py-1 rounded-lg">
              <FaArrowRightLong />
            </button>
          </div>
          <div className="">
            <p className="text-gray-400 md:p-10 p-5 text-left ">
              <div>
                <RiDoubleQuotesL />
              </div>
              Our smart developers build innovative, efficient, and high-
              performance solutions. efficient, and high- performance solutions.
              efficient, and high- performance solutions.
              <div className="flex justify-end">
                <RiDoubleQuotesR />
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
