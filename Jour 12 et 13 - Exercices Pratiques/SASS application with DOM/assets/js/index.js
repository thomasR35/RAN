// 1. Lorsque l'utilisateur clique sur l'icone d'aide (classe js-help), ouvrir la popup
document.addEventListener("DOMContentLoaded", function () {
  let buttonHelpDOM = document.querySelector(".js-help");

  buttonHelpDOM.addEventListener("click", function () {
    let popUpDOM = document.querySelector(".popup-help");
    popUpDOM.classList.toggle("visible");
  });
});

// 2. Lorsque l'utilisateur clique sur la croix en haut à droite de la popup d'aide (classe close-button), fermer la popup
document.addEventListener("DOMContentLoaded", function () {
  let buttonCloseDOM = document.querySelector(".close-button");

  buttonCloseDOM.addEventListener("click", function () {
    let popUpDOM = document.querySelector(".popup-help");
    popUpDOM.classList.remove("visible");
  });
});
// 3. Lorsque l'utilisateur clique sur l'icône menu (en haut à gauche), ouvrir / fermer le menu gauche
document.addEventListener("DOMContentLoaded", function () {
  let buttonMenuDOM = document.querySelector(".js-menu");

  buttonMenuDOM.addEventListener("click", function () {
    let menuDOM = document.querySelector(".left-panel");
    menuDOM.classList.toggle("menuvisible");
  });
});

// 4. Lorsque l'utilisateur appuie sur la touche F (comme fullscreen)
// Afficher / masquer le header et le footer
document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "f") {
    let headerDOM = document.querySelector("header");
    let footerDOM = document.querySelector("footer");

    headerDOM.classList.toggle("invisible");
    footerDOM.classList.toggle("invisible");
  }
});
