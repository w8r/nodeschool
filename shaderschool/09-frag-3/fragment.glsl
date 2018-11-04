precision highp float;

uniform sampler2D texture;
uniform vec2 screenSize;

void main() {
  vec2 coord = gl_FragCoord.xy / screenSize;

  //TODO: Swap red and blue color channels of image
  vec4 pixel = texture2D(texture, coord);
  float comp = pixel[2];
  pixel[2]   = pixel[0];
  pixel[0]   = comp;
  gl_FragColor = pixel;
}
