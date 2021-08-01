import create from 'zustand'

export const useNodeStore = create(set => ({
    nodes: [],
    addNode: (node) => {set(state => ({ nodes: [...state.nodes, node] })); console.log("Setting node")}
}))