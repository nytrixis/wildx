import React, { useEffect, useRef } from 'react';
import * as tmImage from '@teachablemachine/image';
import beepSound from '../assets/beep.mp3';

const TeachableMachineComponent = () => {
  const webcamContainerRef = useRef(null);
  const labelContainerRef = useRef(null);
  const audioRef = useRef(new Audio(beepSound));

  useEffect(() => {
    const URL = "https://teachablemachine.withgoogle.com/models/LbwnzLVVd/";
    let model, webcam, labelContainer, maxPredictions;

    async function init() {
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      model = await tmImage.load(modelURL, metadataURL);
      maxPredictions = model.getTotalClasses();

      const flip = true;
      webcam = new tmImage.Webcam(200, 200, flip);
      await webcam.setup();
      await webcam.play();
      window.requestAnimationFrame(loop);

      // Clear the webcam container before appending the webcam canvas
      webcamContainerRef.current.innerHTML = '';
      webcamContainerRef.current.appendChild(webcam.canvas);

      labelContainer = labelContainerRef.current;
      labelContainer.innerHTML = ''; // Clear the label container before adding new divs
      for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement("div"));
      }
    }

    async function loop() {
      webcam.update();
      await predict();
      window.requestAnimationFrame(loop);
    }

    async function predict() {
      const prediction = await model.predict(webcam.canvas);
      for (let i = 0; i < maxPredictions; i++) {
        const classPrediction = prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        labelContainer.childNodes[i].innerHTML = classPrediction;

        if (prediction[i].className.toLowerCase() === 'others' && prediction[i].probability < 0.4) {
          audioRef.current.play();
        }
      }
    }

    init();

    return () => {
      if (webcam) {
        webcam.stop();
      }
    };
  }, []);

  return (
    <div>
      <h2>Teachable Machine Image Model</h2>
      <div ref={webcamContainerRef}></div>
      <div ref={labelContainerRef}></div>
    </div>
  );
};

export default TeachableMachineComponent;
