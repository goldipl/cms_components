import { createMenuSlice, MenuSlice } from "@/store/menuSlice";
import { create } from "zustand";
import { combine } from "zustand/middleware";

type Store = MenuSlice;

export const useRootStore = create<Store>((...a) => ({
  ...createMenuSlice(...a),
}));
