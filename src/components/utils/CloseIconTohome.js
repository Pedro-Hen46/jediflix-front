import { useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import { AiFillCloseCircle } from "react-icons/ai";

export default function CloseToHome() {
    const navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/")}>
      <AiFillCloseCircle className="close-button" />
    </Container>
  );
}

const Container = styled.div`
    .close-button {
    position: fixed;
    top: 20px;
    left: 20px;
    font-size: 50px;

    transition: 0.3s linear;
    &:hover{
        cursor: pointer;
        color: #f82b4b;
    }
}   
`