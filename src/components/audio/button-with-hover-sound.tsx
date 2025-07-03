"use client";

import React, { useRef } from "react";
import { useAudio } from "./audio-provider";

// Path to the audio file

interface ButtonWithHoverSoundProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

function ButtonWithHoverSound({
  children,
  className = "",
  ...rest
}: ButtonWithHoverSoundProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { soundOn } = useAudio();

  const handleMouseOver = () => {
    if (audioRef.current && soundOn) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <button
      type="button"
      className={className}
      onMouseOver={handleMouseOver}
      {...rest}
    >
      {children}
      <audio ref={audioRef} src="/audio/hover-selection.wav" />
    </button>
  );
}

export default ButtonWithHoverSound;
