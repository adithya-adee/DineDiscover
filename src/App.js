import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Home from "./display/Home";
import Login from "./display/Login";
import "./App.css";
import SignUp from "./display/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { CartProvider } from "./components/ContextReducer";
import "@fortawesome/fontawesome-free/css/all.min.css";

import LogoutPage from "./display/LogoutPage";
import About from "./display/About";
function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/loginuser" element={<Login />} />
            <Route path="/createuser" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
