import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import './WildlifeQuiz.css';

const questions = [
    {
      "question": "Which big cat is critically endangered and lives in snowy mountain regions?",
      "answer": "Snow Leopard",
      "hints": ["It has a thick coat for cold weather", "It lives in the Himalayas"]
    },
    {
      "question": "Which marine animal is endangered due to pollution and fishing nets?",
      "answer": "Sea Turtle",
      "hints": ["It has a hard shell", "It lays eggs on beaches"]
    },
    {
      "question": "Which large predator is known for its powerful bite and lives in rivers and lakes?",
      "answer": "Crocodile",
      "hints": ["It has sharp teeth", "It can be found in Africa and Australia"]
    },
    {
      "question": "Which small mammal, often considered cute, is endangered and lives in Australia?",
      "answer": "Koala",
      "hints": ["It eats eucalyptus leaves", "It sleeps a lot"]
    },
    {
      "question": "Which bird of prey is endangered due to habitat loss and pesticides?",
      "answer": "Bald Eagle",
      "hints": ["It is a symbol of the United States", "It has a white head and tail"]
    },
    {
      "question": "Which reptile can be dangerous if you encounter it in the wild and is known for its deadly venom?",
      "answer": "King Cobra",
      "hints": ["It is the world's longest venomous snake", "It has a hood when threatened"]
    },
    {
      "question": "Which large mammal with a horn on its nose is critically endangered due to poaching?",
      "answer": "Rhinoceros",
      "hints": ["It has thick skin", "Its horn is made of keratin"]
    },
    {
      "question": "Which dangerous animal is known for being a great white hunter in the ocean?",
      "answer": "Great White Shark",
      "hints": ["It has sharp teeth", "It is one of the top predators in the sea"]
    },
    {
      "question": "Which large carnivore in the bear family is endangered and lives in the Arctic?",
      "answer": "Polar Bear",
      "hints": ["It has white fur", "It hunts seals"]
    },
    {
      "question": "Which animal, known for its tusks, is endangered due to ivory poaching?",
      "answer": "Elephant",
      "hints": ["It is the largest land animal", "It uses its trunk for many tasks"]
    },
    {
      "question": "Which nocturnal mammal is endangered due to habitat destruction and is known for hanging upside down?",
      "answer": "Bat",
      "hints": ["It uses echolocation", "It can fly"]
    },
    {
      "question": "Which dangerous animal is known for its ability to swim and for attacking people near water?",
      "answer": "Hippopotamus",
      "hints": ["It is found in Africa", "It has large teeth and spends time in water"]
    },
    {
      "question": "Which brightly colored frog is known for its toxic skin and is found in rainforests?",
      "answer": "Poison Dart Frog",
      "hints": ["Its skin is very poisonous", "It lives in tropical rainforests"]
    },
    {
      "question": "Which animal, known for its black and white fur, is endangered and mainly eats bamboo?",
      "answer": "Giant Panda",
      "hints": ["It is a symbol of conservation", "It is native to China"]
    },
    {
      "question": "Which large feline is endangered due to habitat loss and poaching, and is known as the 'King of the Jungle'?",
      "answer": "Lion",
      "hints": ["It has a big mane", "It roars loudly"]
    },
    {
      "question": "Which animal is known for its powerful claws and lives in forests and mountains, but can be dangerous if encountered in the wild?",
      "answer": "Bear",
      "hints": ["It hibernates in winter", "It loves honey"]
    },
    {
      "question": "Which critically endangered mammal is known for its long snout and being the only mammal fully covered in scales?",
      "answer": "Pangolin",
      "hints": ["It rolls into a ball when threatened", "Its scales are made of keratin"]
    },
    {
      "question": "Which large snake is known for squeezing its prey and can be dangerous if encountered in the wild?",
      "answer": "Python",
      "hints": ["It is non-venomous but very strong", "It can grow very large"]
    },
    {
      "question": "Which fish is endangered due to overfishing and is known for its long sharp snout?",
      "answer": "Sawfish",
      "hints": ["It looks like it has a saw on its face", "It lives in both saltwater and freshwater"]
    },
    {
      "question": "Which large bird, known for its impressive wingspan, is critically endangered due to deforestation?",
      "answer": "Harpy Eagle",
      "hints": ["It is one of the largest and most powerful eagles", "It lives in tropical rainforests"]
    }
  ];  

const WildlifeQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [attempts, setAttempts] = useState(3);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (attempts === 0) {
      moveToNextQuestion();
    }
  }, [attempts]);

  const checkAnswer = () => {
    if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
      setScore(score + 1);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        moveToNextQuestion();
      }, 2000);
    } else {
      setAttempts(attempts - 1);
      if (attempts === 2) setShowHint(true);
    }
  };

  const moveToNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer('');
    setAttempts(3);
    setShowHint(false);
  };

  return (
    <div className="wildlife-quiz">
      <h2>Quiz Time!!!</h2>
      {currentQuestion < questions.length ? (
        <>
          <p className="question">{questions[currentQuestion].question}</p>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Type your answer here"
          />
          <button onClick={checkAnswer}>Submit</button>
          <div className="attempts">
            {[...Array(attempts)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={faHeart} className="heart" />
            ))}
          </div>
          {showHint && <p className="hint">Hint: {questions[currentQuestion].hints[3 - attempts - 1]}</p>}
          {showSuccess && <p className="success">Great job! That's correct!</p>}
          <div className="score">
            Score: {score} <FontAwesomeIcon icon={faStar} className="star" />
          </div>
        </>
      ) : (
        <div className="quiz-end">
          <h3>Quiz Completed!</h3>
          <p>Your final score: {score} out of {questions.length}</p>
          <button onClick={() => window.location.reload()}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default WildlifeQuiz;
