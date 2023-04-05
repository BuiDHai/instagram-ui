import React from 'react';
import styled from 'styled-components';
import Feed from './Feed';

import { FEED_LIST } from '../../constants/feeds';

const StyledList = styled.div`
  display: block;
  max-width: 470px;
  margin: 0 auto;
`;

const FeedList = () => {
  return (
    <StyledList>
      {FEED_LIST.map((item) => (
        <Feed
          key={item.user.username}
          avatar={item.user.avatar}
          username={item.user.username}
          info={item.user.info}
          location={item.user.location}
          time={item.time}
          contentList={item.content}
        ></Feed>
      ))}
    </StyledList>
  );
};

export default FeedList;
