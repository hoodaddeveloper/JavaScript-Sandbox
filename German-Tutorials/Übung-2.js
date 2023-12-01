let score = 0; // Punktzahl
let running = true; // Variable zur Steuerung der Schleife

while (running) {
  // Zufallszahlen generieren
  const zahl1 = Math.floor(Math.random() * 10) + 1;
  const zahl2 = Math.floor(Math.random() * 10) + 1;

  // Zufälligen Operator auswählen
  const operatorNum = Math.floor(Math.random() * 5) + 1;
  let operator;

  // Operator basierend auf der zufälligen Zahl auswählen
  switch (operatorNum) {
    case 1:
      operator = "+";
      break;
    case 2:
      operator = "-";
      break;
    case 3:
      operator = "*";
      break;
    case 4:
      operator = "/";
      break;
    case 5:
      operator = "%";
      break;
    default:
      break;
  }

  // Die Frage an den Benutzer stellen
  const userAnswer = console.log(`Was ergibt: ${zahl1} ${operator} ${zahl2}?`);

  // Benutzerantwort überprüfen
  let correctAnswer;
  switch (operator) {
    case "+":
      correctAnswer = zahl1 + zahl2;
      break;
    case "-":
      correctAnswer = zahl1 - zahl2;
      break;
    case "*":
      correctAnswer = zahl1 * zahl2;
      break;
    case "/":
      correctAnswer = zahl1 / zahl2;
      break;
    case "%":
      correctAnswer = zahl1 % zahl2;
      break;
    default:
      break;
  }

  // Antwort des Benutzers überprüfen und Feedback geben
  if (parseInt(userAnswer) === correctAnswer) {
    alert("Richtig!");
    score++;
  } else {
    console.log(`Falsch! Die richtige Antwort ist: ${correctAnswer}`);
  }

  // Prüfen, ob der Benutzer fortfahren möchte
  const continuePlaying = console.log("Möchtest du noch eine Aufgabe lösen?");
  if (!continuePlaying) {
    running = false;
  }
}

// Am Ende die Punktzahl anzeigen
console.log(`Deine Punktzahl ist: ${score}`);
