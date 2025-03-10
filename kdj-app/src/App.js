import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import './App.css';
import Navbar from './components/Navbar'
import LoginForm from './Pages/LoginForm';



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path = "/Contact" element={<Contact/>} />
        <Route path = "/LoginForm" element={<LoginForm/>} />
      </Routes>
    </Router>
    



  );
}

export default App;

