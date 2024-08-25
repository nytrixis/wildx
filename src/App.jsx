import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import AboutUs from './components/AboutUs';
import FAQ from './components/Faq';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import AuthPage from './components/AuthPage';
import Game from './components/Game';
import ReportForm from './components/ReportForm';
import './App.css';
import MonitorComponent from './components/MonitorComponent';
import Danger from './components/Danger';
import Contact from './components/Contact';
import Encyclopedia from './components/Encyclopedia';

function App() {
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const handleAuthAction = (action) => {
    setAuthMode(action);
    setShowAuth(true);
  };

  const HomePage = () => (
    <>
      <Carousel />
      <div className="spacer"></div>
      <AboutUs />
      <div className="spacer"></div>
      <FAQ />
      <div className="spacer"></div>
      <ContactUs />
    </>
  );

  return (
    <Router>
      <div className="App">
        <Navbar onAuthAction={handleAuthAction} />
        {showAuth && <AuthPage mode={authMode} onClose={() => setShowAuth(false)} />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<Game />} />
          <Route path="/report" element={<ReportForm />} />
          <Route path='/monitor' element={<MonitorComponent />} />
          <Route path='/danger' element={<Danger />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/encyclopedia' element={<Encyclopedia />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
