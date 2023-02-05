import React from "react";
import styled from "styled-components";

export default function FilmOverview() {
  return (
    <FilmOverviewContainer>
      <h3>
        Em um futuro próximo... Após séculos de peregrinação ambiental, os dias
        da Terra estão contados. Com ela, a espécie humana está ameaçada de
        extinção. Mas a esperança renasce quando um jovem cientista revela um
        processo revolucionário de terraformação, que abre caminho para a
        colonização de novos planetas. Um grupo de elite de todos os matizes e
        de todas as nacionalidades é formado. Sua missão: assumir o comando da
        nau capitânia da frota internacional e partir em busca de um novo lar
        para a humanidade. Navegando rumo ao desconhecido, esses novos
        exploradores estão longe de imaginar os imensos perigos que os aguardam.
      </h3>
      <br/>
      <span>SELECIONE UM HORÁRIO PARA RESERVAR:</span>
      <div>
        <button>14:30H</button>
        <button>17:30H</button>
        <button>18:20H</button>
        <button>22:00H</button>
        <button>23:15H</button>
      </div>
    </FilmOverviewContainer>
  );
}

const FilmOverviewContainer = styled.div`
  width: 100vw;
  height: 60vh;
  margin-top: 30vh;
  margin-left: 20vw;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;

  h3 {
    padding-left: 1rem;
    color: white;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 400;
  }
  span{
    text-align: center;
    color: #f82b4b;
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 1.2px;
    font-weight: 800;

  }
  button {
    width: 120px;
    height: 42px;
    border-radius: 8px;
    border: 2px solid #fff;
    background-color: #fff;
    color: #161831;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    font-weight: 400;

    transition: 0.2s ease-in-out;
    &:hover {
      color: #161831;
      font-weight: 700;

      box-shadow: 0px 0px 20px rgba(255, 0, 0, 0.3);

      cursor: pointer;
    }
  }
  div {
    
    width: 70%;
    display: flex;
    justify-content: space-around;
  }
`;
