import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html, body{
width: 100%;
  min-height: 100vh;
  scroll-behavior:smooth;
}
`;

export default GlobalStyle;
