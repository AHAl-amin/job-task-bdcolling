import React from "react";

const Chooce = () => (
  <div className="bg-gray-100 md:p-10  p-4 relative">
    <h1 className="bg-[#0873ba95] py-2 px-3 rotate-[-10deg] inline-block rounded-lg mb-3">
      {" "}
      Why choose us?
    </h1>
    <h2 className="md:font-bold md:text-4xl text-[20px]">
      Why Choose Expat Global Girls
    </h2>
    <p className="text-gray-400 mt-3 mb-10">
      Empowering women to travel with confidence and ease worldwide
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px]  max-w-5xl mx-auto">
      {/* Affordable Housing */}
      <div
        className="bg-gray-200 rounded-lg shadow-md  p-16 flex items-center relative"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 55%, 85% 100%, 0% 100%)", // Adjust as per the cut
        }}
      >
        <div className="text-left">
          <img
            src="https://i.ibb.co.com/YhTsw5n/Frame.png"
            alt=""
            className="bg-white p-2 mb-2 "
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Affordable Housing
          </h3>
          <p className="text-sm text-gray-600">
            Save money and travel smarter by sharing accommodations with fellow
            members.
          </p>
        </div>
      </div>
      <div
        className="bg-gray-200 rounded-lg  shadow-md p-16 flex items-center relative"
        style={{
          // clipPath: "polygon(0 0, 100% 0, 100% 15%, 15% 100%, 0% 100%)"
          // Adjust as per the cut
          clipPath: "polygon(100% 0, 98% 99%, 15% 98%, 0% 55%, 0% 0)",
        }}
      >
        <div className="text-left">
          <img
            src="https://i.ibb.co.com/q1G1TqH/Frame-37.png"
            alt=""
            className="bg-white  mb-2 w-[70px] "
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Flexible Options
          </h3>
          <p className="text-sm text-gray-600">
            From memberships to travel & lifestyle preferences – you have the
            power to choose.
          </p>
        </div>
      </div>
    </div>
    <div className="absulote  left-10 flex justify-center">  <img src="https://i.ibb.co.com/SRVRNZX/imgpsh-fullsize-anim-1.png" alt="" className="lg:block md:block hidden" /></div>
    <div className="grid grid-cols-1 mt-10  md:grid-cols-2 gap-[100px] max-w-5xl mx-auto">
      {/* Affordable Housing */}
      <div
        className="bg-gray-200 rounded-lg shadow-md p-16 flex items-center relative"
        style={{
          clipPath: "polygon(85% 0, 100% 55%, 100% 99%, 0 100%, 0 0)",
        }}
      >
        <div className="text-left">
          <img
            src="https://i.ibb.co.com/qn1K61W/Frame-37-1.png"
            alt=""
            className="bg-white w-[60px] mb-2 "
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Verified Profiles
          </h3>
          <p className="text-sm text-gray-600">
            A reliable community with verified profiles for added safety and
            peace of mind.
          </p>
        </div>
      </div>
      <div
        className="bg-gray-200 rounded-lg shadow-md p-16 flex items-center relative"
        style={{
          clipPath: "polygon(15% 0px, 100% 0px, 100% 99%, 0px 100%, 0px 55%)",
        }}
      >
        <div className="text-left">
          <img
            src="https://i.ibb.co.com/6sNq3Tm/Frame-37-2.png"
            alt=""
            className="bg-white  mb-2 w-[60px] "
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Women-Only Spaces
          </h3>
          <p className="text-sm text-gray-600">
            Safe, supportive spaces for women to connect and thrive period.
          </p>
        </div>
      </div>
    </div>
  </div>
);

// ..............................
// <div className="pt-16 max-w-5xl mx-auto">
//   <h1 className="bg-[#0873ba95] py-2 px-3 rotate-[-10deg] inline-block rounded-lg mb-3">
//     Why choose us?
//   </h1>
//   <h1
//     className="md:font-bold md:text-4xl font-semibold text-2xl
//    "
//   >
//     Why Choose Expat Global Girls
//   </h1>
//   <p className="text-gray-500 mt-4 mb-6">
//     Empowering women to travel with confidence and ease worldwide
//   </p>
//     {/* 1st two card */}
//   <div className="flex  justify-between relative ">
//     <div className="flex items-center  bg-gray-100 text-left">
//       <div
//         className="relative lg:w-[430px] p-6 bg-white border rounded-lg shadow-lg"
//         style={{
//           clipPath:
//             "polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%)",
//         }}
//       >
//         {/* Icon Section */}
//         <div className="flex items-center mb-4">
//           <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//             <img
//               src="https://i.ibb.co.com/YhTsw5n/Frame.png"
//               alt=""
//               className="top-10"
//             />
//           </div>
//         </div>
//         {/* Content Section */}
//         <h3 className="text-lg font-semibold  text-gray-800 mb-2">
//           Affordable Housing
//         </h3>
//         <p className="text-sm text-gray-600">
//           Save money and travel smarter by sharing accommodations with
//           fellow members.
//         </p>
//       </div>
//     </div>
//     <div className="flex items-center  bg-gray-100 text-left">
//       <div
//         className="relative lg:w-[430px] p-6 bg-white border rounded-lg shadow-lg"
//         style={{
//           clipPath:
//             "polygon(0 0, 100% 0,  100%, 50px calc(100% - 50px), 0 calc(100% - 50px))",
//         }}
//       >
//         {/* Icon Section */}
//         <div className="flex items-center mb-4">
//           <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//             <img
//               src="https://i.ibb.co.com/YhTsw5n/Frame.png"
//               alt=""
//               className="top-10"
//             />
//           </div>
//         </div>
//         {/* Content Section */}
//         <h3 className="text-lg font-semibold  text-gray-800 mb-2">
//           Affordable Housing
//         </h3>
//         <p className="text-sm text-gray-600">
//           Save money and travel smarter by sharing accommodations with
//           fellow members.
//         </p>
//       </div>
//     </div>
//   </div>
//    {/* 1st two card */}
//   {/* .............. */}
//   {/* <div className="absolut">
//     <img src="https://i.ibb.co.com/SRVRNZX/imgpsh-fullsize-anim-1.png" alt="" />
//   </div> */}
//   {/* ............ */}
//   {/* last two card */}
//   <div className="flex py-16 max-w-5xl mx-auto justify-between">
//     <div className="flex items-center  bg-gray-100 text-left">
//       <div
//         className="relative lg:w-[430px] p-6 bg-white border rounded-lg shadow-lg"
//         style={{
//           clipPath:
//             "polygon(0 0, 0 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 100% 100%)",
//         }}
//       >
//         {/* Icon Section */}
//         <div className="flex items-center mb-4">
//           <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//             <img src="https://i.ibb.co.com/YhTsw5n/Frame.png" alt="" />
//           </div>
//         </div>
//         {/* Content Section */}
//         <h3 className="text-lg font-semibold  text-gray-800 mb-2">
//           Affordable Housing
//         </h3>
//         <p className="text-sm text-gray-600">
//           Save money and travel smarter by sharing accommodations with
//           fellow members.
//         </p>
//       </div>
//     </div>
//     <div className="flex items-center  bg-gray-100 text-left">
//       <div
//         className="relative lg:w-[430px] p-6 bg-white border rounded-lg shadow-lg"
//         style={{
//           clipPath:
//             "polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%)",
//         }}
//       >
//         {/* Icon Section */}
//         <div className="flex items-center mb-4">
//           <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//             <img src="https://i.ibb.co.com/YhTsw5n/Frame.png" alt="" />
//           </div>
//         </div>
//         {/* Content Section */}
//         <h3 className="text-lg font-semibold  text-gray-800 mb-2">
//           Affordable Housing
//         </h3>
//         <p className="text-sm text-gray-600">
//           Save money and travel smarter by sharing accommodations with
//           fellow members.
//         </p>
//       </div>
//     </div>
//   </div>
//    {/* 1st two card */}
// </div>

export default Chooce;
