"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useAudio } from "./AudioProvider";

function SoundToggleButton() {
  const { soundOn, setSoundOn } = useAudio();
  return (
    <button
      type="button"
      aria-label={soundOn ? "Mute sound" : "Unmute sound"}
      onClick={() => setSoundOn((prev) => !prev)}
      className="hover:bg-primary-foreground fixed right-6 bottom-6 z-50 rounded-full border bg-white/80 p-3 shadow-lg transition-colors"
    >
      {soundOn ? (
        <Volume2 className="h-6 w-6" />
      ) : (
        <VolumeX className="h-6 w-6" />
      )}
    </button>
  );
}

export default SoundToggleButton;
