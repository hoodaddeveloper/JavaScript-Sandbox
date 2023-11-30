console.log("Fahrkartenautomat")

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function readUserInput(message: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(message, (answer: string) => {
      resolve(answer);
      rl.close();
    });
  });
}

async function eingabe(message: string, datatyp: string) {
  const response = await readUserInput(message);
  let a;
  switch (datatyp) {
    case "String":
      a = response;
      break;
    case "Int":
      a = parseInt(response) || 0;
      break;
    case "Float":
      a = parseFloat(response) || 0.0;
      break;
  }
  return a;
}

// Dummy function, replace it with actual logic
async function berechneFahrpreis(ziel: string): Promise<number> {
  // Replace 0 with actual logic to calculate the price
  return 0;
}

async function main() {
  console.log("Fahrkarten Automat");
  const ziel: string = await eingabe("Wohin wollen Sie fahren? ", "String") as string;
  const bc: number = await eingabe("Bahncard 50, 25, 0? ", "Int") as number;

  // More functions and logic to be added here

  const preis = await berechneFahrpreis(ziel);
  console.log(`Der Preis ist: ${preis}`);
}

main();


/*
function berechneFahrpreis(ziel: string): number 

{
    let preis = 0;
    // Hier könnten Sie Logik hinzufügen, um den Preis basierend auf dem Ziel zu berechnen.
    // Ich würde hier ein switch case empfehlen die auch als Mehrfach Auswahl bekannt ist
    // switch(ziel)
    return preis;
}

function main(): void 

{
    console.log("Fahrkarten Automat");
    let ziel: string = eingabe("Wohin wollen Sie fahren?", "String") as string; // Variable für das Ziel bsp. HH
    let bc: number = eingabe("Bahncard 50, 25, 0?", "Int") as number;           // Variable (Zahl) für Bahncard: 50, 25 (alles andere ist falsch)
    let hinzu = 0;                                                              // Variable (zahl oder boolean) für Eingabe: für Hin und Rückfahrt
    let preis = 0;                                                              // Die wichtigste Variable der Preis, die an jede weiter Funktion zu schicken ist

    *******************************************************

    // Und nun sollten die Funktionen ausgearbeitet werden:

    // preis = berechneFahrpreis (ziel);                        => Hamburg(HH), Berlin(B), München(M), Saarbrücken(SB)
    // preis = hinUndRueck (preis);                             => Bitte nur aufrufen wenn hinzu=1(true) false(0),
    // preis = bahncard (preis, bd)                             => Bitte nur aufrufen wenn bc 25 oder 50
    // bezahlen (preis);                                        => In dieser Funktion wird auch durch Kunden Eingabe bezahlt => eingabe() int Methode
}
*/
main();