import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
// background: rgb(255,250,194);

background: linear-gradient(45deg, rgba(255,250,194,1) 5%, rgba(251,242,159,1) 25%, rgba(251,238,149,1) 50%, rgba(249,231,149,1) 75%, rgba(248,223,149,1) 100%);
}
`;

export default GlobalStyle;
