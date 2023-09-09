import React from "react";
import "../styles/base/input.scss";
import { Check } from "react-feather";

export default function Checkbox(props: { checked: boolean; onChange: any }) {
  return (
    <button
      className={`checkbox-container ${
        props.checked ? "checkbox-container--checked" : ""
      }`}
      type="button"
      onClick={(e) => {
        e.preventDefault();
        props.onChange();
      }}
    >
      {props.checked && (
        <Check style={{ color: "#00A2F2", transform: "scale(2.5)" }} />
      )}
    </button>
  );
}
