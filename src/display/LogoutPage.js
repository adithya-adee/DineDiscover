// LogoutPage.jsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress"; // Import CircularProgress for spinner

const LogoutPage = () => {
  const navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const logout = async () => {
      // Simulate async logout process (e.g., API call, removing tokens)
      try {
        // Clear authentication token from localStorage
        localStorage.removeItem("authToken");
        // Simulate delay for 1.5 seconds with a spinner
        await new Promise((resolve) => setTimeout(resolve, 1500));
      } catch (error) {
        console.error("Logout error:", error);
      } finally {
        // After 1.5 seconds, navigate to the home page
        setShowSpinner(false); // Hide spinner
        navigate("/");
      }
    };

    logout();
  }, [navigate]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {showSpinner ? (
        <CircularProgress size={80} /> // Render spinner while logging out
      ) : (
        <h2>Logged out successfully!</h2>
      )}
    </div>
  );
};

export default LogoutPage;
