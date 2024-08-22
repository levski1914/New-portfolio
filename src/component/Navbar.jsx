import React, { useLayoutEffect, useRef } from "react";
import "./Navbar.css";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const style = {
  backgroundColor: "#000 !important",
  color: "#fff",
};

const Navbar = () => {
  const div = useRef();

  useLayoutEffect(() => {
    console.log(div);
    const divAnimate = div.current.getBoundingClientRect().top;
    const onScroll = () => {
      if (divAnimate < window.scrollY) {
        div.current.style.position = "fixed";
        div.current.style.top = 0;
        div.current.style.left = 0;
      } else {
        div.current.style.position = "relative";
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="navbar">
        <nav ref={div} className="nav">
          <ul>
            <li>
              <Link to="#home">Home</Link>
            </li>
            <li>
              <Link to="#about">About</Link>
            </li>
            <li>
              <Link
                to="#skills"
                scroll={(el) => {
                  const yOffset = -100; // колко пиксела да изместиш надолу
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Skills
              </Link>
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
