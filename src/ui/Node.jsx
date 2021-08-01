import { useControls, useCreateStore } from "leva";
import React from "react";
import { useEffect, useRef } from "react";
import { Text, Billboard } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { EventsControls } from "../controls/EventsControls";
import { tileMat, tileGridMat } from "../models/materials";

export default function Node({ dragging, initialName, initialPos, index, selected, setLocalSelected, setSelect, setDragging, model }) {
    const store = useCreateStore();

    const vertexShader = document.getElementById('vertexShader').textContent;
    const fragmentShader = document.getElementById('fragmentShader').textContent;

    const { gl, camera } = useThree();

    const currentlyDragging = useRef(false);

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
            mesh.current.position.set(initialPos.x, initialPos.y, initialPos.z);

            set({ position: [initialPos.x, initialPos.y, initialPos.z], name: initialName })

            const eventControls = new EventsControls(camera, gl.domElement);
            // eventControls.map = checkerboard;

            eventControls.attachEvent('mouseOver', function () {
                setDragging(true);
                setHover(true);
            })

            eventControls.attachEvent('onclick', function (event) {

                if (event.altKey)
                    model.current.material = tileGridMat(fragmentShader, vertexShader)
            })

            eventControls.attachEvent('mouseOut', function () {
                setDragging(false);
                setHover(false);

                currentlyDragging.current = false;
            })

            eventControls.attachEvent('mouseUp', function () {
                setDragging(!dragging);
                setDragging(!dragging);

                mesh.current.material.opacity = 1;
                model.current.material = tileMat

                setHover(true);

                currentlyDragging.current = false;
            })

            eventControls.attachEvent('dragAndDrop', function (altUsed) {
                currentlyDragging.current = true;

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
    }, [initialPos, index, setSelect, store, camera, gl.domElement, setDragging, model])

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
                    enabled={!currentlyDragging.current}
                    color="#ededed"
                    fontSize={1.5}
                    maxWidth={60}
                    lineHeight={1}
                    outlineBlur={"15%"}
                    outlineColor={"#000000"}
                    textAlign="left"

                    // enabled={!selected}
                    // font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
                    anchorX="center"
                    anchorY="middle">
                    {name}
                </Text>
            </Billboard>

            <mesh
                // { ...bind() }
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