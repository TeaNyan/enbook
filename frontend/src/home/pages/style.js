import styled from "styled-components";

export const HomeBg = styled.div`
  width: 100%;
  height: 750px;
  background: url("/images/bg6.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const BgText = styled.span`
  width: 720px;
  height: auto;
  color: #fff;
  width: auto;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.35);
  padding: 4px 18px 4px 18px;
  text-align: center;
`;

export const GetStartedButton = styled.button`
  width: 120px;
  height: 36px;
  background-color: #fd953c;
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
`;

export const HomeTags = styled.div`
  margin: 38px;
  min-width: 720px;
  width: 70%;
  height: 600px;
  background-color: #021839;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 45px;
`;

export const TagText = styled.span`
  font-size: 18px;
  text-align: justify;
`;
