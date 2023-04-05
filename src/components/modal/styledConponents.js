import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;
`;
const ModalMask = styled.div`
  background-color: rgba(0, 0, 0, 0.65);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
`;
const ModalContent = styled.div`
  background: rgb(38, 38, 38);
  border-radius: 15px;
  position: absolute;
  width: 400px;
  height: auto;
  max-height: 90vh;
  overflow-y: auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const PersonModalHead = styled.div`
  padding: 20px;
  text-align: center;
`;
const PersonModalAvatar = styled.figure`
  border-radius: 100px;
  width: 90px;
  height: 90px;
  margin: 0 auto 15px;
  overflow: hidden;
`;
const PersonModalQuestion = styled.p`
  color: #f5f5f5;
  font-size: 14px;
`;
const StyledModalAction = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;
const StyledModalActionItem = styled.li`
  border-top: 1px solid rgba(54, 54, 54);
`;
const StyledModalActionWarning = styled.button`
  color: rgb(237, 73, 86);
  display: block;
  cursor: pointer;
  background: none;
  box-shadow: none;
  font-weight: 600;
  outline: none;
  padding: 10px;
  width: 100%;
`;
const StyledModalLinkWarning = styled.a`
  color: rgb(237, 73, 86);
  display: block;
  cursor: pointer;
  background: none;
  box-shadow: none;
  font-weight: 600;
  outline: none;
  padding: 10px;
  width: 100%;
`;
const StyledModalActionDefault = styled.button`
  color: #fff;
  display: block;
  cursor: pointer;
  background: none;
  box-shadow: none;
  outline: none;
  padding: 10px;
  width: 100%;
`;
const StyledModalLinkDefault = styled.a`
  color: #fff;
  display: block;
  cursor: pointer;
  background: none;
  box-shadow: none;
  outline: none;
  padding: 10px;
  width: 100%;
`;

export {
  Modal,
  ModalMask,
  ModalContent,
  PersonModalHead,
  PersonModalAvatar,
  PersonModalQuestion,
  StyledModalAction,
  StyledModalActionItem,
  StyledModalActionWarning,
  StyledModalLinkWarning,
  StyledModalActionDefault,
  StyledModalLinkDefault,
};
