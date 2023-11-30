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

async function main(): Promise<void> {
    console.log("Fahrkarten Automat");
    const ziel: string = await eingabe("Wohin wollen Sie fahren? ", "String") as string;
    const bc: number = await eingabe("Bahncard 50, 25, 0? ", "Int") as number;

    // Weitere Logik...
}

main();