import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const transparentMat = new THREE.MeshLambertMaterial({
  color: 0x000000,
  transparent: true,
  opacity: 0.2,
  wireframe: false,
  side: THREE.DoubleSide,
  vertexColors: true,
})

var testMat = new THREE.ShaderMaterial({
  uniforms: 
  { 
    "s":   { type: "f", value: -0.5},
    "b":   { type: "f", value: 1.0},
    "p":   { type: "f", value: 1.0 },
    glowColor: { type: "c", value: new THREE.Color(0xff800) }
  },
  vertexShader:   document.getElementById( 'vertexShader'   ).textContent,
  fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
  side: THREE.FrontSide,
  blending: THREE.AdditiveBlending,
  transparent: false
})
const matDict = {};

export default function Model(props) {

  // props.nodes.push(<Node position={[Math.floor((Math.random() * 50) + 1), Math.floor((Math.random() * 50) + 1), Math.floor((Math.random() * 50) + 1)]}/>)
  // props.nodes.push(<Node position={[Math.floor((Math.random() * 50) + 1), Math.floor((Math.random() * 50) + 1), Math.floor((Math.random() * 50) + 1)]}/>)

  const sayClicked = (clicked) => {  
    clicked.stopPropagation();
    // console.log(props.nodes);
    // props.nodes.push(<Marker key={i++} position={[Math.floor((Math.random() * 50) + 1), Math.floor((Math.random() * 50) + 1), Math.floor((Math.random() * 50) + 1)]}/>)
    if (clicked.object.material !== testMat) {

      // Cache old material
      // matDict[clicked.object.uuid] = clicked.object.material;
  
      // clicked.object.material = testMat;
  
      console.log("UI:")
      console.log(props);

      props.ui(clicked.point);
      
    } else {
      // Restore old material
      clicked.object.material = matDict[clicked.object.uuid]
    }
    console.log(props.nodes)
  }

  const tileMat = new THREE.MeshPhongMaterial({
    color: 0x63676f
  })

  const group = useRef()
  const { nodes, materials } = useGLTF('/fieldmodel.gltf')

  const tiles = [
    nodes.FieldTile000,
    nodes.FieldTile001,
    nodes.FieldTile002,
    nodes.FieldTile003,
    nodes.FieldTile004,
    nodes.FieldTile005,
    nodes.FieldTile006,
    nodes.FieldTile007,
    nodes.FieldTile008,
    nodes.FieldTile009,
    nodes.FieldTile010,
    nodes.FieldTile011,
    nodes.FieldTile012,
    nodes.FieldTile013,
    nodes.FieldTile014,
    nodes.FieldTile015,
    nodes.FieldTile016,
    nodes.FieldTile017,
    nodes.FieldTile018,
    nodes.FieldTile019,
    nodes.FieldTile020,
    nodes.FieldTile021,
    nodes.FieldTile022,
    nodes.FieldTile023,
    nodes.FieldTile024,
    nodes.FieldTile025,
    nodes.FieldTile026,
    nodes.FieldTile027,
    nodes.FieldTile028,
    nodes.FieldTile029,
    nodes.FieldTile030,
    nodes.FieldTile031,
    nodes.FieldTile032,
    nodes.FieldTile033,
    nodes.FieldTile034,
    nodes.FieldTile035,
  ];

  tiles.forEach(tile => {
    tile.material = tileMat;
  })



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

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI]}>
        <mesh geometry={nodes.RedPlatform159.geometry} material={nodes.RedPlatform159.material} />
        <mesh geometry={nodes.RedPlatform159_1.geometry} material={nodes.RedPlatform159_1.material} />
        <mesh geometry={nodes.RedPlatform159_2.geometry} material={nodes.RedPlatform159_2.material} />
        <mesh geometry={nodes.RedPlatform159_3.geometry} material={nodes.RedPlatform159_3.material} />
        <mesh geometry={nodes.RedPlatform159_4.geometry} material={nodes.RedPlatform159_4.material} />
        <mesh geometry={nodes.RedPlatform159_5.geometry} material={nodes.RedPlatform159_5.material} />
        <mesh geometry={nodes.RedPlatform159_6.geometry} material={nodes.RedPlatform159_6.material} />
        <mesh geometry={nodes.RedPlatform159_7.geometry} material={nodes.RedPlatform159_7.material} />
        <mesh geometry={nodes.RedPlatform159_8.geometry} material={nodes.RedPlatform159_8.material} />
        <mesh geometry={nodes.RedPlatform159_9.geometry} material={nodes.RedPlatform159_9.material} />
        <mesh geometry={nodes.RedPlatform159_10.geometry} material={nodes.RedPlatform159_10.material} />
        <mesh geometry={nodes.RedPlatform159_11.geometry} material={nodes.RedPlatform159_11.material} />
        <mesh geometry={nodes.RedPlatform159_12.geometry} material={nodes.RedPlatform159_12.material} />
        <group position={[-58.48, 2.5, -7.19]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Platform_Pivot_Bar001.geometry}
            material={nodes.Platform_Pivot_Bar001.material}
            position={[58.48, -7.19, -2.5]}
            rotation={[Math.PI / 2, 0, 0]}>
            <group position={[-58.48, -2.5, -7.19]} rotation={[-1.96, 0, 0]}>
              <group position={[58.48, -7.6, -0.37]} rotation={[1.95, 0, 0]}>
                <mesh geometry={nodes.RedPlatform161.geometry} material={nodes.RedPlatform161.material} />
                <mesh geometry={nodes.RedPlatform161_1.geometry} material={nodes.RedPlatform161_1.material} />
                <mesh geometry={nodes.RedPlatform161_2.geometry} material={nodes.RedPlatform161_2.material} />
                <mesh geometry={nodes.RedPlatform161_3.geometry} material={nodes.RedPlatform161_3.material} />
                <mesh geometry={nodes.RedPlatform161_4.geometry} material={nodes.RedPlatform161_4.material} />
                <mesh geometry={nodes.RedPlatform161_5.geometry} material={nodes.RedPlatform161_5.material} />
                <mesh geometry={nodes.RedPlatform161_6.geometry} material={nodes.RedPlatform161_6.material} />
                <mesh geometry={nodes.RedPlatform161_7.geometry} material={nodes.RedPlatform161_7.material} />
                <mesh geometry={nodes.RedPlatform161_8.geometry} material={nodes.RedPlatform161_8.material} />
                <mesh geometry={nodes.RedPlatform161_9.geometry} material={nodes.RedPlatform161_9.material} />
                <mesh geometry={nodes.RedPlatform161_10.geometry} material={nodes.RedPlatform161_10.material} />
                <mesh geometry={nodes.RedPlatform161_11.geometry} material={transparentMat} />
                <mesh geometry={nodes.RedPlatform161_12.geometry} material={nodes.RedPlatform161_12.material} />
                <mesh geometry={nodes.RedPlatform161_13.geometry} material={nodes.RedPlatform161_13.material} />
                <mesh geometry={nodes.RedPlatform161_14.geometry} material={nodes.RedPlatform161_14.material} />
                <mesh geometry={nodes.RedPlatform161_15.geometry} material={nodes.RedPlatform161_15.material} />
                <mesh geometry={nodes.RedPlatform161_16.geometry} material={nodes.RedPlatform161_16.material} />
              </group>
            </group>
          </mesh>
        </group>
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.RedPlatform.geometry} material={nodes.RedPlatform.material} />
        <mesh geometry={nodes.RedPlatform_1.geometry} material={nodes.RedPlatform_1.material} />
        <mesh geometry={nodes.RedPlatform_2.geometry} material={nodes.RedPlatform_2.material} />
        <mesh geometry={nodes.RedPlatform_3.geometry} material={nodes.RedPlatform_3.material} />
        <mesh geometry={nodes.RedPlatform_4.geometry} material={nodes.RedPlatform_4.material} />
        <mesh geometry={nodes.RedPlatform_5.geometry} material={nodes.RedPlatform_5.material} />
        <mesh geometry={nodes.RedPlatform_6.geometry} material={nodes.RedPlatform_6.material} />
        <mesh geometry={nodes.RedPlatform_7.geometry} material={nodes.RedPlatform_7.material} />
        <mesh geometry={nodes.RedPlatform_8.geometry} material={nodes.RedPlatform_8.material} />
        <mesh geometry={nodes.RedPlatform_9.geometry} material={nodes.RedPlatform_9.material} />
        <mesh geometry={nodes.RedPlatform_10.geometry} material={nodes.RedPlatform_10.material} />
        <mesh geometry={nodes.RedPlatform_11.geometry} material={nodes.RedPlatform_11.material} />
        <mesh geometry={nodes.RedPlatform_12.geometry} material={nodes.RedPlatform_12.material} />
        <group position={[-58.48, 2.5, -7.19]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Platform_Pivot_Bar.geometry}
            material={nodes.Platform_Pivot_Bar.material}
            position={[58.48, -7.19, -2.5]}
            rotation={[Math.PI / 2, 0, 0]}>
            <group position={[-58.48, -2.5, -7.19]} rotation={[-1.96, 0, 0]}>
              <group position={[58.48, -7.6, -0.37]} rotation={[1.95, 0, 0]}>
                <mesh geometry={nodes.RedPlatform125.geometry} material={nodes.RedPlatform125.material} />
                <mesh geometry={nodes.RedPlatform125_1.geometry} material={nodes.RedPlatform125_1.material} />
                <mesh geometry={nodes.RedPlatform125_2.geometry} material={nodes.RedPlatform125_2.material} />
                <mesh geometry={nodes.RedPlatform125_3.geometry} material={nodes.RedPlatform125_3.material} />
                <mesh geometry={nodes.RedPlatform125_4.geometry} material={nodes.RedPlatform125_4.material} />
                <mesh geometry={nodes.RedPlatform125_5.geometry} material={nodes.RedPlatform125_5.material} />
                <mesh geometry={nodes.RedPlatform125_6.geometry} material={materials['166,25,46.002']} />
                <mesh geometry={nodes.RedPlatform125_7.geometry} material={materials['166,25,46_1.002']} />
                <mesh geometry={nodes.RedPlatform125_8.geometry} material={nodes.RedPlatform125_8.material} />
                <mesh geometry={nodes.RedPlatform125_9.geometry} material={nodes.RedPlatform125_9.material} />
                <mesh geometry={nodes.RedPlatform125_10.geometry} material={nodes.RedPlatform125_10.material} />
                <mesh geometry={nodes.RedPlatform125_11.geometry} material={transparentMat} />
                <mesh geometry={nodes.RedPlatform125_12.geometry} material={nodes.RedPlatform125_12.material} />
                <mesh geometry={nodes.RedPlatform125_13.geometry} material={nodes.RedPlatform125_13.material} />
                <mesh geometry={nodes.RedPlatform125_14.geometry} material={nodes.RedPlatform125_14.material} />
                <mesh geometry={nodes.RedPlatform125_15.geometry} material={nodes.RedPlatform125_15.material} />
                <mesh geometry={nodes.RedPlatform125_16.geometry} material={nodes.RedPlatform125_16.material} />
              </group>
            </group>
          </mesh>
        </group>
      </group>
      <mesh
        geometry={nodes.Field_Tape_Blue.geometry}
        material={materials['Field Tape Blue']}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Field_Tape_Red.geometry}
        material={materials['Field Tape Red']}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.FieldTile000.geometry}
        material={nodes.FieldTile000.material}
        onClick={sayClicked}
        position={[-58.91, -0.31, -58.91]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile001.geometry}
        material={nodes.FieldTile001.material}
        onClick={sayClicked}
        position={[-35.34, -0.31, -58.91]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile002.geometry}
        material={nodes.FieldTile002.material}
        onClick={sayClicked}
        position={[-11.78, -0.31, -58.91]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile003.geometry}
        material={nodes.FieldTile003.material}
        onClick={sayClicked}
        position={[11.78, -0.31, -58.91]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile004.geometry}
        material={nodes.FieldTile004.material}
        onClick={sayClicked}
        position={[35.34, -0.31, -58.91]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile005.geometry}
        material={nodes.FieldTile005.material}
        onClick={sayClicked}
        position={[58.91, -0.31, -58.91]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile006.geometry}
        material={nodes.FieldTile006.material}
        onClick={sayClicked}
        position={[-58.91, -0.31, -35.34]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile007.geometry}
        material={nodes.FieldTile007.material}
        onClick={sayClicked}
        position={[-35.34, -0.31, -35.34]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile008.geometry}
        material={nodes.FieldTile008.material}
        onClick={sayClicked}
        position={[-11.78, -0.31, -35.34]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile009.geometry}
        material={nodes.FieldTile009.material}
        onClick={sayClicked}
        position={[11.78, -0.31, -35.34]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile010.geometry}
        material={nodes.FieldTile010.material}
        onClick={sayClicked}
        position={[35.34, -0.31, -35.34]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile011.geometry}
        material={nodes.FieldTile011.material}
        onClick={sayClicked}
        position={[58.91, -0.31, -35.34]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile012.geometry}
        material={nodes.FieldTile012.material}
        onClick={sayClicked}
        position={[-58.91, -0.31, -11.78]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile013.geometry}
        material={nodes.FieldTile013.material}
        onClick={sayClicked}
        position={[-35.34, -0.31, -11.78]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile014.geometry}
        material={nodes.FieldTile014.material}
        onClick={sayClicked}
        position={[-11.78, -0.31, -11.78]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile015.geometry}
        material={nodes.FieldTile015.material}
        onClick={sayClicked}
        position={[11.78, -0.31, -11.78]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile016.geometry}
        material={nodes.FieldTile016.material}
        onClick={sayClicked}
        position={[35.34, -0.31, -11.78]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile017.geometry}
        material={nodes.FieldTile017.material}
        onClick={sayClicked}
        position={[58.91, -0.31, -11.78]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile018.geometry}
        material={nodes.FieldTile018.material}
        onClick={sayClicked}
        position={[-58.91, -0.31, 11.78]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile019.geometry}
        material={nodes.FieldTile019.material}
        onClick={sayClicked}
        position={[-35.34, -0.31, 11.78]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile020.geometry}
        material={nodes.FieldTile020.material}
        onClick={sayClicked}
        position={[-11.78, -0.31, 11.78]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile021.geometry}
        material={nodes.FieldTile021.material}
        onClick={sayClicked}
        position={[11.78, -0.31, 11.78]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile022.geometry}
        material={nodes.FieldTile022.material}
        onClick={sayClicked}
        position={[35.34, -0.31, 11.78]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile023.geometry}
        material={nodes.FieldTile023.material}
        onClick={sayClicked}
        position={[58.91, -0.31, 11.78]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile024.geometry}
        material={nodes.FieldTile024.material}
        onClick={sayClicked}
        position={[-58.91, -0.31, 35.34]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile025.geometry}
        material={nodes.FieldTile025.material}
        onClick={sayClicked}
        position={[-35.34, -0.31, 35.34]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile026.geometry}
        material={nodes.FieldTile026.material}
        onClick={sayClicked}
        position={[-11.78, -0.31, 35.34]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile027.geometry}
        material={nodes.FieldTile027.material}
        onClick={sayClicked}
        position={[11.78, -0.31, 35.34]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile028.geometry}
        material={nodes.FieldTile028.material}
        onClick={sayClicked}
        position={[35.34, -0.31, 35.34]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile029.geometry}
        material={nodes.FieldTile029.material}
        onClick={sayClicked}
        position={[58.91, -0.31, 35.34]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile030.geometry}
        material={nodes.FieldTile030.material}
        onClick={sayClicked}
        position={[-58.91, -0.31, 58.91]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile031.geometry}
        material={nodes.FieldTile031.material}
        onClick={sayClicked}
        position={[-35.34, -0.31, 58.91]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile032.geometry}
        material={nodes.FieldTile032.material}
        onClick={sayClicked}
        position={[-11.78, -0.31, 58.91]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile033.geometry}
        material={nodes.FieldTile033.material}
        onClick={sayClicked}
        position={[11.78, -0.31, 58.91]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile034.geometry}
        material={nodes.FieldTile034.material}
        onClick={sayClicked}
        position={[35.34, -0.31, 58.91]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FieldTile035.geometry}
        material={nodes.FieldTile035.material}
        onClick={sayClicked}
        position={[58.91, -0.31, 58.91]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel000.geometry}
        material={nodes.Perimeter_Lexan_Wall_Panel000.material}
        position={[46.84, 5.75, -70.47]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel001.geometry}
        material={nodes.Perimeter_Lexan_Wall_Panel001.material}
        position={[0, 5.75, -70.47]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel002.geometry}
        material={nodes.Perimeter_Lexan_Wall_Panel002.material}
        position={[-46.84, 5.75, -70.47]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel003.geometry}
        material={nodes.Perimeter_Lexan_Wall_Panel003.material}
        position={[70.47, 5.75, 46.84]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel004.geometry}
        material={nodes.Perimeter_Lexan_Wall_Panel004.material}
        position={[70.47, 5.75, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel005.geometry}
        material={nodes.Perimeter_Lexan_Wall_Panel005.material}
        position={[70.47, 5.75, -46.84]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel006.geometry}
        material={nodes.Perimeter_Lexan_Wall_Panel006.material}
        position={[-46.84, 5.75, 70.47]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel007.geometry}
        material={nodes.Perimeter_Lexan_Wall_Panel007.material}
        position={[0, 5.75, 70.47]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel008.geometry}
        material={nodes.Perimeter_Lexan_Wall_Panel008.material}
        position={[46.84, 5.75, 70.47]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel009.geometry}
        material={nodes.Perimeter_Lexan_Wall_Panel009.material}
        position={[-70.47, 5.75, -46.84]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel010.geometry}
        material={nodes.Perimeter_Lexan_Wall_Panel010.material}
        position={[-70.47, 5.75, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Perimeter_Lexan_Wall_Panel011.geometry}
        material={nodes.Perimeter_Lexan_Wall_Panel011.material}
        position={[-70.47, 5.75, 46.84]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Bracket000'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Corner_Bracket000'].material}
        position={[69.56, 11.55, -69.56]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Bracket001'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Corner_Bracket001'].material}
        position={[69.56, 11.55, 69.57]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Bracket002'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Corner_Bracket002'].material}
        position={[-69.56, 11.55, 69.56]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Bracket003'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Corner_Bracket003'].material}
        position={[-69.56, 11.55, -69.57]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Gusset000'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Corner_Gusset000'].material}
        position={[70.55, 5.75, -70.55]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Gusset001'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Corner_Gusset001'].material}
        position={[70.55, 5.75, 70.56]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Gusset002'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Corner_Gusset002'].material}
        position={[-70.55, 5.75, 70.55]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Gusset003'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Corner_Gusset003'].material}
        position={[-70.55, 5.75, -70.56]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset000'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Gusset000'].material}
        position={[23.42, 11.42, -70.92]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset002'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Gusset002'].material}
        position={[-23.42, 11.42, -70.92]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset004'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Gusset004'].material}
        position={[70.92, 11.42, 23.43]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset006'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Gusset006'].material}
        position={[70.92, 11.42, -23.42]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset008'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Gusset008'].material}
        position={[-23.42, 11.42, 70.92]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset010'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Gusset010'].material}
        position={[23.42, 11.42, 70.92]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset012'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Gusset012'].material}
        position={[-70.92, 11.42, -23.43]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset014'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Gusset014'].material}
        position={[-70.92, 11.42, 23.42]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset001'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Gusset001'].material}
        position={[23.42, 0.08, -70.92]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset003'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Gusset003'].material}
        position={[-23.42, 0.08, -70.92]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset005'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Gusset005'].material}
        position={[70.92, 0.08, 23.43]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset007'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Gusset007'].material}
        position={[70.92, 0.08, -23.42]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset009'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Gusset009'].material}
        position={[-23.42, 0.08, 70.92]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset011'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Gusset011'].material}
        position={[23.42, 0.08, 70.92]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset013'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Gusset013'].material}
        position={[-70.92, 0.08, -23.43]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Gusset015'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Gusset015'].material}
        position={[-70.92, 0.08, 23.42]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component000'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component000'].material}
        position={[46.84, 10.55, -70.47]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component001'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component001'].material}
        position={[46.84, 0.95, -70.47]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component002'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component002'].material}
        position={[0, 10.55, -70.47]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component003'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component003'].material}
        position={[0, 0.95, -70.47]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component004'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component004'].material}
        position={[-46.84, 10.55, -70.47]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component005'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component005'].material}
        position={[-46.84, 0.95, -70.47]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component006'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component006'].material}
        position={[70.47, 10.55, 46.84]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component007'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component007'].material}
        position={[70.47, 0.95, 46.84]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component008'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component008'].material}
        position={[70.47, 10.55, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component009'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component009'].material}
        position={[70.47, 0.95, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component010'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component010'].material}
        position={[70.47, 10.55, -46.84]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component011'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component011'].material}
        position={[70.47, 0.95, -46.84]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component012'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component012'].material}
        position={[-46.84, 10.55, 70.47]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component013'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component013'].material}
        position={[-46.84, 0.95, 70.47]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component014'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component014'].material}
        position={[0, 10.55, 70.47]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component015'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component015'].material}
        position={[0, 0.95, 70.47]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component016'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component016'].material}
        position={[46.84, 10.55, 70.47]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component017'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component017'].material}
        position={[46.84, 0.95, 70.47]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component018'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component018'].material}
        position={[-70.47, 10.55, -46.84]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component019'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component019'].material}
        position={[-70.47, 0.95, -46.84]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component020'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component020'].material}
        position={[-70.47, 10.55, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component021'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component021'].material}
        position={[-70.47, 0.95, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component022'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component022'].material}
        position={[-70.47, 10.55, 46.84]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component023'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Horizantal_Component023'].material}
        position={[-70.47, 0.95, 46.84]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component000'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component000'].material}
        position={[24.35, 5.75, -70.51]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component001'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component001'].material}
        position={[69.33, 5.75, -70.51]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component002'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component002'].material}
        position={[-24.35, 5.75, 70.51]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component003'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component003'].material}
        position={[-22.49, 5.75, -70.51]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component004'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component004'].material}
        position={[22.49, 5.75, -70.51]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component005'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component005'].material}
        position={[-69.33, 5.75, -70.51]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component006'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component006'].material}
        position={[-24.36, 5.75, -70.51]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component007'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component007'].material}
        position={[70.51, 5.75, 24.36]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component008'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component008'].material}
        position={[70.51, 5.75, 69.33]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component009'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component009'].material}
        position={[70.51, 5.75, -22.48]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component010'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component010'].material}
        position={[70.51, 5.75, 22.49]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component011'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component011'].material}
        position={[70.51, 5.75, -69.33]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component012'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component012'].material}
        position={[70.51, 5.75, -24.35]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component013'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component013'].material}
        position={[-69.33, 5.75, 70.51]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component014'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component014'].material}
        position={[22.49, 5.75, 70.51]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component015'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component015'].material}
        position={[-22.49, 5.75, 70.51]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component016'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component016'].material}
        position={[69.33, 5.75, 70.51]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component017'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component017'].material}
        position={[24.36, 5.75, 70.51]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component018'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component018'].material}
        position={[-70.51, 5.75, -24.36]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component019'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component019'].material}
        position={[-70.51, 5.75, -69.33]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component020'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component020'].material}
        position={[-70.51, 5.75, 22.48]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component021'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component021'].material}
        position={[-70.51, 5.75, -22.49]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component022'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component022'].material}
        position={[-70.51, 5.75, 69.33]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component023'].geometry}
        material={nodes['Perimeter_Sheet-Metal_Vertical_Component023'].material}
        position={[-70.51, 5.75, 24.35]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.TiP_Lines_1.geometry} material={materials['192,192,192.002']} />
        <mesh geometry={nodes.TiP_Lines_2.geometry} material={materials['192,192,192_1.002']} />
      </group>
      <mesh
        geometry={nodes.Tipping_Point_Game_Element.geometry}
        material={nodes.Tipping_Point_Game_Element.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements319.geometry}
        material={nodes.Tipping_Point_Game_Elements319.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements321.geometry}
        material={nodes.Tipping_Point_Game_Elements321.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements323.geometry}
        material={nodes.Tipping_Point_Game_Elements323.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements325.geometry}
        material={nodes.Tipping_Point_Game_Elements325.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements327.geometry}
        material={nodes.Tipping_Point_Game_Elements327.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements329.geometry}
        material={nodes.Tipping_Point_Game_Elements329.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements331.geometry}
        material={nodes.Tipping_Point_Game_Elements331.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements333.geometry}
        material={nodes.Tipping_Point_Game_Elements333.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements335.geometry}
        material={nodes.Tipping_Point_Game_Elements335.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements337.geometry}
        material={nodes.Tipping_Point_Game_Elements337.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements339.geometry}
        material={nodes.Tipping_Point_Game_Elements339.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements341.geometry}
        material={nodes.Tipping_Point_Game_Elements341.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements343.geometry}
        material={nodes.Tipping_Point_Game_Elements343.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements345.geometry}
        material={nodes.Tipping_Point_Game_Elements345.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements347.geometry}
        material={nodes.Tipping_Point_Game_Elements347.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements349.geometry}
        material={nodes.Tipping_Point_Game_Elements349.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements351.geometry}
        material={nodes.Tipping_Point_Game_Elements351.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements353.geometry}
        material={nodes.Tipping_Point_Game_Elements353.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements355.geometry}
        material={nodes.Tipping_Point_Game_Elements355.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements357.geometry}
        material={nodes.Tipping_Point_Game_Elements357.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements359.geometry}
        material={nodes.Tipping_Point_Game_Elements359.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements361.geometry}
        material={nodes.Tipping_Point_Game_Elements361.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements363.geometry}
        material={nodes.Tipping_Point_Game_Elements363.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements365.geometry}
        material={nodes.Tipping_Point_Game_Elements365.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements367.geometry}
        material={nodes.Tipping_Point_Game_Elements367.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements369.geometry}
        material={nodes.Tipping_Point_Game_Elements369.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements371.geometry}
        material={nodes.Tipping_Point_Game_Elements371.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements373.geometry}
        material={nodes.Tipping_Point_Game_Elements373.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements375.geometry}
        material={nodes.Tipping_Point_Game_Elements375.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements377.geometry}
        material={nodes.Tipping_Point_Game_Elements377.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements379.geometry}
        material={nodes.Tipping_Point_Game_Elements379.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements381.geometry}
        material={nodes.Tipping_Point_Game_Elements381.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements383.geometry}
        material={nodes.Tipping_Point_Game_Elements383.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements385.geometry}
        material={nodes.Tipping_Point_Game_Elements385.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements387.geometry}
        material={nodes.Tipping_Point_Game_Elements387.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements389.geometry}
        material={nodes.Tipping_Point_Game_Elements389.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements391.geometry}
        material={nodes.Tipping_Point_Game_Elements391.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements393.geometry}
        material={nodes.Tipping_Point_Game_Elements393.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements395.geometry}
        material={nodes.Tipping_Point_Game_Elements395.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements397.geometry}
        material={nodes.Tipping_Point_Game_Elements397.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements399.geometry}
        material={nodes.Tipping_Point_Game_Elements399.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements401.geometry}
        material={nodes.Tipping_Point_Game_Elements401.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements403.geometry}
        material={nodes.Tipping_Point_Game_Elements403.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements405.geometry}
        material={nodes.Tipping_Point_Game_Elements405.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements407.geometry}
        material={nodes.Tipping_Point_Game_Elements407.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements409.geometry}
        material={nodes.Tipping_Point_Game_Elements409.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements411.geometry}
        material={nodes.Tipping_Point_Game_Elements411.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements413.geometry}
        material={nodes.Tipping_Point_Game_Elements413.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements415.geometry}
        material={nodes.Tipping_Point_Game_Elements415.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements417.geometry}
        material={nodes.Tipping_Point_Game_Elements417.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements419.geometry}
        material={nodes.Tipping_Point_Game_Elements419.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements421.geometry}
        material={nodes.Tipping_Point_Game_Elements421.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements423.geometry}
        material={nodes.Tipping_Point_Game_Elements423.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements425.geometry}
        material={nodes.Tipping_Point_Game_Elements425.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements427.geometry}
        material={nodes.Tipping_Point_Game_Elements427.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements429.geometry}
        material={nodes.Tipping_Point_Game_Elements429.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements431.geometry}
        material={nodes.Tipping_Point_Game_Elements431.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements433.geometry}
        material={nodes.Tipping_Point_Game_Elements433.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements435.geometry}
        material={nodes.Tipping_Point_Game_Elements435.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements437.geometry}
        material={nodes.Tipping_Point_Game_Elements437.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements439.geometry}
        material={nodes.Tipping_Point_Game_Elements439.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements441.geometry}
        material={nodes.Tipping_Point_Game_Elements441.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements443.geometry}
        material={nodes.Tipping_Point_Game_Elements443.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements445.geometry}
        material={nodes.Tipping_Point_Game_Elements445.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements447.geometry}
        material={nodes.Tipping_Point_Game_Elements447.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements449.geometry}
        material={nodes.Tipping_Point_Game_Elements449.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements451.geometry}
        material={nodes.Tipping_Point_Game_Elements451.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements453.geometry}
        material={nodes.Tipping_Point_Game_Elements453.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements455.geometry}
        material={nodes.Tipping_Point_Game_Elements455.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements457.geometry}
        material={nodes.Tipping_Point_Game_Elements457.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tipping_Point_Game_Elements459.geometry}
        material={nodes.Tipping_Point_Game_Elements459.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.TiP_Inches1274.geometry} material={nodes.TiP_Inches1274.material} />
        <mesh geometry={nodes.TiP_Inches1274_1.geometry} material={nodes.TiP_Inches1274_1.material} />
        <mesh geometry={nodes.TiP_Inches1274_2.geometry} material={nodes.TiP_Inches1274_2.material} />
        <mesh geometry={nodes.TiP_Inches1274_3.geometry} material={nodes.TiP_Inches1274_3.material} />
        <mesh geometry={nodes.TiP_Inches1274_4.geometry} material={nodes.TiP_Inches1274_4.material} />
        <mesh geometry={nodes.TiP_Inches1274_5.geometry} material={nodes.TiP_Inches1274_5.material} />
        <mesh geometry={nodes.TiP_Inches1274_6.geometry} material={nodes.TiP_Inches1274_6.material} />
        <mesh geometry={nodes.TiP_Inches1274_7.geometry} material={nodes.TiP_Inches1274_7.material} />
        <mesh geometry={nodes.TiP_Inches1274_8.geometry} material={nodes.TiP_Inches1274_8.material} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.TiP_Inches1275.geometry} material={nodes.TiP_Inches1275.material} />
        <mesh geometry={nodes.TiP_Inches1275_1.geometry} material={nodes.TiP_Inches1275_1.material} />
        <mesh geometry={nodes.TiP_Inches1275_2.geometry} material={nodes.TiP_Inches1275_2.material} />
        <mesh geometry={nodes.TiP_Inches1275_3.geometry} material={nodes.TiP_Inches1275_3.material} />
        <mesh geometry={nodes.TiP_Inches1275_4.geometry} material={nodes.TiP_Inches1275_4.material} />
        <mesh geometry={nodes.TiP_Inches1275_5.geometry} material={nodes.TiP_Inches1275_5.material} />
        <mesh geometry={nodes.TiP_Inches1275_6.geometry} material={nodes.TiP_Inches1275_6.material} />
        <mesh geometry={nodes.TiP_Inches1275_7.geometry} material={nodes.TiP_Inches1275_7.material} />
        <mesh geometry={nodes.TiP_Inches1275_8.geometry} material={nodes.TiP_Inches1275_8.material} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.TiP_Inches1273.geometry} material={nodes.TiP_Inches1273.material} />
        <mesh geometry={nodes.TiP_Inches1273_1.geometry} material={nodes.TiP_Inches1273_1.material} />
        <mesh geometry={nodes.TiP_Inches1273_2.geometry} material={nodes.TiP_Inches1273_2.material} />
        <mesh geometry={nodes.TiP_Inches1273_3.geometry} material={nodes.TiP_Inches1273_3.material} />
        <mesh geometry={nodes.TiP_Inches1273_4.geometry} material={nodes.TiP_Inches1273_4.material} />
        <mesh geometry={nodes.TiP_Inches1273_5.geometry} material={nodes.TiP_Inches1273_5.material} />
        <mesh geometry={nodes.TiP_Inches1273_6.geometry} material={nodes.TiP_Inches1273_6.material} />
        <mesh geometry={nodes.TiP_Inches1273_7.geometry} material={nodes.TiP_Inches1273_7.material} />
        <mesh geometry={nodes.TiP_Inches1273_8.geometry} material={nodes.TiP_Inches1273_8.material} />
        <mesh geometry={nodes.TiP_Inches1273_9.geometry} material={nodes.TiP_Inches1273_9.material} />
        <mesh geometry={nodes.TiP_Inches1273_10.geometry} material={nodes.TiP_Inches1273_10.material} />
        <mesh geometry={nodes.TiP_Inches1273_11.geometry} material={nodes.TiP_Inches1273_11.material} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.TiP_Inches1098.geometry} material={nodes.TiP_Inches1098.material} />
        <mesh geometry={nodes.TiP_Inches1098_1.geometry} material={nodes.TiP_Inches1098_1.material} />
        <mesh geometry={nodes.TiP_Inches1098_2.geometry} material={nodes.TiP_Inches1098_2.material} />
        <mesh geometry={nodes.TiP_Inches1098_3.geometry} material={nodes.TiP_Inches1098_3.material} />
        <mesh geometry={nodes.TiP_Inches1098_4.geometry} material={nodes.TiP_Inches1098_4.material} />
        <mesh geometry={nodes.TiP_Inches1098_5.geometry} material={nodes.TiP_Inches1098_5.material} />
        <mesh geometry={nodes.TiP_Inches1098_6.geometry} material={nodes.TiP_Inches1098_6.material} />
        <mesh geometry={nodes.TiP_Inches1098_7.geometry} material={nodes.TiP_Inches1098_7.material} />
        <mesh geometry={nodes.TiP_Inches1098_8.geometry} material={nodes.TiP_Inches1098_8.material} />
        <mesh geometry={nodes.TiP_Inches1098_9.geometry} material={nodes.TiP_Inches1098_9.material} />
        <mesh geometry={nodes.TiP_Inches1098_10.geometry} material={nodes.TiP_Inches1098_10.material} />
        <mesh geometry={nodes.TiP_Inches1098_11.geometry} material={nodes.TiP_Inches1098_11.material} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.TiP_Inches1238.geometry} material={nodes.TiP_Inches1238.material} />
        <mesh geometry={nodes.TiP_Inches1238_1.geometry} material={nodes.TiP_Inches1238_1.material} />
        <mesh geometry={nodes.TiP_Inches1238_2.geometry} material={nodes.TiP_Inches1238_2.material} />
        <mesh geometry={nodes.TiP_Inches1238_3.geometry} material={nodes.TiP_Inches1238_3.material} />
        <mesh geometry={nodes.TiP_Inches1238_4.geometry} material={nodes.TiP_Inches1238_4.material} />
        <mesh geometry={nodes.TiP_Inches1238_5.geometry} material={nodes.TiP_Inches1238_5.material} />
        <mesh geometry={nodes.TiP_Inches1238_6.geometry} material={nodes.TiP_Inches1238_6.material} />
        <mesh geometry={nodes.TiP_Inches1238_7.geometry} material={nodes.TiP_Inches1238_7.material} />
        <mesh geometry={nodes.TiP_Inches1238_8.geometry} material={nodes.TiP_Inches1238_8.material} />
        <mesh geometry={nodes.TiP_Inches1238_9.geometry} material={nodes.TiP_Inches1238_9.material} />
        <mesh geometry={nodes.TiP_Inches1238_10.geometry} material={nodes.TiP_Inches1238_10.material} />
        <mesh geometry={nodes.TiP_Inches1238_11.geometry} material={nodes.TiP_Inches1238_11.material} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.TiP_Inches1194.geometry} material={nodes.TiP_Inches1194.material} />
        <mesh geometry={nodes.TiP_Inches1194_1.geometry} material={nodes.TiP_Inches1194_1.material} />
        <mesh geometry={nodes.TiP_Inches1194_2.geometry} material={nodes.TiP_Inches1194_2.material} />
        <mesh geometry={nodes.TiP_Inches1194_3.geometry} material={nodes.TiP_Inches1194_3.material} />
        <mesh geometry={nodes.TiP_Inches1194_4.geometry} material={nodes.TiP_Inches1194_4.material} />
        <mesh geometry={nodes.TiP_Inches1194_5.geometry} material={nodes.TiP_Inches1194_5.material} />
        <mesh geometry={nodes.TiP_Inches1194_6.geometry} material={nodes.TiP_Inches1194_6.material} />
        <mesh geometry={nodes.TiP_Inches1194_7.geometry} material={nodes.TiP_Inches1194_7.material} />
        <mesh geometry={nodes.TiP_Inches1194_8.geometry} material={nodes.TiP_Inches1194_8.material} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.TiP_Inches1162.geometry} material={nodes.TiP_Inches1162.material} />
        <mesh geometry={nodes.TiP_Inches1162_1.geometry} material={nodes.TiP_Inches1162_1.material} />
        <mesh geometry={nodes.TiP_Inches1162_2.geometry} material={nodes.TiP_Inches1162_2.material} />
        <mesh geometry={nodes.TiP_Inches1162_3.geometry} material={nodes.TiP_Inches1162_3.material} />
        <mesh geometry={nodes.TiP_Inches1162_4.geometry} material={nodes.TiP_Inches1162_4.material} />
        <mesh geometry={nodes.TiP_Inches1162_5.geometry} material={nodes.TiP_Inches1162_5.material} />
        <mesh geometry={nodes.TiP_Inches1162_6.geometry} material={nodes.TiP_Inches1162_6.material} />
        <mesh geometry={nodes.TiP_Inches1162_7.geometry} material={nodes.TiP_Inches1162_7.material} />
        <mesh geometry={nodes.TiP_Inches1162_8.geometry} material={nodes.TiP_Inches1162_8.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/fieldmodel.gltf')
