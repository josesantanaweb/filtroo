import React, { useState } from "react";
import menuIcon from "../assets/menu.png";

const MenuMobile = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="menu-mobile">
      <div className='menu-mobile__toggle' onClick={() => setOpen(!open)}>
        <img src={menuIcon} alt="menu" />
      </div>
      {
        open && 
        <>
          <ul className="menu-mobile__item">
            <li>
              <a href="#">Personal</a>
            </li>
            <li>
              <a href="#">Enterprise</a>
            </li>
          </ul>
          <ul className="menu-mobile__item">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </>
      }
    </div>
  );
};

export default MenuMobile;