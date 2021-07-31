import { button, Leva, LevaPanel, useControls, useCreateStore } from "leva";
import React from "react";
import { useEffect, useRef } from "react";
import { Text, Billboard, OrbitControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { EventsControls } from "../controls/EventsControls";
import { tileMat, tileGridMat } from "../models/materials";

function Node({ dragging, initialName, initialPos, index, selected, setLocalSelected, setSelect, setDragging, model }) {
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
            name: "Waypoint " + index,
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
            // enabled={!selected}
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

export class UIManagerRenderer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nodes: [],
            dragging: false,
            markerCreationMode: false,
            selection: null,
            store: null,
            camera: null,
            uiManager: null,

        }
    }

    setSelected = (val) => {
        this.setState({
            nodes: this.state.nodes,
            uiManager: this.state.uiManager,
            camera: this.state.camera,
            dragging: this.state.dragging,
            markerCreationMode: this.state.markerCreationMode,
            selection: val,
            store: this.state.store
        });
    }

    setCamera = (val) => {
        this.setState({
            nodes: this.state.nodes,
            uiManager: this.state.uiManager,
            camera: val,
            dragging: this.state.dragging,
            markerCreationMode: this.state.markerCreationMode,
            selection: this.state.selection,
            store: this.state.store
        });
    }

    setDragging = (val) => {
        this.setState({
            nodes: this.state.nodes,
            uiManager: this.state.uiManager,
            camera: this.state.camera,
            dragging: val,
            markerCreationMode: this.state.markerCreationMode,
            selection: this.state.selection,
            store: this.state.store
        });
    }

    getNodes() {
        return this.state.nodes;
    }

    createNode(node) {
        if (this.state.markerCreationMode) {
            this.addNodes(node);
        }
    }

    addNodes(...newNodes) {
        this.setState({
            nodes: [...this.state.nodes, ...newNodes],
            uiManager: this.state.uiManager,
            camera: this.state.camera,
            dragging: this.state.dragging,
            markerCreationMode: this.state.markerCreationMode,
            selection: this.state.selection,
            store: this.state.store
        });
    }

    toggleCreationMode() {
        this.setState({
            nodes: this.state.nodes,
            uiManager: this.state.uiManager,
            camera: this.state.camera,
            dragging: this.state.dragging,
            markerCreationMode: !this.state.markerCreationMode,
            selection: this.state.selection,
            store: this.state.store
        });
    }

    setUiManager(manager) {
        this.setState({
            nodes: this.state.nodes,
            uiManager: manager,
            camera: this.state.camera,
            dragging: this.state.dragging,
            markerCreationMode: this.state.markerCreationMode,
            selection: this.state.selection,
            store: this.state.store
        });
    }

    render() {
        return <>
            {(this.state.nodes.map((v, i) => (
                <Node
                    key={i}
                    initialPos={v.position}
                    initialName={v.name}
                    selected={this.state.selection !== null ? this.state.selection[0] === i : false}
                    setSelect={this.state.uiManager.setNodeSelection}
                    setLocalSelected={this.setLocalSelected}
                    dragging={this.state.dragging}
                    setDragging={this.setDragging}
                    model={this.props.tiles}
                    index={i}
                />
            )))}
            {<OrbitControls enabled={!this.state.dragging} />}
            {/* {this.props.camera() !== null ?? <OrbitControls camera={this.props.camera().current} />} */}

        </>
    }
}

export default function UIManager(props) {
    const [[selection, store], setSelection] = React.useState([-1, null]);
    const [buttonSelected, setButtonSelected] = React.useState(false);
    const stateRef = useRef();

    stateRef.current = { props };

    // Used for unselecting an object
    // const unSelect = (e) => {
    //     if (e.target === e.currentTarget) {
    //         setSelection([-1, null])
    //     }
    // }

    let setNodeSelection = (node) => {
        stateRef.current.props.uiRenderer.setSelected(node);

        setSelection(node);

        return
    }

    let createNode = (pos) => {
        stateRef.current.props.uiRenderer.createNode(pos);
    }

    let addNodes = (...nodes) => {
        stateRef.current.props.uiRenderer.addNodes(...nodes);
    }

    let importProject = (importString) => {
        const nodes = JSON.parse(importString);

        addNodes(...nodes);
    }

    let exportProject = () => {
        const nodes = stateRef.current.props.uiRenderer.getNodes();

        console.log(JSON.stringify(nodes));
        return JSON.stringify(nodes);
    }

    useEffect(() => {
        props.uiRef.current = createNode;

        if (stateRef.current.props.uiRenderer !== null) {


            if (stateRef.current.props.uiRenderer.state.uiManager !== null && stateRef.current.props.uiRenderer.state.uiManager !== undefined) return;

            stateRef.current.props.uiRenderer.setUiManager({ selection, setNodeSelection });
        }

        return () => {
            props.uiRef.current = null;
        }


    }, [props.uiRenderer, props.uiRef, selection])

    // This is absolutely cursed but is needed for the automatic css injection
    const {importString} = useControls(
        {
            importString: "Import String Goes Here",
            "Remove All Markers": button(() => { })
        }
    )

    const waypointButton = useRef();
    const importButton = useRef();

    return (
        <div style={{ position: "absolute", right: "1em", top: "1em" }} className="panel">
            <div className={"leva-c-kWgxhW leva-c-kWgxhW-bSMcqW-fill-true leva-c-kWgxhW-nNfbl-hideTitleBar-true"}>
                <div className={"leva-c-hBtFDW"}>
                    <div className={"leva-c-dmsJDs leva-c-dmsJDs-lpvxwm-toggled-true leva-c-dmsJDs-hXSjjU-isRoot-true"}>
                        <div className={"leva-c-bduird"}>
                            <button
                                ref={importButton}
                                onClick={() => { importProject(importString)}}
                                style={{ color: "#ededed", backgroundColor: ("#007bff") }}
                                className={"leva-c-fOioiK"}>{"Import Project"}
                            </button>
                            <button
                                ref={importButton}
                                onClick={() => { exportProject() }}
                                style={{ color: "#ededed", backgroundColor: ("#007bff") }}
                                className={"leva-c-fOioiK"}>{"Export Project"}
                            </button>
                            <div /><div /><div />
                            <button
                                ref={waypointButton}
                                onClick={() => { setButtonSelected(!buttonSelected); stateRef.current.props.uiRenderer.toggleCreationMode() }}
                                style={{ color: "#ededed", backgroundColor: (buttonSelected ? "#ff003c" : "#007bff") }}
                                className={"leva-c-fOioiK"}>{buttonSelected ? "Exit Waypoint Creation" : "Enter Waypoint Creation"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <LevaPanel store={store} fill flat titleBar={false} />
            <Leva fill flat titleBar={false} style={{ position: "absolute" }} />

        </div>
    );
}