import React from 'react';
import {
  PersonModalHead,
  PersonModalAvatar,
  PersonModalQuestion,
  StyledModalAction,
  StyledModalActionItem,
  StyledModalActionWarning,
  StyledModalActionDefault,
} from '../modal/styledConponents';

import ModalContainer from '../modal/ModalContainer';

const PersonModal = ({ avatar, username, setShowModal, setSuggest }) => {
  const handleCancle = () => {
    setShowModal(false);
  };
  const handleUnfollow = () => {
    setSuggest(false);
    setShowModal(false);
  };
  return (
    <ModalContainer handleCancle={handleCancle}>
      <PersonModalHead>
        <PersonModalAvatar>
          <img src={avatar} alt={username} />
        </PersonModalAvatar>
        <PersonModalQuestion>Unfollow @{username}?</PersonModalQuestion>
      </PersonModalHead>
      <StyledModalAction>
        <StyledModalActionItem>
          <StyledModalActionWarning onClick={handleUnfollow}>
            Unfollow
          </StyledModalActionWarning>
        </StyledModalActionItem>
        <StyledModalActionItem>
          <StyledModalActionDefault onClick={handleCancle}>
            Cancel
          </StyledModalActionDefault>
        </StyledModalActionItem>
      </StyledModalAction>
    </ModalContainer>
  );
};

export default PersonModal;
