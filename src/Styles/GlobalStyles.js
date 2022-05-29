import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
margin: 0;
padding:0;
  background: linear-gradient(180deg, #2c3329 0%, #4d4d4d 100%, #424d3d 100%);
  
    }
      span{
    font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 12px;
color:#666666;
  }
  `;

export const DivStyle = styled.div`
  margin: 4% 3% 0 3%;
  padding: 0;
  max-width: 100%;
  height: auto;
  color: black;
  display: block;
  justify-content: center;
  background: #f0efe9;
`;

export const DivForm = styled.div`
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: 100vh;
  padding: 4rem;
`;
