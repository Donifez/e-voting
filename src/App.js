import React from 'react';
import Voter from "./voter";
import './App.css';

function App() {
  return (
    <div className="App">
     <Voter className="apc" name="APC" id="0"/>
     <Voter className="pdp" name="PDP" id="0"/>
    </div>
  );
}

export default App;
