import create from 'zustand'

export const useModelStore = create(set => ({
    model: null,
    setModel: (model) => {set(({ model: model })); console.log("Setting model")}
}))