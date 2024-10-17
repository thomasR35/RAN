/**************************************************************/
/*                        Consignes                           */
/**************************************************************/
/*

L'objectif de cet exercice est de pratiquer les événements JS
sur les éléments HTML, ainsi que les fonctions.

Il s'agit de plusieurs petits exercices indépendants.
Pour chacun d'eux, il est attendu d'implémenter le code selon
une méthode permettant d'avoir un code lisible et compréhensible.

1. Dans la partie "Main Program",
on y trouve uniquement les points d'entrée de chaque exercice.
Un point d'entrée est le point de départ de toute procédure de traitement.
Dans ces exercices, il d'agira des événements sur des éléments HTML.

Exemple :
document.querySelector('.js-damier').addEventListener('click', onDamierClick);

2. Dans la partie "Event listeners", on trouvera les fonctions qui seront
appelées lorsque l'utilisateur effectuera des actions sur les éléments HTML.
Ces fonctions contiendront l'algorithme de traitement de l'événement.

Exemple :
function onDamierClick() {
  clearCheckboard();
  createDamier();
}

3. Dans la partie "Fonctions", on trouvera les fonctions qui seront utilisées
pour le traitement des événements. Elles seront appelées par
les "Event listeners".

Exemple :
function clearCheckboard() {
  ...
}
function createDamier() {
  ...
}

*/
/**************************************************************/
/*                         Données                            */
/**************************************************************/

// Les variables globales sont déclarées ici.
// Uniquement si nécéssaire.
let bobbyVisible = false;
let bobbyPosition = { top: 0, left: 0 };
const gridSize = 48;
const maxPosition = 7 * gridSize;
/**************************************************************/
/*                        Fonctions                           */
/**************************************************************/

// Les fonctions (appelées par les Event Listener) sont déclarées ici.
function createDamier() {
  const cells = document.querySelectorAll(".js-cell");
  cells.forEach((cell, index) => {
    cell.classList.remove(
      "disco-color1",
      "disco-color2",
      "disco-color3",
      "disco-color4",
      "disco-color5"
    );
    if (index % 2 === Math.floor(index / 8) % 2) {
      cell.classList.add("black");
    } else {
      cell.classList.remove("black");
    }
  });
}
function createDisco() {
  const cells = document.querySelectorAll(".js-cell");
  cells.forEach((cell) => {
    const randomColor = `disco-color${Math.floor(Math.random() * 5) + 1}`;
    cell.classList.remove(
      "black",
      "disco-color1",
      "disco-color2",
      "disco-color3",
      "disco-color4",
      "disco-color5"
    );
    cell.classList.add(randomColor);
  });
}
function displayLabyrinth() {
  const labyrinthPattern = [
    [1, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ];

  const cells = document.querySelectorAll(".js-cell");
  cells.forEach((cell, index) => {
    const row = Math.floor(index / 8);
    const col = index % 8;
    cell.classList.remove(
      "disco-color1",
      "disco-color2",
      "disco-color3",
      "disco-color4",
      "disco-color5"
    );
    if (labyrinthPattern[row][col] === 1) {
      cell.classList.add("black");
    } else {
      cell.classList.remove("black");
    }
  });
}
function clearCellClasses() {
  const cells = document.querySelectorAll(".js-cell");
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("push", "pull", "boom");
  });
}
document.querySelectorAll(".js-cell").forEach((cell) => {
  cell.addEventListener("mousedown", () => {
    cell.classList.add("push");
    cell.classList.remove("pull", "boom");
    cell.textContent = "push";
  });

  cell.addEventListener("mouseup", () => {
    cell.classList.add("pull");
    cell.classList.remove("push", "boom");
    cell.textContent = "pull";
  });

  cell.addEventListener("dblclick", () => {
    cell.classList.add("boom");
    cell.classList.remove("push", "pull");
    cell.textContent = "boom";
  });
});
function moveBobby(event) {
  const bobby = document.getElementById("bobby");
  if (!bobbyVisible) {
    bobby.style.visibility = "visible";
    bobbyVisible = true;
    return;
  }
  if (event.key === "ArrowUp") {
    bobbyPosition.top = Math.max(bobbyPosition.top - gridSize, 0);
  } else if (event.key === "ArrowDown") {
    bobbyPosition.top = Math.min(bobbyPosition.top + gridSize, maxPosition);
  } else if (event.key === "ArrowLeft") {
    bobbyPosition.left = Math.max(bobbyPosition.left - gridSize, 0);
  } else if (event.key === "ArrowRight") {
    bobbyPosition.left = Math.min(bobbyPosition.left + gridSize, maxPosition);
  }
  bobby.style.top = `${bobbyPosition.top}px`;
  bobby.style.left = `${bobbyPosition.left}px`;
}
function moveCat() {
  const cat = document.getElementById("cat");
  const cells = document.querySelectorAll(".js-cell");
  const randomCell = cells[Math.floor(Math.random() * cells.length)];

  cat.style.left = randomCell.offsetLeft + "px";
  cat.style.top = randomCell.offsetTop + "px";
}

setInterval(moveCat, 1000);
/**************************************************************/
/*                      Event listeners                       */
/**************************************************************/

// Les Event Listener sont déclarés ici.
document.querySelector(".js-damier").addEventListener("click", createDamier);
document.querySelector(".js-disco").addEventListener("click", createDisco);
document
  .querySelector(".js-labyrinth")
  .addEventListener("click", displayLabyrinth);
document.addEventListener("keydown", moveBobby);
/**************************************************************/
/*                       Main Program                         */
/**************************************************************/

// IMPORTANT Rappel : Pas de traitement ici,
// uniquement les déclarations des Event Listener.

document.addEventListener("DOMContentLoaded", () => {});

// 1. Lorsque l'utilisateur clique sur le bouton "js-damier",
// Afficher un damier dans la grille

// TIP : Ajouter la classe .black sur les cases concernées

// 2. Lorsque l'utilisateur clique sur le bouton "js-disco",
// Afficher un dancefloor de lumières dans la grille

// TIP : Ajouter les classes .color1, ... .color5 aléatoirement

// 3. Lorsque l'utilisateur clique sur le bouton "js-labyrinth",
// Afficher le motif présent sur le bouton dans la grille

// TIP : Ajouter la classe .black sur les cases concernées

// 4. Lorsque l'utilisateur enfonce le bouton de la souris sur une case (classe "js-cell"),
// Afficher "push" sur fond jaune (utiliser la classe "push")
// Puis, lorsqu'il relâche le bouton,
// afficher "pull" sur fond orange (utiliser la classe "pull")
// Enfin, s'il double clique sur la case,
// afficher "boom" sur fond rouge (utiliser la classe "boom")

// 5. Lorsque l'utilisateur appuie sur une des 4 flèches du clavier,
// Afficher bobby et le déplacer sur le grille (de case en case)

// TIP : Ajouter la classe visible sur la div ayant l'id "bobby"
// Le déplacer de case en case
// dans la direction de la flèche appuyée

// 6. Chaque seconde, un chat se déplace aléatoirement sur les cases du plateau

// TIP : Ajouter un timer qui déplace la div ayant l'id "cat" d'une case
// dans une direction aléatoire toutes les secondes
