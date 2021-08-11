import { useControls, useCreateStore } from "leva";
import React from "react";
import { useEffect, useRef } from "react";
import { Text, Billboard } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { EventsControls } from "../controls/EventsControls";
import { tileMat, tileGridMat } from "../models/materials";
import { useNodeStore } from "../stores/NodeStore";
import * as S from "../models/shaders";

export default function Node({ dragging, node, index, selected, setSelect, setDragging, model }) {
    const store = useCreateStore();

    const vertexShader = S.gridTileVertex;
    const fragmentShader = S.gridTileFragment;

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
        // As the node has just been initialized, set it as the currently selected node in the store
        setSelect([index, store])

        // Wait until the mesh has been loaded
        if (mesh.current !== null && model !== null) {
            // Update the node position and name
            set({ position: [node.position.x, node.position.y, node.position.z], name: node.name })

            const eventControls = new EventsControls(camera, gl.domElement);

            eventControls.attachEvent('mouseOver', function () {
                if (dragging === false)
                    setDragging(true);
                if (hovered === false)
                    setHover(true);
            })

            eventControls.attachEvent('onclick', function (event) {
                // If the user is holding down the alt key, switch to the tile grid material
                if (event.altKey)
                    model.current.material = tileGridMat;
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
        // Update the node's position and name
        setNodeState(state => {
            if (mesh.current !== null) {
                state.nodes[index].position = mesh.current.position;

                state.nodes[index].name = name;
            }
        })
    }, [index, setNodeState, name])

    /**
     * Fetches the current mesh position based on the mesh ref
     * @returns The current mesh position in the format [x, y, z]
     */
    function getMeshPos() {
        const currentPos = mesh.current.position;

        return [currentPos.x, currentPos.y, currentPos.z];
    }

    /**
     * Fetches the current billboard position, based on the mesh reference with a y offset
     * @returns The current billboard position in the format [x, y, z]
     */
    function getBillboardPos() {
        let meshPos = getMeshPos();

        return [meshPos[0], meshPos[1] + 2.5, meshPos[2]];
    }

    // Update the leva UI display
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