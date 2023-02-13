import React, { useState } from "react";
import styled from "styled-components";

export default function Seat({ seat, selectedSeats, setSelectedSeats }) {
  const { name, isAvailable } = seat;

  const [buttonWasSeleted, setButtonWasSelected] = useState(false);

  return (
    <CircleSeat
      selectedSeats={selectedSeats}
      isAvailable={isAvailable}
      buttonWasSeleted={buttonWasSeleted}
      onClick={() => {
        setButtonWasSelected(true);
        //SELECIONA A POLTRONA
        const seatWasFound = selectedSeats.find((item) => item == name);

        if (seatWasFound) {
          const index = selectedSeats.indexOf(seatWasFound);

          selectedSeats.splice(index, 1);
          setButtonWasSelected(false);

          return setSelectedSeats([...selectedSeats]);
        }

        setSelectedSeats([...selectedSeats, name]);
      }}
    >
      <h1>{name}</h1>
    </CircleSeat>
  );
}

const CircleSeat = styled.div`
  width: 50px !important;
  height: 50px !important;
  margin-right: 20px;
  margin-bottom: 20px;

  border-radius: 50%;
  background-color: ${(props) =>
    props.isAvailable
      ? props.buttonWasSeleted
        ? "#70E446"
        : "#f3f3f3"
      : "#f82b4b"};

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.isAvailable
      ? props.buttonWasSeleted
        ? "#f3f3f3"
        : "#000000"
      : "#f82b4b"};
  transition: 0.3s linear;
  &:hover {
    cursor: pointer;
    color: ${(props) => (props.isAvailable ? "#f82b4b" : "#f3f3f3")};
  }
`;
