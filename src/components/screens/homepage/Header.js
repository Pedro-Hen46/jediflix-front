import React from "react";
import styled from "styled-components";
import Logo from "../../../lib/images/logo-light.png";
import {
  BsSearch,
  BsFillHouseFill,
  BsFillPersonFill,
  BsFillCartFill,
} from "react-icons/bs";
import MenuHamburguer from "../../utils/MenuHamburguer";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo Jedi" title="DartVader - Eu sou seu PAIII!" />

      <div onClick={() => navigate("/myorders")}>
        <h3>👷 Meus Pedidos</h3>
      </div>
      <div>
        <h3>📌 Minha Conta</h3>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 6rem;
  padding: 2rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    width: auto;
    overflow: hidden;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    transition: 0.3s ease-in-out;
    &:hover {
      width: auto;
      border-radius: 8px;
      background-color: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(4px);
      cursor: pointer;
      font-weight: 700;
    }
    h3 {
      font-size: 1rem;
      font-weight: 500;
      text-transform: uppercase;
      margin-left: 10px;
    }
  }
  img {
    height: 6rem;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.9));
  }
`;
