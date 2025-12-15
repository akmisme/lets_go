import React from "react";

const OurValue = () => {
  const values = [
    {
      title: "Customer Come First",
      desc: "We believe travel can change lives for the better. That’s why we strive to help customers fulfill their lifelong dreams to discover the joy and beauty of the world.",
      icon: "/assets/ourvalues/first.svg",
    },
    {
      title: "Embrace the Growth Mindset",
      desc: "We embrace challenges as opportunities to learn and grow, empowered by our determination to overcome obstacles and achieve greatness together.",
      icon: "/assets/ourvalues/mind.svg",
    },
    {
      title: "Transparency Above Everything",
      desc: "Transparency fuels our commitment to excellence, enabling us to learn from each other’s triumphs and setbacks and work together toward a shared vision.",
      icon: "/assets/ourvalues/transparency.svg",
    },
    {
      title: "Keep Traveling",
      desc: "Travel expands our horizons and inspires us to create a better world, one organized adventure at a time.",
      icon: "/assets/ourvalues/globe.svg",
    },
    {
      title: "#LDTS",
      desc: "Let’s Do This Shit — a reminder of our belief in teamwork and determination, inspiring us to overcome challenges and achieve greatness together.",
      icon: "/assets/ourvalues/rocket.svg",
    },
  ];

  return (
    <section className="mt-20">
      {/* Title */}
      <h1 className="text-center text-4xl font-extrabold tracking-tight">
        Our Values
      </h1>
      <p className="text-center text-gray-500 mt-2 text-lg">
        What drives our mission and shapes our culture
      </p>

      {/* Grid */}
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-10 mx-auto mt-14 px-6 max-w-6xl"
      >
        {values.map((v, i) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="100"
            key={i}
            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="w-20 h-20 flex items-center justify-center bg-[#F7E7C1] rounded-2xl shadow-inner mb-6">
              <img src={v.icon} alt={v.title} className="w-12 h-12" />
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800 mb-3">{v.title}</h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValue;
