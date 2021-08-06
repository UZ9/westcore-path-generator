import React from "react";
import { OrbitControls } from "@react-three/drei"
import Node from "./Node"
import { useNodeStore } from "../stores/NodeStore";
import { useState } from "react";
import shallow from 'zustand/shallow'
import { button, useControls } from "leva";
import { useModelStore } from "../stores/ModelStore";
import { useUiLevaStore } from "../stores/UILevaStore";
import { useEffect } from "react";
import NodeConnection from "./NodeConnection";

export default function UIManager() {

    const nodes = useNodeStore(state => state.nodes);
    const model = useModelStore(state => state.model);

    const { setMarkerMode, setUiStore } = useUiLevaStore(state => ({ setMarkerMode: state.setMarkerMode, setUiStore: state.setStore }), shallow);

    const [dragging, setDragging] = useState(false);

    useControls(
        {
            "Remove All Markers": button(() => { })
        }
    )

    const [[selection, store], setSelection] = React.useState([-1, null]);

    useEffect(() => {
        setUiStore(store);
    }, [store, setMarkerMode, setUiStore])

    return <>
        {(nodes.map((v, i) => (
            <Node
                key={i}
                node={v}
                selected={selection !== null ? selection === i : false}
                setSelect={setSelection}
                dragging={dragging}
                setDragging={setDragging}
                model={model}
                index={i}
            />
        )))}
        {(nodes.slice(0, -1).map((v, i) => (
            <NodeConnection startMarker={v} endMarker={nodes[i + 1]} />
        )))}

        {<OrbitControls enabled={!dragging} />}
    </>

}