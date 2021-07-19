import React from "react";
import { Marker, MarkerElement } from "./Marker"
import MarkerConnection, { MarkerConnectionElement } from "./MarkerConnection";

type NodeManagerProps = {

};

type NodeManagerState = {
    markers: Array<Marker>,
    markerConnections: Array<MarkerConnection>
}

export default class MarkerManager extends React.Component<NodeManagerProps, NodeManagerState> {
    state: NodeManagerState = {
        markers: [],
        markerConnections: [],
    };

    render() {
        return (
            <>
                {this.state.markers.map((item, index) => {
                    return (
                        <MarkerElement key={index} position={item.position} />
                    )
                })}
                {this.state.markerConnections.map((item, index) => {
                    console.log(`Name of ${index}:}`)

                    return (
                        <MarkerConnectionElement key={index} markerConnection={item} />
                    )
                })}
            </>
        )
    }

    addNode = (position: THREE.Vector3) => {
        this.setState({
            markers: this.state.markers.concat(new Marker(position)),
            markerConnections: this.state.markerConnections
        }, () => {
            if (this.state.markers.length > 1) {
                this.addNodeConnection(this.state.markers[this.state.markers.length - 2], this.state.markers[this.state.markers.length - 1])
            }
    
            console.log(this.state.markers)
        })

    }

    addNodeConnection = (startMarker: Marker, endMarker: Marker) => {
        this.setState((state) => ({
            markers: this.state.markers,
            markerConnections: this.state.markerConnections.concat(new MarkerConnection(startMarker, endMarker))
        }))
    }
}