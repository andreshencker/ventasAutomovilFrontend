import { EmpleadoService } from './../../../../servicios/empleado/empleado.service';
import { ModeloEmpleado } from './../../../../modelos/empleado.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {

  listadoRegistros:ModeloEmpleado[]=[];

  constructor(private servicioEmpleado:EmpleadoService) { }

  ngOnInit(): void {
    this.ObtenerListado()
  }

  ObtenerListado(){
    this.servicioEmpleado.ObtenerRegistros().subscribe((datos:ModeloEmpleado[])=>{
      this.listadoRegistros=datos;
    })
  }

}
