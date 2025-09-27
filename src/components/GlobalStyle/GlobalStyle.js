import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.2s;
  }
  
  *:focus {
    outline: none;
  }

  *::selection { 
    background-color: #7da6ffff;
    color: #272f10ff;
  }
  
  body {
    scroll-behavior: smooth;
    font-family: "Krub", sans-serif;
  }
  
  img {
    width: 100%;
    height: auto;
    line-height: 0;
    display: block;
  }
  
  a {
    text-decoration-line: none;
  }
  
  ul {
    list-style-type: none;
  }
  
  button {
    cursor: pointer;
    display: block;
    border: none;
    background-color: transparent;
  }

  input{
    display: block;
  }
`;
