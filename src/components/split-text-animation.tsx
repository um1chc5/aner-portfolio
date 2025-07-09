"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

// Register SplitText plugin
gsap.registerPlugin(SplitText);

interface SplitTextAnimationProps {
  children: React.ReactNode;
  className?: string;
}

export default function SplitTextAnimation({
  children,
  className = "",
}: SplitTextAnimationProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Create split text
    const splitText = new SplitText(textRef.current, {
      type: "chars,words",
      charsClass: "char",
      wordsClass: "word",
    });

    // Set initial state
    gsap.set(splitText.chars, {
      opacity: 0,
      y: 5,
    });

    // Animate in
    gsap.to(splitText.chars, {
      duration: 0.3,
      opacity: 1,
      y: 0,
      ease: "power2.out",
      stagger: 0.008,
    });

    // Cleanup
    return () => {
      splitText.revert();
    };
  }, [children]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
}
