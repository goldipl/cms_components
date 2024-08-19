import { create, StateCreator } from "zustand";

export interface MenuSlice {
  menuCollapseState: "icons" | "full";
  showMenu: boolean;
  toggleShowMenu: (v: boolean) => void;
  toggleCollapseState: () => void;
  path: number;
  setPath: (path: number) => void;
}

export const createMenuSlice: StateCreator<MenuSlice> = (set) => ({
  showMenu: true,
  menuCollapseState: "icons",
  toggleShowMenu: (v) => set(() => ({ showMenu: v })),
  toggleCollapseState: () =>
    set((state) => ({
      menuCollapseState: state.menuCollapseState === "icons" ? "full" : "icons",
    })),
  path: 1,
  setPath: (path: number) => set(() => ({ path })),
});
