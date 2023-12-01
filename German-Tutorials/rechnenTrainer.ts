import * as readlineSync from 'readline-sync';

// Stellen Sie sicher, dass Sie keine doppelten Funktionen haben.
function eingabe(message: string, datatyp: string): string | number {
  if (datatyp === "String") {
    return readlineSync.question(message);
  } else if (datatyp === "Int") {
    return parseInt(readlineSync.question(message), 10);
  } else if (datatyp === "Float") {
    return parseFloat(readlineSync.question(message));
  }
  // Fügen Sie einen Standardrückgabewert hinzu, z.B. einen leeren String oder null
  return "";
}

function plus(z1:number, z2:number) {
  console.log("was macht " + z1 + "+" + z2);
  return z1 + z2;
}

function minus(z1:number, z2:number) {
  return z1 - z2;
}

function geteilt(z1:number, z2:number) {
  return z1 / z2;
}

async function main(): Promise<void> {
  console.log("rechnenTrainer");
  /* const ziel: string = await eingabe("Wohin wollen Sie fahren? ", "String") as string; */
  let z1 = Math.floor((Math.random() * 10));
  let z2 = Math.floor((Math.random() * 10));
  let op = Math.floor((Math.random() * 5));
  /* let ergebnis1 = plus(z1, z2); */
  let ergebnis = 0;

  if (z1 < z2) {
    ergebnis = minus(z1, z2);
  } else {
    ergebnis = minus(z2, z1);
  }
}

main();