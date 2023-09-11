import React from "react";
import "../styles/base/input.scss";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  placeholder?: string;
  extendedProps?: any;
}

export default function Input(props: InputProps) {
  return (
    <input
      className={`filtroo-input ${props.className}`}
      disabled={props.disabled}
      value={props.value}
      placeholder={props.placeholder}
      {...props}
      {...props.extendedProps}
    />
  );
}
