import React from "react";

export default class GraficaModelo {
  constructor() {
    this.linea1 = [
      {
        lineValue: 0,
        argument: 0,
      },
    ];
    this.linea2 = [];
    this.linea3 = [];
    this.graficaArgumentos = {
      lineValue: 0,
      argument: 0,
    };
  }
  getLinea1() {
    return this.linea1;
  }
  llenarDatos(datos) {
    var i = 1;
    datos.map((item, idx) => {
      for (let i = 0; i < 14; i++) {
        switch (idx) {
          case 0:
            let temp = new GraficaModelo();
            temp.graficaArgumentos.lineValue = item["r" + (i + 1)];
            temp.graficaArgumentos.argument = i + 1;
            this.linea1.push(temp.graficaArgumentos);
            break;

          default:
            break;
        }
      }
    });
    console.log(this.linea1);
  }
}
