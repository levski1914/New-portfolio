import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Project.css";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div>
      <div id="projects" className="container projectPage">
        <h2>My Projects</h2>
        <p>Some things I've built so far</p>
        <div className="cards flex g-2 position-relative z-1 ">
          <div className="card" style={{ width: "400px" }}>
            <div className="card-header">
              <img src="ams.png" alt="" style={{ width: "100%" }} />
            </div>
            <div className="card-body">
              <div className="card-title">
                <h4>Archive management system</h4>
              </div>
              <div className="card-info">
                <a
                  target="_blank"
                  href="https://archive-management.netlify.app/"
                >
                  <FontAwesomeIcon icon="fa-solid fa-wifi" />
                  View live
                </a>
                <br />
                <a
                  target="_blank"
                  href="https://github.com/levski1914/Archive-management---project"
                >
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: "400px" }}>
            <div className="card-header">
              <img
                src="../../public/mern-netflix.webp"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
            <div className="card-body">
              <div className="card-title">
                <h4>Forecast weather</h4>
              </div>
              <div className="card-info">
                <a
                  target="_blank"
                  href="https://mern-netfl-2024.netlify.app/register"
                >
                  <FontAwesomeIcon icon="fa-solid fa-wifi" />
                  View live
                </a>
                <br />
                <a
                  target="_blank"
                  href="https://github.com/levski1914/Forecast"
                >
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: "400px" }}>
            <div className="card-header">
              <img
                src="../../public/hqdefault.webp"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
            <div className="card-body">
              <div className="card-title">
                <h4>MERN Chat App</h4>
              </div>
              <div className="card-info">
                <a
                  target="_blank"
                  href="https://mern-chat-app-2024.netlify.app/"
                >
                  <FontAwesomeIcon icon="fa-solid fa-wifi" />
                  View live
                </a>
                <br />
                <a
                  target="_blank"
                  href="https://github.com/levski1914/MERN---Chat-App---React--Node.js--Socket.io-and-MongoDB--Express-"
                >
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
