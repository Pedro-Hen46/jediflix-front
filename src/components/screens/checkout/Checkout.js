import React from "react";
import styled from "styled-components";

export default function Checkout() {
  return (
    <Container>
      <h1>Checkout</h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

    background-color: red;
    width: 100vw;
    height: 100vh;
`;
