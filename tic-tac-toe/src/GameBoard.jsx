import React, { useState } from 'react';
import Square from './Square';

function GameBoard({ currentPlayer, onCellClick }) {
  const [board, setBoard] = useState(Array(9).fill(null));

  const handleClick = (index) => {
    if (board[index] || !onCellClick) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    onCellClick(index);
  };

  return (
    <div className="game-board">
      {board.map((value, index) => (
        <Square key={index} value={value} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
}

export default GameBoard;
