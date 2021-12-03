import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModeloCargoEmpleado } from 'src/app/modelos/cargoEmpleado.modelo';
import { ModeloEmpleado } from 'src/app/modelos/empleado.modelo';
import { CargoEmpleadoService } from 'src/app/servicios/cargoEmpleado/cargo-empleado.service';
import { EmpleadoService } from 'src/app/servicios/empleado/empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarjeta-empleado',
  templateUrl: './tarjeta-empleado.component.html',
  styleUrls: ['./tarjeta-empleado.component.css']
})
export class TarjetaEmpleadoComponent implements OnInit {

  fgValidador:FormGroup=this.fb.group({
    'documentoBus':[''],
    'cargoBus':[''],
  })

  paginaActual=1
  listadoCargos:ModeloCargoEmpleado[]=[];
  listadoEmpleados:ModeloEmpleado[]=[];

  constructor(
    private fb:FormBuilder,
    public servicoEmpleado:EmpleadoService,
    private cargoServicio:CargoEmpleadoService
  ) { }

  ngOnInit(): void {
    this.ObtenerListadoCargo();
    this.ObtenerListadoEmpleado();
  }

  ObtenerListadoCargo(){
    this.cargoServicio.ObtenerRegistros().subscribe((datos:ModeloCargoEmpleado[])=>{
      this.listadoCargos=datos;
    })
  }

  ObtenerListadoEmpleado(){

      this.servicoEmpleado.ObtenerRegistros().subscribe((datos:ModeloEmpleado[])=>{
        this.listadoEmpleados=datos;
      })

  }

  alEditar(empleado:ModeloEmpleado){
    this.servicoEmpleado.seleccionarEmpleado=Object.assign({},empleado);
  }

  alEliminar(id:string){

    Swal.fire({
      title: '¿Quieres eliminar este registro?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
          this.servicoEmpleado.EliminararEmpleado(id).subscribe((datos:ModeloEmpleado)=>{
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
