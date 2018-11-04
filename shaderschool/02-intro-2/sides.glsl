void sideLengths(
  highp float hypotenuse,
  highp float angleInDegrees,
  out highp float opposite,
  out highp float adjacent) {
  mediump float theta = radians(angleInDegrees);
  opposite = sin(theta) * hypotenuse;
  adjacent = cos(theta) * hypotenuse;
}

//Do not change this line
#pragma glslify: export(sideLengths)
