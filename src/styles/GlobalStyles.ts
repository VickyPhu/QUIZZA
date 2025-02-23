import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  max-width: 980px;
  background: linear-gradient(90deg, 
  rgba(255,250,194,1) 0%, 
  rgba(251,242,159,1) 30%, 
  rgba(251,238,149,1) 60%, 
  rgba(248,223,149,1) 100%
);
}

h1, h2 {
   font-family: Fira Sans, Arial, Helvetica, sans-serif;
}

p {
   font-family: Roboto, Arial, sans-serif;
   color: #310e6d;
}
`;

export default GlobalStyle;
