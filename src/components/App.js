import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import HomePage from "./screens/homepage/HomePage";
import FilmDetails from "./screens/filmDetails/DetailsPage";
import GlobalStyle from "../lib/GlobalStyle";
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import MyOrders from "./screens/myorders/MyOrders";

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
      </Routes>
    </BrowserRouter>
  );
}
