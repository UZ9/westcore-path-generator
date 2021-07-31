import { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { shadowMat, blueMat, grayMat, lightGrayMat, platformMat, purpleMat, redMat, tileMat, yellowMat, transparentMat } from './materials';


export default function Model(props) {

  const tileMesh = useRef(null);

  const onFieldTileClick = (clicked) => {
    clicked.stopPropagation();

    props.ui({name: "Waypoint", position: clicked.point});
  }

  const group = useRef()
  const { nodes } = useGLTF(process.env.PUBLIC_URL + '/fieldmodel.gltf')

  const lexanWallPanels = [
    nodes.Perimeter_Lexan_Wall_Panel000,
    nodes.Perimeter_Lexan_Wall_Panel001,
    nodes.Perimeter_Lexan_Wall_Panel002,
    nodes.Perimeter_Lexan_Wall_Panel003,
    nodes.Perimeter_Lexan_Wall_Panel004,
    nodes.Perimeter_Lexan_Wall_Panel005,
    nodes.Perimeter_Lexan_Wall_Panel006,
    nodes.Perimeter_Lexan_Wall_Panel007,
    nodes.Perimeter_Lexan_Wall_Panel008,
    nodes.Perimeter_Lexan_Wall_Panel009,
    nodes.Perimeter_Lexan_Wall_Panel010,
    nodes.Perimeter_Lexan_Wall_Panel011
  ]

  // Because GLTF imports a non-transparent material, replace it with our own
  lexanWallPanels.forEach((tile) => {
    tile.material = transparentMat
  })

  useEffect(() => {
    // The UIManager needs to have a reference to the tile model
    if (props.tiles === null && tileMesh.current !== null) {
      props.setTiles(tileMesh);
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI]}>
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform159.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform159_1.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform159_2.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform159_3.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform159_4.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform159_5.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform159_6.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform159_7.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform159_8.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform159_9.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform159_10.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform159_11.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform159_12.geometry} material={grayMat} />
        <group position={[-58.48, 2.5, -7.19]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh castShadow receiveShadow
            geometry={nodes.Platform_Pivot_Bar001.geometry}
            material={grayMat}
            position={[58.48, -7.19, -2.5]}
            rotation={[Math.PI / 2, 0, 0]}>
            <group position={[-58.48, -2.5, -7.19]} rotation={[-1.96, 0, 0]}>
              <group position={[58.48, -7.6, -0.37]} rotation={[1.95, 0, 0]}>
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform161.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform161_1.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform161_2.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform161_3.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform161_4.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform161_5.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform161_6.geometry} material={blueMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform161_7.geometry} material={blueMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform161_8.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform161_9.geometry} material={lightGrayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform161_10.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform161_11.geometry} material={platformMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform161_12.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform161_13.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform161_14.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform161_15.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform161_16.geometry} material={grayMat} />
              </group>
            </group>
          </mesh>
        </group>
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform_1.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform_2.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform_3.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform_4.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform_5.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform_6.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform_7.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform_8.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform_9.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform_10.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform_11.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.RedPlatform_12.geometry} material={grayMat} />
        <group position={[-58.48, 2.5, -7.19]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh castShadow receiveShadow
            geometry={nodes.Platform_Pivot_Bar.geometry}
            material={grayMat}
            position={[58.48, -7.19, -2.5]}
            rotation={[Math.PI / 2, 0, 0]}>
            <group position={[-58.48, -2.5, -7.19]} rotation={[-1.96, 0, 0]}>
              <group position={[58.48, -7.6, -0.37]} rotation={[1.95, 0, 0]}>
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform125.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform125_1.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform125_2.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform125_3.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform125_4.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform125_5.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform125_6.geometry} material={redMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform125_7.geometry} material={redMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform125_8.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform125_9.geometry} material={lightGrayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform125_10.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform125_11.geometry} material={platformMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform125_12.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform125_13.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform125_14.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform125_15.geometry} material={grayMat} />
                <mesh castShadow receiveShadow geometry={nodes.RedPlatform125_16.geometry} material={grayMat} />
              </group>
            </group>
          </mesh>
        </group>
      </group>
      <mesh
        geometry={nodes.Field_Tape_Blue.geometry}
        material={blueMat}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Field_Tape_Red.geometry}
        material={redMat}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh castShadow receiveShadow
        rotation={[Math.PI / 2, 0, 0]}
        onClick={onFieldTileClick}
        ref={tileMesh}
        position={[0, -0.5, 0]}
        material={tileMat}
      >
        <boxGeometry attach="geometry" args={[143, 143, 1]} />
      </mesh>

      <mesh castShadow receiveShadow
        geometry={nodes.Perimeter_Lexan_Wall_Panel000.geometry}
        position={[46.84, 5.75, -70.47]}
        material={transparentMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Perimeter_Lexan_Wall_Panel001.geometry}
        position={[0, 5.75, -70.47]}
        material={transparentMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Perimeter_Lexan_Wall_Panel002.geometry}
        position={[-46.84, 5.75, -70.47]}
        material={transparentMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Perimeter_Lexan_Wall_Panel003.geometry}
        position={[70.47, 5.75, 46.84]}
        material={transparentMat}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Perimeter_Lexan_Wall_Panel004.geometry}
        position={[70.47, 5.75, 0]}
        material={transparentMat}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Perimeter_Lexan_Wall_Panel005.geometry}
        position={[70.47, 5.75, -46.84]}
        material={transparentMat}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Perimeter_Lexan_Wall_Panel006.geometry}
        position={[-46.84, 5.75, 70.47]}
        material={transparentMat}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Perimeter_Lexan_Wall_Panel007.geometry}
        position={[0, 5.75, 70.47]}
        material={transparentMat}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Perimeter_Lexan_Wall_Panel008.geometry}
        position={[46.84, 5.75, 70.47]}
        material={transparentMat}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Perimeter_Lexan_Wall_Panel009.geometry}
        material={transparentMat}
        position={[-70.47, 5.75, -46.84]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Perimeter_Lexan_Wall_Panel010.geometry}
        material={transparentMat}
        position={[-70.47, 5.75, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Perimeter_Lexan_Wall_Panel011.geometry}
        material={transparentMat}
        position={[-70.47, 5.75, 46.84]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Bracket000'].geometry}
        material={grayMat}
        position={[69.56, 11.55, -69.56]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Bracket001'].geometry}
        material={grayMat}
        position={[69.56, 11.55, 69.57]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Bracket002'].geometry}
        material={grayMat}
        position={[-69.56, 11.55, 69.56]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Bracket003'].geometry}
        material={grayMat}
        position={[-69.56, 11.55, -69.57]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Gusset000'].geometry}
        material={grayMat}
        position={[70.55, 5.75, -70.55]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Gusset001'].geometry}
        material={grayMat}
        position={[70.55, 5.75, 70.56]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Gusset002'].geometry}
        material={grayMat}
        position={[-70.55, 5.75, 70.55]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Corner_Gusset003'].geometry}
        material={grayMat}
        position={[-70.55, 5.75, -70.56]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Gusset000'].geometry}
        material={grayMat}
        position={[23.42, 11.42, -70.92]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Gusset002'].geometry}
        material={grayMat}
        position={[-23.42, 11.42, -70.92]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Gusset004'].geometry}
        material={grayMat}
        position={[70.92, 11.42, 23.43]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Gusset006'].geometry}
        material={grayMat}
        position={[70.92, 11.42, -23.42]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Gusset008'].geometry}
        material={grayMat}
        position={[-23.42, 11.42, 70.92]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Gusset010'].geometry}
        material={grayMat}
        position={[23.42, 11.42, 70.92]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Gusset012'].geometry}
        material={grayMat}
        position={[-70.92, 11.42, -23.43]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Gusset014'].geometry}
        material={grayMat}
        position={[-70.92, 11.42, 23.42]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Gusset001'].geometry}
        material={grayMat}
        position={[23.42, 0.08, -70.92]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Gusset003'].geometry}
        material={grayMat}
        position={[-23.42, 0.08, -70.92]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Gusset005'].geometry}
        material={grayMat}
        position={[70.92, 0.08, 23.43]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Gusset007'].geometry}
        material={grayMat}
        position={[70.92, 0.08, -23.42]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Gusset009'].geometry}
        material={grayMat}
        position={[-23.42, 0.08, 70.92]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Gusset011'].geometry}
        material={grayMat}
        position={[23.42, 0.08, 70.92]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Gusset013'].geometry}
        material={grayMat}
        position={[-70.92, 0.08, -23.43]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Gusset015'].geometry}
        material={grayMat}
        position={[-70.92, 0.08, 23.42]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component000'].geometry}
        material={grayMat}
        position={[46.84, 10.55, -70.47]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component001'].geometry}
        material={grayMat}
        position={[46.84, 0.95, -70.47]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component002'].geometry}
        material={grayMat}
        position={[0, 10.55, -70.47]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component003'].geometry}
        material={grayMat}
        position={[0, 0.95, -70.47]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component004'].geometry}
        material={grayMat}
        position={[-46.84, 10.55, -70.47]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component005'].geometry}
        material={grayMat}
        position={[-46.84, 0.95, -70.47]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component006'].geometry}
        material={grayMat}
        position={[70.47, 10.55, 46.84]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component007'].geometry}
        material={grayMat}
        position={[70.47, 0.95, 46.84]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component008'].geometry}
        material={grayMat}
        position={[70.47, 10.55, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component009'].geometry}
        material={grayMat}
        position={[70.47, 0.95, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component010'].geometry}
        material={grayMat}
        position={[70.47, 10.55, -46.84]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component011'].geometry}
        material={grayMat}
        position={[70.47, 0.95, -46.84]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component012'].geometry}
        material={grayMat}
        position={[-46.84, 10.55, 70.47]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component013'].geometry}
        material={grayMat}
        position={[-46.84, 0.95, 70.47]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component014'].geometry}
        material={grayMat}
        position={[0, 10.55, 70.47]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component015'].geometry}
        material={grayMat}
        position={[0, 0.95, 70.47]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component016'].geometry}
        material={grayMat}
        position={[46.84, 10.55, 70.47]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component017'].geometry}
        material={grayMat}
        position={[46.84, 0.95, 70.47]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component018'].geometry}
        material={grayMat}
        position={[-70.47, 10.55, -46.84]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component019'].geometry}
        material={grayMat}
        position={[-70.47, 0.95, -46.84]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component020'].geometry}
        material={grayMat}
        position={[-70.47, 10.55, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component021'].geometry}
        material={grayMat}
        position={[-70.47, 0.95, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component022'].geometry}
        material={grayMat}
        position={[-70.47, 10.55, 46.84]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Horizantal_Component023'].geometry}
        material={grayMat}
        position={[-70.47, 0.95, 46.84]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component000'].geometry}
        material={grayMat}
        position={[24.35, 5.75, -70.51]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component001'].geometry}
        material={grayMat}
        position={[69.33, 5.75, -70.51]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component002'].geometry}
        material={grayMat}
        position={[-24.35, 5.75, 70.51]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component003'].geometry}
        material={grayMat}
        position={[-22.49, 5.75, -70.51]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component004'].geometry}
        material={grayMat}
        position={[22.49, 5.75, -70.51]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component005'].geometry}
        material={grayMat}
        position={[-69.33, 5.75, -70.51]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component006'].geometry}
        material={grayMat}
        position={[-24.36, 5.75, -70.51]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component007'].geometry}
        material={grayMat}
        position={[70.51, 5.75, 24.36]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component008'].geometry}
        material={grayMat}
        position={[70.51, 5.75, 69.33]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component009'].geometry}
        material={grayMat}
        position={[70.51, 5.75, -22.48]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component010'].geometry}
        material={grayMat}
        position={[70.51, 5.75, 22.49]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component011'].geometry}
        material={grayMat}
        position={[70.51, 5.75, -69.33]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component012'].geometry}
        material={grayMat}
        position={[70.51, 5.75, -24.35]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component013'].geometry}
        material={grayMat}
        position={[-69.33, 5.75, 70.51]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component014'].geometry}
        material={grayMat}
        position={[22.49, 5.75, 70.51]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component015'].geometry}
        material={grayMat}
        position={[-22.49, 5.75, 70.51]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component016'].geometry}
        material={grayMat}
        position={[69.33, 5.75, 70.51]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component017'].geometry}
        material={grayMat}
        position={[24.36, 5.75, 70.51]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component018'].geometry}
        material={grayMat}
        position={[-70.51, 5.75, -24.36]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component019'].geometry}
        material={grayMat}
        position={[-70.51, 5.75, -69.33]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component020'].geometry}
        material={grayMat}
        position={[-70.51, 5.75, 22.48]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component021'].geometry}
        material={grayMat}
        position={[-70.51, 5.75, -22.49]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component022'].geometry}
        material={grayMat}
        position={[-70.51, 5.75, 69.33]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes['Perimeter_Sheet-Metal_Vertical_Component023'].geometry}
        material={grayMat}
        position={[-70.51, 5.75, 24.35]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.TiP_Lines_1.geometry} material={shadowMat} />
        <mesh geometry={nodes.TiP_Lines_2.geometry} material={shadowMat} />
      </group>
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Element.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements319.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements321.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements323.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements325.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements327.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements329.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements331.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements333.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements335.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements337.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements339.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements341.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements343.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements345.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements347.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements349.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements351.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements353.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements355.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements357.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements359.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements361.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements363.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements365.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements367.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements369.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements371.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements373.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements375.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements377.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements379.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements381.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements383.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements385.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements387.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements389.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements391.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements393.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements395.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements397.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.Tipping_Point_Game_Elements399.geometry}
        material={purpleMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1274.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1274_1.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1274_2.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1274_3.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1274_4.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1274_5.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1274_6.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1274_7.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1274_8.geometry} material={blueMat} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1275.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1275_1.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1275_2.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1275_3.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1275_4.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1275_5.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1275_6.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1275_7.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1275_8.geometry} material={blueMat} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1273.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1273_1.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1273_2.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1273_3.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1273_4.geometry} material={yellowMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1273_5.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1273_6.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1273_7.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1273_8.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1273_9.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1273_10.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1273_11.geometry} material={grayMat} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1098.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1098_1.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1098_2.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1098_3.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1098_4.geometry} material={yellowMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1098_5.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1098_6.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1098_7.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1098_8.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1098_9.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1098_10.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1098_11.geometry} material={grayMat} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1238.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1238_1.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1238_2.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1238_3.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1238_4.geometry} material={yellowMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1238_5.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1238_6.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1238_7.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1238_8.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1238_9.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1238_10.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1238_11.geometry} material={grayMat} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1194.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1194_1.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1194_2.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1194_3.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1194_4.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1194_5.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1194_6.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1194_7.geometry} material={redMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1194_8.geometry} material={grayMat} />
      </group>
      <group name="" rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1162.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1162_1.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1162_2.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1162_3.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1162_4.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1162_5.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1162_6.geometry} material={grayMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1162_7.geometry} material={redMat} />
        <mesh castShadow receiveShadow geometry={nodes.TiP_Inches1162_8.geometry} material={grayMat} />
      </group>
    </group>
  )
}

useGLTF.preload(process.env.PUBLIC_URL + '/fieldmodel.gltf')
