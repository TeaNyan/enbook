import styled from 'styled-components';

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
