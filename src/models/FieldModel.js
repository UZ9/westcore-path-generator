import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const transparentMat = new THREE.MeshLambertMaterial({
  color: 0x000000,
  transparent: true,
  opacity: 0.15,
  wireframe: false,
  side: THREE.DoubleSide,
  vertexColors: true,
})

export default function Model(props) {
  const vertexShader = document.getElementById('vertexShader').textContent;
  const fragmentShader = document.getElementById('fragmentShader').textContent;

  const uniforms = {
    // Resolution of the grid
    resolution: { value: .335 }
  }

  const tileMesh = useRef(null);

  const sayClicked = (clicked) => {
    clicked.stopPropagation();

    props.ui(clicked.point);
  }

  // const tileMat = new THREE.MeshPhongMaterial({
  //   color: 0x63676f
  // })

  const shadowMat = new THREE.MeshStandardMaterial({
    color: "hsl(0,0%,85%)",
    metalness: 0.5,
    roughness: 1,
  });

  const group = useRef()
  const { nodes } = useGLTF(process.env.PUBLIC_URL + '/fieldmodel.gltf')

  nodes.Perimeter_Lexan_Wall_Panel000.material = transparentMat;
  nodes.Perimeter_Lexan_Wall_Panel001.material = transparentMat;
  nodes.Perimeter_Lexan_Wall_Panel002.material = transparentMat;
  nodes.Perimeter_Lexan_Wall_Panel003.material = transparentMat;
  nodes.Perimeter_Lexan_Wall_Panel004.material = transparentMat;
  nodes.Perimeter_Lexan_Wall_Panel005.material = transparentMat;
  nodes.Perimeter_Lexan_Wall_Panel006.material = transparentMat;
  nodes.Perimeter_Lexan_Wall_Panel007.material = transparentMat;
  nodes.Perimeter_Lexan_Wall_Panel008.material = transparentMat;
  nodes.Perimeter_Lexan_Wall_Panel009.material = transparentMat;
  nodes.Perimeter_Lexan_Wall_Panel010.material = transparentMat;
  nodes.Perimeter_Lexan_Wall_Panel011.material = transparentMat;

  useEffect(() => {
    if (props.tiles === null && tileMesh.current !== null) {
      props.setTiles(tileMesh);
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI]}>
        <mesh geometry={nodes.RedPlatform159.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform159_1.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform159_2.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform159_3.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform159_4.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform159_5.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform159_6.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform159_7.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform159_8.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform159_9.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform159_10.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform159_11.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform159_12.geometry} material={shadowMat} />
        <group position={[-58.48, 2.5, -7.19]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Platform_Pivot_Bar001.geometry}
            material={shadowMat}
            position={[58.48, -7.19, -2.5]}
            rotation={[Math.PI / 2, 0, 0]}>
            <group position={[-58.48, -2.5, -7.19]} rotation={[-1.96, 0, 0]}>
              <group position={[58.48, -7.6, -0.37]} rotation={[1.95, 0, 0]}>
                <mesh geometry={nodes.RedPlatform161.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform161_1.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform161_2.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform161_3.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform161_4.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform161_5.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform161_6.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform161_7.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform161_8.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform161_9.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform161_10.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform161_11.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform161_12.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform161_13.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform161_14.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform161_15.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform161_16.geometry} material={shadowMat} />
              </group>
            </group>
          </mesh>
        </group>
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.RedPlatform.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform_1.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform_2.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform_3.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform_4.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform_5.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform_6.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform_7.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform_8.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform_9.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform_10.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform_11.geometry} material={shadowMat} />
        <mesh geometry={nodes.RedPlatform_12.geometry} material={shadowMat} />
        <group position={[-58.48, 2.5, -7.19]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Platform_Pivot_Bar.geometry}
            material={shadowMat}
            position={[58.48, -7.19, -2.5]}
            rotation={[Math.PI / 2, 0, 0]}>
            <group position={[-58.48, -2.5, -7.19]} rotation={[-1.96, 0, 0]}>
              <group position={[58.48, -7.6, -0.37]} rotation={[1.95, 0, 0]}>
                <mesh geometry={nodes.RedPlatform125.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform125_1.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform125_2.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform125_3.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform125_4.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform125_5.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform125_6.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform125_7.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform125_8.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform125_9.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform125_10.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform125_11.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform125_12.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform125_13.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform125_14.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform125_15.geometry} material={shadowMat} />
                <mesh geometry={nodes.RedPlatform125_16.geometry} material={shadowMat} />
              </group>
            </group>
          </mesh>
        </group>
      </group>
      <mesh
        geometry={nodes.Field_Tape_Blue.geometry}
        material={shadowMat}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Field_Tape_Red.geometry}
        material={shadowMat}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        rotation={[Math.PI / 2, 0, 0]}
        // geometry={nodes.FieldTile000.geometry} // yikes
        // scale={[6.3, 6.2 ,1]}
        onClick={sayClicked}
        ref={tileMesh}
        position={[0, -0.33, 0]}
      // material={shadowMat}>
      >
        <shaderMaterial attach="material" uniforms={uniforms} fragmentShader={fragmentShader} vertexShader={vertexShader} />
        <boxGeometry attach="geometry" args={[143, 143, 1]} />
      </mesh>
      
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel000.geometry}
        position={[46.84, 5.75, -70.47]}
        material={transparentMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel001.geometry}
        position={[0, 5.75, -70.47]}
        material={transparentMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel002.geometry}
        position={[-46.84, 5.75, -70.47]}
        material={transparentMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel003.geometry}
        position={[70.47, 5.75, 46.84]}
        material={transparentMat}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel004.geometry}
        position={[70.47, 5.75, 0]}
        material={transparentMat}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel005.geometry}
        position={[70.47, 5.75, -46.84]}
        material={transparentMat}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel006.geometry}
        position={[-46.84, 5.75, 70.47]}
        material={transparentMat}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel007.geometry}
        position={[0, 5.75, 70.47]}
        material={transparentMat}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel008.geometry}
        position={[46.84, 5.75, 70.47]}
        material={transparentMat}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel009.geometry}
        material={transparentMat}
        position={[-70.47, 5.75, -46.84]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel010.geometry}
        material={transparentMat}
        position={[-70.47, 5.75, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel011.geometry}
        material={transparentMat}
        position={[-70.47, 5.75, 46.84]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Bracket000'].geometry}
        material={shadowMat}
        position={[69.56, 11.55, -69.56]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Bracket001'].geometry}
        material={shadowMat}
        position={[69.56, 11.55, 69.57]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Bracket002'].geometry}
        material={shadowMat}
        position={[-69.56, 11.55, 69.56]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Bracket003'].geometry}
        material={shadowMat}
        position={[-69.56, 11.55, -69.57]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Gusset000'].geometry}
        material={shadowMat}
        position={[70.55, 5.75, -70.55]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Gusset001'].geometry}
        material={shadowMat}
        position={[70.55, 5.75, 70.56]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Gusset002'].geometry}
        material={shadowMat}
        position={[-70.55, 5.75, 70.55]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Gusset003'].geometry}
        material={shadowMat}
        position={[-70.55, 5.75, -70.56]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset000'].geometry}
        material={shadowMat}
        position={[23.42, 11.42, -70.92]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset002'].geometry}
        material={shadowMat}
        position={[-23.42, 11.42, -70.92]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset004'].geometry}
        material={shadowMat}
        position={[70.92, 11.42, 23.43]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset006'].geometry}
        material={shadowMat}
        position={[70.92, 11.42, -23.42]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset008'].geometry}
        material={shadowMat}
        position={[-23.42, 11.42, 70.92]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset010'].geometry}
        material={shadowMat}
        position={[23.42, 11.42, 70.92]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset012'].geometry}
        material={shadowMat}
        position={[-70.92, 11.42, -23.43]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset014'].geometry}
        material={shadowMat}
        position={[-70.92, 11.42, 23.42]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset001'].geometry}
        material={shadowMat}
        position={[23.42, 0.08, -70.92]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset003'].geometry}
        material={shadowMat}
        position={[-23.42, 0.08, -70.92]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset005'].geometry}
        material={shadowMat}
        position={[70.92, 0.08, 23.43]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset007'].geometry}
        material={shadowMat}
        position={[70.92, 0.08, -23.42]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset009'].geometry}
        material={shadowMat}
        position={[-23.42, 0.08, 70.92]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset011'].geometry}
        material={shadowMat}
        position={[23.42, 0.08, 70.92]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset013'].geometry}
        material={shadowMat}
        position={[-70.92, 0.08, -23.43]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset015'].geometry}
        material={shadowMat}
        position={[-70.92, 0.08, 23.42]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component000'].geometry}
        material={shadowMat}
        position={[46.84, 10.55, -70.47]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component001'].geometry}
        material={shadowMat}
        position={[46.84, 0.95, -70.47]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component002'].geometry}
        material={shadowMat}
        position={[0, 10.55, -70.47]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component003'].geometry}
        material={shadowMat}
        position={[0, 0.95, -70.47]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component004'].geometry}
        material={shadowMat}
        position={[-46.84, 10.55, -70.47]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component005'].geometry}
        material={shadowMat}
        position={[-46.84, 0.95, -70.47]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component006'].geometry}
        material={shadowMat}
        position={[70.47, 10.55, 46.84]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component007'].geometry}
        material={shadowMat}
        position={[70.47, 0.95, 46.84]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component008'].geometry}
        material={shadowMat}
        position={[70.47, 10.55, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component009'].geometry}
        material={shadowMat}
        position={[70.47, 0.95, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component010'].geometry}
        material={shadowMat}
        position={[70.47, 10.55, -46.84]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component011'].geometry}
        material={shadowMat}
        position={[70.47, 0.95, -46.84]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component012'].geometry}
        material={shadowMat}
        position={[-46.84, 10.55, 70.47]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component013'].geometry}
        material={shadowMat}
        position={[-46.84, 0.95, 70.47]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component014'].geometry}
        material={shadowMat}
        position={[0, 10.55, 70.47]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component015'].geometry}
        material={shadowMat}
        position={[0, 0.95, 70.47]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component016'].geometry}
        material={shadowMat}
        position={[46.84, 10.55, 70.47]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component017'].geometry}
        material={shadowMat}
        position={[46.84, 0.95, 70.47]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component018'].geometry}
        material={shadowMat}
        position={[-70.47, 10.55, -46.84]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component019'].geometry}
        material={shadowMat}
        position={[-70.47, 0.95, -46.84]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component020'].geometry}
        material={shadowMat}
        position={[-70.47, 10.55, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component021'].geometry}
        material={shadowMat}
        position={[-70.47, 0.95, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component022'].geometry}
        material={shadowMat}
        position={[-70.47, 10.55, 46.84]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component023'].geometry}
        material={shadowMat}
        position={[-70.47, 0.95, 46.84]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component000'].geometry}
        material={shadowMat}
        position={[24.35, 5.75, -70.51]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component001'].geometry}
        material={shadowMat}
        position={[69.33, 5.75, -70.51]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component002'].geometry}
        material={shadowMat}
        position={[-24.35, 5.75, 70.51]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component003'].geometry}
        material={shadowMat}
        position={[-22.49, 5.75, -70.51]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component004'].geometry}
        material={shadowMat}
        position={[22.49, 5.75, -70.51]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component005'].geometry}
        material={shadowMat}
        position={[-69.33, 5.75, -70.51]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component006'].geometry}
        material={shadowMat}
        position={[-24.36, 5.75, -70.51]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component007'].geometry}
        material={shadowMat}
        position={[70.51, 5.75, 24.36]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component008'].geometry}
        material={shadowMat}
        position={[70.51, 5.75, 69.33]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component009'].geometry}
        material={shadowMat}
        position={[70.51, 5.75, -22.48]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component010'].geometry}
        material={shadowMat}
        position={[70.51, 5.75, 22.49]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component011'].geometry}
        material={shadowMat}
        position={[70.51, 5.75, -69.33]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component012'].geometry}
        material={shadowMat}
        position={[70.51, 5.75, -24.35]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component013'].geometry}
        material={shadowMat}
        position={[-69.33, 5.75, 70.51]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component014'].geometry}
        material={shadowMat}
        position={[22.49, 5.75, 70.51]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component015'].geometry}
        material={shadowMat}
        position={[-22.49, 5.75, 70.51]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component016'].geometry}
        material={shadowMat}
        position={[69.33, 5.75, 70.51]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component017'].geometry}
        material={shadowMat}
        position={[24.36, 5.75, 70.51]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component018'].geometry}
        material={shadowMat}
        position={[-70.51, 5.75, -24.36]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component019'].geometry}
        material={shadowMat}
        position={[-70.51, 5.75, -69.33]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component020'].geometry}
        material={shadowMat}
        position={[-70.51, 5.75, 22.48]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component021'].geometry}
        material={shadowMat}
        position={[-70.51, 5.75, -22.49]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component022'].geometry}
        material={shadowMat}
        position={[-70.51, 5.75, 69.33]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component023'].geometry}
        material={shadowMat}
        position={[-70.51, 5.75, 24.35]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.TiP_Lines_1.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Lines_2.geometry} material={shadowMat} />
      </group>
      <mesh
        geometry={nodes.Tipping_Point_Game_Element.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements319.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements321.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements323.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements325.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements327.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements329.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements331.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements333.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements335.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements337.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements339.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements341.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements343.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements345.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements347.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements349.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements351.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements353.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements355.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements357.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements359.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements361.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements363.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements365.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements367.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements369.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements371.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements373.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements375.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements377.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements379.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements381.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements383.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements385.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements387.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements389.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements391.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements393.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements395.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements397.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements399.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements401.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements403.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements405.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements407.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements409.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements411.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements413.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements415.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements417.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements419.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements421.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements423.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements425.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements427.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements429.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements431.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements433.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements435.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements437.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements439.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements441.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements443.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements445.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements447.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements449.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements451.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements453.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements455.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements457.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements459.geometry}
        material={shadowMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.TiP_Inches1274.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1274_1.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1274_2.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1274_3.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1274_4.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1274_5.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1274_6.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1274_7.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1274_8.geometry} material={shadowMat} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.TiP_Inches1275.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1275_1.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1275_2.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1275_3.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1275_4.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1275_5.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1275_6.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1275_7.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1275_8.geometry} material={shadowMat} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.TiP_Inches1273.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1273_1.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1273_2.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1273_3.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1273_4.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1273_5.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1273_6.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1273_7.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1273_8.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1273_9.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1273_10.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1273_11.geometry} material={shadowMat} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.TiP_Inches1098.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1098_1.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1098_2.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1098_3.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1098_4.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1098_5.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1098_6.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1098_7.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1098_8.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1098_9.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1098_10.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1098_11.geometry} material={shadowMat} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.TiP_Inches1238.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1238_1.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1238_2.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1238_3.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1238_4.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1238_5.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1238_6.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1238_7.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1238_8.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1238_9.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1238_10.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1238_11.geometry} material={shadowMat} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.TiP_Inches1194.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1194_1.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1194_2.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1194_3.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1194_4.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1194_5.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1194_6.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1194_7.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1194_8.geometry} material={shadowMat} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.TiP_Inches1162.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1162_1.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1162_2.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1162_3.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1162_4.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1162_5.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1162_6.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1162_7.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Inches1162_8.geometry} material={shadowMat} />
      </group>
    </group>
  )
}

useGLTF.preload(process.env.PUBLIC_URL + '/fieldmodel.gltf')
