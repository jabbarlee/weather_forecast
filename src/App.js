import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Weather from './components/Weather';

function App() {  
  return (
    <div className="App">
      <Weather/>
    </div>
  );
}

export default App;
