import { HeroSection } from "@/components/hero-section";
import React from "react";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import LatestPosts from "@/components/latest-posts";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Home",
  description: "Landing page for my website of Bastian Berle",
};


export default function Home() {

  const aboutMe = `
    I am currently pursuing a Master’s degree in Machine Learning at Eberhard Karls Universität Tübingen, with a focus on machine learning and computer vision. My academic journey includes a B.Sc. in Business Informatics with a specialization in Data Science from DHBW Mannheim, where I explored the intersection of machine learning and industry applications. My professional experience spans roles at Accenture, where I contributed to data strategy and analytics in agile teams. My passion lies in applying advanced machine learning techniques to solve complex real-world problems, combining strong theoretical concepts with practical experience.
  `;

  return (
    <>
      <section className="container min-h-screen flex items-center justify-center">
        <HeroSection />
      </section>

      <section className="container min-h-screen max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-60">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          About me
        </h2>
        <TextGenerateEffect words={aboutMe} filter={true} duration={0.8} />
      </section>

      <section className="container min-h-screen max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-60">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Latest Posts
        </h2>
        <LatestPosts />
      </section>
    </>
  );
}
