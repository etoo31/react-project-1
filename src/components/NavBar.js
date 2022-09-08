import React from "react";
import udemyIcon from "../img/Udemy-icon.png";
function NavBar() {
  return (
    // Nav Bar
    <nav className="nav">
      {/*Udemy Logo*/}
      <div className="navbar-brand">
        <a href="index.html" className="udemy-icon"></a>
      </div>
      {/*menue button */}
      <button
        className="navbar-toggler udemy-menue"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      {/*Nav Bar Items*/}
      <ul className="nav-items">
        {/*Category link*/}
        <li>
          <a href="#" className="nav-link categories">
            Categories
          </a>
        </li>
        {/*nav form*/}
        <li>
          <form className="nav-form" id="nav-form">
            <label htmlFor="search-input"></label>
            <input
              type="search"
              placeholder="Search for anything"
              id="search-input"
              className="search-input search-icon"
            />
            <button className="nav-btn nav-form-button">Search</button>
          </form>
        </li>
        {/*Udemy Business link*/}
        <li>
          <a href="#" className="nav-link udemy-busi">
            Udemy Business
          </a>
        </li>
        {/*Teach on udemy link*/}
        <li>
          <a href="#" className="nav-link teach-on-udemy">
            Teach on Udemy
          </a>
        </li>
        {/*search icon link*/}
        <li>
          <button className="search-nav-bar-icon"></button>
        </li>
        {/*cart icon link*/}
        <li>
          <i className="fa-solid fa-cart-shopping cart nav"></i>
        </li>
        {/*Nav button*/}
        <li className="nav-btns">
          <button className="nav-btn">Log in</button>
          <button className="nav-btn sign-up-btn">Sign up</button>
          <button className="nav-btn">
            <i className="fa-solid fa-globe"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
