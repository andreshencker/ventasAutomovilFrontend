import { VehiculoService } from './../../../../servicios/vehiculo/vehiculo.service';
import { ModeloVehiculo } from './../../../../modelos/vehiculo.modelo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarjeta-vehiculo',
  templateUrl: './tarjeta-vehiculo.component.html',
  styleUrls: ['./tarjeta-vehiculo.component.css']
})
export class TarjetaVehiculoComponent implements OnInit {

  paginaActual=1
  listadoVehiculos:ModeloVehiculo[]=[];
  constructor(
    private fb:FormBuilder,
    public servicoVehiculo:VehiculoService,
  ) { }

  ngOnInit(): void {
    this.ObtenerListadoVehiculo();
  }

  ObtenerListadoVehiculo(){
    this.servicoVehiculo.ObtenerRegistros().subscribe((datos:ModeloVehiculo[])=>{
      this.listadoVehiculos=datos;
    })
  }
  alEditar(vehiculo:ModeloVehiculo){
    this.servicoVehiculo.seleccionarVehiculo=Object.assign({},vehiculo);
  }

  alEliminar(id:string){
    Swal.fire({
      title: '¿Quieres eliminar este registro?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
          this.servicoVehiculo.EliminararVehiculo(id).subscribe((datos:ModeloVehiculo)=>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'registro eliminado con exito',
            showConfirmButton: false,
            timer: 1500
          })
        },(error:any)=>{
          Swal.fire('error eliminando el regsitro', '', 'error');
        })
      }
    })
  }
}
