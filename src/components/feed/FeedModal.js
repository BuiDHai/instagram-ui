import React from 'react';
import ModalContainer from '../modal/ModalContainer';
// import { FEED_ACTION_MODAL } from '../../constants/feeds';

import {
  StyledModalAction,
  StyledModalActionItem,
  StyledModalActionWarning,
  StyledModalLinkWarning,
  StyledModalActionDefault,
  StyledModalLinkDefault,
} from '../modal/styledConponents';

const FeedModal = ({ setShowModal }) => {
  const handleCancle = () => {
    setShowModal(false);
  };
  return (
    <ModalContainer handleCancle={handleCancle}>
      <StyledModalAction>
        <StyledModalActionItem>
          <StyledModalLinkWarning>Report</StyledModalLinkWarning>
        </StyledModalActionItem>
        <StyledModalActionItem>
          <StyledModalActionWarning>Unfollow</StyledModalActionWarning>
        </StyledModalActionItem>
        <StyledModalActionItem>
          <StyledModalActionDefault>Add to favorites</StyledModalActionDefault>
        </StyledModalActionItem>
        <StyledModalActionItem>
          <StyledModalLinkDefault href='/p/link-to-post'>
            Go to post
          </StyledModalLinkDefault>
        </StyledModalActionItem>
        <StyledModalActionItem>
          <StyledModalActionDefault>Share to...</StyledModalActionDefault>
        </StyledModalActionItem>
        <StyledModalActionItem>
          <StyledModalActionDefault>Copy link</StyledModalActionDefault>
        </StyledModalActionItem>
        <StyledModalActionItem>
          <StyledModalActionDefault>Embed</StyledModalActionDefault>
        </StyledModalActionItem>
        <StyledModalActionItem>
          <StyledModalActionDefault>
            About this account
          </StyledModalActionDefault>
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

export default FeedModal;
