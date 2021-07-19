import * as THREE from 'three'
import { Marker } from './Marker'
import React from 'react'
import { ThreeEvent } from '@react-three/fiber'
import { button, Leva, LevaPanel, useControls, useCreateStore } from 'leva'

type MarkerConnectionProps = {
    markerConnection: MarkerConnection
}

type MarkerConnectionState = {
    hovered: boolean,
    selected: boolean
}

type MarkerConnectionUIProps = {
    markerConnection: MarkerConnection
}

function MarkerConnectionUI(props: MarkerConnectionUIProps) {
    let name = `Waypoint Name`

    const store = useCreateStore();

    // useControls({
    //     [name] : {
    //         value: props.markerConnection.name,
    //         onChange: (v) => {
    //             console.log("Found a change to " + v + ", changing now.")
    //             props.markerConnection.name = v;
    //         }
    //     }
    // })

    console.log(props.markerConnection.name)

    useControls({ 'New Box': button(() => alert("Nice")) })

    return (
        <>
        </>
    )
}

let currentSelectedConnection: MarkerConnectionElement;

export default class MarkerConnection {
    name = "Waypoint";
    startMarker: Marker;
    endMarker: Marker;

    constructor(startMarker: Marker, endMarker: Marker) {
        this.startMarker = startMarker;
        this.endMarker = endMarker;
    }
}

export class MarkerConnectionElement extends React.Component<MarkerConnectionProps, MarkerConnectionState> {

    startMarker: Marker;
    endMarker: Marker;
    name: string;


    constructor(props: MarkerConnectionProps) {
        super(props);

        this.state = {
            hovered: false,
            selected: false
        };

        this.startMarker = this.props.markerConnection.startMarker
        this.endMarker = this.props.markerConnection.endMarker
        this.name = this.props.markerConnection.name
    }



    getDistance = () => {
        return this.endMarker.position.distanceTo(this.startMarker.position);
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
            hovered: false,
            selected: false,
        })

        // Toggle selected boolean
        this.setState({
            hovered: this.state.hovered,
            selected: !this.state.selected,
        })

        currentSelectedConnection = this;
    }

    render() {
        const startPos = this.startMarker.position;
        const endPos = this.endMarker.position;

        // Find the angle between the startMarker and endMarker
        // As this is 3D and we don't care about elevation, x and z are used
        let m = Math.atan2(startPos.x - endPos.x, startPos.z - endPos.z);

        const position = new THREE.Vector3();

        // Calculate the midpoint of the vectors
        position.subVectors(this.endMarker.position, this.startMarker.position).divideScalar(2).add(this.startMarker.position);

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
                    onPointerOver={(_event) => this.setState(() => ({ selected: this.state.selected, hovered: true }))}
                    onPointerOut={(_event) => this.setState(() => ({ selected: this.state.selected, hovered: false }))}
                />
                {this.state.selected ? <MarkerConnectionUI markerConnection={this.props.markerConnection} /> : ''}
            </>)
    }

}