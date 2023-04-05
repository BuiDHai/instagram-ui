import React from 'react';
import styled from 'styled-components';
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
  margin: 4px 0;
`;
const MenuIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 15px;
`;

const Menu = () => {
  // const [active, setActive] = useState();
  return (
    <MenuList>
      {MENU_ITEMS.map((menu) => (
        <MenuItem
          key={menu.key}
          link={menu.url}
          icon={menu.icon}
          label={menu.label}
        />
      ))}
    </MenuList>
  );
};

const MenuItem = ({ link, icon, label }) => {
  return (
    <StyledMenuItem>
      <MenuLink href={link}>
        <MenuIcon src={icon} alt='' />
        {label}
      </MenuLink>
    </StyledMenuItem>
  );
};

export default Menu;
