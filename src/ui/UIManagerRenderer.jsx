import React from "react";
import { OrbitControls } from "@react-three/drei"
import Node from "./Node"

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