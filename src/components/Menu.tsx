import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

interface MenuProps {
  setOpenProduct: any;
  setOpenResources: any;
  openProduct: boolean;
  openResources: boolean;
}
const Menu = ({
  setOpenProduct,
  openProduct,
  openResources,
  setOpenResources,
}: MenuProps) => {
  const [activeItem, setActiveItem] = useState(1);

  const handleProducts = () => {
    setOpenProduct(!openProduct);
    setOpenResources(false);
  };

  const handleResources = () => {
    setOpenResources(!openResources);
    setOpenProduct(false);
  };

  return (
    <div className="menu">
      <ul className="menu__item menu__main">
        <li>
          <a
            href="#"
            onClick={() => setActiveItem(1)}
            className={activeItem === 1 ? "active" : ""}
          >
            Personal
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => setActiveItem(2)}
            className={activeItem === 2 ? "active" : ""}
          >
            Enterprise
          </a>
        </li>
      </ul>
      <ul className="menu__item">
        <li>
          <a href="#" onClick={handleProducts}>
            Product{" "}
            {openProduct ? (
              <FaChevronUp size={10} />
            ) : (
              <FaChevronDown size={10} />
            )}
          </a>
        </li>
        <li>
          <a href="#" onClick={handleResources}>
            Resources{" "}
            {openResources ? (
              <FaChevronUp size={10} />
            ) : (
              <FaChevronDown size={10} />
            )}
          </a>
        </li>
        <li>
          <a href="#">App</a>
        </li>
        <li>
          <a href="https://referrals.filtroo.co">Referrals</a>
        </li>
        <li>
          <button className="menu__button">Download App</button>
        </li>
      </ul>
    </div>
  );
};

export default Menu