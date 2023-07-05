import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routeing";
import Layout from "./Layout";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
};

export default App;
