import React from 'react';
import User from '../components/user/User';
import Suggestions from '../components/person/Suggestions';
import styled from 'styled-components';

import avatar from '../assets/images/avatar.jpg';

const StyledSidebar = styled.div`
  width: 100%;
  max-width: var(--sidebar-width);
  padding: 30px 0;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <User avatar={avatar} username='bui.d.hai' name='Bui D. Hai' />
      <Suggestions />
    </StyledSidebar>
  );
};

export default Sidebar;
