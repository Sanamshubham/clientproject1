// src/App.js
import React from 'react';
import Header from './components/Header';
import Home from './Home';
import About from './components/About';
import Draft from './components/Draft';
import Contact from './components/contact';
import Footer from './components/Footer'
import './App.css';



function App() {
  return (
    <div>
      <Header />
       <Home />
      <About />
      <Draft></Draft>
      <Contact/>
      <Footer />  
    </div>
  );
}

export default App;
