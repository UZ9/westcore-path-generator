import * as THREE from 'three'
import React, { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import FieldModel from "./models/FieldModel"
import { Box } from '@react-three/drei'
import './App.css'
import NUIManagerRenderer from './ui/UIManager'
import UI from './ui/UI'

/**
 * Filters the intersections of the raycast to only use the first found object. This prevents multiple objects being selected by one raycast.
 * @param intersections The intersections the raycaster has found
 * @returns only the first object the raycaster found
 */
function intersectionsFilter(intersections: THREE.Intersection[]) {
  return intersections?.length ? [intersections[0]] : intersections
}

export default function App() {
  const camera = useRef<THREE.PerspectiveCamera>(null!);

  // Create sphere geometry to hold the background image
  const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);

  // Invert the geometry for the textures to face inwards
  sphereGeometry.scale(-1, 1, 1);

  // Load the background texture from the public 
  const backgroundTexture = new THREE.TextureLoader().load(process.env.PUBLIC_URL + "/background.jpg");

  // Create the material for the sphere background
  const sphereMaterial = new THREE.MeshBasicMaterial({
    map: backgroundTexture
  });

  return (
    <>
      <UI/>
      <Canvas
        shadows={true}
        raycaster={{ filter: intersectionsFilter }}
        gl={{ antialias: true}}
        camera={{ ref: camera, fov: 75, position: [0, 100, 100] }}>

        <NUIManagerRenderer/>

        <ambientLight intensity={0.25} />
        <directionalLight
          position={[200, 200, -100]}
          shadow-mapSize-width={4096}
          shadow-mapSize-height={4096}
          intensity={0.65}
          shadow-camera-left={-100}
          shadow-camera-right={100}
          shadow-camera-top={80}
          shadow-camera-bottom={-80}
          castShadow={true}
        />

        <mesh name={"Sphere Background Image"} geometry={sphereGeometry} material={sphereMaterial} />

        <Suspense fallback={null}>
          <FieldModel/>
        </Suspense>

      </Canvas>
    </>
  )
}