import React from 'react';
import './App.css';
import navbar from './components/navbar.js';
import rebootYourCareer from "./components/rebootYourCareer";
import render from 'react-dom';

const App = () => {
  return (
    <div>
      <navbar/>
      <rebootYourCareer/>
    </div>
  );
}

export default App;
