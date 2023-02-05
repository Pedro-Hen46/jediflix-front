import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", "Helvetica Neue", Helvetica, Arial;
    }   
    * img{
     user-select:none;
    }
    body{
        background-color: #161831;
        position: relative;
    }`;

export default GlobalStyle;
