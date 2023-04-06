import React, { useState } from 'react';
import styled from 'styled-components';
import Search from '../components/search/Search';
// import { Link } from 'react-router-dom';

// constants
import { MENU_ITEMS } from '../constants/menu';

const MenuList = styled.ul`
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;
`;
const StyledMenuItem = styled.li`
  display: block;
`;
const MenuLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 12px;
  margin: 8px 0;
`;
const MenuIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 18px;
`;

const Menu = () => {
  // const [active, setActive] = useState();
  return (
    <MenuList>
      {MENU_ITEMS.map((menu) => (
        <MenuItem
          key={menu.key}
          menuKey={menu.key}
          isModal={menu.isModal}
          link={menu.url}
          icon={menu.icon}
          label={menu.label}
        />
      ))}
    </MenuList>
  );
};

const MenuItem = ({ menuKey, link, icon, label, isModal }) => {
  const [showModal, setShowModal] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };
  return (
    <StyledMenuItem>
      {isModal ? (
        menuKey === 'search' ? (
          <>
            <MenuLink href='#' onClick={handleSearch}>
              <MenuIcon src={icon} alt='' />
              {label}
            </MenuLink>
            {showModal && (
              <Search className={showModal ? 'active' : ''}></Search>
            )}
          </>
        ) : (
          <MenuLink href='#'>
            <MenuIcon src={icon} alt='' />
            {label}
          </MenuLink>
        )
      ) : (
        <MenuLink href={link}>
          <MenuIcon src={icon} alt='' />
          {label}
        </MenuLink>
      )}
    </StyledMenuItem>
  );
};

export default Menu;
