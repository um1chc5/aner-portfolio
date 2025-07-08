"use client";

import { useAudioStore } from "@/stores/audio.stores";
import { Volume2, VolumeX } from "lucide-react";
import { useEffect } from "react";

const FADE_DURATION = 500; // ms
const TARGET_VOLUME = 0.7;

function fadeAudio(
  audio: HTMLAudioElement,
  from: number,
  to: number,
  duration: number,
  onEnd?: () => void,
) {
  const start = performance.now();
  function step(now: number) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    audio.volume = Math.max(0, Math.min(1, from + (to - from) * progress));
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      audio.volume = to;
      if (onEnd) onEnd();
    }
  }
  requestAnimationFrame(step);
}

export default function SoundToggleButton() {
  const { soundOn, setSoundOn } = useAudioStore();

  useEffect(() => {
    const bgAudio =
      document.querySelector<HTMLAudioElement>("#background-music");
    if (!bgAudio) return;

    if (soundOn) {
      bgAudio.volume = 0; // Start from 0 for fade in
      bgAudio.play();
      fadeAudio(bgAudio, 0, TARGET_VOLUME, FADE_DURATION);
    } else {
      fadeAudio(bgAudio, bgAudio.volume, 0, FADE_DURATION, () => {
        bgAudio.pause();
      });
    }
  }, [soundOn]);

  return (
    <>
      <button
        type="button"
        aria-label={soundOn ? "Mute sound" : "Unmute sound"}
        onClick={() => setSoundOn(!soundOn)}
        className="hover:bg-primary-foreground fixed right-4 bottom-4 z-50 rounded-full border bg-white/80 p-2 shadow-lg transition-colors sm:right-6 sm:bottom-6 sm:p-3"
      >
        {soundOn ? (
          <Volume2 className="h-5 w-5 sm:h-6 sm:w-6" />
        ) : (
          <VolumeX className="h-5 w-5 sm:h-6 sm:w-6" />
        )}
      </button>
    </>
  );
}
