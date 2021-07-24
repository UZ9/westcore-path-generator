import * as THREE from 'three'
import { EventsControls } from "./EventsControls";
import React, { useEffect } from "react"
import { useThree } from "@react-three/fiber"

export default function DragItem(props) {
    const { gl, scene, camera } = useThree();

    const checker = React.useRef();

    const backgroundMaterial = new THREE.MeshLambertMaterial({
        color: "#ededed",
        side: THREE.DoubleSide,
    })

    const checkerboard = new THREE.Mesh(new THREE.PlaneGeometry(400, 400, 1, 1), backgroundMaterial)

    checkerboard.rotateX(Math.PI / 2);

    const eventControls = new EventsControls(camera, gl.domElement);
    eventControls.map = checkerboard;

    eventControls.attachEvent('mouseOver', function () {
        props.setDragging(true);
    })

    eventControls.attachEvent('mouseOut', function () {
        props.setDragging(false);
    })

    eventControls.attachEvent('dragAndDrop', function () {

        this.focused.position.y = this.previous.y;

    });

    let geometry = new THREE.CylinderGeometry(5, 5, 10, 8);

    scene.add(checkerboard)
    // scene.add(checker);

    useEffect(() => {
        if (checker.current !== null) {
            eventControls.attach(checker.current);
        }
    })

    

    return (<>
        <mesh ref={checker} geometry={geometry} material={backgroundMaterial}/>
    
    </>)
}