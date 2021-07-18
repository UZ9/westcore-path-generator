import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Marker, MarkerElement } from './Marker'
import React from 'react'
import { ThreeEvent } from '@react-three/fiber'
import { useControls } from 'leva'
import { render } from '@testing-library/react'

type MarkerConnectionProps = {
    startMarker: Marker,
    endMarker: Marker
}

type MarkerConnectionState = {
    name: string,
    hovered: boolean,
    selected: boolean
}

type MarkerConnectionUIProps = {
    markerConnection: MarkerConnection
}

function MarkerConnectionUI(props: MarkerConnectionUIProps) {
    useControls({
        "Name": {
            value: props.markerConnection.state.name,
            onChange: (v) => {
                console.log("Found a change to " + v + ", changing now.")
                props.markerConnection.setState({
                    name: v,
                    hovered: props.markerConnection.state.hovered,
                    selected: props.markerConnection.state.selected
                });
            }
        }
    })

    console.log(props.markerConnection.state.name)

    return (
        <></>
    )
}

let currentSelectedConnection : MarkerConnection;

export class MarkerConnection extends React.Component<MarkerConnectionProps, MarkerConnectionState> {
    constructor(props: MarkerConnectionProps) {
        super(props);

        this.state = {
            name: "Waypoint",
            hovered: false,
            selected: false
        };
    }

    getDistance = () => {
        return this.props.endMarker.position.distanceTo(this.props.startMarker.position);
    }

    getGeometry = () => {
        let distance = this.getDistance();

        let geometry = new THREE.BoxGeometry(0.75, distance, 0.5);

        return geometry;
    }

    getMaterial = () => {
        return new THREE.MeshStandardMaterial({
            color: this.state.selected ? 'red' : this.state.hovered ? 'green' : '#dba100', side: THREE.DoubleSide
        })
    }

    onClick = (event: ThreeEvent<MouseEvent>) => {
        // Because the user has selected a new segment, go ahead and remove the previous selection
        currentSelectedConnection?.setState({
            name: this.state.name,
            hovered: false,
            selected: false,
        })

        // Toggle selected boolean
        this.setState({
            name: this.state.name,
            hovered: this.state.hovered,
            selected: !this.state.selected,
        })

        currentSelectedConnection = this;
    }

    render() {
        const startPos = this.props.startMarker.position;
        const endPos = this.props.endMarker.position;

        // Find the angle between the startMarker and endMarker
        // As this is 3D and we don't care about elevation, x and z are used
        let m = Math.atan2(startPos.x - endPos.x, startPos.z - endPos.z);

        const position = new THREE.Vector3();

        // Calculate the midpoint of the vectors
        position.subVectors(this.props.endMarker.position, this.props.startMarker.position).divideScalar(2).add(this.props.startMarker.position);
        
        // Add a bit of y-offset to avoid clipping the floor
        position.add(new THREE.Vector3(0, 0.01, 0));

        return (
            <>
                <mesh
                    rotation={[Math.PI / 2, 0, -m]} // Rotation is in radians, X is rotated to be aligned with the field
                    position={position}
                    geometry={this.getGeometry()}
                    material={this.getMaterial()} 
                    onClick={(event) => this.onClick(event)}
                    onPointerOver={(_event) => this.setState(() => ({ name: this.state.name, selected: this.state.selected, hovered: true }))}
                    onPointerOut={(_event) => this.setState(() => ({ name: this.state.name, selected: this.state.selected, hovered: false }))}
                />
                {this.state.selected ? <MarkerConnectionUI markerConnection={this}/> : ''}
            </>)
    }

}