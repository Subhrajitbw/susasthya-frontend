import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import Register from './Components/Register/Register';
import KYD from './Components/KYD/KYD';

function App() {
  return (
    <div class="main-wrapper App">

      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/know-your-disease" element={<KYD />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
