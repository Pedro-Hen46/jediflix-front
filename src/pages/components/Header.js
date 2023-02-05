import React from "react";
import styled from "styled-components";
import Logo from "../../lib/images/logo-light.png";
import { BsSearch, BsFillGearFill } from "react-icons/bs";

export default function Header(){
    return (
        <HeaderContainer>
            <BsSearch fontSize={"2rem"} color="#F82B4B"/>
            <img src={Logo} alt="Logo Jedi" title="DartVader - Eu sou seu PAIII!"/>
            <BsFillGearFill fontSize={"2rem"} color="#F82B4B"/>

        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    width: 100%;
    height: 6rem;
    padding: 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        height: 6rem;
        filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.9));
    }
`