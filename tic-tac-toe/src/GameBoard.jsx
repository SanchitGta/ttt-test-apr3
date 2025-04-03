import React from 'react';
import Square from './Square';

function GameBoard({ board, onCellClick }) {
  const handleClick = (index) => {
    if (board[index] || !onCellClick) {
      return;
    }

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
