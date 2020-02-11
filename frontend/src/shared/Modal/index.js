import React from 'react';

import { Overlay } from '@blueprintjs/core';

const Modal = props => {
  return <Overlay isOpen={false}>{props.children}</Overlay>;
};

export default Modal;
