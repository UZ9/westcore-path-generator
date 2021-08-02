import create from 'zustand'
import produce from 'immer'

export const useNodeStore = create(set => ({
    nodes: [],
    setNodeState: (fn) => set(produce(fn)),
    addNode: (node) => {set(state => ({ nodes: [...state.nodes, node] })); console.log("Setting node")}
}))