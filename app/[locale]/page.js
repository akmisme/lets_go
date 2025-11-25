"use client";
import React from "react";
import { useTranslations } from "next-intl";
import SearchSection from "../components/SearchSection";
import Hero from "../components/Hero";
import PromotionBanner from "../components/Promotionbanner";
import Popularexp from "../components/Popularexp";

export default function Home() {
  return (
    <section className="min-h-screen bg-gray-100">
      <Hero/>
      <SearchSection/>
      <PromotionBanner text="မြန်မာ Black Friday Promotion!"/>
      <Popularexp/>
    </section>
  );
}