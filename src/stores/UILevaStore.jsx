import create from "zustand"

export const useUiLevaStore = create(set => ({
    currentNodeStore: null,
    markerMode: false,
    hideFieldElements: true,
    showRobotVisualization: true,
    toggleMarkerMode: () => set(state => ({ markerMode: !state.markerMode })),
    toggleFieldElements: (store) => set((state) => ({ hideFieldElements: !state.hideFieldElements })),
    setStore: (store) => set(() => ({ currentNodeStore: store }))
}))