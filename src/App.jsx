import React, { useState } from 'react';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':       return <Home setActiveSection={setActiveSection} />;
      case 'about':      return <About />;
      case 'education':  return <Education />;
      case 'experience': return <Experience />;
      case 'skills':     return <Skills />;
      case 'projects':   return <Projects />;
      case 'contact':    return <Contact />;
      default:           return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-20">{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;