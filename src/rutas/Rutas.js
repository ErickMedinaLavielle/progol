import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Tendencia from "../paginas/tendencia";
import Historico from "../paginas/historico";

const Rutas = () => {
  return (
    <Router>
      <Route path="/tendencias" exact={true}>
        <Tendencia></Tendencia>
      </Route>
      <Route path="/historico" exact={true}>
        <Historico></Historico>
      </Route>
    </Router>
  );
};

export default Rutas;
