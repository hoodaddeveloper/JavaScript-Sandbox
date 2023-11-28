function f3(x, y) { // x = 10, y = 20
  console.log("F3")
  let a = y - 1; // 19
  let b = x + 1; // 11
  let c = a + b; // 30
  x = x + y; // 30
  y = y - x; // -10
  console.log("F3 x=", x, " y=", y);
  console.log("F3 a=", a, " b=", b, " c=", c);
  return x + y; // 30 + -10 = 20
}

function f2(x, y) {
  console.log("F2")
  let a = x;
  let b = y;
  let c = f3(a, b);
  console.log("F2 x=", x, " y=", y);
  console.log("F2 a=", a, " b=", b, " c=", c);
  return c;
}

function f1(x, y) {
  console.log("F1")
  let a = 2 * x;
  let b = x + y;
  let c = f2(a, b);
  console.log("F1 x=", x, " y=", y);
  console.log("F1 a=", a, " b=", b, " c=", c);
  return c;
}

function main() {
  console.log("Main")
  let x = 10;
  let y = 20;
  let z = 0;
  z = f1(x, y);
  console.log("Main x=", x, " y=", y, " z=", z);
}

main();