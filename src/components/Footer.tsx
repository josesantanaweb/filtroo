import React from "react";
import google from "../assets/googleplay.png";
import appstore from "../assets/appstore.png";
import logo from "../assets/Isotipo_Azul.png";
import "../styles/components/layout.scss";

export default function Footer() {
  return (
    <footer className="layout__footer">
      <div className="layout__footer-container">
        <div className="layout__footer-contact">
          <img src={logo} alt="logo" className="layout__footer-contact__logo" />
          <div>
            <h4 className="layout__footer-contact__title">
              One platform to monetize them all.
            </h4>
            <p className="layout__footer-contact__text">
              Earn benefits by using social media like you always have
            </p>
          </div>
          <a href="#" className="layout__footer-contact__button">
            Contact Sales
          </a>
        </div>
        <div className="layout__footer-download">
          <a href="#">
            <img
              src={appstore}
              alt="appstore"
              className="layout__footer-download__logo"
            />
          </a>
          <a href="#">
            <img
              src={google}
              alt="googleplay"
              className="layout__footer-download__logo"
            />
          </a>
        </div>
        <div className="layout__footer-nav">
          <ul>
            <li>
              <span>Personal</span>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">App</a>
            </li>
            <li>
              <a href="#">Referrals</a>
            </li>
          </ul>
          <ul>
            <li>
              <span>Products</span>
            </li>
            <li>
              <a href="#">App</a>
            </li>
            <li>
              <a href="#">Rewards</a>
            </li>
            <li>
              <a href="#">AR Filters</a>
            </li>
          </ul>
          <ul>
            <li>
              <span>Resources</span>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Referrals</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
