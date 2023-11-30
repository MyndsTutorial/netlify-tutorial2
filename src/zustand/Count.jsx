import {create} from "zustand";

const useCountStore = create((set) => ({
  count: 10,
  increment: () => set((state) => ({count: state.count + 1})),
  decrement: () => set((state) => ({count: state.count - 1})),
}));

export default useCountStore;
