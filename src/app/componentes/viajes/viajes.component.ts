import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { colectivo } from 'src/app/modelos/Modelo-colectivos';
import { persona } from 'src/app/modelos/Modelo-personas';
import { viaje } from 'src/app/modelos/Modelo-viaje';
import { ServicioColectivoService } from 'src/app/servicios/servicio-colectivo.service';
import { ServicioPersonaService } from 'src/app/servicios/servicio-persona.service';
import { ServicioViajeService } from 'src/app/servicios/servicio-viaje.service';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent {
  @ViewChild('myRadio', { static: true }) myRadioElement!: ElementRef<HTMLInputElement>;
  constructor(private viajeService: ServicioViajeService,private personaService: ServicioPersonaService,
    private colectivoService: ServicioColectivoService) { }
  ngOnInit(): void {
    this.cargarDatosProyecto();
  }
  modoModal: number = 0; // -1 para agregar, <= 0 para editar
  viajes: viaje[] = [];
  nuevoviaje: viaje = new viaje('','',new Date(),new Date(),[],0);
  personas: persona[] = [];
  colectivos:colectivo[] = [];  
  titulo: string = "";
 /*  id: number = 0; */
  formmodal:boolean = true;



  cargarDatosProyecto(): void {
    this.viajeService.getdato().subscribe(data => {
      this.viajes = data;
      /* console.log(this.viajes); */
    })
    this.personaService.getdato().subscribe(data => {
      this.personas = data;
     /*  console.log(this.personas); */
    })
    this.colectivoService.getdato().subscribe(data => {
      this.colectivos = data;
     /*  console.log(this.colectivos); */
    })
  }


  tipodemodal(opc:number): void {
    if(opc != -1){
      this.titulo = "Editar viaje";
      this.nuevoviaje = Object.assign({}, this.viajes[opc]);
      this.formmodal = false;
     
    }else{
      this.titulo = "Agregar viaje";
      this.nuevoviaje = new viaje('','',new Date(),new Date(),[],0);
    this.modoModal = opc;
    this.formmodal = true;
  }
}

  validar(){
    if(this.modoModal != -1){
      //aca es para editar
      this.editarViaje();
    }else{
      // aca es para agregar
      this.agregarViaje();


    }
  }

  editarViaje(){
    console.log(this.nuevoviaje);
    let pasajerosQueViajan = document.querySelectorAll('input[name="pasajeros"]');
    pasajerosQueViajan.forEach((item) => {
      
     /*  console.log((item as HTMLInputElement).value,(item as HTMLInputElement).checked); */
      if((item as HTMLInputElement).checked){
        this.nuevoviaje.personaId.push(Number((item as HTMLInputElement).value));
      }
      
    })
    this.viajeService.actualizar(this.nuevoviaje).subscribe(() => {
      this.cargarDatosProyecto();
    }) 
  }

  agregarViaje(){

    
    
    

   
    let nuevoviaje = new viaje(
      this.nuevoviaje.lugarSalida,
      this.nuevoviaje.lugarDestino,
      this.nuevoviaje.fechaLlegada,
      this.nuevoviaje.fechaSalida,      
      this.nuevoviaje.personaId,// esto es un array
      this.nuevoviaje.idColectivo
    );
    let pasajerosQueViajan = document.querySelectorAll('input[name="pasajeros"]');
    pasajerosQueViajan.forEach((item) => {
      
     /*  console.log((item as HTMLInputElement).value,(item as HTMLInputElement).checked); */
      if((item as HTMLInputElement).checked){
        this.nuevoviaje.personaId.push(Number((item as HTMLInputElement).value));
      }
      
    })
   /*  console.log(this.nuevoviaje) */
     this.viajeService.agregar(nuevoviaje).subscribe(() => {
      this.cargarDatosProyecto();
    }) 
  }



  detalleviaje: viaje = new viaje('','',new Date(),new Date(),[],0);
  mostrarViaje(IDviaje:number){

  
    
  }


  onMouseEnter(id: number) {
    
    this.viajeService.BuscarPorID(id).subscribe(data => {
      
      this.detalleviaje = data;
   

    })
    let divinfo = document.getElementById("divinfo");
    divinfo!.style.display = "block";
  }
  onMouseLeave() {
    let divinfo = document.getElementById("divinfo");
    divinfo!.style.display = "none";
  }
}
