import './App.css';
import React from 'react';
import Clock from './components/Clock/Clock';
import Button from './components/Button/Button';
import Toggle from './components/Toggle/Toggle';
// import Comment from './components/Comment';

function App() {
  return (
    <div>
    <Clock />
    <Clock />
    <Clock />
    <p>Hello word</p>
    <Button />
    <Toggle />
    </div>
  );

}

export default App;
