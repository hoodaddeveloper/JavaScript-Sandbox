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

function fahrpreis(ziel: string): number {
  let preis = 0;
  switch (ziel) {
    case "Hamburg":
    case "hamburg":
      preis = 125
      break;
    case "Köln":
    case "köln":
      preis = 50
      break;
    case "Berlin":
    case "berlin":
      preis = 151
      break;
    case "München":
    case "münchen":
      preis = 173
      break;
    case "Ulm":
    case "ulm":
      preis = 125
      break;
    default:
      break;
  }
  return preis;
}

function HinUndRueck(preis: number): number {
  return preis * 2;
}

function BerechneBahncard(preis: number, bc: number): any {
  if (bc == 50) {
    return preis / 2;
  }
  else if (bc == 25) {
    return preis * 0.75;
  }
}

async function bezahlen(preis: number) {
  console.log("Sie müssen " + preis + " Euro bezahlen.");
  const bezahlt: number = await eingabe("Bitte bezahlen Sie ", "Float") as number;

  if (preis == bezahlt) {
    console.log("Hier Ihre Fahrkarte")
  }
  else if (preis < bezahlt) {
    console.log("Hier Ihr Restgeld und die Fahrkarte")
  }
  else if (preis > bezahlt) {
    bezahlen(preis - bezahlt);
  }
}

async function main(): Promise<void> {
  console.log("Fahrkarten Automat");
  const ziel: string = await eingabe("Wohin wollen Sie fahren? ", "String") as string;
  const bc: number = await eingabe("Bahncard 50, 25, 0? ", "Int") as number;
  const ruek: string = await eingabe("Moechten Sie zurueckfahren?", "String") as string;
  let preis = fahrpreis(ziel);

  if (ruek == "Ja" || ruek == "ja") {
    preis = HinUndRueck(preis);
  }
  if (bc == 25 || bc == 50) {
     preis = BerechneBahncard(preis, bc);
  }
  bezahlen(preis);
}

main();

/// /// /// /// /// START des PROGRAMMS /// /// /// /// ///

// Das Programm Fahrkarten Automat die einen Fahrkartenautomat simuliert
 
// Message ist "Wohin wollen Sie fahren? " oder "Bahncard 50, 25, 0? ".
// Eingabe aller werte: Ziel (Eingabe der Stadt), Hin und zurück (Eingabe als 1:0, True:False, ja:nein, Bahncard (Eingabe 25, 50, 0).
// Fahrpreise nach Ziel findet man in bahn.de.
// Ziele sind Berlin, Hamburg, München, Ulm, Köln von deinem Heimatort aus.
// Erst wird die Funktion berechneFahrpreis(ziel) aufgerufen.
// HinUndRueck(preis) => wenn man hin und zurück mit ja oder true preis * 2.
// BerechneBahncard(preis, bc) => Wenn man Bahncard 50 oder 25 eingegeben hat.
// bezahlen(preis) => hier bitte die function eingabe(message, datatyp) zum zahlen verwenden.