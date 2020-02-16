import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  height: 50px;
  background-color: #fd953c;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const HeaderRow = styled.div`
  width: 33.33%;
  display: flex;
  flex-direction: row;
  padding-left: 50px;
  padding-right: 50px;
  box-sizing: border-box;
  justify-content: ${props => props.align};
  align-items: center;
`;

export const NavButton = styled(NavLink)`
  height: 100%;
`;

export const LogIn = styled.div`
  width: 100px;
  height: 30px;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-weight: 700;
  margin: 8px;
  box-sizing: border-box;
  background-color: #021839;
  cursor: pointer;
`;
