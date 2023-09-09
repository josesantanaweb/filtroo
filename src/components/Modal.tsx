import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Modal as AModal } from "antd";

const Modal = forwardRef(
  (props: { children: React.ReactNode; title: string }, ref) => {
    const [visible, setVisible] = useState(false);
    useImperativeHandle(ref, () => ({
      open() {
        setVisible(true);
      },
      close() {
        setVisible(false);
      },
    }));
    return (
      <AModal
        className="filtroo-modal"
        style={{ maxWidth: 300 }}
        title={props.title}
        footer={false}
        onCancel={() => setVisible(false)}
        visible={visible}
      >
        {props.children}
      </AModal>
    );
  }
);

export default Modal;
