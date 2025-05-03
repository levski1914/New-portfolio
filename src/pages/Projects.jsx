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
        <div className="cards row g-2 position-relative z-1 ">
          <div className="card col-4" style={{ width: "400px" }}>
            <div className="card-header">
              <img src="ams.png" alt="" style={{ width: "100%" }} />
            </div>
            <div className="card-body">
              <div className="card-title">
                <h4>Archive management system</h4>
                <h5>React + NodeJS + MongoDB</h5>
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
          <div className="card col-4" style={{ width: "400px" }}>
            <div className="card-header">
              <img src="forecast.png" alt="" style={{ width: "100%" }} />
            </div>
            <div className="card-body">
              <div className="card-title">
                <h4>Forecast weather</h4>
                <h5>React + NodeJS + MongoDB</h5>
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
          <div className="card col-4" style={{ width: "400px" }}>
            <div className="card-header text-center">
              <img
                src="https://play-lh.googleusercontent.com/TDND41RITLkmamvd0a9Qsq0fn0JVR_b-SGRIWVApc-_ggIYA9-zAPKSUvCJ1ZqusF1kT=w240-h480-rw"
                alt=""
                style={{ width: "50%" }}
              />
            </div>
            <div className="card-body">
              <div className="card-title">
                <h4>To-do,Shopping,Expenses app</h4>
                <h5>React + React Native + Expo Go</h5>
              </div>
              <div className="card-info">
                <br />
                <a
                  target="_blank"
                  href="https://github.com/levski1914/AI-Todo-Shopping-Expenses"
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
