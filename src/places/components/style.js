import styled from "styled-components";

export const Post = styled.div`
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-bottom: 15px;
`;

export const PostImg = styled.img`
  width: 100%;
  height: auto;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const Description = styled.div`
  color: #24315b;
  margin-bottom: 10px;
`;

export const Blog = styled.div`
  color: #24315b;
  padding-left: 12px;
  padding-right: 12px;
`;

export const ReadMore = styled.div`
  color: #aaa;
  cursor: pointer;
  margin-bottom: 8px;
`;
