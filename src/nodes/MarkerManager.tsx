import React from "react";
import { Marker, MarkerElement } from "./Marker"
import { MarkerConnection } from "./MarkerConnection";

type NodeManagerProps = {

};

type NodeManagerState = {
    nodes: Array<Marker>;
}

export default class MarkerManager extends React.Component<NodeManagerProps, NodeManagerState> {
    state: NodeManagerState = {
        nodes: []
    };

    render() {
        return (
            <>
                {this.state.nodes.map((item, index) => {
                    return (
                        <MarkerElement key={index} position={item.position} />
                    )
                })}
                {this.state.nodes.length > 1 ? this.state.nodes.slice(0, this.state.nodes.length - 1).map((item, index) => {
                    console.log(`Name of ${index}:}`)

                    return (
                        <MarkerConnection key={index} startMarker={item} endMarker={this.state.nodes[index + 1]}/>
                    )
                }) : ''}
            </>
        )
    }

    addNode = (position: THREE.Vector3) => {
        this.setState((state) => ({
            nodes: this.state.nodes.concat(new Marker(position))
        }))

        console.log(this.state.nodes)
    }
}