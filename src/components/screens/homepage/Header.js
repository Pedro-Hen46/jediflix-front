import React from "react";
import styled from "styled-components";
import Logo from "../../../lib/images/logo-light.png";
import { BiLogOut, BiCog, BiDollar, BiHeart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <div onClick={() => navigate("/")}>
        <img
          src="https://www.seekpng.com/png/full/262-2621755_adidas-originals-logo-vector-star-wars-stormtrooper-helmet.png"
          alt="Logo Jedi"
          title="DartVader - Eu sou seu PAIII!"
        />
        <h3>JEDIFLIX</h3>
      </div>

      <div title="Meus Favoritos" onClick={() => navigate("/myfavorits")}>
        <BiHeart size={25} />
      </div>
      <div title="Meus Pedidos" onClick={() => navigate("/myorders")}>
        <BiDollar size={25} />
      </div>
      <div title="Ajustes da conta" onClick={() => navigate("/account")}>
        <BiCog size={25} />
      </div>
      <div title="Sair da conta" onClick={() => navigate("/login")}>
        <BiLogOut size={25} />
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 5%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;

  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  transition: 0.2s ease-in;

  div {
    width: 100%;
    padding: 0.5rem;

  flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #fff;

    transition: 0.3s ease-in-out;
    &:hover {
      background-color: rgba(255, 0, 100, 0.4);
      border-radius: 8px;
      cursor: pointer;
    }
    h3 {
      font-size: 0.8rem;
      font-weight: 300;
      text-transform: uppercase;
      margin-top: 5px;
    }
  }
  img {
    height: 2rem;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5));
  }
`;
