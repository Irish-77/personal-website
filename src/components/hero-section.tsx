"use client";

import DiffusionText from "@/components/diffusion-text";
import AttentionPortrait from "@/components/attention-portrait";
import ConvKernel from "@/components/conv-kernel";

export function HeroSection() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 md:flex-row md:gap-12">
      <div className="flex-1 space-y-4 text-center md:text-left">
        <DiffusionText
          as="h1"
          duration={1.8}
          className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl"
        >
          Bastian Berle
        </DiffusionText>
        <DiffusionText
          as="p"
          duration={1.4}
          delay={0.4}
          className="text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Master&apos;s student. Deep learning, machine learning, and computer vision.
        </DiffusionText>
        <div className="flex justify-center pt-2 md:justify-start">
          <ConvKernel size={44} delay={1.8} className="opacity-80" />
        </div>
      </div>

      <AttentionPortrait
        src="/assets/me.jpg"
        alt="Bastian Berle"
        duration={2200}
        className="aspect-square w-full max-w-xs shrink-0"
      />
    </div>
  );
}
