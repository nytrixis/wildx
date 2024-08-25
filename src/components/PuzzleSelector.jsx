import React from 'react';
import './PuzzleSelector.css';
import leopard from '../assets/leopard.jpg';
import elephant from '../assets/elephant.jpg';
import snake from '../assets/snake.jpg';
import puppy from '../assets/puppies.jpg';
import kitten from '../assets/kitten.jpeg.jpg';
import bear from '../assets/bear.jpg';
import koala from '../assets/koala.jpg';
import crocodile from '../assets/crocodile.jpg';
import WildlifeQuiz from './Quiz';

const puzzles = [
  { id: 1, name: 'Leopard', image: leopard },
  { id: 2, name: 'Elephant', image: elephant },
  { id: 3, name: 'Puppy', image: puppy },
  { id: 4, name: 'Snake', image: snake },
  { id: 5, name: 'Kitten', image: kitten },
  { id: 6, name: 'Bear', image: bear },
  { id: 7, name: 'Koala', image: koala },
  { id: 8, name: 'Crocodile', image: crocodile },
];

export const puzzleInfo = {
    'Leopard': 'Leopards are big cats known for their beautiful spotted coats and ability to climb trees. They are skilled hunters and can be found in Africa and parts of Asia. Conservation Status: Vulnerable (at risk of becoming endangered).',
    'Elephant': 'Elephants are the largest land animals on Earth and are known for their intelligence, long trunks, and big ears. They live in Africa and Asia. Conservation Status: Endangered (facing a high risk of extinction in the wild).',
    'Puppy': 'Puppies are baby dogs, known for their playful and affectionate nature. They come in many different breeds, each with unique characteristics. Conservation Status: Domesticated (not threatened).',
    'Snake': 'Snakes are reptiles that slither on the ground and come in many different species, some of which are venomous. They are found in almost every part of the world. Conservation Status: Varies by species; some are stable, while others are endangered.',
    'Cat': 'Cats are small, furry animals that are often kept as pets. They are known for their agility, independence, and sharp claws. Conservation Status: Domesticated (not threatened).',
    'Bear': 'Bears are large, powerful animals that live in forests, mountains, and even icy regions. They have thick fur and are great at hunting and fishing. Conservation Status: Varies by species; some are threatened, like the polar bear, while others are stable.',
    'Koala': 'Koalas are marsupials that live in trees in Australia. They love eating eucalyptus leaves and sleep for most of the day. Conservation Status: Vulnerable (at risk of becoming endangered).',
    'Crocodile': 'Crocodiles are large reptiles that live in rivers and lakes. They are powerful predators with strong jaws and can be found in many warm parts of the world. Conservation Status: Varies by species; some are threatened, while others are of least concern.',
  };
  

const PuzzleSelector = ({ onSelect }) => {
  return (
    <div className="puzzle-selector">
      <h2>Select a Puzzle</h2>
      <div className="puzzle-grid">
        {puzzles.map((puzzle) => (
          <div key={puzzle.id} className="puzzle-option" onClick={() => onSelect(puzzle)}>
            <img src={puzzle.image} alt={puzzle.name} />
            <p>{puzzle.name}</p>
          </div>
        ))}
      </div>
      <WildlifeQuiz />
    </div>
  );
};

export default PuzzleSelector;
