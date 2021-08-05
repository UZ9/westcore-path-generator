import { useControls, useCreateStore } from "leva";
import React from "react";
import { useEffect, useRef } from "react";
import { Text, Billboard } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { EventsControls } from "../controls/EventsControls";
import { tileMat, tileGridMat } from "../models/materials";
import { useNodeStore } from "../stores/NodeStore";

export default function Node({ dragging, node, index, selected, setSelect, setDragging, model }) {
    console.log("Rendering node");

    const store = useCreateStore();

    const vertexShader = document.getElementById('vertexShader').textContent;
    const fragmentShader = document.getElementById('fragmentShader').textContent;

    const setNodeState = useNodeStore(state => state.setNodeState);

    const { gl, camera } = useThree();

    const mesh = useRef(null)
    const [hovered, setHover] = React.useState(false)

    const billboard = useRef(null);

    let [{ name }, set] = useControls(
        () => ({
            name: "Waypoint",
            position: [0, 0, 0]
        }),
        { store }
    )

    useEffect(() => {
        setSelect([index, store])

        if (mesh.current !== null && model !== null) {

            set({ position: [node.position.x, node.position.y, node.position.z], name: node.name })

            const eventControls = new EventsControls(camera, gl.domElement);

            eventControls.attachEvent('mouseOver', function () {
                if (dragging === false)
                    setDragging(true);
                if (hovered === false)
                    setHover(true);
            })

            eventControls.attachEvent('onclick', function (event) {

                if (event.altKey)
                    model.current.material = tileGridMat(fragmentShader, vertexShader)
            })

            eventControls.attachEvent('mouseOut', function () {
                setDragging(false);
                setHover(false);
            })

            eventControls.attachEvent('mouseUp', function () {
                mesh.current.material.opacity = 1;
                model.current.material = tileMat

                setHover(true);
            })

            eventControls.attachEvent('dragAndDrop', function (altUsed) {
                // If alt is being used, snap to the grid
                if (altUsed) {
                    // Switch to the tile grid shader if it hasn't already
                    if (model.current.material === tileMat)
                        model.current.material = tileGridMat(fragmentShader, vertexShader)

                    this.focused.position.x = 11.855 * Math.round((this.focused.position.x) / 11.855);
                    this.focused.position.z = 11.855 * Math.round((this.focused.position.z) / 11.855);
                } else {
                    // Update marker position to wherever the mouse pointer is currently located
                    this.focused.position.y = this.previous.y;
                }
            });

            eventControls.attach(mesh.current);

            eventControls.map = model.current;
        }





        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index, setSelect, store, camera, gl.domElement, setDragging, model])

    useEffect(() => {
        setNodeState(state => {
            if (mesh.current !== null) {


                const meshPos = getMeshPos();

                // We only want to update the value if it has changed

                state.nodes[index].position = meshPos;

                state.nodes[index].name = name;

            }
        })
    }, [index, setNodeState, name])

    function getMeshPos() {
        const currentPos = mesh.current.position;

        return [currentPos.x, currentPos.y, currentPos.z];
    }

    function getBillboardPos() {
        let meshPos = getMeshPos();

        return [meshPos[0], meshPos[1] + 2.5, meshPos[2]];
    }

    set({ position: mesh.current === null ? [-1, -1, -1] : getMeshPos() })

    return (
        <>
            <Billboard
                ref={billboard}
                position={mesh.current !== null ? getBillboardPos() : [0, 1, 0]}
                follow={true}
                args={[0, 0]}
            >
                <Text
                    color="#ededed"
                    fontSize={1.5}
                    maxWidth={60}
                    lineHeight={1}
                    outlineBlur={"15%"}
                    outlineColor={"#000000"}
                    textAlign="left"
                    anchorX="center"
                    anchorY="middle">
                    {name}
                </Text>
            </Billboard>

            <mesh
                position={node.position}
                ref={mesh}
                scale={1}
                onClick={(_event) => { setSelect([index, store]); }}
            >
                <cylinderGeometry args={[1, 1, 1]} />

                <meshStandardMaterial metalness={0.5} transparent={true} opacity={1} color={selected ? 'green' : hovered ? 'yellow' : 'blue'} />
            </mesh>
        </>
    )
}