import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SignUp.css"; // Import your CSS file for styling and animations

export default function SignUp() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/createuser", {
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
        alert(json.message);
      }
      if (json.success) {
        navigate("/loginuser");
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
    <div className="container mt-5 fade-in">
      {" "}
      {/* Added fade-in class */}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-dark text-white p-4 rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={credentials.name}
            onChange={handleInputChange}
          />
        </div>
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
          <div id="emailHelp" className="form-text text-white-50">
            We'll never share your email with anyone else.
          </div>
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
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputGeolocation1"
            name="location"
            value={credentials.location}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="m-3 btn btn-success">
          Submit
        </button>
        <NavLink to="/loginuser" className="m-3 btn btn-danger">
          Already a user
        </NavLink>
      </form>
    </div>
  );
}
