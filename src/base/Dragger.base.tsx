import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Camera } from "react-feather";
import "../styles/base/input.scss";

export default function Dragger(props: {
  onChange: any;
  style?: React.CSSProperties;
  defaultImage?: any;
  disabled?: boolean;
}) {
  const onDrop = useCallback((acceptedFiles) => {
    const url = URL.createObjectURL(acceptedFiles[0]);
    props.onChange(acceptedFiles, url);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });
  return (
    <div className="dragger-container" style={props.style} {...getRootProps()}>
      <input disabled={props?.disabled} {...getInputProps()} />
      {props?.defaultImage ? (
        <img
          className="dragger-container"
          style={{
            ...props?.style,
            margin: 0,
            padding: 0,
            objectFit: "cover",
          }}
          src={props?.defaultImage}
        />
      ) : (
        <Camera style={{ color: "#222" }} />
      )}
    </div>
  );
}
