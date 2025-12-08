import Image from "next/image";
import React from "react";

const AndIOS = () => {
  return (
    <section
      className="w-full h-60 mt-10 py-10 bg-black/50"
      style={{
        backgroundImage: "url('/assets/hiking.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor : "black"
      }}
    >
      <div className="flex flex-col items-center justify-center gap-5 text-white">
        <h1 className="text-2xl">📱 Get Our App Today!</h1>
        <p className="text-base">Available on Android & iOS</p>
        <div className="flex gap-5">
          <img
            className="max-md:w-20 max-md:h-auto"
            src="https://images.assets-landingi.com/uc/e214f160-c333-4c77-9c82-53dba58928e1/badgegoogleplay.png"
            alt="#"
            width={200}
            height={200}
          />
          <img
            className="max-md:w-20 max-md:h-auto"
            src="https://images.assets-landingi.com/uc/55b6aa2f-d847-4d9c-abbe-110eca108b5c/badgeapple.png"
            alt="#"
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default AndIOS;
