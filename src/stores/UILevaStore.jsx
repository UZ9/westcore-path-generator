import create from "zustand"

// Stores various UI options 
export const useUiLevaStore = create(set => ({
    currentNodeStore: null, 
    markerMode: false,
    hideFieldElements: true,
    showRobotVisualization: true,
    toggleMarkerMode: () => set(state => ({ markerMode: !state.markerMode })),
    toggleRobotVisualization: () => set((state) => ({ showRobotVisualization: !state.showRobotVisualization })),
    toggleFieldElements: () => set((state) => ({ hideFieldElements: !state.hideFieldElements })),
    setStore: (store) => set(() => ({ currentNodeStore: store }))
}))