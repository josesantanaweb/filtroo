import React from "react";
import { ArrowLeft } from "react-feather";
import "../styles/base/goBack.scss";

export default function GoBack(props: { onClick: any }) {
  return (
    <button onClick={props.onClick} type="button" className="go-back-container">
      <ArrowLeft style={{ color: "#6F6F6F" }} />
    </button>
  );
}
