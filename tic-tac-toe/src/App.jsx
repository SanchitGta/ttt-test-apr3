import './App.css'
import GameBoard from './GameBoard';
import { useState } from 'react';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleCellClick = () => {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  return (
    
      <GameBoard currentPlayer={currentPlayer} onCellClick={handleCellClick} />
    
  );
}

export default App
