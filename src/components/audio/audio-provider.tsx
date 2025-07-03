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

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [soundOn, setSoundOn] = useState(false);
  return (
    <AudioContext.Provider value={{ soundOn, setSoundOn }}>
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
