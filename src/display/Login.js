import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css"; // Make sure to import the CSS file

export default function Login() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/loginuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const json = await response.json();
      console.log(json);
      if (!json.success) {
        console.log(credentials);
        alert(json.message);
      }
      if (json.success) {
        localStorage.setItem("authToken", json.authToken);
        localStorage.setItem("userEmail", credentials.email);
        setIsLoggedIn(true);
        setTimeout(() => navigate("/"), 1500); // Delay navigation for animation
      }
    } catch (err) {
      setError(err.message);
      console.error("There was an error submitting the form:", err);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return (
    <div className={`container mt-5 ${isLoggedIn ? "fade-out" : ""}`}>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-dark text-white p-4 rounded">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="m-3 btn btn-success">
          Submit
        </button>
        <NavLink to="/createuser" className="m-3 btn btn-danger">
          Create new account
        </NavLink>
      </form>
    </div>
  );
}
