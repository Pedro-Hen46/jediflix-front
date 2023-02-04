import React from "react";
import styled from "styled-components";

export default function Footer(){
    return(
        <FooterContainer>
            <tt>Em uma galáxia muito e muito distante - conexão segura starlink</tt>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    tt{
        color: #F82B4B;
        font-size: 0.9rem;
        text-transform: uppercase;
    }
`