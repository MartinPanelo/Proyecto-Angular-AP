export class viaje {
    id?: number;
    lugarSalida: string;
    lugarDestino: string;
    fechaLlegada: Date;
    fechaSalida: Date;
    personaId:number[] = [];
    idColectivo: number;

    constructor(lugarSalida: string, lugarDestino: string, fechaLlegada: Date, fechaSalida: Date, personaId:number[], idColectivo: number){
        this.lugarSalida = lugarSalida;
        this.lugarDestino = lugarDestino;
        this.fechaLlegada = fechaLlegada;
        this.fechaSalida = fechaSalida;
        this.personaId = personaId;
        this.idColectivo = idColectivo;
    }
}