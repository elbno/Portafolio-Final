import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/NavBar.jsx';
import { Hero } from './components/Hero.jsx';
import { ProjectsPage } from './pages/ProjectsPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<main role="main"><Hero /></main>} />
        <Route path="/proyectos" element={<ProjectsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <footer className="site-footer" role="contentinfo">
        <p>&copy; 2026 — Ingeniería Civil en Informática | Universidad Católica de Temuco</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;