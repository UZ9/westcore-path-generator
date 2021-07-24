import { button, Leva, LevaPanel, useControls, useCreateStore } from "leva";
import React from "react";
import * as THREE from 'three'
import { useEffect, useRef } from "react";
import { Text, Billboard } from "@react-three/drei"
import { useDrag } from "react-use-gesture"
import { useThree } from "@react-three/fiber"
import { EventsControls } from "../controls/EventsControls";

function Node({ initialPos, index, selected, setLocalSelected, setSelect, setDragging, model }) {
    const store = useCreateStore();
    
    const {gl, camera, size, viewport} = useThree();
    const aspect = size.width / viewport.width;
    
    let name = "";

    // BEGIN DRAG


    // scene.add(checkerboard)
    // scene.add(checker);

    useEffect(() => {
        if (mesh.current !== null && model !== null) {

            const eventControls = new EventsControls(camera, gl.domElement);
            // eventControls.map = checkerboard;
        
            eventControls.attachEvent('mouseOver', function () {
                setDragging(true);
            })
        
            eventControls.attachEvent('mouseOut', function () {
                setDragging(false);
            })
        
            eventControls.attachEvent('dragAndDrop', function () {
                this.focused.position.y = this.previous.y;
            });

            eventControls.attach(mesh.current);

            console.log("Setting map to ");
            console.log(model.current);

            eventControls.map = model.current;
        }
    }, [camera, gl.domElement, setDragging, model])

    // END DRAG

    // [ name, position ] = useControls(
    //     () => ({
    //         name: "Waypoint " + index,
    //         position: {
    //             value: [initialPos.x, initialPos.z],
    //             onChange: (val) => {
    //                 localPos = val;
    //             },
    //             step: 1
    //         },

    //     }),
    //     { store }


    // )

    // const bind = useDrag(({ offset: [x, y]}) => {
        

    //     const[,,z] = position;

    //     console.log([x, y, z, aspect]);

    //     setPosition([x / aspect, -y / aspect, z]);
    // }, { pointerEvents: true });

    useEffect(() => {
        setSelect([index, store])
    }, [index, store, setSelect, setLocalSelected])

    const mesh = useRef(null)
    const [hovered, setHover] = React.useState(false)

    return (
        <>
            <Billboard
                follow={true}
                args={[0, 0]}
            >
                <Text
                    color="#ededed"
                    fontSize={1.5}
                    maxWidth={60}
                    lineHeight={1}
                    outlineBlur={"10%"}
                    outlineColor={"#000000"}
                    textAlign="left"
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
                onPointerOver={(_event) => setHover(true)}
                onPointerOut={(_event) => setHover(false)}
                onClick={(_event) => { setSelect([index, store]) }}
            >
                <cylinderGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={selected ? 'green' : hovered ? 'yellow' : 'blue'} />
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
            uiManager: null,
            
        }
    }

    setDragging = (val) => {
        this.setState({
            nodes: this.state.nodes,
            uiManager: this.state.uiManager,
            dragging: val,
            markerCreationMode: this.state.markerCreationMode,
            selection: this.state.selection,
            store: this.state.store
        });
    }

    addNode(node) {
        // We only want to add new markers if we're in marker creation mode
        if (this.state.markerCreationMode) {
            this.setState({
                nodes: [...this.state.nodes, node],
                uiManager: this.state.uiManager,
                dragging: this.state.dragging,
                markerCreationMode: this.state.markerCreationMode,
                selection: this.state.selection,
                store: this.state.store
            });
        }
    }

    toggleCreationMode() {
        this.setState({
            nodes: this.state.nodes,
            uiManager: this.state.uiManager,
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
            dragging: this.state.dragging,
            markerCreationMode: this.state.markerCreationMode,
            selection: this.state.selection,
            store: this.state.store
        });
    }

    render() {
        console.log("Drawing with model of :")
        console.log(this.props);

        return (this.state.nodes.map((v, i) => (
            <Node
                key={i}
                initialPos={v}
                selected={this.state.selection === i}
                setSelect={this.state.uiManager.setSelection}
                setLocalSelected={this.setLocalSelected}
                setDragging={this.setDragging}
                model={this.props.tiles}
                index={i}
            />
        )))
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

    let addNode = (pos) => {
        stateRef.current.props.uiRenderer.addNode(pos);
    }

    useEffect(() => {
        props.uiRef.current = addNode;

        if (stateRef.current.props.uiRenderer !== null) {


            if (stateRef.current.props.uiRenderer.state.uiManager !== null && stateRef.current.props.uiRenderer.state.uiManager !== undefined) return;

            stateRef.current.props.uiRenderer.setUiManager({ selection, setSelection });
        }

        return () => {
            props.uiRef.current = null;
        }


    }, [props.uiRenderer, props.uiRef, selection])

    // This is absolutely cursed but is needed for the automatic css injection
    useControls({"Remove All Markers": button(() => {})})

    const waypointButton = useRef();

    return (
        <div style={{ position: "absolute", right: "1em", top: "1em" }} className="panel">
            <div className={"leva-c-kWgxhW leva-c-kWgxhW-bSMcqW-fill-true leva-c-kWgxhW-nNfbl-hideTitleBar-true"}>
                <div className={"leva-c-hBtFDW"}>
                    <div className={"leva-c-dmsJDs leva-c-dmsJDs-lpvxwm-toggled-true leva-c-dmsJDs-hXSjjU-isRoot-true"}>
                        <div className={"leva-c-bduird"}>
                            <button
                                ref={waypointButton}
                                onClick={() => { setButtonSelected(!buttonSelected); stateRef.current.props.uiRenderer.toggleCreationMode()}}
                                style={{color: "#ededed", backgroundColor: (buttonSelected ? "#ff003c" : "#007bff") }}
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