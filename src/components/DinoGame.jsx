import React, { useState, useEffect } from 'react';
import './DinoGame.css';
import kid from '../assets/kid.png';
import snake from '../assets/snake.png';
import bear from '../assets/bear.png';
import coin from '../assets/coin.png';

const DinoGame = () => {
  const [playerY, setPlayerY] = useState(50); // Fixed Y position for straight line
  const [obstacles, setObstacles] = useState([]);
  const [collectibles, setCollectibles] = useState([]);
  const [score, setScore] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  // Handle key presses for jumping and prevent default scrolling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp' || e.key === ' ') {
        e.preventDefault(); // Prevent default scrolling behavior
        jump();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const jump = () => {
    if (!isJumping) {
      setIsJumping(true);
      setPlayerY(100); // Lower jump height for quicker jump
      setTimeout(() => {
        setPlayerY(50); // Return to initial position faster
        setIsJumping(false);
      }, 300); // Shorter jump duration
    }
  };

  // Generate obstacles and collectibles at intervals with randomized positions
  useEffect(() => {
    const interval = setInterval(() => {
      setObstacles((prevObstacles) => [
        ...prevObstacles,
        { id: Date.now(), x: 800, y: 50 + Math.random() * 20 } // Y position slightly randomized to avoid overlap
      ]);
      setCollectibles((prevCollectibles) => [
        ...prevCollectibles,
        { id: Date.now() + 1000, x: 850 + Math.random() * 20, y: 50 + Math.random() * 20 } // Offset x position to reduce overlap
      ]);
    }, 2000); // Generate every 2 seconds
    return () => clearInterval(interval);
  }, []);

  // Move obstacles and collectibles to the left
  useEffect(() => {
    const interval = setInterval(() => {
      setObstacles((prevObstacles) =>
        prevObstacles.map((obstacle) => ({ ...obstacle, x: obstacle.x - 10 }))
          .filter(obstacle => obstacle.x > 0)
      );
      setCollectibles((prevCollectibles) =>
        prevCollectibles.map((collectible) => ({ ...collectible, x: collectible.x - 10 }))
          .filter(collectible => collectible.x > 0)
      );
    }, 100); // Update every 100ms
    return () => clearInterval(interval);
  }, []);

  // Check for collisions with obstacles and collectibles
  useEffect(() => {
    obstacles.forEach(obstacle => {
      if (obstacle.x < 100 && Math.abs(obstacle.y - playerY) < 50) {
        alert("Game Over!");
        setObstacles([]);
        setCollectibles([]);
        setScore(0);
      }
    });

    collectibles.forEach(collectible => {
      if (collectible.x < 100 && Math.abs(collectible.y - playerY) < 50) {
        setScore(score + 1);
        setCollectibles((prevCollectibles) =>
          prevCollectibles.filter(c => c.id !== collectible.id)
        );
      }
    });
  }, [obstacles, collectibles, playerY]);

  return (
    <div className="game-container">
      <div className="player" style={{ bottom: playerY }}>
        <img src={kid} alt="Kid" />
      </div>
      {obstacles.map((obstacle, index) => (
        <div key={obstacle.id} className="obstacle" style={{ left: obstacle.x, bottom: obstacle.y }}>
          <img src={index % 2 === 0 ? snake : bear} alt="Obstacle" />
        </div>
      ))}
      {collectibles.map((collectible) => (
        <div key={collectible.id} className="collectible" style={{ left: collectible.x, bottom: collectible.y }}>
          <img src={coin} alt="Coin" />
        </div>
      ))}
      <div className="score">Score: {score}</div>
    </div>
  );
};

export default DinoGame;
