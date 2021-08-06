import * as THREE from 'three'
import { useNodeStore } from '../stores/NodeStore';

export default function NodeConnection(props) {
    console.log(props);

    const nodes = useNodeStore(state => state.nodes);

    const startPos = props.startMarker.position;
    const endPos = props.endMarker.position;

    // Find the angle between the startMarker and endMarker
    // As this is 3D and we don't care about elevation, x and z are used
    let m = Math.atan2(startPos.x - endPos.x, startPos.z - endPos.z);

    const position = new THREE.Vector3();

    // Calculate the midpoint of the vectors
    position.subVectors(props.endMarker.position, props.startMarker.position).divideScalar(2).add(props.startMarker.position);

    // Add a bit of y-offset to avoid clipping the floor
    position.add(new THREE.Vector3(0, 0.01, 0));

    function getGeometry() {

        console.log(nodes);
        console.log(props);

        // Calculate distance between the two markers
        const distance = props.endMarker.position.distanceTo(props.startMarker.position);
        
        // Create a new box geometry connecting them
        const geometry = new THREE.BoxGeometry(0.75, distance, 0.5);

        return geometry;

    }

    return (
        <>
            <mesh
                rotation={[Math.PI / 2, 0, -m]} // Rotation is in radians, X is rotated to be aligned with the field
                position={position}
                geometry={getGeometry()}
            // material={this.getMaterial()}
            // color={selected ? 'green' : hovered ? 'yellow' : 'blue'}
            // onClick={(event) => this.onClick(event)}
            // onPointerOver={(_event) => this.setState(() => ({ selected: this.state.selected, hovered: true }))}
            // onPointerOut={(_event) => this.setState(() => ({ selected: this.state.selected, hovered: false }))}
            >
                <meshStandardMaterial metalness={0.5} transparent={true} opacity={1} color={'yellow'} />

            </mesh>
        </>)
}