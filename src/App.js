import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login'; 
import Signu from './Signu';
import  Dashboard from './Dashboard';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signu />} />
                <Route path="/" element={<Login />} />
                <Route path ="/dashboard" element={<Dashboard/>} />
            </Routes>
        </Router>
    );
};

export default App;
