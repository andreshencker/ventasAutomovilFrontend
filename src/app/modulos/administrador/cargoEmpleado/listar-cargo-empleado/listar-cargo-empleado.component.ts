import { CargoEmpleadoService } from './../../../../servicios/cargoEmpleado/cargo-empleado.service';
import { ModeloCargoEmpleado } from './../../../../modelos/cargoEmpleado.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cargo-empleado',
  templateUrl: './listar-cargo-empleado.component.html',
  styleUrls: ['./listar-cargo-empleado.component.css']
})
export class ListarCargoEmpleadoComponent implements OnInit {

  listadoRegistros:ModeloCargoEmpleado[]=[];

  constructor(private cargoEmpleadoServicio:CargoEmpleadoService) { }

  ngOnInit(): void {
    this.ObtenerListado()
  }

  ObtenerListado(){
    this.cargoEmpleadoServicio.ObtenerRegistros().subscribe((datos:ModeloCargoEmpleado[])=>{
      this.listadoRegistros=datos;
    })
  }

}
