// RAPPEL : S'assurer que le DOM est chargé en mémoire avant de jouer avec
document.addEventListener("DOMContentLoaded", function () {
  let redSquareDOM = document.querySelector(".red-square");

  // Exercice 1 : Positionner le carré de 150px vers la droite
  redSquareDOM.style.left = "150px";
  // Exercice 2 : Positionner le carré de 100px vers le bas
  redSquareDOM.style.top = "100px";
  // Exercice 3 : Mettre le symbole 😊 dans le carré
  redSquareDOM.textContent = "😊";
  // Exercice 4 : Changer la taille du carré en 300px de largeur et 300px de haut
  redSquareDOM.style.width = "300px";
  redSquareDOM.style.height = "300px";
  // Exercice 5 : Ajouter en image de fond, l'image fournie
  redSquareDOM.style.backgroundImage = "url('cat.jpg')";
});
