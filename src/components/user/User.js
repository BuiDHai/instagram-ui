import React, { useState } from 'react';
import styled from 'styled-components';

const StyledUser = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const UserLink = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
`;
const UserAvatar = styled.figure`
  border-radius: 100px;
  margin-right: 20px;
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  overflow: hidden;
`;
const UserInfo = styled.div`
  width: calc(100% - 76px);
`;
const UserInfoId = styled.p`
  color: #fafafa;
  font-weight: 700;
`;
const UserInfoText = styled.p`
  color: #a8a8a8;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;
const UserSwitch = styled.span`
  color: rgb(0, 149, 246);
  cursor: pointer;
  font-size: 12px;
  flex-shrink: 0;
`;

const User = (props) => {
  const [modal, setModal] = useState(false);

  const handleModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setModal(!modal);
  };

  return (
    <StyledUser>
      <UserLink href='/'>
        <UserAvatar>
          <img src={props.avatar} alt={props.name} />
        </UserAvatar>
        <UserInfo>
          <UserInfoId>{props.username}</UserInfoId>
          <UserInfoText>{props.name}</UserInfoText>
        </UserInfo>
        <UserSwitch onClick={handleModal}>Switch</UserSwitch>
      </UserLink>
    </StyledUser>
  );
};

export default User;
