import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/modelos/Modelo-personas';
import { ServicioPersonaService } from 'src/app/servicios/servicio-persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonaComponent implements OnInit{

  constructor(private personaService: ServicioPersonaService) { }
  ngOnInit(): void {
    this.cargarDatosProyecto();
  }
  modoModal: number = 0; // -1 para agregar, <= 0 para editar
  personas: persona[] = [];
  nuevapersona: persona = new persona('','',0);
  titulo: string = "";
 /*  id: number = 0; */


  cargarDatosProyecto(): void {
    this.personaService.getdato().subscribe(data => {
      this.personas = data;
      console.log(this.personas);
    })
  }
  borrarPersona(i: number): void {
    this.personaService.borrar(i).subscribe(() => {
      this.cargarDatosProyecto();
    });
  }

  tipodemodal(opc:number): void {
    if(opc != -1){
      this.titulo = "Editar persona";
      this.nuevapersona = Object.assign({}, this.personas[opc]);
    /*   console.log(this.nuevapersona,opc); */
      /* this.id = this.personas[1].id; */
    }else{
      this.titulo = "Agregar persona";
      this.nuevapersona = new persona('', '', 0);     
    }
    this.modoModal = opc;
  }

  validar(){
    if(this.modoModal != -1){
      //aca es para editar
      this.editarPersona();
    }else{
      // aca es para agregar
      this.agregarPersona();


    }
  }

  editarPersona(){
    console.log(this.nuevapersona);
    this.personaService.actualizar(this.nuevapersona).subscribe(() => {
      this.cargarDatosProyecto();
    })
  }

  agregarPersona(){
    let nuevaPersona = new persona(
      this.nuevapersona.name,
      this.nuevapersona.lastName,
      this.nuevapersona.age
    );
    this.personaService.agregar(nuevaPersona).subscribe(() => {
      this.cargarDatosProyecto();
    })
  }
}
