import logo from './logo.svg';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Containers/Menubar/Menubar';
import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Menubar/>
    </div>
  );
}

export default App;
