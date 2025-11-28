import Link from "next/link";
import React from "react";

const ExecutiveTeam = () => {
  return (
    <section className="mx-20 max-md:mx-5 my-10">
      <h1 className="text-2xl font-bold mb-5">Executive Team</h1>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10">
        <div className="flex flex-col gap-5 text-justify">
          <img
            src="/assets/executiveteam/CEO.jpg"
            className="w-100 rounded-xl"
          />
          <h1 className="font-bold text-xl">
            Travis Pittman, Co-Founder & CEO
          </h1>
          <p className="text-base leading-relaxed indent-10">
            Originally from Australia, Travis has lived in Europe for the past
            15 years and has called Vienna, Austria home for over a decade. In
            2010, together with his brother Shawn, he founded TourRadar to help
            connect people to life-enriching travel experiences.{" "}
            <Link href="#" className="text-blue-400">
              see more
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-5 text-justify">
          <img
            src="/assets/executiveteam/CEO.jpg"
            className="w-100 rounded-xl"
          />
          <h1 className="font-bold text-xl">
            Travis Pittman, Co-Founder & CEO
          </h1>
          <p className="text-base leading-relaxed indent-10">
            Originally from Australia, Travis has lived in Europe for the past
            15 years and has called Vienna, Austria home for over a decade. In
            2010, together with his brother Shawn, he founded TourRadar to help
            connect people to life-enriching travel experiences.{" "}
            <Link href="#" className="text-blue-400">
              see more
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-5 text-justify">
          <img
            src="/assets/executiveteam/CEO.jpg"
            className="w-100 rounded-xl"
          />
          <h1 className="font-bold text-xl">
            Travis Pittman, Co-Founder & CEO
          </h1>
          <p className="text-base leading-relaxed indent-10">
            Originally from Australia, Travis has lived in Europe for the past
            15 years and has called Vienna, Austria home for over a decade. In
            2010, together with his brother Shawn, he founded TourRadar to help
            connect people to life-enriching travel experiences.{" "}
            <Link href="#" className="text-blue-400">
              see more
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-5 text-justify">
          <img
            src="/assets/executiveteam/CEO.jpg"
            className="w-100 rounded-xl"
          />
          <h1 className="font-bold text-xl">
            Travis Pittman, Co-Founder & CEO
          </h1>
          <p className="text-base leading-relaxed indent-10">
            Originally from Australia, Travis has lived in Europe for the past
            15 years and has called Vienna, Austria home for over a decade. In
            2010, together with his brother Shawn, he founded TourRadar to help
            connect people to life-enriching travel experiences.{" "}
            <Link href="#" className="text-blue-400">
              see more
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveTeam;
