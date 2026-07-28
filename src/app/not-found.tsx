import Link from "next/link";
import DiffusionText from "@/components/diffusion-text";
import LossCurve from "@/components/loss-curve";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Model not found",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 text-center">
      <DiffusionText
        as="h1"
        duration={1.6}
        className="text-5xl font-black tracking-tight md:text-7xl"
      >
        Model not found
      </DiffusionText>

      <p className="text-xl text-muted-foreground">
        Training diverged. Loss ={" "}
        <span className="font-mono text-foreground">∞</span>
      </p>

      <LossCurve
        diverging
        showAxes
        width={420}
        height={140}
        duration={1.8}
        className="my-2"
      />

      <p className="max-w-md text-sm text-muted-foreground">
        The page you&apos;re looking for never converged. Try restarting from a
        known-good checkpoint.
      </p>

      <Link
        href="/"
        className={cn(buttonVariants({ variant: "default" }), "mt-2")}
      >
        Return to home →
      </Link>
    </div>
  );
}
