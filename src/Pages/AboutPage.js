"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Banner from "../Components/PageBanner";
import VisionSection from "../Components/AboutPageComp/VissionSection";
import MissionSection from "../Components/AboutPageComp/MissionSection";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(leftDivRef.current, {
        x: "30%",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: leftDivRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(rightDivRef.current, {
        x: "-30%",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: rightDivRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="about"
        className="w-full   bg-cover bg-center"
        // style={{ backgroundImage: "url('/aboutUsBackground.jpg')" }}
      >
        <Banner heading={"About Us"} />
        <VisionSection />
        <MissionSection />
      </section>
    </>
  );
};

export default AboutUs;
