import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { MagnifyingGlass } from "react-loader-spinner";

import Seat from "../../utils/Seat";

export default function FilmOverview({ infoFilm }) {
  const { time } = infoFilm.sessions;

  const [seatsMap, setSeatsMap] = useState(infoFilm.seats);
  const [timeControl, setTimeControl] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    if (timeControl === false) {
      setSelectedSeats([]);
    }
  }, [timeControl]);

  function goToNextPage() {
    if (selectedSeats.length === 0)
      return window.alert("Por favor, selecione pelo menos uma poltrona.");

    window.alert("Ok, indo para próxima pagina...");
  }

  return (
    <>
      {infoFilm.film === undefined ? (
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#f82b4b"
        />
      ) : (
        <FilmOverviewContainer timeControl={timeControl}>
          <HeaderInfo timeControl={timeControl} selectedSeats={selectedSeats}>
            <span>SELECIONE UM HORÁRIO PARA RESERVAR:</span>
            <div>
              <button onClick={() => setTimeControl(!timeControl)}>
                {dayjs(time).format("HH:mm[H]")}
              </button>

              <span className="totalPrice">
                <strong>
                  TOTAL PEDIDO: R${" "}
                  {infoFilm.film.priceTicket * selectedSeats.length}
                </strong>
              </span>

              <button className="next-page" onClick={() => goToNextPage()}>
                PROSSEGUIR
              </button>
            </div>
          </HeaderInfo>

          <BodyInfo>
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
                  <SeatsContainerSelected>
                    <h3>Clique nas poltronas desejadas!</h3>
                    <br />
                  </SeatsContainerSelected>
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
                  <strong>Sinopse do filme:</strong>
                </h3>
                <h3>{infoFilm.film.overview}</h3>
              </>
            )}
          </BodyInfo>
        </FilmOverviewContainer>
      )}
    </>
  );
}

const HeaderInfo = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 20vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: ${(props) =>
      props.timeControl ? "space-between" : "center"};
  }

  .next-page {
    display: ${(props) => (props.timeControl ? "inline" : "none")};

    background-color: ${(props) => (props.selectedSeats.length === 0 ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,1)")};
    
    &:hover {
      background-color: #fff;

      cursor: ${(props) =>
        props.selectedSeats.length === 0 ? "not-allowed" : "pointer"};
    }
  }

  .totalPrice {
    display: ${(props) =>
      props.timeControl
        ? props.selectedSeats.length === 0
          ? "none"
          : "inline"
        : "none"};
  }
`;

const BodyInfo = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  h3 {
    margin-right: 20px;
  }
`;
const SeatsContainerSelected = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  h3 {
    margin-right: 20px;
  }
`;
const SeatsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem;
`;
const FilmOverviewContainer = styled.div`
  width: 80vw;
  height: 100%;
  padding: 2rem;
  margin-top: 40vh;
  margin-left: 20vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
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
    min-width: 120px;
    min-height: 40px;
    height: 42px;
    border-radius: 8px;
    border: 2px solid #fff;
    background-color: ${(props) => (props.timeControl ? "#f82b4b" : "fff")};
    color: #161831;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    font-weight: ${(props) => (props.timeControl ? "900" : "400")};
    margin-top: 10px;
    /* margin-right: ${(props) => (props.timeControl ? "50%" : "0px")}; */

    transition: 0.4s ease-in-out;
    &:hover {
      background-color: #f82b4b;
      box-shadow: 0px 0px 20px rgba(255, 0, 0, 0.3);
      cursor: pointer;
    }
  }
`;
