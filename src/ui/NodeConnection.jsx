import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import * as THREE from 'three'
import { EventsControls } from '../controls/EventsControls';
import * as S from "../models/shaders";

import * as M from '../models/materials'
import { CubicHermiteSpline } from '../lib/CubicHermiteSpline';

var i = 0;

export default function NodeConnection({ dragging, setDragging, model, startMarker, endMarker }) {


    const startPos = startMarker.position;
    const endPos = endMarker.position;

    const [vectors, setVectors] = useState([new THREE.Vector2(20, 0), new THREE.Vector2(0, 0)]);

    const vertexShader = S.gridTileVertex;
    const fragmentShader = S.gridTileFragment;

    const { gl, camera } = useThree();

    const v0Mesh = useRef(null);
    const v1Mesh = useRef(null);

    // Because a callback can't access an updated state value, use a ref
    const vectorRef = useRef();

    vectorRef.current = vectors;

    const position = new THREE.Vector3();

    // Calculate the midpoint of the vectors
    position.subVectors(endPos, startPos).divideScalar(2).add(startPos);

    const [hovered, setHover] = useState(false)

    // Add a bit of y-offset to avoid clipping the floor
    position.add(new THREE.Vector3(0, 0.01, 0));

    const velocityScalarFunc = (val) => val * 1;

    const curve = new CubicHermiteSpline([[startPos.x, startPos.z], [endPos.x, endPos.z]], [[velocityScalarFunc(vectors[0].x), velocityScalarFunc(vectors[0].y)], [velocityScalarFunc(vectors[1].x), velocityScalarFunc(vectors[1].y)]]);

    useEffect(() => {
        if (v0Mesh.current !== null && v1Mesh.current !== null && model !== null) {
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
                this.focused.material.opacity = 1;
                model.current.material = M.tileMat

                setHover(true);
            })

            eventControls.attachEvent('dragAndDrop', function (altUsed) {
                i++;

                // if (i % 8 === 0) {

                // If alt is being used, snap to the grid
                if (altUsed) {
                    // Switch to the tile grid shader if it hasn't already
                    if (model.current.material === M.tileMat)
                        model.current.material = M.tileGridMat(fragmentShader, vertexShader)

                    this.focused.position.x = 11.855 * Math.round((this.focused.position.x) / 11.855);
                    this.focused.position.z = 11.855 * Math.round((this.focused.position.z) / 11.855);
                } else {
                    // Update marker position to wherever the mouse pointer is currently located
                    // this.focused.position.y = this.previous.y;
                }

                if (this.focused.name === "v0") {

                    setVectors([new THREE.Vector2(this.focused.position.x, this.focused.position.z), vectorRef.current[1]]);
                } else {
                    setVectors([vectorRef.current[0], new THREE.Vector2(this.focused.position.x, this.focused.position.z)]);
                }
                // }


            });

            eventControls.attach(v0Mesh.current);
            eventControls.attach(v1Mesh.current);

            eventControls.map = model.current;
        }





        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [camera, gl.domElement, model, dragging, setDragging])
    let points = curve.getPoints(400);

    // const colors = [];

    // const color = new THREE.Color();

    // const n = 25;

    // for (let i = 0; i < n; i++) {
    //     color.setRGB(i / 50, i / 50, i / 50);

    //     colors.push(color.r, color.g, color.b);
    // }

    const geometry = new THREE.BufferGeometry().setFromPoints(points.map((v, i) => new THREE.Vector2(v[0], v[1])));

    // const robotGeometry = new THREE.BufferGeometry().setFromPoints(points.map((v, i) => new THREE.Vector2(v[0] * 1.5, v[1] * 1.5)));


    const v0Geometry = new THREE.BufferGeometry().setFromPoints([startPos, new THREE.Vector3(vectors[0].x, 0, vectors[0].y)]);
    const v1Geometry = new THREE.BufferGeometry().setFromPoints([endPos, new THREE.Vector3(vectors[1].x, 0, vectors[1].y)]);

    const straightLineGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector2(-5, 0.1), new THREE.Vector2(5, 0.1), new THREE.Vector2(5, 6.5), new THREE.Vector2(-5, 6.5), new THREE.Vector2(-5, 0.1)]);

    // geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    return (
        <>

            <mesh name={"v0"} ref={v0Mesh} position={[vectors[0].x, 0, vectors[0].y]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={"red"} />
            </mesh>

            <mesh name={"v1"} ref={v1Mesh} position={[vectors[1].x, 0, vectors[1].y]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={"green"} />
            </mesh>


            <line position={[0, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]} geometry={geometry} />
            {points.slice(0, -1).map((v, i) => {
                return (
                    <>
                        <line key={"straightline" + i} position={[v[0], 0.1, v[1]]} geometry={straightLineGeometry} rotation={[0, Math.atan2(v[0] - points[i + 1][0], v[1] - points[i + 1][1]), 0]}>
                            <lineBasicMaterial color={"red"} />
                            {/* <boxGeometry args={[10, 0.01, 0.11]}/>
                        <meshStandardMaterial color={"red"} opacity={0.2} transparent={true}/> */}
                        </line>
                    </>
                )
            })}
            {/* <line position={[0, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]} geometry={robotGeometry} /> */}
            {/* <line position={[0, 0.1, -3]} rotation={[Math.PI / 2, 0, 0]} geometry={geometry} /> */}

            <line position={[0, 0.1, 0]} geometry={v0Geometry}>
                <lineBasicMaterial color={"yellow"} />
            </line>

            <line position={[0, 0.1, 0]} geometry={v1Geometry}>
                <lineBasicMaterial color={"yellow"} />
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