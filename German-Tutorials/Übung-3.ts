let x: number = 0;

for (let i: number = 0; i < 5; i++) {
  for (let j: number = 0; j < i; j++) {
    switch (i + j - 1) {
      case -1:
      case 0:
        x += 1;
        break;
      case 1:
      case 2:
      case 3:
        x += 2;
        break;
      default:
        x += 3;
    }
    console.log("x = ", x);
  }
}
console.log("Ende x = ", x);

////////////////////////////

function f2(a: number, b: number): number {
  return a + b;
}

function f1(a: number, b: string): number {
  f2(a, b);
}

function main(): void {
  let x: number = 10;
  let y: number = 20;
  let z: number = f1(x, y);
}

console.log("Ergebnis von f1(x, y):", z);

let result = f1(y, "30");
console.log("Ergebnis von f1(y, 30):", result)