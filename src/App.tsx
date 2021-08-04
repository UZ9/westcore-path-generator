import * as THREE from 'three'
import React, { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Model from "./models/FieldModel"
import { Box } from '@react-three/drei'
import MarkerManager from './nodes/MarkerManager'
import './App.css'
import NUIManagerRenderer from './ui/UIManager'
import UI from './ui/UI'

function intersectionsFilter(intersections: THREE.Intersection[]) {
  return intersections?.length ? [intersections[0]] : intersections
}

export default function App() {
  const uiRef = useRef();
  const ui = uiRef.current;

  const [tiles, setTiles] = React.useState<THREE.Mesh[] | null>(null!)
  // const [uiRenderer, setUiRenderer] = React.useState<NUIManagerRenderer | null>(null);

  const camera = useRef<THREE.PerspectiveCamera>(null!);

  const markerManager = useRef<MarkerManager>(null!);

  const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);

  // Invert the geometry for the textures to face inwards
  sphereGeometry.scale(-1, 1, 1);

  const backgroundTexture = new THREE.TextureLoader().load(process.env.PUBLIC_URL + "/background.jpg");

  const sphereMaterial = new THREE.MeshBasicMaterial({
    map: backgroundTexture
  })

  return (
    <>
      <UI/>
      <Canvas
        shadows={true}
        raycaster={{ filter: intersectionsFilter }}
        gl={{ shadowMapEnabled: true, shadowMapType: THREE.PCFShadowMap, antialias: true, pixelRatio: window.devicePixelRatio }}
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

        <mesh geometry={sphereGeometry} material={sphereMaterial} />
        <Box position={[100, 200, 0]} args={[1, 1, 1]} />

        <MarkerManager ref={markerManager} />

        <Suspense fallback={null}>
          <Model ui={ui} tiles={tiles} setTiles={setTiles} />
        </Suspense>

      </Canvas>
    </>
  )
}