import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Dashboard from './Dashboard/Dashboard';
//feature 1
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Dashboard/>
    </div>
  );
}

export default App;
