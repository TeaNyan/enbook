import styled from "styled-components";

export const OverLayout = styled.div`
  top: calc((100vh - ${props => props.height}px) / 2);
  left: calc((100vw - ${props => props.width}px) / 2);
  justify-content: space-between;
  height: ${props => props.height || 500}px
  width: ${props => props.width || 250}px
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &focus: {
    outline: none
  }
`;
