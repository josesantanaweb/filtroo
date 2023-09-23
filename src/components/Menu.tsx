import React from 'react'

const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu__item">
        <li>
          <a href="#">Personal</a>
        </li>
        <li>
          <a href="#">Enterprise</a>
        </li>
      </ul>
      <ul className="menu__item">
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
        <li>
          <button className="menu__button">Join Filltroo</button>
        </li>
      </ul>
    </div>
  );
}

export default Menu