import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  return (
    <div className="bg-black text-light min-vh-100">
      <div className="container py-5">
        <h1 className="text-center mb-4">About Our Food Delivery Project</h1>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="card mb-4" style={{ backgroundColor: "#333" }}>
              <div className="card-body">
                <h2 className="card-title">Technology Stack</h2>
                <p className="card-text">
                  Our food delivery web application is built using the MERN
                  stack, which includes:
                </p>
                <ul style={{ color: "#b0b0b0" }}>
                  <li>
                    <strong>MongoDB</strong>: A NoSQL database to store all our
                    data.
                  </li>
                  <li>
                    <strong>Express.js</strong>: A web application framework for
                    Node.js.
                  </li>
                  <li>
                    <strong>React</strong>: A JavaScript library for building
                    user interfaces.
                  </li>
                  <li>
                    <strong>Node.js</strong>: A JavaScript runtime built on
                    Chrome's V8 JavaScript engine.
                  </li>
                </ul>
              </div>
            </div>

            <div className="card mb-4" style={{ backgroundColor: "#333" }}>
              <div className="card-body">
                <h2 className="card-title">Authentication</h2>
                <p className="card-text">
                  For secure user authentication, we use{" "}
                  <strong>JWT (JSON Web Tokens)</strong>. JWT allows us to
                  securely transmit information between parties as a JSON
                  object. The token is generated upon user login and is used to
                  verify the user's identity on subsequent requests.
                </p>
              </div>
            </div>

            <div className="card mb-4" style={{ backgroundColor: "#333" }}>
              <div className="card-body">
                <h2 className="card-title">Password Security</h2>
                <p className="card-text">
                  To ensure passwords are stored securely, we use{" "}
                  <strong>bcrypt.js</strong>. Bcrypt allows us to hash
                  passwords, making it difficult for malicious actors to
                  reverse-engineer them and gain unauthorized access to user
                  accounts.
                </p>
              </div>
            </div>

            <div className="card mb-4" style={{ backgroundColor: "#333" }}>
              <div className="card-body">
                <h2 className="card-title">State Management</h2>
                <p className="card-text">
                  Our application uses the <strong>useReducer</strong> hook
                  along with a context reducer for managing the shopping cart.
                  This approach provides a scalable and efficient way to handle
                  state changes related to adding and removing items from the
                  cart.
                </p>
              </div>
            </div>

            <div className="card mb-4" style={{ backgroundColor: "#333" }}>
              <div className="card-body">
                <h2 className="card-title">Additional Features</h2>
                <p className="card-text">
                  We have incorporated several additional features to enhance
                  the user experience, including:
                </p>
                <ul style={{ color: "#b0b0b0" }}>
                  <li>
                    Responsive design using Bootstrap, ensuring the application
                    looks great on all devices.
                  </li>
                  <li>
                    Dark mode for a comfortable viewing experience in low-light
                    conditions.
                  </li>
                  <li>
                    Comprehensive error handling to provide users with clear
                    feedback when something goes wrong.
                  </li>
                  <li>
                    Seamless integration with various payment gateways for a
                    smooth checkout process.
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <button
                className="btn btn-success mt-4"
                onClick={() => (window.location.href = "/")}
              >
                Go Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
