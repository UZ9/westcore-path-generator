import * as THREE from 'three'

export const red = new THREE.MeshStandardMaterial({
    color: "hsl(0,87%,46%)",
    metalness: 0.5,
    roughness: 1,
});

export const blue = new THREE.MeshStandardMaterial({
    color: "hsl(240,87%,46%)",
    metalness: 0.5,
    roughness: 1,
});

export const lightGray = new THREE.MeshStandardMaterial({
    color: "#9f9b92",
    metalness: 0.5,
    roughness: 1,
});

export const tile = new THREE.MeshStandardMaterial({
    color: "#909090",
    metalness: 0.5,
    roughness: 1.0
})


export const gray = new THREE.MeshStandardMaterial({
    color: "#4a4c4d",
    metalness: 0.5,
    roughness: 1,
});

export const yellow = new THREE.MeshStandardMaterial({
    color: "#ffd900",
    metalness: 0.5,
    roughness: 1,
});

export const purple = new THREE.MeshStandardMaterial({
    color: "#661c9d",
    metalness: 0.5,
    roughness: 1,
});

export const platformMat = new THREE.MeshLambertMaterial({
    color: 0xededed,
    transparent: true,
    opacity: 0.4,
    wireframe: false,
    side: THREE.DoubleSide,
})

const tileGridUniforms = {
    // Resolution of the grid
    // .335 - exact resolution for 6x6 grid
    resolution: { value: .335 }
}

export const tileGrid = (fragmentShader, vertexShader) => new THREE.ShaderMaterial({
    side: THREE.FrontSide,
    uniforms: tileGridUniforms,
    fragmentShader: fragmentShader,
    vertexShader: vertexShader
})


