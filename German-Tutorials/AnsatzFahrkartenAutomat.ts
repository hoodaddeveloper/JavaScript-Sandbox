import * as readlineSync from 'readline-sync';

// Dummy function, replace it with actual logic
async function berechneFahrpreis(ziel: string): Promise<number> {
  // Replace 0 with actual logic to calculate the price
  return 0;
}

function eingabe(message: string, datatyp: string): string | number {
  if (datatyp === "String") {
      return readlineSync.question(message);
  } else if (datatyp === "Int") {
      return parseInt(readlineSync.question(message), 10);
  } else if (datatyp === "Float") {
      return parseFloat(readlineSync.question(message));
  }
}

async function main(): Promise<void> {
  console.log("Fahrkarten Automat");
  const ziel: string = eingabe("Wohin wollen Sie fahren? ", "String") as string;
  const bc: number = eingabe("Bahncard 50, 25, 0? ", "Int") as number;

  const preis = await berechneFahrpreis(ziel);
  console.log(`Der Preis ist: ${preis}`);
}

main();

/*
function berechneFahrpreis (ziel: string): number 

{
  let preis = 0;
  // Hier könnten Sie Logik hinzufügen, um den Preis basierend auf dem Ziel zu berechnen.
  // Ich würde hier ein switch case empfehlen die auch als Mehrfach Auswahl bekannt ist
  // switch (ziel)
  return preis;
}

function main(): void 

{
  console.log ("Fahrkarten Automat");
  let ziel: string = eingabe("Wohin wollen Sie fahren?", "String") as string; // Variable für das Ziel bsp. HH
  let bc: number = eingabe("Bahncard 50, 25, 0?", "Int") as number;           // Variable (Zahl) für Bahncard: 50, 25 (alles andere ist falsch)
  let hinzu = 0;                                                              // Variable (zahl oder boolean) für Eingabe: für Hin und Rückfahrt
  let preis = 0;                                                              // Die wichtigste Variable der Preis, die an jede weiter Funktion zu schicken ist

  *******************************************************

  // Und nun sollten die Funktionen ausgearbeitet werden:

  // preis = berechneFahrpreis (ziel);                        => Hamburg (HH), Berlin (B), München (M), Saarbrücken (SB)
  // preis = hinUndRueck (preis);                             => Bitte nur aufrufen wenn hinzu=1 (true) false (0),
  // preis = bahncard (preis, bd)                             => Bitte nur aufrufen wenn bc 25 oder 50
  // bezahlen (preis);                                        => In dieser Funktion wird auch durch Kunden Eingabe bezahlt => eingabe() int Methode
}
*/

main();