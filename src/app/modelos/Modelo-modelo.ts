export class modelo {
    id?: number;
    nombre: string;
    marca: string;
   
    constructor(nombre: string, marca: string) {
        this.nombre = nombre;
        this.marca = marca;
    }
}