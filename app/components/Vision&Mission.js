import React from "react";

const VisionMission = ()=>{
    return(
        <section className="my-10 max-md:mx-5">
            <h1 className="text-2xl font-bold text-center mb-5">Our Vision & Mission</h1>
            <div className="grid grid-cols-2 mx-20 justify-center gap-5 text-white max-md:grid-cols-1 max-md:mx-auto max-lg:mx-auto">
                <div className="flex flex-col gap-5 bg-[#936521] text-justify hover:shadow-md p-4 rounded-4xl hover:-mt-1 hover:mb-1 transition-all ease-in-out duration-300">
                    <h1 className="text-xl font-bold text-center">Vision</h1>
                    <h2 className="font-bold text-base">Enrich the lives of travelers, through organized adventures</h2>
                    <p className="indent-10 text-base leading-relaxed">TourRadar’s vision is to connect travel enthusiasts, via our Organized Adventure Platform, with expert operators who curate memorable and sustainable multi-day journeys. We unleash exploration, redefine global discovery and leave decision fatigue behind through transformative organized adventures.</p>
                </div>
                <div className="flex flex-col gap-5 bg-[#D8AF53] text-justify hover:shadow-md p-4 rounded-4xl hover:-mt-1 hover:mb-1 transition-all ease-in-out duration-300">
                    <h1 className="text-xl font-bold text-center">Mission</h1>
                    <h2 className="font-bold text-base">Make adventure tourism accessible to all</h2>
                    <p className="indent-10 text-base leading-relaxed">TourRadar’s mission is to democratize adventure travel, remove barriers, and positively impact people and the planet. As our Organized Adventure Platform evolves, we make curated travel experiences more sustainable and accessible, promoting diversity and a global mindset for future generations.</p>
                </div>
            </div>
        </section>
    );
}

export default VisionMission;