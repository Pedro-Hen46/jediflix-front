import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import HomePage from "./screens/homepage/HomePage";
import FilmDetails from "./screens/filmDetails/DetailsPage";
import GlobalStyle from "../lib/GlobalStyle";

export default function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/film/:filmId" element={<FilmDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
