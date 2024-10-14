document.addEventListener("DOMContentLoaded", function () {
  // Exercice 1 : Sélectionner et afficher le footer en utilisant sa classe
  let footerDOM = document.querySelector(".footer");
  console.log(footerDOM);

  // Exercice 2 : Sélectionner et afficher le paragraphe à l'intérieur du footer
  let paraFooterDOM = document.querySelector(".footer p");
  console.log(paraFooterDOM);

  // Exercice 3 : Sélectionner et afficher tous les paragraphes de la page
  let allParaDOM = document.querySelectorAll("p");
  console.log(allParaDOM);

  // Exercice 4 : Sélectionner et afficher les paragraphes du premier article
  let allParaFirstArticle = document.querySelectorAll(
    ".content article:first-of-type p"
  );
  console.log(allParaFirstArticle);

  // Exercice 5 : Sélectionner le dernier paragraphe du 1er article
  let lastParaFirstArticle = document.querySelector(
    ".content article:first-of-type p:last-of-type"
  );
  console.log(lastParaFirstArticle);
});
