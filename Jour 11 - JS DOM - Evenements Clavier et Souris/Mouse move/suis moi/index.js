// Faire en sorte que l'élément ayant la classe .js-diddle suive la souris
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("mousemove", function (event) {
    console.log(event);
    let x = event.clientX;
    let y = event.clientY;

    let squareDOM = document.querySelector(".js-diddle");
    squareDOM.style.left = x + "px";
    squareDOM.style.top = y + "px";
  });
});

// lorsque celle-ci bouge
