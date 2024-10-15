let clickCount = 0;

document.querySelector(".js-button").addEventListener("click", function () {
  clickCount++;

  let element = document.querySelector(".js-square");
  // 1. Au premier clic, mettre la couleur de fond du carré à rouge
  if (clickCount % 3 === 1) {
    element.style.backgroundColor = "red";
    // 2. Au second clic, mettre la couleur de fond du carré à bleu
  } else if (clickCount % 3 === 2) {
    element.style.backgroundColor = "blue";
    // 3. Au troisième clic, remettre la couleur de fond par défaut
  } else {
    element.style.backgroundColor = "";
  }
});
// 4. Au quatrième clic, on reboucle à 1.
