"use client";
import React from "react";
import HomeSearchSection from "../components/homesearch";
import Hero from "../components/Hero";
import PromotionBanner from "../components/Promotionbanner";
import Popularexp from "../components/Popularexp";
import TrandingNow from "../components/TrandingNow";
import AndIOS from "../components/AndriodIOS";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <section className="min-h-screen bg-gray-100 pb-10">
      <Hero/>
      <HomeSearchSection/>
      <PromotionBanner/>
      <Popularexp/>
      <TrandingNow/>
      <AndIOS/>
      <WhyChooseUs/>
    </section>
  );
}