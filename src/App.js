import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Quote from './pages/Quote';
import CalculatorPage from './pages/CalculatorPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="CalculatorPage" element={<CalculatorPage />} />
        <Route path="Quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
