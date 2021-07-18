import * as THREE from 'three'
import React, { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import Model from "./models/TiPFieldModel"
import { OrbitControls, softShadows } from '@react-three/drei'
import MarkerManager from './nodes/MarkerManager'
import UIManager from './ui/UIManager'

softShadows();

function intersectionsFilter(intersections: THREE.Intersection[]) {
  return intersections?.length ? [intersections[0]] : intersections
}

export default function App() {

  const d = 1000;
  const camera = useRef<THREE.PerspectiveCamera>(null!);
  const markerManager = useRef<MarkerManager>(null!);

  const container = document.createElement("div");
  document.body.appendChild(container);
  const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);

  // Invert the geometry for the textures to face inwards
  sphereGeometry.scale(-1, 1, 1);

  const backgroundTexture = new THREE.TextureLoader().load("/background.jpg");

  backgroundTexture.wrapS = THREE.RepeatWrapping;
  backgroundTexture.wrapT = THREE.RepeatWrapping;
  backgroundTexture.repeat.set(3, 3);

  const sphereMaterial = new THREE.MeshBasicMaterial({
    // map: backgroundTexture,
    color: "black"
  })

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <UIManager />
      <Canvas raycaster={{ filter: intersectionsFilter }} gl={{ shadowMapEnabled: true, shadowMapType: THREE.BasicShadowMap, antialias: true, pixelRatio: window.devicePixelRatio, toneMapping: THREE.ACESFilmicToneMapping }} camera={{ ref: camera, fov: 75, position: [0, 100, 100] }}>

        <ambientLight intensity={0.2} />
        <pointLight position={[100, 50, 0]} shadowCameraLeft={-d} shadowCameraRight={d} shadowCameraTop={d} shadowCameraBottom={-d} shadowMapHeight={1024} shadowMapWidth={1024} castShadow={true} intensity={2} />

        <Suspense fallback={null}>
          <Model markerManager={markerManager} />
        </Suspense>

        <mesh geometry={sphereGeometry} material={sphereMaterial} />

        <OrbitControls camera={camera.current} />

        <MarkerManager ref={markerManager} />

      </Canvas>



    </div>


  )
}