import { Component, OnInit } from '@angular/core';
import { colectivo } from 'src/app/modelos/Modelo-colectivos';
import { modelo } from 'src/app/modelos/Modelo-modelo';
import { ServicioColectivoService } from 'src/app/servicios/servicio-colectivo.service';
import { ServicioModeloService } from 'src/app/servicios/servicio-modelo.service';
@Component({
  selector: 'app-colectivos',
  templateUrl: './colectivos.component.html',
  styleUrls: ['./colectivos.component.css']
})
export class ColectivosComponent implements OnInit{

  constructor(private colectivoService: ServicioColectivoService,
              private modeloService: ServicioModeloService) { }
  ngOnInit(): void {
    this.cargarDatosProyecto();
  }
  modoModal: number = 0; // -1 para agregar, <= 0 para editar
  colectivos: colectivo[] = [];
  modelos: modelo[] = [];
  nuevocolectivo: colectivo = new colectivo('', 0, 0, 0);
  /* nuevomodelo: modelo = new modelo('', ''); */
  titulo: string = "";
 /*  id: number = 0; */


  cargarDatosProyecto(): void {
    this.colectivoService.getdato().subscribe(data => {
      this.colectivos = data;
      /* console.log(this.colectivos); */
    })
    this.modeloService.getdato().subscribe(data => {
      this.modelos = data;
      /* console.log(this.modelos); */
    })
  }
  borrarColectivo(i: number): void {
    this.colectivoService.borrar(i).subscribe(() => {
      this.cargarDatosProyecto();
    });
  }

  tipodemodal(opc:number): void {
    if(opc != -1){
      this.titulo = "Editar colectivo";
      this.nuevocolectivo = Object.assign({}, this.colectivos[opc]);      
      (<HTMLInputElement>document.getElementById("modelo")).value = this.nuevocolectivo.idModelo.toString();
      /* this.id = this.personas[1].id; */
      
    }else{
      this.titulo = "Agregar colectivo";
      this.nuevocolectivo = new colectivo('', 0, 0, 0);
      (<HTMLInputElement>document.getElementById("modelo")).value = "-1";


    }
    this.modoModal = opc;
  }

  validar(){
    if(this.modoModal != -1){
      //aca es para editar
      this.editarColectivo();
    }else{
      // aca es para agregar
      this.agregarColectivo();


    }
  }

  editarColectivo(){
    console.log(this.nuevocolectivo);
    this.nuevocolectivo.idModelo = Number((<HTMLInputElement>document.getElementById("modelo")).value),
    this.nuevocolectivo.modeloId = Number((<HTMLInputElement>document.getElementById("modelo")).value),
    this.colectivoService.actualizar(this.nuevocolectivo).subscribe(() => {
      this.cargarDatosProyecto();
    })
  }


  agregarColectivo(){
    let nuevocolectivo = new colectivo(
      this.nuevocolectivo.patente,
      this.nuevocolectivo.cantidadAsientos,
      this.nuevocolectivo.idModelo = Number((<HTMLInputElement>document.getElementById("modelo")).value),
      this.nuevocolectivo.modeloId = Number((<HTMLInputElement>document.getElementById("modelo")).value),
      
    );
    console.log(nuevocolectivo);
    this.colectivoService.agregar(nuevocolectivo).subscribe(() => {
      this.cargarDatosProyecto();
    })
  }
}
