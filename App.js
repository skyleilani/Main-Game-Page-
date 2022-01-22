import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EquationGame from './pages/EquationGame';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <MainPage />
            </div>
          }
        />
        <Route
          path='/EquationGame'
          element={
            <div>
              <EquationGame />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
