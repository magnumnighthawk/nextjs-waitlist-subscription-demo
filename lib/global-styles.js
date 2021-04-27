import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Work sans';
    background: #F6F6F6;
    font-size: 16px;
  }
`;

export const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column;
`;

export const StyledBody = styled.main`
  padding: 2rem;
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

export const CenteredSection = styled.div`
  flex-basis: 350px;
  padding: 25px 70px;
  background: white;
  margin: 50px 0;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 12%);
`;

export const StyledImage = styled.img`
  margin: 10px 0;
`;

StyledImage.defaultProps = {
  height: "150px",
  width: "150px"
};

export const SuccessMessage = styled.p`
  font-size: 22px;
`;
