import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Home';
import Print from './Print';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Print />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
