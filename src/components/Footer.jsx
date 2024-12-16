import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-white py-16 ">
      <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto text-left items-center  ">
        <div className="md:w-1/2 px-3 space-y-4">
          <img
            src="https://i.ibb.co.com/SRVRNZX/imgpsh-fullsize-anim-1.png"
            alt=""
          />
          <p>
            Scan a Turning Hearts Medallion to learn about and interact with
            those who have passed on. You can also begin documenting the legacy
            you wish to leave behind.
          </p>
          <p className="text-black">Social Media:</p>
          <div className="flex space-x-2 ">
            
             <a href="#"> <FaTwitterSquare className=" rounded-full" /></a>
           
          
             <a href="#">
             <FaInstagramSquare className="rounded-full"/>
             </a>
          
         
         <a href="#">     <FaLinkedin className="rounded-full " /></a>
          
             <a href="#">
             <FaFacebook />
             </a>
          
          </div>
        </div>
        <div className="md:w-1/4 w-full text-left p-2 ">
          <h1 className="text-black  font-bold">Quick Link</h1>
          <div className="list-none ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Country search</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
          </div>
        </div>
        <div className="text-gray-500 md:w-1/4 md:ml-2 w-full text-left  ">
          <p>(316) 555-0116</p>
          <p className="text-[14px]">deanna.curtis@example.com</p>
        </div>
      </div>
        <div className="border-2 max-w-5xl mx-auto md:mt-4 mt-2 "></div>
        <p className="text-gray-500 p-2 text-right max-w-5xl mx-auto text-[14px]">© [2024] Ash and Fire. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
