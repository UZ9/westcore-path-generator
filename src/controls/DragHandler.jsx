import * as THREE from 'three'
import { EventsControls } from "./EventsControls";
import React from "react"
import { useThree } from "@react-three/fiber"
import DragItem from "./DragItem"

import { OrbitControls } from '@react-three/drei'

export default function DragHandler(props) {
    
  const [dragging, setDragging] = React.useState(false);
    
    return (
        <>
            <OrbitControls enabled={!dragging} camera={props.camera.current} />

            <DragItem camera={props.camera} setDragging={setDragging} />

        </>
    )
}