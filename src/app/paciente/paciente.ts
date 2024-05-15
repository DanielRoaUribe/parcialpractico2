export class Paciente {
    nombre: string;
    edad: number;
    diagnostico: string;
    historial: { fecha: string, sintomas: string }[];
  
    constructor(
      nombre: string,
      edad: number,
      diagnostico: string,
      historial: { fecha: string, sintomas: string }[]
    ) {
      this.nombre = nombre;
      this.edad = edad;
      this.diagnostico = diagnostico;
      this.historial = historial;
    }
  }
  