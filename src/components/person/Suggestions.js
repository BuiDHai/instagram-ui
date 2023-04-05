import React from 'react';
import Person from './Person';

import styled from 'styled-components';

import avatar from '../../assets/images/avatar.jpg';

const StyledSuggest = styled.div`
  display: block;
  margin-left: -24px;
  width: calc(100% + 48px);
`;
const SuggestHead = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 24px;
  margin-bottom: 10px;
`;
const SuggestHeadTitle = styled.h4`
  color: rgb(168, 168, 168);
  font-size: 14px;
  font-weight: 600;
  width: 100%;
`;
const SuggestHeadLink = styled.a`
  font-size: 12px;
  font-weight: 600;
  flex-shrink: 0;
  margin-left: 10px;
  color: #fff;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;

const SUGGEST_LIST = [
  {
    avatar,
    username: 'mac.koh',
    info: 'Follows you',
  },
  {
    avatar,
    username: 'nguoi.doc.sach',
    info: 'Followed by doc.sach.moi.ngay, henrybui_io',
  },
  {
    avatar,
    username: 'dan.doc.sach',
    info: 'Followed by doc.sach.moi.ngay',
  },
  {
    avatar,
    username: 'cristiano',
    info: 'Suggested for you',
  },
  {
    avatar,
    username: 'nguoi.yeu.sach',
    info: 'Followed by doc.sach.moi.ngay and henrybui_io',
  },
];

const Suggestions = () => {
  return (
    <StyledSuggest>
      <SuggestHead>
        <SuggestHeadTitle>Suggestions for you</SuggestHeadTitle>
        <SuggestHeadLink href='/explore/people'>See all</SuggestHeadLink>
      </SuggestHead>
      {SUGGEST_LIST.map((item) => (
        <Person
          key={item.username}
          avatar={item.avatar}
          name={item.username}
          info={item.info}
          isSuggest={true}
        />
      ))}
    </StyledSuggest>
  );
};

export default Suggestions;
