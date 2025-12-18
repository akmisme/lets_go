import React from "react";

const AndIOS = () => {
  return (
    <section
      className="relative w-full py-20 mt-16"
      style={{
        backgroundImage: "url('/assets/hiking.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 text-white">
        
        {/* ✅ Left Text */}
        <div className="flex flex-col gap-4 max-w-lg text-center md:text-left">
          <h1 className="text-4xl font-extrabold leading-tight">
            Download Our App
          </h1>
          <p className="text-lg opacity-90">
            Your next adventure is just a tap away.  
            Available on both Android & iOS.
          </p>
        </div>

        {/* ✅ Right: App Buttons */}
        <div className="flex gap-5 max-lg:flex-col max-md:items-center">
          <img
            src="https://images.assets-landingi.com/uc/e214f160-c333-4c77-9c82-53dba58928e1/badgegoogleplay.png"
            alt="Google Play"
            className="w-44 max-md:w-32 hover:scale-105 transition duration-300 cursor-pointer"
          />
          <img
            src="https://images.assets-landingi.com/uc/55b6aa2f-d847-4d9c-abbe-110eca108b5c/badgeapple.png"
            alt="App Store"
            className="w-44 max-md:w-32 hover:scale-105 transition duration-300 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default AndIOS;