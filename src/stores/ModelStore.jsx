import create from 'zustand'

// Stores the field model for visualization changes
export const useModelStore = create(set => ({
    model: null,
    setModel: (model) => {set(({ model: model }));}
}))