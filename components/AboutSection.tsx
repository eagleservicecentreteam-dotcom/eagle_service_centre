"use client"
import React, { useRef } from "react";
import Badge from "./Badge";
import FeatureCard from "./FeatureCard";
import { useScrollRevealAnimation } from "@/hooks/useScrollRevealAnimation";

const AboutSection = () => {

    const badgeRef = useRef<HTMLDivElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)

    useScrollRevealAnimation({badgeRef,headingRef})
  return (
    <div
      id={"about"}
      className="mt-[80px] lg:mt-[160px] w-full h-full flex flex-col lg:flex-row  gap-10 md:gap-12 scroll-mt-24"
    >
      <div className="lg:w-[30%] flex flex-col">
        <div ref={badgeRef}>
        <Badge text={"Who We Are"} />
        </div>
        <h2 ref={headingRef} className="mt-4 w-full text-left uppercase text-[#2C2C2C] font-semibold font-geist text-[20px] md:text-[32px] lg:text-[36px] ">
          Precision. Performance. Partnership. Progress.
        </h2>
        <p className="mt-[40px] md:mt-[48px] font-light text-[16px] md:text-[18px]">
        Since 1977, Eagle Service Centre (ESC) has been a frontrunner in manufacturing high quality PVC welding machines. Our machines are widely used in blister & shrink film, photo albums, car & scooter seat covers, stickers, canvas shoes, velvet patches, and more.
        <br />
        <br />
        Operating from a fully equipped 165 sq. yard facility, ESC has built a strong reputation in the Indian market and is steadily expanding into international markets such as Nepal and beyond. Our commitment remains constant superior quality at economical prices with reliable, maintenance free machines.
        </p>

        <div className="mt-[40px] md:mt-[48px] font-light text-[16px] md:text-[18px] grid grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(4,1fr)] lg:grid-cols-[repeat(2,1fr)] w-full gap-[24px]">
          <div className="w-[140px] flex flex-col gap-1 text-[#2C2C2C] font-geist">
            <p className="text-4xl md:text-5xl  font-light relative">
              1977
              <span className="absolute top-0 text-3xl md:text-4xl"></span>
            </p>
            <p className="text-[14px] lg:text-[14px]">Established Since</p>
          </div>
          
          <div className="w-[140px] flex flex-col gap-1 text-[#2C2C2C] font-geist">
            <p className="text-4xl md:text-5xl  font-light relative">
              20
              <span className="absolute top-0 text-3xl md:text-4xl">+</span>
            </p>
            <p className="text-[14px] lg:text-[14px]">Industries Served Across Sectors</p>
          </div>
          
          <div className="w-[140px] flex flex-col gap-1 text-[#2C2C2C] font-geist">
            <p className="text-4xl md:text-5xl  font-light relative">
              97
              <span className="absolute top-0 text-3xl md:text-4xl">%</span>
            </p>
            <p className="text-[14px] lg:text-[14px]">Client Retention Rate</p>
          </div>

          <div className="w-[140px] flex flex-col gap-1 text-[#2C2C2C] font-geist">
            <p className="text-4xl md:text-5xl  font-light relative">
              24/7
              <span className="absolute top-0 text-3xl md:text-4xl"></span>
            </p>
            <p className="text-[14px] lg:text-[14px]">Customer Support</p>
          </div>
        </div>
      </div>

      <div className="lg:w-[70%] flex flex-col gap-6">
        <div className="max-h-[400px] overflow-hidden rounded-[32px]">
          <img
            src="/who-we-are01.jpg"
            alt="who-we-are"
            className="w-full object-cover object-center"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(2,1fr)] gap-[24px]">
          <FeatureCard
            icon={"/eye.svg"}
            heading={"Founder’s Legacy"}
            desc1={
              `Eagle Service Centre was founded by Late Shri Bhim Sain Chopra, who began his journey in the automobile sector in the early 1970s before venturing into PVC welding machine manufacturing.`
            }
            desc2={
              `His vision, dedication, and pioneering approach laid the foundation for Eagle to become a trusted name in the industry. Today, under the leadership of Mr. Sagar Chopra, the legacy continues—serving industries with reliable, world-class welding solutions and expanding into global markets.`
            }
          />
          <FeatureCard
            icon={"/mission.svg"}
            heading={"Our Vision"}
            desc1={
              "At Eagle Service Centre, our vision is to uphold the founder’s philosophy of quality, trust, and progress. We are committed to delivering reliable, high-frequency PVC welding machines that empower industries with efficiency and innovation. Guided by the principles of precision, performance, and partnership, we strive to expand globally while staying rooted in the values set forth by our founder."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
