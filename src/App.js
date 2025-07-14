import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './Index/Index';
import AppEffects from './Components/Appeffects'; 

function App() {
  return (
    <BrowserRouter>
      <AppEffects /> 
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
