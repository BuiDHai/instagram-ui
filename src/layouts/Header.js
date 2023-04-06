import React from 'react';
// import Search from './components/search/Search';
import Menu from './Menu';
import logo from '../assets/images/logo.svg';

import styled from 'styled-components';

const StyledHeader = styled.header`
  background: #000;
  border-right: 1px solid rgb(38, 38, 38);
  height: 100dvh;
  width: var(--header-width);
  padding: 20px 12px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;
`;

const StyledLogo = styled.div`
  padding: 20px 12px;
  margin-bottom: 15px;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  height: 29px;
  img {
    height: 100%;
  }
`;

const Header = () => {
  return (
    <StyledHeader id='header'>
      <div className='header__inner'>
        <StyledLogo>
          <StyledLink href='/'>
            <img src={logo} alt='Instagram' />
          </StyledLink>
        </StyledLogo>
        <nav className='header__nav'>
          <Menu />
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
