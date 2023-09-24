import React, {  useState } from "react";
import { Outlet} from "react-router-dom";
import Logo from "../assets/Azul_Negro.png";
import "../styles/components/layout.scss";
import Footer from "./Footer";
import Menu from "./Menu";
import PruductSubMenu from "./SubMenu";
import ResourcesSubMenu from "./SubMenu";
import MenuMobile from "./MenuMobile";
import {
  FaBorderAll,
  FaGift,
  FaRegStar,
  FaRegFileLines,
  FaRegCircleQuestion,
} from "react-icons/fa6";
import slider1 from "../assets/slider-1.png";
import slider2 from "../assets/slider-2.png";
import slider3 from "../assets/slider-3.png";
import slider4 from "../assets/slider-4.png";

const productsData = {
  title: "Product",
  sections: [
    {
      icon: <FaBorderAll style={{ marginRight: 10 }} />,
      label: "App",
      description: "The app to monetize all video content from social media",
    },
    {
      icon: <FaGift style={{ marginRight: 10 }} />,
      label: "Rewards",
      description:
        "Access all the information about the video content that users share about your brand on social media",
    },
    {
      icon: <FaRegStar style={{ marginRight: 10 }} />,
      label: "AR Filters",
      description:
        "Access all the information about the video content that users share about your brand on social media",
    },
  ],
  sliders: [
    slider1,
    slider2,
    slider3,
    slider4,
  ]
};

const resourcesData = {
  title: "Resources",
  sections: [
    {
      icon: <FaRegCircleQuestion style={{ marginRight: 10 }} />,
      label: "FAQs",
      description: "The app to monetize all video content from social media",
    },
    {
      icon: <FaRegFileLines style={{ marginRight: 10 }} />,
      label: "Blog",
      description:
        "Access all the information about the video content that users share about your brand on social media",
    },
  ],
  sliders: [slider1, slider2, slider3, slider4],
};

export default function Layout() {
  const [openProduct, setOpenProduct] = useState(false)
  const [openResources, setOpenResources] = useState(false);
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
        <Menu
          setOpenProduct={setOpenProduct}
          openProduct={openProduct}
          setOpenResources={setOpenResources}
          openResources={openResources}
        />
        <PruductSubMenu open={openProduct} data={productsData} />
        <ResourcesSubMenu open={openResources} data={resourcesData} />
      </nav>
      <main className="main-layout">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
