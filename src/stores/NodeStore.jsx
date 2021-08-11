import create from 'zustand'
import produce from 'immer'

// Contains all of the node-related data
export const useNodeStore = create(set => ({
    nodes: [],
    setNodeState: (fn) => set(produce(fn)),
    addNode: (node) => {set(state => ({ nodes: [...state.nodes, node] })); }
}))