import React, { useEffect } from "react";
import "../styles/base/filtroo.scss";

export default function PrincipalButton(props: {
  onClick: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  id: string;
  disabled?: boolean;
}) {
  useEffect(() => {
    try {
      // @ts-ignore
      document.querySelector(
        `.filtroo-principal-button-${props.id}`
        // @ts-ignore
      ).onmousemove = (e) => {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;

        e.target.style.setProperty("--x", `${x}px`);
        e.target.style.setProperty("--y", `${y}px`);
      };
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <button
      // @ts-ignore
      key={props.children}
      className={`filtroo-principal-button filtroo-principal-button-${
        props.id
      } ${props.disabled ? "filtroo-principal-button-disabled" : ""}`}
      style={props?.style}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <span style={{ fontWeight: 500 }}>{props.children}</span>
    </button>
  );
}
