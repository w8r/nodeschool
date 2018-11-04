precision highp float;

uniform float theta;

attribute vec2 position;

mat2 rotate2d (float angle) {
  return mat2(cos(angle), -sin(angle),
              sin(angle),  cos(angle));
}

void main () {
  gl_Position = vec4(position * rotate2d(theta), 0, 1.0);
}
