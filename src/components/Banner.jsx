

const banner = () => {
    return (
        <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/b35dZ6B/Frame-167.png)",
        }}>
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

        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-neutral-content text-center">
          {/* <div className="max-w-md">
           
           
          </div> */}
        </div>
      </div>
    );
};

export default banner;
