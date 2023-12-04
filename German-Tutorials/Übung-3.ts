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

/////////////////////////////////////////////////////////////////////////////////////////////

function f2(a: number, b: number): number {
  return a + b;
}

function f1(a: number, b: string): number {
  // Hier sollte das Ergebnis von f2 zurückgegeben werden
  return f2(a, parseInt(b, 10)); // Die Zeichenkette 'b' muss in eine Zahl umgewandelt werden
}

function main(): void {
  let x: number = 10;
  let y: number = 20;

  // Die Variable z muss innerhalb der main-Funktion deklariert werden
  let z: number = f1(x, y.toString());
  console.log("Ergebnis von f1(x, y):", z);

  let result = f1(y, "30");
  console.log("Ergebnis von f1(y, 30):", result);
}

// main-Funktion aufrufen, um den Code auszuführen
main();

/* Probleme:

1. Die Funktion f1 gibt keinen Wert zurück und hat keinen return-Ausdruck.

2. In der Funktion f1 wird f2(a, b); aufgerufen, aber das Ergebnis wird nicht zurückgegeben. 

3. Die Variable z, die in der main-Funktion deklariert wird, wird außerhalb
ihres Gültigkeitsbereichs verwendet. Sie ist nur innerhalb der main-Funktion sichtbar,
deshalb wird ein Fehler auftreten, wenn ich versuche, auf sie außerhalb dieser Funktion zuzugreifen. */