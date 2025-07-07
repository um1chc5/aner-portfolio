"use client";

import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

interface AudioContextType {
  soundOn: boolean;
  setSoundOn: Dispatch<SetStateAction<boolean>>;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

// This component will be used to load all audio elements globally
export const AudioLoader = () => (
  <>
    <audio id="hover-audio" src="/audio/hover-selection.wav" preload="auto" />
    <audio id="background-music" src="/audio/background-music.mp3" loop preload="auto" />
    {/* Add more <audio> tags here as needed */}
  </>
);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [soundOn, setSoundOn] = useState(false);
  return (
    <AudioContext.Provider value={{ soundOn, setSoundOn }}>
      <AudioLoader />
      {children}
    </AudioContext.Provider>
  );
};

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
