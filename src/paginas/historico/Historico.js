import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ResponsiveDrawer from "../../componentes/responsiveDrawer";
import Patron from "../../componentes/patron";
import TablaTendencia from "../../componentes/tablaTendencia";
import TablaTendenciaModelo from "../../modelos/TablaTendenciaModelo";
import InputSelect from "../../componentes/inputSelect";
import "./Historico.scss";
import { HISTORICO } from "../../util/Constantes";
import { ESTRUCTURATABLACICLO } from "../../util/Constantes";

export default function Historico() {
  const [patron, setPatron] = useState([[0, 0, ""]]);
  const [contadorX, setContadorX] = useState(0);
  const [contadorY, setContadorY] = useState(0);
  const [contador, setContador] = useState(0);
  const [generarPatron, setGenerarPatron] = useState(false);
  const [casillaSeleccionada, setCasillaSelecionada] = useState("r1");

  useEffect(() => {
    if (generarPatron) {
      const interval = setInterval(() => {
        crearPatron();
      }, 1);
      if (contador === HISTORICO.length) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
  }, [patron, contadorX, generarPatron, casillaSeleccionada]);

  function crearPatron() {
    setContador(contador + 1);
    setContadorX(contadorX + 2);
    let newPatron = [...patron];
    newPatron.push([
      contadorX,
      contadorY,
      HISTORICO[contador][casillaSeleccionada],
    ]);
    setPatron(newPatron);
    if (contadorX / 2 === 48) {
      setContadorY(contadorY + 2);
      setContadorX(contadorX - 96);
    }
  }

  function handleGenerarPatron() {
    setGenerarPatron(true);
  }

  function handleSeleccionCasilla(casilla) {
    setCasillaSelecionada(casilla);
  }

  return (
    <ResponsiveDrawer titulo={"Historico"}>
      <TablaTendencia
        alto={400}
        datos={HISTORICO}
        estructura={ESTRUCTURATABLACICLO}
      ></TablaTendencia>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <InputSelect
            formHelperText={"Selecciona casilla"}
            handleSeleccionCasilla={handleSeleccionCasilla}
          ></InputSelect>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleGenerarPatron}
            style={{ marginTop: "30px" }}
          >
            Generar patrón
          </Button>
        </Grid>
      </Grid>
      <div className="grid-container">
        <Patron patron={patron}></Patron>
      </div>
    </ResponsiveDrawer>
  );
}
