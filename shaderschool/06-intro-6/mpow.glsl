mat2 matrixPower(highp mat2 m, int n) {
  //Raise the matrix m to nth power
  highp mat2 res = mat2(1.0);

  mat2 m2 = m  * m;
  mat2 m4 = m2 * m2;
  mat2 m8 = m4 * m4;

  if(n >= 8) {
    n -= 8;
    res *= m8;
  }

  if(n >= 4) {
    n -= 4;
    res *= m4;
  }

  if(n >= 2) {
    n -= 2;
    res *= m2;
  }

  if(n >= 1) {
    res *= m;
  }

  return res;
}

//Do not change this line or the name of the above function
#pragma glslify: export(matrixPower)
