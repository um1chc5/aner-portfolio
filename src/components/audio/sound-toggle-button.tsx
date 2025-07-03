"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useAudio } from "@/components/audio/audio-provider";

export default function SoundToggleButton() {
  const { soundOn, setSoundOn } = useAudio();
  return (
    <button
      type="button"
      aria-label={soundOn ? "Mute sound" : "Unmute sound"}
      onClick={() => setSoundOn((prev) => !prev)}
      className="hover:bg-primary-foreground fixed right-4 bottom-4 z-50 rounded-full border bg-white/80 p-2 shadow-lg transition-colors focus:ring-2 focus:outline-none sm:right-6 sm:bottom-6 sm:p-3"
    >
      {soundOn ? (
        <Volume2 className="h-5 w-5 sm:h-6 sm:w-6" />
      ) : (
        <VolumeX className="h-5 w-5 sm:h-6 sm:w-6" />
      )}
    </button>
  );
}
