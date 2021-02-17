let div, id;
id = 0;

for (let i = 1; i <= 16; i++) {
  id += 1;
  if (i === 1) {
    div = `<div id = ${id} class = 'buttons'> </div>`;
  } else {
    div += `<div id = ${id} class = 'buttons'> </div>`;
  }
}
document.querySelector("#divsContainer").innerHTML = div;
//generator divów
const buttons = document.querySelectorAll(".buttons");
let textPool = document.querySelector("#textPool");
const pools = [];
const buttonsTab = [1, 2, 3, "*", 4, 5, 6, "/", 7, 8, 9, "+", "Cl", 0, "=", "-"];
for (let i = 0; i <= 15; i++) {
  buttons[i].innerHTML = buttonsTab[i];
}
let number = [];
let calculations = [];
let equation = [];
let numbersOfEquation = [];
let score = "";
let equationConnectionNumbers = [];
let result = 0;
let result1 = [];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    pools.push(button);
    for (let i = 0; i <= 15; i++) {
      if (buttons[i] === pools[0]) {
        textPool.value += buttonsTab[i];
        if (typeof buttonsTab[i] === "number") {
          number.push(buttonsTab[i]);
        }
        if (typeof buttonsTab[i] === "string") {
          calculations.push(buttonsTab[i]);
        }
      }
    }
    pools.splice(0);
  });
});
//wpushowywanie znaków do divów oraz przypisanie ich

buttons[12].addEventListener("click", function clear() {
  location.reload(true);
}); //czyszczenie inputa oraz strony
buttons[3].addEventListener("click", function mnozenie() {
  equation.push(...number);
  equation.push(...calculations);
  number.splice(0);
  for (let i = 0; i <= equation.length - 1; i++) {
    if (typeof equation[i] === "number") {
      score += equation[i];
    }
  } //wpuszowywanie liczby
  let scoreInt = parseInt(score);
  equationConnectionNumbers.push(scoreInt);
  equationConnectionNumbers.push(calculations[0]);
  score = "";
  equation.splice(0);
  calculations.splice(0);
}); //funkcja mnożenia
buttons[7].addEventListener("click", function dzielenie() {
  equation.push(...number);
  equation.push(...calculations);
  number.splice(0);
  for (let i = 0; i <= equation.length - 1; i++) {
    if (typeof equation[i] === "number") {
      score += equation[i];
    }
  } //wpuszowywanie liczby
  let scoreInt = parseInt(score);
  equationConnectionNumbers.push(scoreInt);
  equationConnectionNumbers.push(calculations[0]);
  score = "";
  equation.splice(0);
  calculations.splice(0);
}); //funkcja dzielenia
buttons[11].addEventListener("click", function dodawanie() {
  equation.push(...number);
  equation.push(...calculations);
  number.splice(0);
  for (let i = 0; i <= equation.length - 1; i++) {
    if (typeof equation[i] === "number") {
      score += equation[i];
    }
  } //wpuszowywanie liczby
  let scoreInt = parseInt(score);
  equationConnectionNumbers.push(scoreInt);
  equationConnectionNumbers.push(calculations[0]);
  score = "";
  equation.splice(0);
  calculations.splice(0);
}); //funkcja dodawania

buttons[14].addEventListener("click", function rownanie() {
  equation.push(...number);
  equation.push(...calculations);
  number.splice(0);
  for (let i = 0; i <= equation.length - 1; i++) {
    if (typeof equation[i] === "number") {
      score += equation[i];
    }
  } //wpuszowywanie liczby
  let scoreInt = parseInt(score);
  equationConnectionNumbers.push(scoreInt);
  equationConnectionNumbers.push(calculations[0]);
  score = "";
  equation.splice(0);
  calculations.splice(0);
  let helper = [];
  let firstcharacter = [];
  for (let i = 0; i <= equationConnectionNumbers.length; i++) {
    if (equationConnectionNumbers[i] === "-" || equationConnectionNumbers[i] === "+") {
      if (equationConnectionNumbers[i + 2] === "*" || equationConnectionNumbers[i + 2] === "/") {
        helper = equationConnectionNumbers.splice(2, 3);
        firstcharacter = equationConnectionNumbers.splice(1, 1);
        equationConnectionNumbers.unshift(...firstcharacter);
        equationConnectionNumbers.unshift(...helper);
      }
    }
  }
  for (let i = 0; i <= equationConnectionNumbers.length; i++) {
    for (let j = 0; j <= equationConnectionNumbers.length; j++) {
      for (let z = 0; z <= equationConnectionNumbers.length; z++) {
        for (let y = 0; y <= equationConnectionNumbers.length; y++) {
          if (equationConnectionNumbers[i] === "*") {
            result = equationConnectionNumbers[i - 1] * equationConnectionNumbers[i + 1];
            result1 = equationConnectionNumbers.splice(0, 3);
            equationConnectionNumbers.unshift(result);
            break;
          }
          if (equationConnectionNumbers[i] === "/") {
            result = equationConnectionNumbers[i - 1] / equationConnectionNumbers[i + 1];
            result1 = equationConnectionNumbers.splice(0, 3);
            equationConnectionNumbers.unshift(result);
            break;
          }
          if (equationConnectionNumbers[i] === "-") {
            result = equationConnectionNumbers[i - 1] - equationConnectionNumbers[i + 1];
            result1 = equationConnectionNumbers.splice(0, 3);
            equationConnectionNumbers.unshift(result);
            break;
          }
          if (equationConnectionNumbers[i] === "+") {
            result = equationConnectionNumbers[i - 1] + equationConnectionNumbers[i + 1];
            result1 = equationConnectionNumbers.splice(0, 3);
            equationConnectionNumbers.unshift(result);
            break;
          }
          if (
            equationConnectionNumbers[i + 2] === "*" ||
            equationConnectionNumbers[i + 2] === "/" ||
            equationConnectionNumbers[i + 2] === "+" ||
            equationConnectionNumbers[i + 2] === "-"
          ) {
            equationConnectionNumbers.splice(1, 2);
            break;
          }
        }
      }
    }
  }
  if (isNaN(result)) {
    result = "Błąd!";
  }
  textPool.value = result;
}); //funkcja równanie (bardzo ważna)

buttons[15].addEventListener("click", function odejmowanie() {
  equation.push(...number);
  equation.push(...calculations);
  number.splice(0);
  for (let i = 0; i <= equation.length - 1; i++) {
    if (typeof equation[i] === "number") {
      score += equation[i];
    }
  } //wpuszowywanie liczby
  let scoreInt = parseInt(score);
  equationConnectionNumbers.push(scoreInt);
  equationConnectionNumbers.push(calculations[0]);
  score = "";
  equation.splice(0);
  calculations.splice(0);
}); //funkcja dzielenia
