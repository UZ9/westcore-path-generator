import create from 'zustand'
import produce from 'immer'

// Contains all of the node-related data
export const useNodeStore = create(set => ({
    nodes: [],
    nodeCurrentlyDragging: false,
    setNodeCurrentlyDragging: (val) => set(() => ({ nodeCurrentlyDragging: val })),
    setNodeState: (fn) => set(produce(fn)),
    addNode: (node) => {set(state => ({ nodes: [...state.nodes, node] })); }
}))