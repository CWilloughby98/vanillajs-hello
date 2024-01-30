/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Añadimos un botón para obtener combinaciones de frases
let button = document.getElementById("button");
button.onclick = function buttonFunc() {
  getRandomExcuse();
};
// button.addEventListener("click", getRandomExcuse); // PREGUNTA!!!: Es addEventListener mejor??

function getRandomExcuse() {
  // write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  // Código reutilizable que puede adaptarse a cambios en los arrays
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;

  //Seleccionamos el elemento <p> excusa del HTML y lo modificamos
  document.getElementById("excuse").innerHTML = excuse;

  //console.log(excuse);
}
// Moví en onload abajo para que no me diera problemas con el botón
window.onload = getRandomExcuse;
