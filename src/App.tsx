import * as THREE from 'three'
import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Model from "./models/TiPFieldModel"
import { OrbitControls, useTexture } from '@react-three/drei'
import { BufferGeometry, SphereGeometry } from 'three'

function Box(props: JSX.IntrinsicElements['mesh']) {

  // This reference will give us direct access to the mesh
  const mesh = useRef<THREE.Mesh>(null!)
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function App() {
  const d = 1000;

  const container = document.createElement("div");
  document.body.appendChild(container);
  const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);

  const renderer = new THREE.WebGLRenderer({
    antialias: true
  });

  // renderer.setPixelRatio(window.devicePixelRatio);
  // renderer.toneMapping = THREE.ACESFilmicToneMapping;
  // renderer.shadowMap.enabled = true;
  // renderer.shadowMap.type = THREE.BasicShadowMap;

  // container.appendChild(renderer.domElement);

  sphereGeometry.scale(-1, 1, 1);

  const sphereMaterial = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("/vogel.jpg")
  })

  return (
    <Canvas>
      {renderer}
      
      <ambientLight intensity={0.2}/>
      <pointLight position={[100, 50, 0]} shadowCameraLeft={-d} shadowCameraRight={d} shadowCameraTop={d} shadowCameraBottom={-d} shadowMapHeight={1024} shadowMapWidth={1024} castShadow={true} intensity={2} />
      
      {/* <hemisphereLight color={0xffeeb1} intensity={2}/> */}

      <Suspense fallback={null}>
        <Model />
      </Suspense>

      <mesh geometry={sphereGeometry} material={sphereMaterial}/>
      {/* <primitive attach="background" object={background} /> */}
      <OrbitControls />
      
    </Canvas>
  )
}