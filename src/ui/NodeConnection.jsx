import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import * as THREE from 'three'
import { EventsControls } from '../controls/EventsControls';
import * as S from "../models/shaders";

import * as M from '../models/materials'
import { CubicHermiteSpline } from '../lib/CubicHermiteSpline';
import { useUiLevaStore } from '../stores/UILevaStore';
import { useNodeStore } from '../stores/NodeStore';

export default function NodeConnection({ model, startMarker, endMarker }) {

    const robotVisualization = useUiLevaStore(state => state.showRobotVisualization);

    const startPos = startMarker.position;
    const endPos = endMarker.position;

    const [vectors, setVectors] = useState([new THREE.Vector2(20, 0), new THREE.Vector2(0, 0)]);

    const setNodeDragging = useNodeStore(state => state.setNodeCurrentlyDragging);

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
    // Add a bit of y-offset to avoid clipping the floor
    position.add(new THREE.Vector3(0, 0.01, 0));

    const velocityScalarFunc = (val) => val * 1;

    // Construct the hermite spline 
    const curve = new CubicHermiteSpline([[startPos.x, startPos.z], [endPos.x, endPos.z]], [[velocityScalarFunc(vectors[0].x), velocityScalarFunc(vectors[0].y)], [velocityScalarFunc(vectors[1].x), velocityScalarFunc(vectors[1].y)]]);

    useEffect(() => {
        if (v0Mesh.current !== null && v1Mesh.current !== null && model !== null) {
            const eventControls = new EventsControls(camera, gl.domElement);

            eventControls.attachEvent('mouseOver', function () {
                setNodeDragging(true);
            })

            eventControls.attachEvent('onclick', function (event) {
                if (event.altKey)
                    model.current.material = M.tileGridMat(fragmentShader, vertexShader)
            })

            eventControls.attachEvent('mouseOut', function () {
                setNodeDragging(false);
            })

            eventControls.attachEvent('mouseUp', function () {
                this.focused.material.opacity = 1;
                model.current.material = M.tileMat
            })

            eventControls.attachEvent('dragAndDrop', function (altUsed) {
                // If alt is being used, snap to the grid
                if (altUsed) {
                    // Switch to the tile grid shader if it hasn't already
                    if (model.current.material === M.tileMat)
                        model.current.material = M.tileGridMat(fragmentShader, vertexShader)

                    this.focused.position.x = 11.855 * Math.round((this.focused.position.x) / 11.855);
                    this.focused.position.z = 11.855 * Math.round((this.focused.position.z) / 11.855);
                }

                if (this.focused.name === "v0") {

                    setVectors([new THREE.Vector2(this.focused.position.x, this.focused.position.z), vectorRef.current[1]]);
                } else {
                    setVectors([vectorRef.current[0], new THREE.Vector2(this.focused.position.x, this.focused.position.z)]);
                }
            });

            eventControls.attach(v0Mesh.current);
            eventControls.attach(v1Mesh.current);

            eventControls.map = model.current;
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [camera, gl.domElement, model])
    let points = curve.getPoints(400);

    // Create the spline geometry from the generated points
    const geometry = new THREE.BufferGeometry().setFromPoints(points.map((v, i) => new THREE.Vector2(v[0], v[1])));

    // Create the lines between the nodes and tangents
    const v0Geometry = new THREE.BufferGeometry().setFromPoints([startPos, new THREE.Vector3(vectors[0].x, 0, vectors[0].y)]);
    const v1Geometry = new THREE.BufferGeometry().setFromPoints([endPos, new THREE.Vector3(vectors[1].x, 0, vectors[1].y)]);

    // Determines how many visualization meshes are constructed (more is less)
    const visualizationDrawRate = 24;

    // Represents the robot's size measurements in inches
    const robotWidth = 18;
    const robotDepth = 18;
    const robotHeight = 18;

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
            {robotVisualization ? points.slice(0, -1).filter((_element, index) => index % visualizationDrawRate === 0).map((v, i) => {
                i = i * visualizationDrawRate;

                return (
                    <mesh key={"robotvisualization " + i} rotation={[0, Math.atan2(v[0] - points[i + 1][0], v[1] - points[i + 1][1]), 0]} position={[points[i + 1][0], 0, points[i + 1][1]]} >
                        <boxGeometry args={[robotWidth, robotHeight, robotDepth]} />
                        <meshStandardMaterial color={"red"} depthWrite={false} depthTest={false} opacity={0.2} transparent={true} /> */
                    </mesh>
                )
            }) : <></>}

            <line position={[0, 0.1, 0]} geometry={v0Geometry}>
                <lineBasicMaterial color={"yellow"} />
            </line>

            <line position={[0, 0.1, 0]} geometry={v1Geometry}>
                <lineBasicMaterial color={"yellow"} />
            </line>
        </>)
}