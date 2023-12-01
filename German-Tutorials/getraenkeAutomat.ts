import * as readlineSync from 'readline-sync';

function eingabe(message: string, datatyp: string): string | number {
  if (datatyp === "String") {
    return readlineSync.question(message);
  } else if (datatyp === "Int") {
    return parseInt(readlineSync.question(message), 10);
  } else if (datatyp === "Float") {
    return parseFloat(readlineSync.question(message));
  }
  return "";
}

function getraenkePreis(wahre: string): any {
  let preis = 0;
  switch (wahre) {
    case "Cola":
    case "cola":
      preis = 2.50
      break;
    case "Durstloescher":
    case "durstloescher":
      preis = 2
      break;
    case "Fanta":
    case "fanta":
      preis = 2.25
      break;
    case "Orangensaft":
    case "orangensaft":
      preis = 3
      break;
    case "Apfelschorle":
    case "apfelschorle":
      preis = 1.50
      break;
    default:
      break;
  }
  return preis;
}

function doppelangebot(preis: number): number {
  return preis * 1.5;
}

function BerechneDasGeld(preis: number, muenze: number): any {
  if (muenze == 2) {
    return preis / 2;
  }
  else if (muenze == 1) {
    return preis * 0.75;
  }
}

async function bezahlen(preis: number) {
  console.log("Sie müssen " + preis + " Euro bezahlen.");
  const bezahlt: number = await eingabe("Bitte bezahlen Sie ", "Float") as number;

  if (preis == bezahlt) {
    console.log("Holen Sie sich Ihr Getränk!")
  }
  else if (preis < bezahlt) {
    console.log("Holen Sie sich Ihr Restgeld und Ihr Getränk!")
  }
  else if (preis > bezahlt) {
    bezahlen(preis - bezahlt);
  }
}

async function main(): Promise<void> {
  console.log("Fahrkarten Automat");
  const wahre: string = await eingabe("Was moechten Sie? ", "String") as string;
  const muenze: number = await eingabe("Muenze 1, 2, 0? ", "Int") as number;
  const angebot: string = await eingabe("Moechten Sie 2 Getraenke kaufen und das Angebot benutzen?", "String") as string;
  let preis = getraenkePreis(wahre);

  if (angebot == "Ja" || angebot == "ja") {
    preis = doppelangebot(preis);
  }
  if (muenze == 25 || muenze == 50) {
    preis = BerechneDasGeld(preis, muenze);
  }
  bezahlen(preis);
}

main();