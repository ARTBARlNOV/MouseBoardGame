import { useState } from 'react';
import InstructionBox from '../InstructionBox/InstructionBox';
import Mouse from '../Mouse/Mouse';
import './GameBoard.css';

function GameBoard() {
  const [mousePosition, setMousePosition] = useState({ x: 1000, y: 480 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <div className="App">
      <InstructionBox />
      <div className="game-board" onMouseMove={handleMouseMove}>
        <Mouse mousePosition={mousePosition} />
      </div>
    </div>
  );
}

export default GameBoard;
