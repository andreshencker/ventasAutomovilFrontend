import { CatalogoVehiculoService } from './../../../../servicios/catalogoVehiculo/catalogo-vehiculo.service';
import { Component, OnInit } from '@angular/core';
import { ModeloCatalogoVehiculo } from 'src/app/modelos/catalogoVehiculos.model';

@Component({
  selector: 'app-actualizar-vehiculo',
  templateUrl: './actualizar-vehiculo.component.html',
  styleUrls: ['./actualizar-vehiculo.component.css']
})
export class ActualizarVehiculoComponent implements OnInit {

  listadoCatalogo:ModeloCatalogoVehiculo[]=[];
  constructor(private servicoCatlogoVehiculo:CatalogoVehiculoService) {
    this.ObtenerListadoCatalogo();
  }

  ngOnInit(): void {
  }

  ObtenerListadoCatalogo(){
    this.servicoCatlogoVehiculo.ObtenerRegistros().subscribe((datos:ModeloCatalogoVehiculo[])=>{
      this.listadoCatalogo=datos;
    })
  }

}
