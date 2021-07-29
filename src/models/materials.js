import * as THREE from 'three'

export const redMat = new THREE.MeshStandardMaterial({
    color: "hsl(0,87%,46%)",
    metalness: 0.5,
    roughness: 1,
});

export const blueMat = new THREE.MeshStandardMaterial({
    color: "hsl(240,87%,46%)",
    metalness: 0.5,
    roughness: 1,
});

export const lightGrayMat = new THREE.MeshStandardMaterial({
    color: "#9f9b92",
    metalness: 0.5,
    roughness: 1,
});

export const tileMat = new THREE.MeshStandardMaterial({
    color: "#909090",
    metalness: 0.5,
    roughness: 1.0
})


export const grayMat = new THREE.MeshStandardMaterial({
    color: "#4a4c4d",
    metalness: 0.5,
    roughness: 1,
});

export const yellowMat = new THREE.MeshStandardMaterial({
    color: "#ffd900",
    metalness: 0.5,
    roughness: 1,
});

export const purpleMat = new THREE.MeshStandardMaterial({
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

export const transparentMat = new THREE.MeshLambertMaterial({
    color: 0x000000,
    transparent: true,
    opacity: 0.2,
    wireframe: false,
    side: THREE.DoubleSide,
    vertexColors: true,
})

const tileGridUniforms = {
    // Resolution of the grid
    // .335 - exact resolution for 6x6 grid
    resolution: { value: .335 }
}

export const shadowMat = new THREE.MeshStandardMaterial({
    color: "hsl(0,0%,85%)",
    metalness: 0.5,
    roughness: 1,
});


export const tileGridMat = (fragmentShader, vertexShader) => new THREE.ShaderMaterial({
    side: THREE.FrontSide,
    uniforms: tileGridUniforms,
    fragmentShader: fragmentShader,
    vertexShader: vertexShader
})


