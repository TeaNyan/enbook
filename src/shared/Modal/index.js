import React from "react";

import { Overlay } from "@blueprintjs/core";

import { OverLayout } from "./style";

const Modal = (props) => {
  const { onCloseModal } = props;

  return (
    <Overlay
      transitionDuration={0}
      isOpen={true}
      canOutsideClickClose={true}
      canEscapeKeyClose={true}
      onClose={onCloseModal}>
      <OverLayout height={400} width={350}>
        {props.children}
      </OverLayout>
    </Overlay>
  );
};

export default Modal;
