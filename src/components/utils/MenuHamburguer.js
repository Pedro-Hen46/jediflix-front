import React from "react";
import styled from "styled-components";

export default function MenuHamburguer() {
  return (
    <MenuHamburguerContainer>
      <ContentMenu>
        <HeaderMenu>
          <img src="https://i.pinimg.com/736x/0d/9e/6b/0d9e6b830642bb88c37f2decc146bbaf.jpg" alt="Imagem de Perfil" />
          <h1>Pedro H.</h1>
          <span>Jedi Intergalático</span>
        </HeaderMenu>
        <ButtonsActions>
          <button>Minha conta</button>
          <button>Meus Pedidos</button>
          <button>Suporte</button>
        </ButtonsActions>
        <br />
        <br />
        <br />
        <br />
        <button className="exit-button"> Sair </button>
      </ContentMenu>
    </MenuHamburguerContainer>
  );
}
const ButtonsActions = styled.div`
  padding: 2rem;
  width: 100%;
  height: auto;

  display: flex;
  justify-content: space-around;
  flex-direction: column;
  
  button{
    width: auto;
    height: 3rem;
    border-radius: 8px;
    border: 2px solid #f82b4b;
    background-color: #f82b4b;
    color: #fff;
    margin-bottom: 20px;
    font-weight: 600;

    transition: 0.3s linear;
    &:hover {
      box-shadow: 0px 0px 20px rgba(0, 0, 65, 0.9);
      color: white;
      font-weight: 600;
      cursor: pointer;
    }
  }

  
`;
const HeaderMenu = styled.div`
  padding: 2rem;
  width: 100%;
  height: 20vh;
  background-color: #181631;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img{
    width: 50%;
    height: 50%;
    object-fit: contain;
    border-radius: 100%;
  }
`;
const ContentMenu = styled.div`
  padding: 2rem;
  width: 30vw;
  height: 100vh;
  background-color: #181631;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.7);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .exit-button{
    width: 85%;
    height: 3rem;
    border-radius: 8px;
    border: 2px solid #f82b4b;
    background-color: #f82b4b;
    color: #fff;
    font-weight: 600;
    margin-bottom: 20px;

    transition: 0.3s linear;
    &:hover {
      box-shadow: 0px 0px 20px rgba(0, 0, 65, 0.9);
      color: white;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;
const MenuHamburguerContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;

  color: #fff;
`;
