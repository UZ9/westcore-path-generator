import * as THREE from 'three'
import React, { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import Model from "./models/FieldModel"
import { softShadows } from '@react-three/drei'
import MarkerManager from './nodes/MarkerManager'
import './App.css'
import UIManager, { UIManagerRenderer } from './ui/UIManager'

softShadows();

function intersectionsFilter(intersections: THREE.Intersection[]) {
  return intersections?.length ? [intersections[0]] : intersections
}

export default function App() {
  const uiRef = useRef();
  const ui = uiRef.current;

  const [tiles, setTiles] = React.useState<THREE.Mesh[] | null>(null!)
  const [uiRenderer, setUiRenderer] = React.useState<UIManagerRenderer | null>(null);

  const camera = useRef<THREE.PerspectiveCamera>(null!);

  const markerManager = useRef<MarkerManager>(null!);

  const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);

  // Invert the geometry for the textures to face inwards
  sphereGeometry.scale(-1, 1, 1);

  const backgroundTexture = new THREE.TextureLoader().load(process.env.PUBLIC_URL + "/background.jpg");

  const sphereMaterial = new THREE.MeshBasicMaterial({
    map: backgroundTexture
  })

  if (uiRenderer !== null && uiRenderer.state.camera == null) {
    uiRenderer.setCamera(camera);
  }

  function getCamera() {
    return camera;
  }

  return (
    <div style={{ width: "100%", height: "100%" }}>

      <Canvas raycaster={{ filter: intersectionsFilter }} gl={{ shadowMapEnabled: true, shadowMapType: THREE.BasicShadowMap, antialias: true, pixelRatio: window.devicePixelRatio, toneMapping: THREE.ACESFilmicToneMapping }} camera={{ ref: camera, fov: 75, position: [0, 100, 100] }}>
        <UIManagerRenderer camera={getCamera} ref={setUiRenderer} tiles={tiles} />

        <pointLight position={[100, 50, 0]} intensity={2} />

        <mesh geometry={sphereGeometry} material={sphereMaterial} />

        <MarkerManager ref={markerManager} />

        <Suspense fallback={null}>
          <Model ui={ui} tiles={tiles} setTiles={setTiles} />
        </Suspense>

      </Canvas>

      <UIManager uiRef={uiRef} uiRenderer={uiRenderer} />
    </div>
  )
}