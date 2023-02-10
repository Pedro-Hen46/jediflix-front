import React from "react";
import styled from "styled-components";

import Lottie from "react-lottie-player";
import babyYoda from "../../lib/svg/sadbaby.json";

export default function NotExistsContent() {
  return (
    <Container>
      <Lottie
        animationData={babyYoda}
        autoPlay={true}
        play
        speed={0.6}
        loop={true}
        style={{ width: 500, height: 500 }}
      />

      <div>
        <tt>
          Ooops! Parece que não tem nada para encontrar aqui, volte
          novamente mais tarde.
        </tt>
        <br />
        <a href="https://wa.me/5518997712016?text=Ol%C3%A1%20Torre%20Jedi%2C%20estou%20enfrentando%20um%20problema%20para%20obter%20os%20dados%20dos%20filmes%2C%20no%20app%20JEDIFLIX%2C%20voc%C3%AAs%20podem%20me%20ajudar%3F" target="_blank">CLIQUE AQUI COMUNICAR TORRE JEDI</a>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 65vh;
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  tt {
    padding: 1rem;
    font-size: 1.4rem;
    color: #fff;
    font-weight: 600;
    text-align: center;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      font-weight: 300;

      font-size: 1rem;
      color: #fff;

      transition: 0.1s linear;
      &:hover {
        cursor: pointer;
        font-weight: 600;
      }
    }
  }
`;
