import "./header.css";
import logo from "../../img/logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import close_btn from "../../img/close_btn.png";

export const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  useEffect(() => {
    if (isBurgerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isBurgerOpen]);
  return (
    <header className="header">
      <div className="header__top">
        <div className="container header__container header__top-container">
          <Link to={"/"} className="logo">
            <img src={logo} alt="Avion logo"></img>
          </Link>
          <div className="header__details">
            <ul className="header__list">
              <li className="header__item">
                <Link to={"/about"} className="header__link">
                  About Us
                </Link>
              </li>
              <li className="header__item">
                <Link to={"/contact"} className="header__link">
                  Contact
                </Link>
              </li>
              <li className="header__item">
                <Link to={"/about"} className="header__link">
                  Blog
                </Link>
              </li>
            </ul>
            <div className="header__icons">
              <button className="header__icon" aria-label="search">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.5001 13.7929L10.7241 10.0169C11.6314 8.92758 12.0839 7.53038 11.9873 6.11596C11.8908 4.70153 11.2526 3.37879 10.2057 2.42288C9.15867 1.46698 7.78347 0.951515 6.36612 0.983723C4.94877 1.01593 3.5984 1.59333 2.59593 2.59581C1.59345 3.59828 1.01605 4.94865 0.983845 6.366C0.951637 7.78335 1.4671 9.15855 2.423 10.2055C3.37891 11.2525 4.70165 11.8907 6.11608 11.9872C7.5305 12.0838 8.9277 11.6313 10.017 10.7239L13.7931 14.5L14.5001 13.7929ZM2.00012 6.5C2.00012 5.60998 2.26404 4.73995 2.75851 3.99993C3.25297 3.25991 3.95578 2.68313 4.77804 2.34254C5.60031 2.00194 6.50511 1.91283 7.37802 2.08646C8.25094 2.2601 9.05276 2.68868 9.6821 3.31802C10.3114 3.94735 10.74 4.74918 10.9137 5.62209C11.0873 6.495 10.9982 7.3998 10.6576 8.22207C10.317 9.04434 9.7402 9.74714 9.00018 10.2416C8.26016 10.7361 7.39013 11 6.50012 11C5.30705 10.9987 4.16323 10.5241 3.3196 9.68052C2.47597 8.83689 2.00144 7.69306 2.00012 6.5Z" />
                </svg>
              </button>
              <Link to={"/cart"} className="header__icon" aria-label="cart">
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 14C5.55228 14 6 13.5523 6 13C6 12.4477 5.55228 12 5 12C4.44772 12 4 12.4477 4 13C4 13.5523 4.44772 14 5 14Z" />
                  <path d="M12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13C11 13.5523 11.4477 14 12 14Z" />
                  <path d="M14 2.50001H2.91L2.5 0.40001C2.47662 0.285372 2.41379 0.182561 2.32243 0.109474C2.23107 0.0363867 2.11697 -0.0023488 2 1.01668e-05H0V1.00001H1.59L3.5 10.6C3.52338 10.7146 3.58621 10.8175 3.67757 10.8905C3.76893 10.9636 3.88303 11.0024 4 11H13V10H4.41L4 8.00001H13C13.1156 8.00284 13.2286 7.96552 13.3197 7.89441C13.4109 7.8233 13.4746 7.7228 13.5 7.61001L14.5 3.11001C14.5168 3.03582 14.5164 2.95879 14.4989 2.88478C14.4814 2.81076 14.4472 2.74172 14.399 2.6829C14.3508 2.62407 14.2898 2.57703 14.2206 2.54534C14.1515 2.51364 14.076 2.49814 14 2.50001ZM12.6 7.00001H3.81L3.11 3.50001H13.375L12.6 7.00001Z" />
                </svg>
              </Link>
              <Link
                to={"/profile"}
                className="header__icon"
                aria-label="personal"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 3C6.50555 3 6.0222 3.14662 5.61108 3.42133C5.19995 3.69603 4.87952 4.08648 4.6903 4.54329C4.50108 5.00011 4.45158 5.50277 4.54804 5.98773C4.6445 6.47268 4.88261 6.91814 5.23224 7.26777C5.58187 7.6174 6.02733 7.8555 6.51228 7.95196C6.99723 8.04843 7.4999 7.99892 7.95671 7.8097C8.41353 7.62048 8.80397 7.30005 9.07868 6.88893C9.35338 6.4778 9.5 5.99445 9.5 5.5C9.5 4.83696 9.23661 4.20107 8.76777 3.73223C8.29893 3.26339 7.66304 3 7 3ZM7 7C6.70333 7 6.41332 6.91203 6.16665 6.7472C5.91997 6.58238 5.72772 6.34811 5.61418 6.07403C5.50065 5.79994 5.47095 5.49834 5.52882 5.20736C5.5867 4.91639 5.72956 4.64912 5.93934 4.43934C6.14912 4.22956 6.4164 4.0867 6.70737 4.02882C6.99834 3.97094 7.29994 4.00065 7.57403 4.11418C7.84812 4.22771 8.08239 4.41997 8.24721 4.66664C8.41203 4.91332 8.5 5.20333 8.5 5.5C8.49955 5.89769 8.34137 6.27896 8.06017 6.56016C7.77896 6.84137 7.39769 6.99955 7 7Z" />
                  <path d="M7 0C5.61553 0 4.26216 0.410543 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532846 4.32122C0.00303298 5.6003 -0.13559 7.00776 0.134506 8.36563C0.404603 9.7235 1.07129 10.9708 2.05026 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99224 14.1356 8.3997 13.997 9.67879 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73785 14 8.38447 14 7C13.9979 5.14413 13.2597 3.36486 11.9474 2.05256C10.6351 0.74026 8.85588 0.00209095 7 0ZM4 12.1882V11.5C4.00044 11.1023 4.15862 10.721 4.43983 10.4398C4.72104 10.1586 5.10231 10.0004 5.5 10H8.5C8.89769 10.0004 9.27897 10.1586 9.56018 10.4398C9.84139 10.721 9.99957 11.1023 10 11.5V12.1882C9.08959 12.7199 8.05426 13 7 13C5.94574 13 4.91042 12.7199 4 12.1882ZM10.9963 11.4629C10.9863 10.807 10.7191 10.1813 10.2521 9.72061C9.7852 9.25991 9.15595 9.00112 8.5 9H5.5C4.84405 9.00112 4.2148 9.25991 3.74786 9.72061C3.28093 10.1813 3.01369 10.807 3.00375 11.4629C2.09703 10.6533 1.45762 9.58734 1.17017 8.40623C0.882723 7.22513 0.960803 5.98457 1.39407 4.84883C1.82734 3.71309 2.59536 2.73573 3.59644 2.04618C4.59751 1.35663 5.78442 0.987413 7 0.987413C8.21558 0.987413 9.40249 1.35663 10.4036 2.04618C11.4046 2.73573 12.1727 3.71309 12.6059 4.84883C13.0392 5.98457 13.1173 7.22513 12.8298 8.40623C12.5424 9.58734 11.903 10.6533 10.9963 11.4629Z" />
                </svg>
              </Link>
              <button
                className="burger"
                onClick={() => setIsBurgerOpen(!isBurgerOpen)}
              >
                <span className="burger__line"></span>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
              </button>
              <div
                className={`blackout ${isBurgerOpen ? "active" : ""}`}
                onClick={() => setIsBurgerOpen(false)}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`header__bottom ${isBurgerOpen ? "active" : ""}`}>
        <div className="container header__container header__bottom-container">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to={"/catalog"} className="nav__link">
                  All products
                </Link>
              </li>
              <li className="nav__item">
                <Link to={"/catalog"} className="nav__link">
                  Plant pots
                </Link>
              </li>
              <li className="nav__item">
                <Link to={"/catalog"} className="nav__link">
                  Ceramics
                </Link>
              </li>
              <li className="nav__item">
                <Link to={"/catalog"} className="nav__link">
                  Tables
                </Link>
              </li>
              <li className="nav__item">
                <Link to={"/catalog"} className="nav__link">
                  Chairs
                </Link>
              </li>
              <li className="nav__item">
                <Link to={"/catalog"} className="nav__link">
                  Crockery
                </Link>
              </li>
              <li className="nav__item">
                <Link to={"/catalog"} className="nav__link">
                  Tableware
                </Link>
              </li>
              <li className="nav__item">
                <Link to={"/catalog"} className="nav__link">
                  Cutlery
                </Link>
              </li>
            </ul>
          </nav>
          <img
            src={close_btn}
            alt=""
            className="close__btn"
            onClick={() => setIsBurgerOpen(false)}
          ></img>
        </div>
      </div>
    </header>
  );
};
