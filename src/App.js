import React from 'react';
import { Routes, BrowserRouter as Router } from 'react-router-dom';

import { Navbar } from './components';
import { Home } from './pages';

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes path='/' element={<Home />} />
      </Router>
    </div>
  );
};

export default App;
