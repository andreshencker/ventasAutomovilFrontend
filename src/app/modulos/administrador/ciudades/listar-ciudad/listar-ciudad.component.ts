import { ModeloCiudad } from './../../../../modelos/ciudad.modelo';
import { CiudadService } from './../../../../servicios/ciudad/ciudad.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listar-ciudad',
  templateUrl: './listar-ciudad.component.html',
  styleUrls: ['./listar-ciudad.component.css']
})
export class ListarCiudadComponent implements OnInit {
  listadoRegistros:ModeloCiudad[]=[];

  constructor(private ciudadServicio:CiudadService) { }

  ngOnInit(): void {
    this.ObtenerListadoCiudades()
  }
  
  ObtenerListadoCiudades(){
    this.ciudadServicio.ObtenerRegistros().subscribe((datos:ModeloCiudad[])=>{
      this.listadoRegistros=datos;
    })
  }
}
