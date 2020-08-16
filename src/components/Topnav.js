import React, { useState, useEffect } from "react";
import "./Topnav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import NoScroll from "no-scroll";
function Topnav() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query !== "") console.log("Searched for " + query);
    else console.log("Search box cant be empty!");
  };

  return (
    <nav>
      <div className="topnav__logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="topnav__search-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="q"
            id="q"
            placeholder="Search Products, example 'Saree'"
            value={query}
            autoComplete="off"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button>Go</button>
        </form>
      </div>
      <div
        className="topnav__hamburgar"
        onClick={() => {
          setMenuVisible(!menuVisible);
        }}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`topnav__links ${menuVisible ? "topnav__open" : ""}`}>
        <li className="topnav__item">
          <Link to="/">Item1</Link>
        </li>
        <li className="topnav__item">
          <Link to="/">Item2</Link>
        </li>
        <li className="topnav__item">
          <Link to="/">Item3</Link>
        </li>
        <li className="topnav__btn">
          <Link to="/cart">
            <span className="topnav__secondary-btn">Cart</span>
          </Link>
        </li>
        <li className="topnav__btn">
          <Link to="/login">
            <span className="topnav__primary-btn">Login</span>
          </Link>
        </li>
      </ul>
      {menuVisible ? NoScroll.on() : NoScroll.off()}
    </nav>
  );
}

export default Topnav;
