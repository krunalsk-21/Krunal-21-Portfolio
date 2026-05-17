import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import { ROUTES } from './common/route';

function AppRoutes() {
  const location = useLocation();
  const activeSection = location.pathname === '/' ? 'home' : location.pathname.replace(/^\//, '');

  return (
    <div className="w-full min-h-screen bg-white">
      <Header activeSection={activeSection} />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Navigate to={ROUTES.HOME} replace />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.EDUCATION} element={<Education />} />
          <Route path={ROUTES.EXPERIENCE} element={<Experience />} />
          <Route path={ROUTES.SKILLS} element={<Skills />} />
          {/* <Route path={ROUTES.PROJECTS} element={<Projects />} /> */}
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <AppRoutes />
    </Router>
  );
}

export default App;
