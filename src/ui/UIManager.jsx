import { button, Leva, LevaPanel, useControls, useCreateStore } from "leva";
import React from "react";
import { useEffect, useRef } from "react";

function Node({ index }) {
    const store = useCreateStore();

    const [{ name, position }] = useControls(
        () => ({
            "Waypoint Name": "Waypoint",
            position: {
                value: [0, 0, 0],
                step: 1
            },

        }),
        { store }


    )

    const mesh = useRef(null)

    return (
        <mesh
            ref={mesh}
            position={position}
            scale={1}>
            <cylinderGeometry args={[10, 10, 10]} />
            <meshStandardMaterial color={'blue'} />
        </mesh>
    )
}

export class UIManagerRenderer extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            nodes: []
        }
    }

    addNode(node) {
        this.setState({
            nodes: [...this.state.nodes, node]
        });
    }
    
    
    render() {
        return (this.state.nodes.map((v, i) => (
            <Node
                key={v}
                index={i}
            />
        )))
    }
}

export default function UIManager(props) {
    const [nodes, setNodes] = React.useState([])
    const [[selection, store], setSelection] = React.useState([-1, null]);

    const unSelect = (e) => {
        if (e.target === e.currentTarget) {
            setSelection([-1, null])
        }
    }

    const addNode = () => {
        setNodes((b) => [...b, Date.now()])
        props.uiRenderer.current.addNode(nodes[nodes.length - 1]);
    }

    useControls({ 'New Box': button(addNode) })

    console.log(nodes.length);

    return (
        <div style={{position: "absolute", right: "1em", top: "1em"}} className="panel">
            
            <Leva fill flat titleBar={false} style={{position: "absolute"}}/>
            <LevaPanel store={store} fill flat titleBar={false} />
        </div>
    );
}