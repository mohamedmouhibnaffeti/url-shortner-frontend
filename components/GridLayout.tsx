"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";

export function GridPatternDemo() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl bg-black">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
        Grid Pattern
      </p>
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 20],
          [20, 25],
          [25, 20],
        ]}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-20%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}
