import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Project.css";
const Projects = () => {
  return (
    <div>
      <div className="container projectPage">
        <h2>My Projects</h2>
        <p>Some things I've built so far</p>
        <div className="cards ">
          <div className="card" style={{ width: "400px" }}>
            <div className="card-header">
              <img src="/src/assets/BSN.png" alt="" style={{ width: "100%" }} />
            </div>
            <div className="card-body">
              <div className="card-title">
                <h4>Book Social Network Website</h4>
              </div>
              <div className="card-info">
                <a href="https://github.com/levski1914/React-project/tree/master/book">
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
