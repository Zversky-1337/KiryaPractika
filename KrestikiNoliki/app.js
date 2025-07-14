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

const createBoard = (size) => Array(size).fill("");

const renderButtons = (size) => {
  Array.from({ length: size }).forEach((_, i) => {
    const btn = document.createElement("button");
    btn.className = "cell";
    btn.type = "button";
    btn.dataset.index = i;
    gameBoard.appendChild(btn);
  });
};

const getButtons = () => Array.from(document.querySelectorAll(".cell"));

const isWinningCombo = (board, combo) => {
  const [a, b, c] = combo;
  return board[a] && board[a] === board[b] && board[a] === board[c];
};

const findWinner = (board) =>
  winningCombinations.find((combo) => isWinningCombo(board, combo));

const isDraw = (board) => board.every((cell) => cell !== "");

const switchPlayer = (player) => (player === "X" ? "O" : "X");

const updateStatus = (text) => (statusElement.textContent = text);

const markWinner = (buttons, combo) =>
  combo.forEach((i) => buttons[i].classList.add("winner"));

const clearCell = (btn) => {
  btn.textContent = "";
  btn.classList.remove("winner", "fade-in");
};

const startGame = () => {
  let board = createBoard(9);
  let currentPlayer = "X";
  let isGameOver = false;

  renderButtons(9);
  const buttons = getButtons();
  playerSymbol.textContent = currentPlayer;

  const handleMove = (index) => {
    if (board[index] !== "" || isGameOver) return;

    board = board.map((val, i) => (i === index ? currentPlayer : val));
    buttons[index].textContent = currentPlayer;
    buttons[index].classList.add("fade-in");

    const winnerCombo = findWinner(board);

    if (winnerCombo) {
      isGameOver = true;
      markWinner(buttons, winnerCombo);
      updateStatus(`Победил еблан под ником "${currentPlayer}"!!!`);
    } else if (isDraw(board)) {
      isGameOver = true;
      updateStatus(`Игра была ровна, играли два говна!!!`);
    } else {
      currentPlayer = switchPlayer(currentPlayer);
      playerSymbol.textContent = currentPlayer;
    }
  };

  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      const index = +btn.dataset.index;
      handleMove(index);
    })
  );

  resetBtnElement.addEventListener("click", () => {
    board = createBoard(9);
    currentPlayer = "X";
    isGameOver = false;
    playerSymbol.textContent = currentPlayer;
    updateStatus("");
    buttons.forEach(clearCell);
  });
};

startGame();
