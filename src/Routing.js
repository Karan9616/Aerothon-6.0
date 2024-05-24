import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';

function Routing() {
  return (
    <div>
        <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard />} />
    
      </Routes>
    </Router>
    </div>
  )
}

export default Routing;