"use client";

import React from "react";
import { useAudio } from "./audio-provider";

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
  const { soundOn } = useAudio();

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
