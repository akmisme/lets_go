import React from "react";

const VisionMission = () => {
  const items = [
    {
      title: "Our Vision",
      subtitle: "Enrich the lives of travelers through organized adventures",
      desc: "We connect travel enthusiasts with expert operators who curate memorable and sustainable multi-day journeys. Our platform unleashes exploration, redefines global discovery, and removes decision fatigue through transformative organized adventures.",
      icon: "/assets/ourvalues/globe.svg",
    },
    {
      title: "Our Mission",
      subtitle: "Make adventure tourism accessible to all",
      desc: "We democratize adventure travel, remove barriers, and positively impact people and the planet. As our platform evolves, we make curated travel experiences more sustainable and accessible, promoting diversity and a global mindset.",
      icon: "/assets/ourvalues/rocket.svg",
    },
  ];

  return (
    <section className="my-20 px-6">
      {/* Section Title */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Our Vision & Mission
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          The purpose that guides everything we do
        </p>
      </div>

      {/* Cards */}
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="grid grid-cols-2 max-lg:grid-cols-1 gap-12 max-w-6xl mx-auto"
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-lg p-10 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Icon */}
            <div className="w-20 h-20 flex items-center justify-center bg-[#F7E7C1] rounded-2xl shadow-inner mb-6 mx-auto">
              <img src={item.icon} alt={item.title} className="w-12 h-12" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-center text-gray-800">
              {item.title}
            </h2>

            {/* Subtitle */}
            <p className="text-center text-[#936521] font-semibold mt-2 mb-6">
              {item.subtitle}
            </p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-justify">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionMission;
