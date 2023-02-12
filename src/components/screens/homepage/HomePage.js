import React from "react";
import Catalog from "./Catalog";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

export default function HomePage() {
  return (
    <ContainerHomePage>
      <Catalog />
    </ContainerHomePage>
  );
}

const ContainerHomePage = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  position: relative;
`;
