import { create } from "zustand";

type UserState = {
  user: User | null;
  addUser: (user: User) => void;
  removeUser: () => void;
};

const useUserStore = create<UserState>()((set) => ({
  user: null,
  addUser: (user) => set({ user }),
  removeUser: () => set({ user: null }),
}));

export { useUserStore };
