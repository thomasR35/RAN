document.addEventListener("DOMContentLoaded", function (event) {
  document.addEventListener("keydown", function (event) {
    let key = event.key.toUpperCase();
    let element = document.querySelector(".square");

    // Si la touche appuyée est N, afficher Nord dans le carré ET mettre en fond la couleur bleu glace
    if (key === "N") {
      element.textContent = "Nord";
      element.style.backgroundColor = "#b0e0e6";

      // Si la touche appuyée est E, afficher Est dans le carré ET mettre en fond la couleur rouge foncé
    } else if (key === "E") {
      element.textContent = "Est";
      element.style.backgroundColor = "#8b0000";
      // Si la touche appuyée est S, afficher Sud dans le carré ET mettre en fond la couleur jaune
    } else if (key === "S") {
      element.textContent = "Sud";
      element.style.backgroundColor = "yellow";
      // Si la touche appuyée est O, afficher Ouest dans le carré ET mettre en fond la couleur bleu foncé
    } else if (key === "O") {
      element.textContent = "Ouest";
      element.style.backgroundColor = "#00008b";
      // Si la touche appuyée n'est aucune des 4 précédentes, afficher Inconnu dans le carré ET mettre en fond la couleur par défaut
    } else {
      element.textContent = "Inconnu";
      element.style.backgroundColor = "";
    }
  });
});
