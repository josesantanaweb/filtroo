import React, { useEffect, useState } from "react";
import "../styles/base/charts.scss";

export default function Bar(props: {
  name: string;
  value: number;
  maxValue: number;
}) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const h = (props.value * 250) / props.maxValue;
    setHeight(h);
  }, []);

  return (
    <div className="bar-container">
      <span style={{ marginBottom: 10 }}>{props.value}</span>
      <div style={{ height }} className="bar-children" />
      <span>{props.name}</span>
    </div>
  );
}
