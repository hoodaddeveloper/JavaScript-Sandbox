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