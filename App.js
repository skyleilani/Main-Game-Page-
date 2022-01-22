import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EquationGame from './EquationGame';
import MainPage from './MainPage';

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
