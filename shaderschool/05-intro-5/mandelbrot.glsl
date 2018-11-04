bool mandelbrot(highp vec2 c) {
  vec2 z = vec2(0.0);
  for(int i = 0; i <= 100; i++) {
    z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
  }
  return length(z) < 2.0;
}


//Do not change this line or the name of the above function
#pragma glslify: export(mandelbrot)
