import { TipoVehiculoService } from './../../../../servicios/tipoVehiculo/tipo-vehiculo.service';
import { ModeloTipoVehiculo } from './../../../../modelos/tipoVehiculo.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tipo-vehiculo',
  templateUrl: './listar-tipo-vehiculo.component.html',
  styleUrls: ['./listar-tipo-vehiculo.component.css']
})
export class ListarTipoVehiculoComponent implements OnInit {

  listadoRegistros:ModeloTipoVehiculo[]=[];

  constructor(private servicioTipoVehiculo:TipoVehiculoService) { }

  ngOnInit(): void {
    this.ObtenerListado()
  }

  ObtenerListado(){
    this.servicioTipoVehiculo.ObtenerRegistros().subscribe((datos:ModeloTipoVehiculo[])=>{
      this.listadoRegistros=datos;
    })
  }

}
