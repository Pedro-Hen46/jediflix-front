import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import HomePage from "./screens/homepage/HomePage";
import FilmDetails from "./screens/filmDetails/DetailsPage";
import GlobalStyle from "../lib/GlobalStyle";
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import MyOrders from "./screens/myorders/MyOrders";
import Checkout from "./screens/checkout/Checkout";
import AccountAjusts from "./screens/accountAjusts/AccountAjusts";
import MyFavorits from "./screens/myFavorits/MyFavorits";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/film/:filmId" element={<FilmDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/film/:filmId/checkout" element={<Checkout />} />
        <Route path="/account" element={<AccountAjusts />} />
        <Route path="/myfavorits" element={<MyFavorits />} />
      </Routes>
    </BrowserRouter>
  );
}

const AppContainer = styled.div`
  background-color: red;
`;
