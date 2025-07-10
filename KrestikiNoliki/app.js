const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // строки
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // столбцы
  [0, 4, 8],
  [2, 4, 6], // диагонали
];

const gameBoard = document.getElementById("game-board");

const resetBtnElement = document.getElementById("reset-btn");

const statusElement = document.getElementById("game-status");

const playerSymbol = document.querySelector(".player-symbol");

const arrayBoard = [];

for (let i = 0; i <= 8; i++) {
  const btn = document.createElement("button");
  btn.className = "cell";
  btn.type = "button";
  gameBoard.appendChild(btn);
  btn.dataset.index = i;

  arrayBoard.push("");
}

let currentPlayer = "X";

let isGameOver = false;

const buttons = document.querySelectorAll(".cell");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const index = +btn.dataset.index;

    if (arrayBoard[index] === "" && !isGameOver) {
      arrayBoard[index] = currentPlayer;
      btn.textContent = currentPlayer;
      btn.classList.add("fade-in");
      const winningGroup = winningCombinations.find((group) => {
        const firstValue = arrayBoard[group[0]];
        return group.every(
          (index) =>
            arrayBoard[index] === firstValue && arrayBoard[index] !== ""
        );
      });

      if (winningGroup) {
        isGameOver = true;

        winningGroup.forEach((i) => {
          buttons[i].classList.add("winner");
        });

        statusElement.textContent = `Победил еблан под ником "${currentPlayer}"!!!`;
      } else if (arrayBoard.every((cell) => cell !== "")) {
        isGameOver = true;

        statusElement.textContent = `Игра была ровна, играли два говна!!!`;
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";

        playerSymbol.textContent = currentPlayer;
      }
    }
  });
});

resetBtnElement.addEventListener("click", () => {
  buttons.forEach((btn) => {
    btn.textContent = "";
    btn.classList.remove("winner");
    btn.classList.remove("fade-in");
  });
  statusElement.textContent = "";
  arrayBoard.fill("");
  currentPlayer = "X";
  isGameOver = false;
  playerSymbol.textContent = currentPlayer;
});
