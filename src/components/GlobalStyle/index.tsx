import { createGlobalStyle } from "styled-components";
import cover from "./coverImg.svg";

export default createGlobalStyle`
  body {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background: url(${cover}) no-repeat;
        background-size: cover;    
        background-position: 22vw 50%;
        font-family: "Varela Round", sans-serif;  
        user-select: none;
    
      }
  html {
        font-size: 18px;
      }
  button {
    font: inherit;
    }
`;
