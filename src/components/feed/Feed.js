import React, { useState } from 'react';
import dot from '../../assets/icons/dot.svg';

import ShowFile from './ShowFile';
import FeedModal from './FeedModal';

import {
  StyledFeed,
  FeedContent,
  FeedFoot,
  FeedHead,
  HeadButton,
  HeadUser,
  HeadUserAvatar,
  HeadUserInfo,
  HeadUserInfoName,
  HeadUserInfoLink,
  HeadUserInfoText,
} from './styledComponents';

const Feed = ({ avatar, username, info, location, time, contentList }) => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(true);
  };
  return (
    <StyledFeed>
      <FeedHead>
        <HeadUser>
          <HeadUserAvatar>
            <img src={avatar} alt={username} />
          </HeadUserAvatar>
          <HeadUserInfo>
            <HeadUserInfoName>
              <HeadUserInfoLink href={username}>{username}</HeadUserInfoLink>
              {time && (
                <>
                  <span> • </span>
                  <span>{time}</span>
                </>
              )}
            </HeadUserInfoName>
            {info && (
              <HeadUserInfoText>
                <a href={'/explore/location/' + location}>{info}</a>
              </HeadUserInfoText>
            )}
          </HeadUserInfo>
        </HeadUser>
        <HeadButton onClick={handleModal}>
          <img src={dot} alt='' />
        </HeadButton>
      </FeedHead>
      <FeedContent>
        <ShowFile contentList={contentList}></ShowFile>
      </FeedContent>
      <FeedFoot></FeedFoot>
      {showModal && <FeedModal setShowModal={setShowModal}></FeedModal>}
    </StyledFeed>
  );
};

export default Feed;
