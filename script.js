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
const buttons = document.querySelectorAll(".buttons");
let textPool = document.querySelector("#textPool");
const pools = [];
const buttonsTab = [1, 2, 3, "*", 4, 5, 6, "/", 7, 8, 9, "+", "Cl", 0, "=", "-"];
for (let i = 0; i <= 15; i++) {
  buttons[i].innerHTML = buttonsTab[i];
}
console.log(buttonsTab);
console.log(buttons);
let number = [];
let calculations = [];
let equation = [];
let numbersOfEquation = [];
let score = "";
let equationConnectionNumbers = [];
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
    console.log("number", number);
    console.log("calc", calculations);
    console.log(pools);
    pools.splice(0);
  });
});
buttons[12].addEventListener("click", function clear() {
  location.reload(true);
});
buttons[3].addEventListener("click", function mnozenie() {
  equation.push(...number);
  equation.push(...calculations);
  calculations.splice(0);
  number.splice(0);
  console.log("equation", equation);
  for (let i = 0; i <= equation.length - 1; i++) {
    if (typeof equation[i] === "number") {
      score += equation[i];
    }
  }
  equationConnectionNumbers.push(score);
  for (let i = 0; i <= equation.length - 1; i++) {
    if (typeof equation[i] === "string") {
      score += equation[i];
      equationConnectionNumbers.push(score[i]);
    }
  }
  console.log("ecn", equationConnectionNumbers);
  equation.splice(0);
});
buttons[7].addEventListener("click", function dzielenie() {
  console.log("num", number);
  equation.push(...number);
  equation.push(...calculations);
  calculations.splice(0);
  number.splice(0);
  console.log("equation", equation);
  for (let i = 0; i <= equation.length - 1; i++) {
    if (typeof equation[i] === "number") {
      score += equation[i];
    }
  }
  equationConnectionNumbers.push(score);
  console.log("ecn", equationConnectionNumbers);
  console.log("score", score);
});
buttons[11].addEventListener("click", function dodawanie() {
  equation.push(...number);
  equation.push(...calculations);
  calculations.splice(0);
  number.splice(0);
  console.log("equation", equation);
  for (let i = 0; i <= equation.length - 1; i++) {
    if (typeof equation[i] === "number") {
      score += equation[i];
    }
  }
  equationConnectionNumbers.push(score);
  console.log("ecn", equationConnectionNumbers);
  console.log("score", score);
});

buttons[14].addEventListener("click", function rownanie() {
  equation.push(...number);
  equation.push(...calculations);
  calculations.splice(0);
  number.splice(0);
  console.log("equation", equation);
  for (let i = 0; i <= equation.length - 1; i++) {
    if (typeof equation[i] === "number") {
      score += equation[i];
    }
  }
  equationConnectionNumbers.push(score);
  console.log("ecn", equationConnectionNumbers);
  console.log("score", score);
}); //problem tkwi w tablicy która posiada 2 wymiary

buttons[15].addEventListener("click", function odejmowanie() {
  equation.push(...number);
  equation.push(...calculations);
  calculations.splice(0);
  number.splice(0);
  console.log("equation", equation);
  for (let i = 0; i <= equation.length - 1; i++) {
    if (typeof equation[i] === "number") {
      score += equation[i];
    }
  }
  equationConnectionNumbers.push(score);
  console.log("ecn", equationConnectionNumbers);
  console.log("score", score);
});
