import React, { useState } from 'react';
import styled from 'styled-components';

import PersonModal from './PersonModal';

const StyledPerson = styled.div`
  display: block;
`;
const PersonLink = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 24px;
  overflow: hidden;
  transition: background 0.3s;
`;
const PersonAvatar = styled.figure`
  border-radius: 100px;
  flex-shrink: 0;
  margin-right: 12px;
  width: 44px;
  height: 44px;
  overflow: hidden;
`;
const PersonInfo = styled.div`
  width: 100%;
`;
const PersonInfoName = styled.p`
  color: #fafafa;
  font-weight: 700;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`;
const PersonInfoText = styled.p`
  color: #a8a8a8;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
  max-width: 100%;
  font-size: ${(props) => (props.isSuggest ? '12px' : '14px')};
`;
const PersonFollow = styled.span`
  color: rgb(0, 149, 246);
  cursor: pointer;
  font-size: 12px;
  flex-shrink: 0;
  margin-left: 10px;
  transition: color 0.3s;
  &:hover {
    color: #fff;
  }
`;

const Person = (props) => {
  const [suggest, setSuggest] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleFollow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    !suggest ? setSuggest(true) : setShowModal(true);
  };
  return (
    <StyledPerson isSuggest={props.isSuggest}>
      <PersonLink href='/'>
        <PersonAvatar>
          <img src={props.avatar} alt='' />
        </PersonAvatar>
        <PersonInfo>
          <PersonInfoName>{props.name}</PersonInfoName>
          <PersonInfoText>
            {props.info}
            {props.follow && ` • ${props.follow}`}
          </PersonInfoText>
        </PersonInfo>
        {props.isSuggest && (
          <PersonFollow onClick={handleFollow}>
            {!suggest ? 'Follow' : 'Following'}
          </PersonFollow>
        )}
      </PersonLink>
      {showModal && (
        <PersonModal
          avatar={props.avatar}
          username={props.name}
          setShowModal={setShowModal}
          setSuggest={setSuggest}
        ></PersonModal>
      )}
    </StyledPerson>
  );
};

export default Person;
