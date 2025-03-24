import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from './assets/Components/header';
import Fotter from './assets/Components/fotter';
import Home from './home';
import SignupForm from './registrationPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/registrationPage" element={<SignupForm />} />
      </Routes>
      <Fotter />
    </Router>
  );
}

export default App;