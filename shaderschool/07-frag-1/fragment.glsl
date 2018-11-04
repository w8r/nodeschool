precision highp float;

#define CIRCLE_COLOR    vec4(1.0, 0.4313, 0.3411, 1.0)
#define OUTSIDE_COLOR   vec4(0.3804, 0.7647, 1.0, 1.0)

void main() {
  vec2 origin = vec2(256.0, 256.0);
  float radius = 128.0;
  //TODO: Replace this with a function that draws a circle at (256.5,256.5) with radius 128
  if (distance(gl_FragCoord.xy, origin) < radius) {
    gl_FragColor = CIRCLE_COLOR;
  } else {
    gl_FragColor = OUTSIDE_COLOR;
  }
}
