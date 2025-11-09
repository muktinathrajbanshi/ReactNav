import React from 'react'
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import "./App.css";
import { Footer } from './components/Layout/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
};

export default App;
