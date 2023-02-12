import React, { useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

import Seat from "../../utils/Seat";

export default function FilmOverview({ infoFilm }) {
  const { time } = infoFilm.sessions;

  const [seatsMap, setSeatsMap] = useState(infoFilm.seats);
  const [timeControl, setTimeControl] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);

  console.log(selectedSeats);

  return (
    <>
      {infoFilm.film === undefined ? (
        <h1>Ainda não tenho nada para mostrar, tente novamente mais tarde.</h1>
      ) : (
        <FilmOverviewContainer timeControl={timeControl}>
          <span>SELECIONE UM HORÁRIO PARA RESERVAR:</span>
          <div>
            <button onClick={() => setTimeControl(!timeControl)}>
              {dayjs(time).format("HH:mm[H]")}
            </button>
          </div>

          {timeControl ? (
            <>
              {selectedSeats.length !== 0 ? (
                <SeatsContainerSelected>
                  <h3>
                    <strong>Poltronas Selecionadas: </strong>
                  </h3>
                  <br />
                  {selectedSeats.map((seat, index) => (
                    <h3 key={index}>
                      {seat}
                      {index === selectedSeats.length - 1 ? "." : ","}
                    </h3>
                  ))}
                </SeatsContainerSelected>
              ) : (
                <>
                  <h3>Clique nas poltronas desejadas!</h3>
                  <br />
                </>
              )}

              <SeatsContainer>
                {seatsMap.map((seat, index) => (
                  <Seat
                    setSelectedSeats={setSelectedSeats}
                    selectedSeats={selectedSeats}
                    seat={seat}
                    key={index}
                  />
                ))}
              </SeatsContainer>
            </>
          ) : (
            <>
              <h3>
                <strong>Resumo do filme:</strong>
              </h3>
              <h3>{infoFilm.film.overview}</h3>
            </>
          )}
        </FilmOverviewContainer>
      )}
    </>
  );
}
const SeatsContainerSelected = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const SeatsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const FilmOverviewContainer = styled.div`
  width: 70vw;
  height: auto;
  margin-top: 40vh;
  margin-left: 20vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h3 {
    padding-left: 1rem;
    color: white;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 400;
  }
  span {
    display: ${(props) => (props.timeControl ? "none" : "inline")};
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
    background-color: ${(props) => (props.timeControl ? "#f82b4b" : "fff")};
    color: #161831;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    font-weight: ${(props) => (props.timeControl ? "900" : "400")};
    margin-top: 10px;
    margin-right: ${(props) => (props.timeControl ? "50%" : "0px")};

    transition: 0.4s ease-in-out;
    &:hover {
      background-color: #f82b4b;
      font-weight: 700;

      box-shadow: 0px 0px 20px rgba(255, 0, 0, 0.3);

      cursor: pointer;
    }
  }
  div {
    margin-bottom: 20px;
    width: 70%;
    display: flex;
    justify-content: space-around;
  }
`;
