import React from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';
import FeedList from '../components/feed/FeedList';

const StyledMain = styled.main`
  display: flex;
  width: calc(100% - var(--header-width));
`;
const MainInner = styled.div`
  display: flex;
  width: 100%;
  max-width: calc(
    var(--feed-width) + var(--feed-margin-right) + var(--sidebar-width)
  );
  margin: 0 auto;
`;
const MainFeed = styled.div`
  width: var(--feed-width);
  margin-right: var(--feed-margin-right);
  padding-top: 40px;
`;

const Main = () => {
  return (
    <StyledMain>
      <MainInner>
        <MainFeed>
          <FeedList></FeedList>
        </MainFeed>
        <Sidebar></Sidebar>
      </MainInner>
    </StyledMain>
  );
};

export default Main;
