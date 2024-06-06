import React from 'react';
import './App.css';
import Header from './components/Header';
import ServicesSection from './components/ServicesSection';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <div className='left'>
      <Header />
      <ContactForm />
      </div>
      <div className='right'>
        <ServicesSection />
      </div>
      
    </div>
  );
}

export default App;

