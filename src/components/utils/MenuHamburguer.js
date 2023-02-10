import React from "react";
import styled from "styled-components";

export default function MenuHamburguer() {
  return (
    <MenuHamburguerContainer>
      <ContentMenu>
        <h1>Oi eu sou o menu Hamburguer</h1>
      </ContentMenu>
    </MenuHamburguerContainer>
  );
}
const ContentMenu = styled.div`
    width: 30vw;
    height: 100vh;
    background-color: red;

`
const MenuHamburguerContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
`;
