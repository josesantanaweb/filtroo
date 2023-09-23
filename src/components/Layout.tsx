import { Dropdown } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/Azul_Negro.png";
import Gold from "../assets/gold.png";
import PrincipalButton from "../base/PrincipalButton.base";
import "../styles/components/layout.scss";
import Footer from "./Footer";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

export default function Layout() {
  const [links] = useState([
    {
      value: "Users",
      link: "https://filtroo.co/earn-double-coins-and-exclusive-rewards-with-your-stories/",
    },
    {
      value: "Creators",
      link: "https://filtroo.co/create-new-instagram-effects-and-earn-a-side-income/",
    },
    {
      value: "Businesses",
      link: "https://filtroo.co/increase-brand-awareness-user-engagement-and-revenue-through-ar-filters/",
    },
    // {
    //   value: "Eshop",
    //   link: "https://filtroo.co/reach-new-customers-and-increase-your-sales-with-filtroo/",
    // },
    { value: "Referrals", link: "https://referrals.filtroo.co" },
  ]);
  return (
    <div className="layout-container">
      <nav className="layout-nav-mobile">
        <a href="https://filtroo.co/">
          <img src={Logo} className="layout-nav__logo" />
        </a>
        <MenuMobile />
      </nav>
      <nav className="layout-nav">
        <a href="https://filtroo.co/">
          <img src={Logo} className="layout-nav__logo" />
        </a>
        <Menu />
      </nav>
      <main className="main-layout">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
