

const banner = () => {
    return (
        <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/b35dZ6B/Frame-167.png)",
        }}>

          {/* navber part start */}
<div className="navbar bg-opacity-50 bg-white rounded-lg absolute top-4 lg:w-5/6 md:w-4/5 mx-auto">
  <div className="flex-1">
    <img src="https://i.ibb.co.com/SRVRNZX/imgpsh-fullsize-anim-1.png" className="w-[50px] ml-2"  alt="img" />
  </div>
  <div className="flex-none">
  <div className="navbar-end mr-2">
    <a className="bg-white rounded-lg px-3 py-1 font-bold text-blue-400  ">Login</a>
  </div>
  </div>
</div>
{/* navber part end */}
  

        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
        
           
           
          </div>
        </div>
        {/* extra div */}

       <div className="bg-white absolute flex bottom-[-150px] rounded-lg p-4 w-4/5 justify-between ">
       <div className=" hidden sm:hidden md:block lg:block">
          <div><img src="https://i.ibb.co.com/jwB7XLD/freepik-Character-inject-3.png" alt="" /></div>
          <div className="text-left mt-6">
            <h4 className="text-black font-bold text-left">150+ Countries </h4>
            <p className="text-gray-400">Empowering women to <br /> explore destinations globally.</p>
           
            </div>
        </div>
       <div className=" hidden sm:hidden md:block lg:block px-2" >
          <div><img src="https://i.ibb.co.com/xmSJdRt/True-friends-rafiki-1.png" alt="" /></div>
          <div  className="text-left">
            <h4 className="text-black font-bold ">Connect & Travel </h4>
            <p className="text-gray-400">A trusted community of <br /> verified members.</p>
           
            </div>
        </div>
       <div className=" hidden sm:hidden md:block lg:block">
          <div><img src="https://i.ibb.co.com/sK8dR0m/Traveling-bro-1.png" alt="" /></div>
          <div  className="text-left">
            <h4 className="text-black font-bold ">Find Your Tribe </h4>
            <p className="text-gray-400">Find like-minded housemates <br />faster and easier.</p>
           
            </div>
        </div>
       </div>
         {/* extra div */}
      </div>
    );
};

export default banner;
