import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from "./Components/Homepage";
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/navbar' element={<Navbar/>}/>
      </Routes>
    </div>
  );
}

export default App;
