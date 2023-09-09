import React from "react";
import Loader, { Rings, TailSpin } from "react-loader-spinner";

export default function Button(props: {
  onClick: any;
  value: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  isPrincipal?: boolean;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
}) {
  const {
    onClick,
    children,
    value,
    style,
    disabled = false,
    loading = false,
  } = props;

  return (
    <button
      className={`button-base ${props.isPrincipal ? "button-principal" : ""} ${
        props.className ? props.className : ""
      }`}
      style={style}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      disabled={disabled || loading}
    >
      {children ? (
        children
      ) : loading ? (
        <TailSpin
          radius={2}
          height={30}
          color={props.isPrincipal ? "#52a9f5" : "#000"}
        />
      ) : (
        <span className="button-base__value">{value}</span>
      )}
    </button>
  );
}
