"use client";

import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

// This component will be used to load all audio elements globally
export const AudioLoader = () => {
  const pathname = usePathname();
  return (
    <>
      <audio id="hover-audio" src="/audio/hover-selection.wav" preload="auto" />
      <audio
        id="background-music"
        src={
          pathname === "/invite-kenh"
            ? "/audio/phep-mau.mp3"
            : "/audio/background-music.mp3"
        }
        loop
        preload="auto"
      />
      {/* Add more <audio> tags here as needed */}
    </>
  );
};

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AudioLoader />
      {children}
    </>
  );
};
