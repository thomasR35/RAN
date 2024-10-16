// 1. Pour chaque popup, lorsque l'utilisateur clique sur le bouton de fermeture x,
// masquer la popup en utilisant la classe appropriée

// 2. Pour chaque bouton du menu, lorsque l'utilisateur clique dessus,
// afficher la popup correspondante (qui a la même position dans la liste)
// en utilisant la classe appropriée
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".js-menu button");
  let popups = document.querySelectorAll(".js-popup");
  let closeButtons = document.querySelectorAll(".close-button");

  function showPopup(index) {
    popups[index].classList.add("visible");
  }

  function hidePopup(index) {
    popups[index].classList.remove("visible");
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      showPopup(i);
    });
  }

  for (let j = 0; j < closeButtons.length; j++) {
    closeButtons[j].addEventListener("click", function () {
      hidePopup(j);
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".js-menu button");
  let popups = document.querySelectorAll(".js-popup");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      popups[index].classList.add("visible");
    });
  });

  let closeButtons = document.querySelectorAll(".close-button");
  closeButtons.forEach((closeButton, index) => {
    closeButton.addEventListener("click", () => {
      popups[index].classList.remove("visible");
    });
  });
});
