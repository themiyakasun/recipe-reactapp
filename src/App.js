import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navbar, SingleMeal } from './components';
import { Home } from './pages';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/meal/:id' element={<SingleMeal />} />
      </Routes>
    </div>
  );
};

export default App;
