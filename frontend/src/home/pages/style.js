import styled from 'styled-components';

export const HomeBg = styled.div`
  width: 100%;
  height: 750px;
  background: url('/images/bg6.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const BgText = styled.span`
  background: rgba(0, 0, 0, 0.2);
  filter: blur(15px);
  width: 720px;
  height: auto;
  color: #fff;
`;
