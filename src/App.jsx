// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Header'; // Import Navbar component
import Home from './Components/Home';
import AppointmentList from './Components/AppointmentList';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Navbar Component */}
        <Navbar />
        
        <div className="">
          {/* Routes for different pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointments" element={<AppointmentList />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
