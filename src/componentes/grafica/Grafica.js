import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from "@devexpress/dx-react-chart-material-ui";

export default function Grafica(props) {
  const { datosGrafica } = props;

  return (
    <Paper>
      <Chart data={datosGrafica}>
        <ArgumentAxis />
        <ValueAxis />

        <LineSeries valueField="lineValue" argumentField="argument" />
      </Chart>
    </Paper>
  );
}
