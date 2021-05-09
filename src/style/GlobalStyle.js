import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Krona One";
  font-style:normal;
  font-weight:400;
  font-display:swap;
  src: url("https://fonts.gstatic.com/s/kronaone/v9/jAnEgHdjHcjgfIb1ZcUyNoWg_8a0Ww.woff2") format("woff2");
  unicode-range: U+00-5FF;
}
@font-face {
  font-family: "Ubuntu";
  font-style:normal;
  font-weight:400;
  font-display:swap;
  src: url("https://fonts.gstatic.com/s/ubuntu/v15/4iCs6KVjbNBYlgoKfw72nU6AFw.woff2") format("woff2");
  unicode-range: U+00-5FF;
}
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html, body{
width: 100%;
  min-height: 100vh;
  scroll-behavior:smooth;
  overflow-x:hidden;
}

a{
  text-decoration:none;
  color: #2d325b
}
`;

export default GlobalStyle;
