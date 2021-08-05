export const gridTileVertex = String.raw`
attribute vec3 in_Position;
varying vec2 fragCoord;
varying vec2 vUv; 
void main()
{
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0 );
    gl_Position = projectionMatrix * mvPosition;
    fragCoord = position.xy;
}`;

export const gridTileFragment = String.raw`
precision highp float;
precision highp int;
uniform float resolution;
varying vec2 vUv;
float smoothgrid(float spacing, float thickness, float alpha, vec2 position)
{
  vec2 posrep = mod(position, vec2(spacing)) - .5 * thickness;
  vec2 lines = alpha * max(vec2(0.0), min(thickness + posrep, thickness - posrep) / thickness);
  return max(lines.x, lines.y);
}
void main()
{
  vec2 uv = (vUv.xy) / resolution;
  vec3 blue = vec3(0.34, 0.34, 0.34);
  vec2 spacing = vec2(.496, 0.248);
  vec2 thickness = vec2(0.01, 0.015);
  vec2 alpha = vec2(0.9, 0.5);
  float thick_lines = smoothgrid(spacing.s, thickness.s, alpha.s, uv);
  float thin_lines = smoothgrid(spacing.t, thickness.t, alpha.t, uv);
  float erasure = 0.1;
  vec4 background = vec4(0);
  vec3 paper = max(blue, 0.35 * length(background.rgb));
  vec3 color = vec3(max(paper, sqrt(erasure * background.b + (1. - erasure)) * max(thick_lines, thin_lines)));
  gl_FragColor = vec4(color, 1.0);
}    
`;