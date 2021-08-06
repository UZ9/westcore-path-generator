import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import * as THREE from 'three'
import { EventsControls } from '../controls/EventsControls';
import * as S from "../models/shaders";

import * as M from '../models/materials'

export default function NodeConnection({ dragging, setDragging, model, startMarker, endMarker }) {
    

    const startPos = startMarker.position;
    const endPos = endMarker.position;

    const [tangent, setTangent] = useState(new THREE.Vector2((startPos.x + endPos.x) / 2,  (endPos.z + endPos.z) / 2));

    const vertexShader = S.gridTileVertex;
    const fragmentShader = S.gridTileFragment;

    const { gl, camera } = useThree();

    const tangentMesh = useRef(null);

    const position = new THREE.Vector3();

    // Calculate the midpoint of the vectors
    position.subVectors(endPos, startPos).divideScalar(2).add(startPos);

    const [hovered, setHover] = useState(false)

    // Add a bit of y-offset to avoid clipping the floor
    position.add(new THREE.Vector3(0, 0.01, 0));

    const curve = new THREE.QuadraticBezierCurve(
        new THREE.Vector2(startPos.x, startPos.z),
        tangent,
        new THREE.Vector2(endPos.x, endPos.z),
    )

    useEffect(() => {
        if (tangentMesh.current !== null && model !== null) {
            const eventControls = new EventsControls(camera, gl.domElement);

            eventControls.attachEvent('mouseOver', function () {
                if (dragging === false)
                    setDragging(true);
                if (hovered === false)
                    setHover(true);
            })

            eventControls.attachEvent('onclick', function (event) {

                if (event.altKey)
                    model.current.material = M.tileGridMat(fragmentShader, vertexShader)
            })

            eventControls.attachEvent('mouseOut', function () {
                setHover(false);
                setDragging(false);
            })

            eventControls.attachEvent('mouseUp', function () {
                tangentMesh.current.material.opacity = 1;
                model.current.material = M.tileMat

                setHover(true);
            })

            eventControls.attachEvent('dragAndDrop', function (altUsed) {
                // If alt is being used, snap to the grid
                if (altUsed) {
                    // Switch to the tile grid shader if it hasn't already
                    if (model.current.material === M.tileMat)
                        model.current.material = M.tileGridMat(fragmentShader, vertexShader)

                    this.focused.position.x = 11.855 * Math.round((this.focused.position.x) / 11.855);
                    this.focused.position.z = 11.855 * Math.round((this.focused.position.z) / 11.855);
                } else {
                    // Update marker position to wherever the mouse pointer is currently located
                    this.focused.position.y = this.previous.y;
                }

                setTangent(new THREE.Vector2(this.focused.position.x, this.focused.position.z))
            });

            eventControls.attach(tangentMesh.current);

            eventControls.map = model.current;
        }


        


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [camera, gl.domElement, model, dragging, setDragging])
    let points = curve.getPoints(25);

    // const colors = [];

    // const color = new THREE.Color();

    // const n = 25;

    // for (let i = 0; i < n; i++) {
    //     color.setRGB(i / 50, i / 50, i / 50);

    //     colors.push(color.r, color.g, color.b);
    // }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const tangentGeometry = new THREE.BufferGeometry().setFromPoints([startPos, new THREE.Vector3(tangent.x, 0, tangent.y), endPos])

    // geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    return (
        <>

            <mesh ref={tangentMesh} position={[tangent.x, 0.5, tangent.y]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={"red"} />
            </mesh>


            <line position={[0, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]} geometry={geometry} />
            <line position={[0, 0.1, 0]} geometry={tangentGeometry}>
                <lineBasicMaterial color={"yellow"}/>
                {/* <lineDashedMaterial/> */}
            </line>
 
            {/* {points.map((v, i) => {
                return <mesh position={[v.x, 0, v.y]}><boxGeometry args={[0.3, 0.3, 0.3]} /><meshStandardMaterial /></mesh>
            })} */}
            {/* <mesh position={startPos}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial color={"red"}/>
            </mesh> */}
            {/* <mesh
                rotation={[Math.PI / 2, 0, -m]} // Rotation is in radians, X is rotated to be aligned with the field
                position={startPos}
                geometry={getGeometry()}
            // material={this.getMaterial()}
            // color={selected ? 'green' : hovered ? 'yellow' : 'blue'}
            // onClick={(event) => this.onClick(event)}
            // onPointerOver={(_event) => this.setState(() => ({ selected: this.state.selected, hovered: true }))}
            // onPointerOut={(_event) => this.setState(() => ({ selected: this.state.selected, hovered: false }))}
            >
                <meshStandardMaterial metalness={0.5} transparent={true} opacity={1} color={props.color} />

            </mesh> */}


        </>)
}