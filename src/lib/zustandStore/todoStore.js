import { create } from "zustand";

const todoStore = create((set) => ({
    todo : {},
    todoChange : (params) => set(() => ({todo : {...params}}))
}))

export default todoStore;