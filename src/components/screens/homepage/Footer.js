import React from "react";
import styled from "styled-components";

export default function Footer(){
    return(
        <FooterContainer>
            <tt>Em uma galáxia muito e muito distante - conexão segura <strong>starlink 🚀</strong></tt>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    tt{
        color: #F82B4B;
        font-size: 0.7rem;
        font-weight: 500;
        letter-spacing: 1.5px;
        text-transform: uppercase;
    }
    strong{
        font-weight: 800;
        font-size: 0.8rem;
    }
`