import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './assets/Components/header';   
import Fotter from './assets/Components/fotter' ;
import Home from './home'
import SignupForm from './registrationPage'

function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/registrationPage" element={<SignupForm />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
    <Fotter/>
  </Router>
  )
}

export default App
