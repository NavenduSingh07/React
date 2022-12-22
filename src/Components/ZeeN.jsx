/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
// import style from "./zee.module.css";
import "./zee.css";
import img1 from "../Images/icon.jpg";
// import img2 from "../Images/searchicon.png";
const ZeeN = () => {
  const [active, setActive] = useState("home");
  return (
    <section id="nav">
      <article>
        <div className="logo">
          <img
            src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.55"
            title="ZEE5 Logo"
            alt="ZEE5 Logo"
          ></img>
        </div>
        <div className="menu">
          <ol>
            <li className={`${active === "home" ? "active" : ""}`}>
              <a
                onClick={() => {
                  setActive("home");
                }}
              >
                Home
              </a>
            </li>
            <li className={`${active === "tv" ? "active" : ""}`}>
              <a
                onClick={() => {
                  setActive("tv");
                }}
              >
                TV Shows
              </a>
            </li>
            <li className={`${active === "movies" ? "active" : ""}`}>
              <a
                onClick={() => {
                  setActive("movies");
                }}
              >
                Movies
              </a>
            </li>
            <li>
              <a href="#">Web Series</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">
                <img className="more" src={img1} alt="" />
              </a>
            </li>
          </ol>
        </div>
        <div id="search">
          <i class="fa-solid fa-magnifying-glass" className="cust-icon"></i>

          <input
            className="cust-input"
            type="text"
            placeholder="Search for Movies, Shows, Channels etc."
          />
        </div>
        <div id="last">
          <div className="btn1">
            A <sup>आ</sup>
          </div>
          <div className="btn2">LOGIN</div>
          <div className="btn3">Buy Plan</div>
        </div>
      </article>
    </section>
  );
};

export default ZeeN;
