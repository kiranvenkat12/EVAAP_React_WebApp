import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./assets/Components/header";
import Fotter from "./assets/Components/fotter";
import Home from "./home";
import SignupForm from "./registrationPage";
import ContactUs from "./contact_usPage";
import FounderPage from "./founderPage";
import AboutUs from "./aboutUsPage";
<<<<<<< Updated upstream
import LoginForm from "./loginForm";
=======
>>>>>>> Stashed changes
import OurServices from "./ourServices";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/ourServices" element={<OurServices/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/registrationPage" element={<SignupForm />} />
        <Route path="/contact_usPage" element={<ContactUs />} />
        <Route path="/founderPage" element={<FounderPage />} />
        <Route path="/aboutUsPage" element={<AboutUs />} />
        <Route path="/loginForm" element={<LoginForm />} />
      </Routes>
      <Fotter />
    </Router>
  );
}

export default App;
