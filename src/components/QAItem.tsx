import React, { useRef } from "react";
import arrowIcon from "../assets/arrow.png";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";

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
        <div>{item.title}</div>
        {
          active === item?.id ? <FaArrowUpLong /> : <FaArrowDownLong />
        }
        
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
