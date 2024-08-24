import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import AboutUs from './components/AboutUs';
import FAQ from './components/Faq';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <div className="spacer"></div>
      <AboutUs />
      <div className="spacer"></div>
      <FAQ />
    </div>
  );
}

export default App;
