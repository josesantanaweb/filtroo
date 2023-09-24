import React, { useState } from "react";
import Slider from "react-slick";

interface SubmenuProps {
  open: boolean;
  data?: any;
}

const SubMenu = ({ open, data }: SubmenuProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      {open && (
        <div className="submenu">
          <div className="submenu__sections">
            <h3>{data.title}</h3>
            <ul>
              {data.sections.map((section: any) => (
                <li>
                  <h5>
                    {section.icon}
                    {section.label}
                  </h5>
                  <p>{section.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="submenu__rewards">
            <h3>Trending Rewards</h3>
            <div className="submenu__rewards-slider">
              <Slider {...settings}>
                {data.sliders.map((slider: any) => (
                  <img src={slider} alt={slider} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubMenu;
