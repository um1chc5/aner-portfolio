"use client";

import { useAudioStore } from "@/stores/audio.stores";
import React from "react";

// Path to the audio file

interface ButtonWithHoverSoundProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

function ButtonWithHoverSound({
  children,
  className = "",
  ...rest
}: ButtonWithHoverSoundProps) {
  const { soundOn } = useAudioStore();

  const handleMouseOver = () => {
    if (soundOn) {
      const audio = document.querySelector<HTMLAudioElement>("#hover-audio");
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }
    }
  };

  return (
    <div className={className} onMouseOver={handleMouseOver} {...rest}>
      {children}
    </div>
  );
}

export default ButtonWithHoverSound;
