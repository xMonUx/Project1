import React from "react";

import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Routeing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Routeing;
