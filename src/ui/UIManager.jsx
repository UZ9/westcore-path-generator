import { button, Leva, LevaPanel, useControls, useCreateStore } from "leva";
import React, { boolean } from "react";
import { useEffect, useRef } from "react";
import { Text, Billboard } from "@react-three/drei"

function Node({ initialPos, index, selected, setLocalSelected, setSelect }) {
    console.log("I'm created, cool!")

    const store = useCreateStore();

    const [{ name, position }] = useControls(
        () => ({
            name: "Waypoint " + index,
            position: {
                value: [initialPos.x, initialPos.z],
                step: 1
            },

        }),
        { store }


    )

    useEffect(() => {
        setSelect([index, store])
    }, [index, store, setSelect, setLocalSelected])

    const mesh = useRef(null)
    const [hovered, setHover] = React.useState(false)

    return (
        <>
            <Billboard
                position={[position[0], 2, position[1]]}
                follow={true}
                args={[0,0]}
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
                position={[position[0], 0, position[1]]}
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

        console.log("Starting UIManager")

        this.state = {
            nodes: [],
            selection: null,
            store: null,
            uiManager: null
        }
    }

    addNode(node) {
        this.setState({
            nodes: [...this.state.nodes, node],
            uiManager: this.state.uiManager,
            selection: this.state.selection,
            store: this.state.store
        });
    }

    setUiManager(manager, callback) {

        console.log("Setting manager")
        this.setState({
            nodes: this.state.nodes,
            uiManager: manager,
            selection: this.state.selection,
            store: this.state.store
        }, () => {
            callback()
        });
    }

    render() {
        return (this.state.nodes.map((v, i) => (
            <Node
                key={i}
                initialPos={v}
                selected={this.state.selection === i}
                setSelect={this.state.uiManager.setSelection}
                setLocalSelected={this.setLocalSelected}
                index={i}
            />
        )))
    }
}

export default function UIManager(props) {
    const [[selection, store], setSelection] = React.useState([-1, null]);
    const stateRef = useRef();

    stateRef.current = { props };




    const unSelect = (e) => {
        if (e.target === e.currentTarget) {
            setSelection([-1, null])
        }
    }

    let addNode = (pos) => {
        console.log("ADding node")
        stateRef.current.props.uiRenderer.addNode(pos);
    }

    useEffect(() => {
        props.uiRef.current = addNode;

        if (stateRef.current.props.uiRenderer !== null) {


            if (stateRef.current.props.uiRenderer.state.uiManager !== null && stateRef.current.props.uiRenderer.state.uiManager !== undefined) return;

            console.log(["stateRef current props uiRenderer", stateRef.current.props.uiRenderer])

            stateRef.current.props.uiRenderer.setUiManager({ selection, setSelection }, () => {
                console.log("Successfully set uirenderer")
            });

            // console.log(props.uiRenderer);
        }

        return () => {
            props.uiRef.current = null;
        }


    }, [props.uiRenderer, props.uiRef, selection])

    useControls({
        'New Node': button(addNode)
    })

    return (
        <div style={{ position: "absolute", right: "1em", top: "1em" }} className="panel">
            <Leva fill flat titleBar={false} style={{ position: "absolute" }} />
            <LevaPanel store={store} fill flat titleBar={false} />
        </div>
    );
}