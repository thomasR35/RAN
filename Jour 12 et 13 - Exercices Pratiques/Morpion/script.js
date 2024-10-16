document.addEventListener("DOMContentLoaded", function () {
  const board = document.querySelectorAll(".cell");
  const message = document.querySelector(".message");
  const restartButton = document.querySelector(".restart");

  let currentPlayer = "X";
  let gameActive = true;
  let gameState = ["", "", "", "", "", "", "", "", ""];

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function handleCellClick(event) {
    const cell = event.target;
    const index = parseInt(cell.getAttribute("data-index"));

    if (gameState[index] !== "" || !gameActive) {
      return;
    }

    gameState[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin()) {
      message.textContent = `Le joueur ${currentPlayer} a gagné !`;
      gameActive = false;
      return;
    }

    if (gameState.every((cell) => cell !== "")) {
      message.textContent = "Match nul !";
      gameActive = false;
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    message.textContent = `C'est au tour du joueur ${currentPlayer}`;
  }

  function checkWin() {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return true;
      }
    }
    return false;
  }

  function restartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    message.textContent = "Joueur X commence";
    board.forEach((cell) => {
      cell.textContent = "";
    });
  }

  board.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
  });

  restartButton.addEventListener("click", restartGame);
});
