import React, { Fragment } from "react";
import Meals from "./components/Meals/Meals";
import "./index.css";
import Header from "./components/Layout/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
