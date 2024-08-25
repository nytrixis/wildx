import React, { useState } from 'react';
import PuzzleSelector from './PuzzleSelector';
import PuzzleGame from './PuzzleGame';

const Game = () => {
  const [selectedPuzzle, setSelectedPuzzle] = useState(null);

  return (
    <div className="game-container">
      {!selectedPuzzle ? (
        <PuzzleSelector onSelect={setSelectedPuzzle} />
      ) : (
        <PuzzleGame 
          puzzle={selectedPuzzle} 
          onBack={() => setSelectedPuzzle(null)} 
        />
      )}
    </div>
  );
};

export default Game;
