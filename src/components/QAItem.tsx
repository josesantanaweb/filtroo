import React, { useRef } from "react";
import arrowIcon from "../assets/arrow.png";

interface PhoneInputProps {
  item: any;
  handleOpenQa: (id: number) => void;
  active: number;
}

const QAItem = ({ item, handleOpenQa, active }: PhoneInputProps) => {
  const contentEl = useRef<HTMLInputElement>(null);
  return (
    <div className="index__faq-item">
      <div
        className="index__faq-item__header"
        onClick={() => handleOpenQa(item?.id)}
      >
        <span>{item.title}</span>
        <img
          src={arrowIcon}
          alt="arrow"
          width={16}
          style={{ transform: active === item?.id ? "rotate(178deg)" : "" }}
        />
      </div>
      <div
        ref={contentEl}
        className={`index__faq-item__body ${active === item?.id ? "open" : ""}`}
      >
        {item.description}
      </div>
    </div>
  );
};

export default QAItem;
