export class colectivo {
    id?: number;
    patente: string;
    cantidadAsientos: number;
    idModelo: number;
    modeloId: number;

    constructor(patente: string, cantidadAsientos: number, idModelo: number, modeloId: number) {
        /* this.id = id; */
        this.patente = patente;
        this.cantidadAsientos = cantidadAsientos;
        this.idModelo = idModelo;
        this.modeloId = modeloId;
    }
}