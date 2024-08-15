import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const style = {
  backgroundColor: "#000 !important",
  color: "#fff",
};

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link href="#">Projects</Link>
            </li>
            <li>
              <Link href="#">Contact me </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
