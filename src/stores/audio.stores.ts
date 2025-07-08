import { create } from "zustand";

interface AudioState {
  soundOn: boolean;
  setSoundOn: (soundOn: boolean) => void;
}

// Zustand store for audio state
export const useAudioStore = create<AudioState>((set) => ({
  soundOn: false,
  setSoundOn: (soundOn) => set({ soundOn }),
}));
