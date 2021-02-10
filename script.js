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

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    pools.push(button);
    for (let i = 0; i <= 15; i++) {
      if (buttons[i] === pools[0]) {
        textPool.value += buttonsTab[i];
      }

      if (typeof buttonsTab[i] === "number") {
        console.log(buttonsTab[i]);
      }
    }

    console.log(pools);

    pools.splice(0);
  });
});
buttons[12].addEventListener("click", function clear() {
  location.reload(true);
});
buttons[3].addEventListener("click", function mnozenie() {
  console.log("pomnóż");
});
buttons[7].addEventListener("click", function dzielenie() {
  console.log("podziel");
});
buttons[11].addEventListener("click", function dodawanie() {
  console.log("dodaj");
});
buttons[14].addEventListener("click", function rownanie() {
  console.log("porownaj");
});

buttons[15].addEventListener("click", function odejmowanie() {
  console.log("odejmij");
});
