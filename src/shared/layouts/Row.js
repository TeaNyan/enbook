import styled from "styled-components";

export const Row = styled.div`
  width: ${props => props.width || "100%"};
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent || "flex-start"};
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
`;
