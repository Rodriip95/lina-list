// src/store/useUserStore.ts
import { create } from 'zustand';

type User = {
  uid: string;
  name: string;
  email: string;
  photoURL?: string;
};

type State = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const useUserStore = create<State>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
