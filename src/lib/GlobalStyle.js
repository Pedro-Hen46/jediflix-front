import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", "Helvetica Neue", Helvetica, Arial;
        text-decoration: none;


            ::-webkit-scrollbar-track {
            background-color: #F4F4F4;
        }
        ::-webkit-scrollbar {
            width: 4px;
            background: #f82b4b;
        }
        ::-webkit-scrollbar-thumb {
            background: #f82b4b;
        }
    }   
    * img{
     user-select:none;
    }
    body{
        background-color: #161831;
        overflow-x: hidden;
    
}`;

export default GlobalStyle;
