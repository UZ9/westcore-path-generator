import { StaticReadUsage } from "three"
import create from "zustand"

export const useUiLevaStore = create(set => ({
    currentNodeStore: null,
    markerMode: false,
    toggleMarkerMode: () => set(state => ({ markerMode: !state.markerMode })),
    setStore: (store) => set(() => ({ currentNodeStore: store }))
}))