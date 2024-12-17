import { TfiLayoutLineSolid } from "react-icons/tfi";
import { FaArrowRightLong } from "react-icons/fa6";
const banner = () => {
  return (
    <div
      className="hero min-h-screen relative"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/vXw6Tkb/woman-take-photo-fuji-mountains-autumn-japan-travel-concept.jpg)",
      }}
    >
      {/* navber part start */}
      <div className="navbar bg-opacity-50 bg-white rounded-lg absolute top-4 lg:w-5/6 md:w-4/5 mx-auto">
        <div className="flex-1">
          <img
            src="https://i.ibb.co.com/SRVRNZX/imgpsh-fullsize-anim-1.png"
            className="w-[50px] ml-2"
            alt="img"
          />
        </div>
        <div className="flex-none">
          <div className="navbar-end mr-2">
            <a className="bg-white rounded-lg px-3 py-1 font-bold text-blue-400  ">
              Login
            </a>
          </div>
        </div>
      </div>
      {/* navber part end */}

      <div className="hero-overlay bg-opacity-30"></div>
      <div className="flex md:flex-row flex-col gap-4 w-full lg:px-24 px-10 mt-10 ">
        <div className=" flex-1 text-left md:mt-24 mt-10 ">
          <h1 className="font-bold text-white lg:text-5xl md:text-3xl text-left text-xl space-y-2 ">
            <h2>The Premier</h2>
            <h2>Co-living Travel </h2>
            <h2>Network for Women</h2>
          </h1>

          <p className="text-white font-[12px] flex gap-2 items-start mt-4 ">
            <TfiLayoutLineSolid className="font-semibold text-4xl text-white pb-2" />
            <div>
              Find your perfect housemate,
              <br />
              <span className="mb-10">
                move faster, stay longer, and travel with confidence.
              </span>
            </div>
          </p>
        </div>
        <div className=" flex-1  hero-overlay bg-opacity-30 rounded-lg md:my-20 lg:mt-20">
          <form className="card-body">
            <h1 className="text-white font-bold md:text-2xl">
              Sign up with email
            </h1>
            <div className="flex gap-3 md:flex-row flex-col">
              <div className="w-full">
                <label className="label">
                  <span className="label-text text-white">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="p-1 rounded-lg hero-overlay bg-opacity-20 h-8 border-gray-300 border "
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="p-1 rounded-lg hero-overlay bg-opacity-20 h-8 border-gray-300 border "
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="Enter your Email address"
                className="p-1 rounded-lg hero-overlay bg-opacity-20 h-8 border-gray-300 border "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="p-1 rounded-lg hero-overlay bg-opacity-20 h-8 border-gray-300 border "
                required
              />
              <label className="text-right py-2">
              
               <a
                  href="#"
                  className="  text-white md:text-[16px] text-[12px]"
                  >
                   you are already member? 
                 <span className="underline">log in</span>
                </a>
            
              </label>
            </div>
            <div className="w-full  bg-blue-500 rounded-lg ">
              <button className="mx-auto flex items-center gap-2 py-2   text-white">
              <span className="mb-1">  Sing up</span>
                <FaArrowRightLong/>
                </button>
            </div>
          </form>
         
        </div>
      </div>
      {/* extra div */}

      <div className="md:bg-white absolute flex lg:bottom-[-150px] md:bottom-[-180px] rounded-lg p-4 w-4/5 justify-between ">
        <div className=" hidden sm:hidden md:block lg:block">
          <div>
            <img
              src="https://i.ibb.co.com/jwB7XLD/freepik-Character-inject-3.png"
              alt=""
            />
          </div>
          <div className="text-left mt-6">
            <h4 className="text-black font-bold text-left">150+ Countries </h4>
            <p className="text-gray-400">
              Empowering women to <br /> explore destinations globally.
            </p>
          </div>
        </div>
        <div className=" hidden sm:hidden md:block lg:block px-2">
          <div>
            <img
              src="https://i.ibb.co.com/xmSJdRt/True-friends-rafiki-1.png"
              alt=""
            />
          </div>
          <div className="text-left">
            <h4 className="text-black font-bold ">Connect & Travel </h4>
            <p className="text-gray-400">
              A trusted community of <br /> verified members.
            </p>
          </div>
        </div>
        <div className=" hidden sm:hidden md:block lg:block">
          <div>
            <img
              src="https://i.ibb.co.com/sK8dR0m/Traveling-bro-1.png"
              alt=""
            />
          </div>
          <div className="text-left">
            <h4 className="text-black font-bold ">Find Your Tribe </h4>
            <p className="text-gray-400">
              Find like-minded housemates <br />
              faster and easier.
            </p>
          </div>
        </div>
      </div>
      {/* extra div */}
    </div>
  );
};

export default banner;
