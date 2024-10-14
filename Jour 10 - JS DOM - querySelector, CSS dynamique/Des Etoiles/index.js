function createStar(container, size) {
  const star = document.createElement("div");
  star.className = "shine";
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 20 + "s";
  star.style.mozAnimationDelay = Math.random() * 20 + "s";
  star.classList.add(size);

  container.appendChild(star);
}

// IMPORTANT : Toujours commencer par ajouter le listener sur DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // Récupérer l'élément ayant la classe js-stars-container
  const container = document.querySelector(".js-stars-container");
  // Créer 500 étoiles en appelant la fonction createStar,
  for (let i = 0; i < 500; i++) {
    // en passant les valeurs des deux paramètres container et size, comme suit :
    // 1. container sera valorisé par l'élément js-stars-container récupéré ci-dessus
    // 2. size sera valorisé comme suit :
    // - Si i est divisible par 2, alors passer la valeur 'small'
    let size;
    if (i % 2 == 0) {
      size = "small";
      // - Si i est divisible par 3, alors passer la valeur 'medium'
    } else if (i % 3 == 0) {
      size = "medium";
      // - Sinon passer la valeur 'large'
    } else {
      size = "large";
    }
    createStar(container, size);
  }
});
