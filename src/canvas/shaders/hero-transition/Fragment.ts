export default `
uniform sampler2D uTexture1;
uniform sampler2D uTexture2;
uniform sampler2D uDisplace;
uniform float uProgress;

varying vec2 vUv;

mat2 getRotM(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

void main() {

  vec4 disp = texture2D(uDisplace, vUv);

  vec2 myUV = (vUv - vec2(0.5)) + vec2(0.5);

  vec2 distortedPosition1 = myUV + getRotM(45.0) * disp.xy * 1.0 * uProgress;
  vec2 distortedPosition2 = myUV + getRotM(-135.0) * disp.xy * 1.0 * (1.0 - uProgress);

  vec4 textureColorA = texture2D(uTexture1, distortedPosition1);
  vec4 textureColorB = texture2D(uTexture2, distortedPosition2);

  gl_FragColor = mix(textureColorA, textureColorB, uProgress);

}
`
