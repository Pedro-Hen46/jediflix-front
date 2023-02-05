import React from "react";
import styled from "styled-components";

export default function FilmOverview({infoFilm}) {
  return (
    <FilmOverviewContainer>
      <h3>
        {infoFilm.overview}
      </h3>
      <br/>
      <span>SELECIONE UM HORÁRIO PARA RESERVAR:</span>
      <div>
        <button onClick={() => window.alert("Calma Jedi, feature em desenvolvimento")}>14:30H</button>
        <button onClick={() => window.alert("Calma Jedi, feature em desenvolvimento")}>17:30H</button>
        <button onClick={() => window.alert("Calma Jedi, feature em desenvolvimento")}>18:20H</button>
        <button onClick={() => window.alert("Calma Jedi, feature em desenvolvimento")}>22:00H</button>
        <button onClick={() => window.alert("Calma Jedi, feature em desenvolvimento")}>23:15H</button>
      </div>
    </FilmOverviewContainer>
  );
}

const FilmOverviewContainer = styled.div`
  width: 100vw;
  height: 60vh;
  margin-top: 40vh;
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
