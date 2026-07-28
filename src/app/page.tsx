import { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import LatestPosts from "@/components/latest-posts";
import DiffusionText from "@/components/diffusion-text";
import GaussianCurve from "@/components/gaussian-curve";

export const metadata: Metadata = {
  title: "Home",
  description: "Landing page for my website of Bastian Berle",
};

const aboutMe = `I am currently pursuing a Master's degree in Machine Learning at Eberhard Karls Universität Tübingen, with a focus on machine learning and computer vision. My academic journey includes a B.Sc. in Business Informatics with a specialization in Data Science from DHBW Mannheim, where I explored the intersection of machine learning and industry applications. My professional experience spans roles at Accenture, where I contributed to data strategy and analytics in agile teams. My passion lies in applying advanced machine learning techniques to solve complex real-world problems, combining strong theoretical concepts with practical experience.`;

export default function Home() {
  return (
    <>
      <section className="container flex min-h-screen items-center justify-center">
        <HeroSection />
      </section>

      <section className="container mt-60 flex min-h-screen max-w-4xl flex-col space-y-6 py-6 lg:py-10">
        <div className="flex flex-col items-center space-y-3">
          <DiffusionText
            as="h2"
            duration={1.6}
            triggerOnInView
            className="text-center text-3xl font-black sm:text-5xl md:text-6xl lg:text-7xl"
          >
            About me
          </DiffusionText>
          <GaussianCurve
            triggerOnInView
            fill
            width={220}
            height={48}
            duration={1.4}
            delay={0.3}
            className="opacity-90"
          />
        </div>
        <TextGenerateEffect words={aboutMe} filter={true} duration={0.8} />
      </section>

      <section className="container mt-60 flex min-h-screen max-w-4xl flex-col space-y-6 py-6 lg:py-10">
        <div className="flex flex-col items-center space-y-3">
          <DiffusionText
            as="h2"
            duration={1.6}
            triggerOnInView
            className="text-center text-3xl font-black sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Latest Posts
          </DiffusionText>
          <GaussianCurve
            triggerOnInView
            fill
            width={280}
            height={52}
            duration={1.6}
            delay={0.3}
            components={[
              { mu: -1.5, sigma: 0.7 },
              { mu: 0.2, sigma: 0.9, weight: 0.85 },
              { mu: 1.8, sigma: 0.6, weight: 0.7 },
            ]}
            className="opacity-90"
          />
        </div>
        <LatestPosts />
      </section>
    </>
  );
}
