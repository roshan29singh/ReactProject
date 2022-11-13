import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import HotelNames from "./pages/hotelName/HotelName";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/Hotels" element = {<List/>} />
        <Route path = "/Hotels/:id" element = {<HotelNames/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
