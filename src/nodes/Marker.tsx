import * as THREE from 'three'
import { useRef, useState } from 'react'

export class Marker {
  position: THREE.Vector3;
  
  constructor(position: THREE.Vector3) {
    this.position = position;
  }
}

export function MarkerElement(props: JSX.IntrinsicElements['mesh']) {
    const mesh = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={1}
        onPointerOver={(_event) => setHover(true)}
        onPointerOut={(_event) => setHover(false)}>
        <cylinderGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }