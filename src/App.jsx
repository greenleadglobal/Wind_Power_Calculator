import React from 'react';
import TurbineCalculator from './TurbineCalculator.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Calculate wind power in your area!</h1>
      <TurbineCalculator />
    </div>
  );
}

export default App;
