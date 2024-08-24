import React, { useState } from 'react';
import './FAQ.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <span>{question}</span>
        <span className="plus-sign">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    { question: "What is the purpose of this wildlife monitoring platform?", answer: "Our platform helps track and monitor wildlife species through image and sound recognition, providing valuable data for conservation efforts and research." },
    { question: "How does the platform identify animals and birds?", answer: "We use machine learning models that analyze uploaded images and audio recordings to identify species based on visual and sound patterns." },
    { question: "Can I contribute to the monitoring process?", answer: "Yes! Registered users can upload photos, videos, and audio clips of wildlife, which our platform will analyze and add to the database." },
    { question: "How accurate are the species recognition models?", answer: "Our models are trained on a large dataset of wildlife images and sounds, with ongoing improvements. While highly accurate, edge cases such as rare species or noisy data can present challenges." },
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <p className="faq-description">Any questions about <span>WildX?</span></p>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
