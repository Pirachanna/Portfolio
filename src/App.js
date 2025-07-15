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
      </Routes>
    </HashRouter>
  );
}

export default App;
