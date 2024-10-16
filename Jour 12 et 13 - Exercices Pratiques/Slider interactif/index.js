// IMPORTANT : Toujours commencer par ajouter le listener sur l'événement DOMContentLoaded

// 1. Initialisation de la valeur affichée
// - Récupérer la valeur de l'élément ayant la classe "js-number-input"
// - La recopier dans l'élément ayant la classe "js-number-display"

// 2. Mise à jour automatique de la valeur affichée lorsque l'utilisateur bouge le slider
//   - Ajouter un listener sur l'événement "change" de l'élément ayant la classe "js-number-input"
//   - Récupérer la valeur de l'élément "js-number-input"
//   - La recopier dans l'élément ayant la classe "js-number-display"
document.addEventListener("DOMContentLoaded", function () {
  let numberInput = document.querySelector(".js-number-input");
  let numberDisplay = document.querySelector(".js-number-display");

  numberDisplay.textContent = numberInput.value;

  numberInput.addEventListener("input", function () {
    numberDisplay.textContent = numberInput.value;
  });
});
