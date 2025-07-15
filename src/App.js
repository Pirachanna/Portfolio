import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Index from './Index/Index';
import AppEffects from './Components/Appeffects';

function App() {
  return (
    <HashRouter>
      <AppEffects />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<Index />} />
        <Route path="/contact" element={<Index />} />
        <Route path="/services" element={<Index />} />
        <Route path="/skill" element={<Index />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
