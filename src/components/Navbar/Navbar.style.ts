import styled from "styled-components";

export const Nav = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 80px;
  padding-right: 80px;
  font-size: 45px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-start;
  @media (max-width: 700px) {
    display: block;
    padding-left: 20px;
    padding-right: 20px;
  }
  background-color: #2a7c6f;
  font-family: "Cond";
  /* border-bottom: 2px solid white; */
`;

export const Title = styled.span`
  order: 0;
  flex: 2 1 auto;
  @media (max-width: 700px) {
    width: 100%;
    display: block;
    text-align: center;
  }
  color: white;
`;

export const Flag = styled.span`
  order: 0;
  padding-left: 20px;
  flex: 0 1 auto;
  align-self: auto;
  &:hover,
  &:focus {
    cursor: pointer;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Flags = styled.span`
  @media (max-width: 700px) {
    width: 100%;
    display: block;
    text-align: center;
  }
  color: white;
`;
