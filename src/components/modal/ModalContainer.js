import React from 'react';
import { Modal, ModalMask, ModalContent } from './styledConponents';

const ModalContainer = (props) => {
  return (
    <Modal>
      <ModalMask onClick={props.handleCancle}></ModalMask>
      <ModalContent>{props.children}</ModalContent>
    </Modal>
  );
};

export default ModalContainer;
