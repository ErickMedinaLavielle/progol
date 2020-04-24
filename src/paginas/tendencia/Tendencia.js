import React from "react";
import TextField from "@material-ui/core/TextField";
import ResponsiveDrawer from "../../componentes/responsiveDrawer";
import { ESTRUCTURATABLACICLO } from "../../util/Constantes";
import { ESTRUCTURATABLATENDENCIA } from "../../util/Constantes";
import TablaTendenciaModelo from "../../modelos/TablaTendenciaModelo";

import TablaTendencia from "../../componentes/tablaTendencia";
import Grafica from "../../componentes/grafica";

import GraficaModelo from "../../modelos/GraficaModelo";

export default function Tendencia() {
  const [longitudCiclo = 0, setlongitudCiclo] = React.useState(20);
  var datosCiclo = new TablaTendenciaModelo();
  datosCiclo.llenarTablaCiclo(longitudCiclo);
  datosCiclo.llenarTablaCicloTendencia(datosCiclo.getCiclo());
  datosCiclo.llenarTablaCicloTendenciaPorcentaje(
    datosCiclo.getcicloTendencia(),
    datosCiclo.getCiclo().length
  );
  var datosGrafica = new GraficaModelo();
  datosGrafica.llenarDatos(datosCiclo.getcicloTendencia());
  const handlelongitudCiclo = (e) => {
    if (e.target.value >= 0) {
      setlongitudCiclo(e.target.value);
    }
  };
  return (
    <ResponsiveDrawer titulo={"Tendencias"}>
      <TextField
        id="outlined-basic"
        label="Ingresa ciclo"
        type="number"
        variant="outlined"
        value={longitudCiclo}
        onChange={handlelongitudCiclo}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <br />
      <br />
      <br />
      <TablaTendencia
        alto={400}
        datos={datosCiclo.getCiclo()}
        estructura={ESTRUCTURATABLACICLO}
      ></TablaTendencia>
      <br />
      <TablaTendencia
        alto={200}
        datos={datosCiclo.getcicloTendencia()}
        estructura={ESTRUCTURATABLATENDENCIA}
      ></TablaTendencia>
      <br></br>
      <TablaTendencia
        alto={200}
        datos={datosCiclo.getcicloTendenciaPorcentaje()}
        estructura={ESTRUCTURATABLATENDENCIA}
      ></TablaTendencia>
      <br />
      <h2>Gráfica de la tendencia</h2>
      <Grafica datosGrafica={datosGrafica.getLinea1()}></Grafica>
    </ResponsiveDrawer>
  );
}
