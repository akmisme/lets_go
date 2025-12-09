import React from "react";
import BaganExp from "@/app/components/BaganExp";
import MandalayExp from "@/app/components/MandalayExp";
import YangonExp from "@/app/components/YangonExp";
import TaunggyiExp from "@/app/components/TaunggyiExp";
import KalawExp from "@/app/components/KalawExp";
import HpaanExp from "@/app/components/Hpa-anExp";
import InleExp from "@/app/components/InleExp";
import NgwesaungExp from "@/app/components/NgwesaungExp";
import ChaungthaExp from "@/app/components/ChaungthaExp";

export default function Exp() {
  return (
    <main className="mt-30 px-10 pt-5 pb-10 bg-gray-100">
        <BaganExp/>
        <MandalayExp/>
        <YangonExp/>
        <TaunggyiExp/>
        <KalawExp/>
        <HpaanExp/>
        <InleExp/>
        <NgwesaungExp/>
        <ChaungthaExp/>
    </main>
  );
}
