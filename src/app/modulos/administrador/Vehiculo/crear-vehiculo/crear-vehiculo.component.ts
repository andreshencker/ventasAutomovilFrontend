import { VehiculoService } from './../../../../servicios/vehiculo/vehiculo.service';
import { Component, OnInit } from '@angular/core';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {
  listadoVehiculos:ModeloVehiculo[]=[];
  constructor(
    private servicoVehiculo:VehiculoService,
  ) {
    this.ObtenerListadoVehiculo();
  }

  ngOnInit(): void {
  }

  ObtenerListadoVehiculo(){
    this.servicoVehiculo.ObtenerRegistros().subscribe((datos:ModeloVehiculo[])=>{
      this.listadoVehiculos=datos;
    })
  }

}
