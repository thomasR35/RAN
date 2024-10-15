document.addEventListener("DOMContentLoaded", function (event) {
  document.addEventListener("keydown", function (event) {
    let code = event.code;
    let element = document.querySelector(".red-square");

    if (code === "ArrowLeft") {
      element.style.left = "10px";
    } else if (code === "ArrowUp") {
      element.style.top = "10px";
    } else if (code === "ArrowRight") {
      element.style.right = "500px";
    } else if (code === "ArrowDown") {
      element.style.down = "500px";
    }
  });
});
