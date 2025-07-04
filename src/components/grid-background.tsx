import React from "react";
import { InteractiveGridPattern } from "./magicui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

export default function GridBackground({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "absolute top-0 h-screen w-full overflow-hidden",
        className,
      )}
      {...props}
    >
      <InteractiveGridPattern
        squares={[50, 40]}
        squaresClassName="hover:fill-blue-500"
        className={cn(
          "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(720px_circle_at_center,white,transparent)]",
          "inset-x-0 -top-50 h-auto skew-y-12",
        )}
      />
    </div>
  );
}
