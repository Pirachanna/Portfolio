import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Index from './Index/Index';
import AppEffects from './Components/Appeffects';

function App() {
  return (
    <HashRouter>
      <AppEffects />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
