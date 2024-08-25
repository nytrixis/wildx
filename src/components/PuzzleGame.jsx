import React, { useState } from 'react';
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import './PuzzleGame.css';
import { puzzleInfo } from './PuzzleSelector';

const PuzzleGame = ({ puzzle, onBack }) => {
  const [solved, setSolved] = useState(false);

  const handleSolved = () => {
    setSolved(true);
    alert("Congratulations! You solved the puzzle!");
  };

  return (
    <div className="puzzle-game">
      <h2>{puzzle.name}</h2>
      <div className="puzzle-board">
        <JigsawPuzzle className="custom-jigsaw-puzzle"
        
          imageSrc={puzzle.image}
          rows={4}
          columns={4}
          onSolved={handleSolved}
        />
      </div>
      {solved && (
        <div className="puzzle-info">
          <p className="win-message">Puzzle Completed!</p>
          <p className="info-text">{puzzleInfo[puzzle.name] || 'Great job solving the puzzle!'}</p>
        </div>
      )}
      <button onClick={onBack}>Back to Puzzle Selection</button>
    </div>
  );
};

export default PuzzleGame;
