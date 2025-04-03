import './App.css';
import GameBoard from './GameBoard';
import { useState, useEffect } from 'react';

function App() {
  const [xWinCount, setXWinCount] = useState(0);
  const [oWinCount, setOWinCount] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [status, setStatus] = useState(`Current Player: ${currentPlayer}`);

  function calculateWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        const winningPlayer = board[a];
        if (winningPlayer === "X") {
          setXWinCount(xWinCount + 1);
        } else {
          setOWinCount(oWinCount + 1);
        }
        return winningPlayer;
      }
    }
    return null;
  }

  const handleCellClick = (index) => {
    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const winnerValue = calculateWinner(newBoard);
    if (winnerValue) {
      setWinner(winnerValue);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  useEffect(() => {
    if (winner) {
      setStatus(`Winner: ${winner}`);
    } else {
      setStatus(`Current Player: ${currentPlayer}`);
    }
  }, [winner, currentPlayer]);

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <p>X Wins: {xWinCount}</p>
      <p>O Wins: {oWinCount}</p>
      <p>{status}</p>
      <GameBoard board={board} onCellClick={handleCellClick} />
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );

  function resetGame() {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    setStatus("Current Player: X");
    setXWinCount(0);
    setOWinCount(0);
  }
}

export default App;
