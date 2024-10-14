document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner le premier élément de type article
  let firstArticleDOM = document.querySelector("article");
  console.log(firstArticleDOM);

  // Sélectionner le header avec sa classe
  let headerDOM = document.querySelector(".header");
  console.log(headerDOM);

  // Sélectionner tous les articles
  let articlesDOM = document.querySelectorAll("article");
  console.log(articlesDOM);

  // Sélectionner le titre
  let siteTitreDOM = document.querySelector(".header h1");
  console.log(siteTitreDOM);
});
