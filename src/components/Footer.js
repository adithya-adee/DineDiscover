import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  const handleAbout = () => {
    window.location.href = "/about";
  };

  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex align-items-center">
            <span className="text-muted">© 2024 DineDiscover, Inc</span>
            <span
              className="ms-3 text-muted"
              onClick={handleAbout}
              style={{ cursor: "pointer" }}
            >
              About
            </span>
          </div>
          {/* <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="/">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="/">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="/">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </footer>
  );
}
