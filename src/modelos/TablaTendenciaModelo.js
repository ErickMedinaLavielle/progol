import React from "react";
import { EstructuraTablaTendencia } from "../util/Constantes";
import { HISTORICO } from "../util/Constantes";
import { LLAVES } from "../util/Constantes";

export default class TablaTendenciaModelo {
  constructor() {
    this.ciclo = [];
    this.cicloTendencia = [];
    this.cicloTendenciaPorcentaje = [];
    this.tablaTendenciaModelo = new EstructuraTablaTendencia();
    this.tablaTendenciaPorcentajeModelo = new EstructuraTablaTendencia();
  }
  getCiclo() {
    return this.ciclo;
  }

  getcicloTendencia() {
    return this.cicloTendencia;
  }

  getcicloTendenciaPorcentaje() {
    return this.cicloTendenciaPorcentaje;
  }

  llenarTablaCiclo(tamnioDelCiclo) {
    let inicioCiclo =
      Math.floor(HISTORICO.length / tamnioDelCiclo) * tamnioDelCiclo;
    HISTORICO.map((item, idx) => {
      if (inicioCiclo <= idx) {
        this.ciclo.push(item);
      }
    });
  }

  llenarTablaCicloTendencia(ciclo) {
    ciclo.map((item, idx) => {
      var concurso = JSON.parse(JSON.stringify(item));
      LLAVES.map((llave) => {
        this.tablaTendenciaModelo.EstructuraTablaTendencia[concurso[llave]][
          llave
        ] += 1;
      });
    });
    for (let i in this.tablaTendenciaModelo.EstructuraTablaTendencia) {
      this.cicloTendencia.push(
        this.tablaTendenciaModelo.EstructuraTablaTendencia[i]
      );
    }
  }
  llenarTablaCicloTendenciaPorcentaje(tendencia, tamanioCiclo) {
    if (tamanioCiclo === 0) {
      this.cicloTendenciaPorcentaje = tendencia;
    } else {
      tendencia.map((item, idx) => {
        let temp = JSON.parse(JSON.stringify(item));
        for (let i = 0; i < 14; i++) {
          switch (idx) {
            case 0:
              this.tablaTendenciaPorcentajeModelo.EstructuraTablaTendencia.L[
                "r" + (i + 1)
              ] = Math.round((temp["r" + (i + 1)] / tamanioCiclo) * 100);
              break;
            case 1:
              this.tablaTendenciaPorcentajeModelo.EstructuraTablaTendencia["E"][
                "r" + (i + 1)
              ] = Math.round((temp["r" + (i + 1)] / tamanioCiclo) * 100);
              break;
            case 2:
              this.tablaTendenciaPorcentajeModelo.EstructuraTablaTendencia["V"][
                "r" + (i + 1)
              ] = Math.round((temp["r" + (i + 1)] / tamanioCiclo) * 100);
              break;
            default:
              break;
          }
        }
      });
      this.cicloTendenciaPorcentaje.push(
        this.tablaTendenciaPorcentajeModelo.EstructuraTablaTendencia.L
      );
      this.cicloTendenciaPorcentaje.push(
        this.tablaTendenciaPorcentajeModelo.EstructuraTablaTendencia.E
      );
      this.cicloTendenciaPorcentaje.push(
        this.tablaTendenciaPorcentajeModelo.EstructuraTablaTendencia.V
      );
    }
  }
}
