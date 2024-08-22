import React from "react";
// import { Navbar } from "react-bootstrap";
import Navbar from "./Navbar";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar />
      <div id="home" className="container-fluid header">
        {/* <img src="./banner.png" alt="" /> */}
        <div className="title-logo">
          <div className="title">
            <span> Hello,</span>
            <h1>
              I'm a web
              <br />
              Developer <br />
            </h1>
            <h2> I build things for web</h2>
          </div>
          <div className="logo">
            <img src="/src/component/banner.png" alt="" />
          </div>
        </div>
      </div>
      <div className="container-fluid info">
        <article className="litteInfo">
          <ul className="projectsExp">
            <li>
              <h2>2</h2>
              <span>
                Years Of <br /> Experience
              </span>
            </li>
            <li>
              <h2>5</h2>
              <span>
                Complexed projects <br /> completed{" "}
              </span>
            </li>
          </ul>
          <ul className="someSkils">
            <li>
              <img
                src="https://www.brianwachira.dev/icons/html-5.png"
                alt="HTML"
              />
            </li>
            <li>
              <img src="https://www.brianwachira.dev/icons/css.png" alt="CSS" />
            </li>
            <li>
              {" "}
              <img src="https://www.brianwachira.dev/icons/nodejs-1.svg" />
            </li>
            <li>
              <img src="https://www.gstatic.com/mobilesdk/240501_mobilesdk/firebase_28dp.png" />
            </li>
            <li>
              <img
                src="https://www.brianwachira.dev/icons/react-2.svg"
                alt="React"
              />
            </li>
          </ul>
        </article>
      </div>
    </>
  );
};

export default Header;
