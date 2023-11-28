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

function f2(x, y) { // x = 10, y = 20
  console.log("F2")
  let a = x; // a = 10
  let b = y; // b = 20
  let c = f3(a, b); // c = 20
  console.log("F2 x=", x, " y=", y);
  console.log("F2 a=", a, " b=", b, " c=", c);
  return c; // 20
}

function f1(x, y) { // x = 10, y = 20
  console.log("F1")
  let a = 2 * x; // a = 20
  let b = x + y; // b = 30
  let c = f2(a, b); // c = 30
  console.log("F1 x=", x, " y=", y);
  console.log("F1 a=", a, " b=", b, " c=", c);
  return c; // 30
}

function main() { // x = 10, y = 20
  console.log("Main")
  let x = 10;
  let y = 20;
  let z = 0;
  z = f1(x, y);
  console.log("Main x=", x, " y=", y, " z=", z);
}

main();