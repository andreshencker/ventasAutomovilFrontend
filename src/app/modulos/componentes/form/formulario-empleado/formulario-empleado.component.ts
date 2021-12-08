import { EmpleadoService } from 'src/app/servicios/empleado/empleado.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ModeloCargoEmpleado } from 'src/app/modelos/cargoEmpleado.modelo';
import { CargoEmpleadoService } from 'src/app/servicios/cargoEmpleado/cargo-empleado.service';
import Swal from 'sweetalert2';

import { ModeloEmpleado } from 'src/app/modelos/empleado.modelo';

@Component({
  selector: 'app-formulario-empleado',
  templateUrl: './formulario-empleado.component.html',
  styleUrls: ['./formulario-empleado.component.css']
})
export class FormularioEmpleadoComponent implements OnInit {


  fgValidador:FormGroup=this.fb.group({
    'id':[''],
    'documento':['',[Validators.required,Validators.minLength(6)]],
    'nombres':['',[Validators.required]],
    'apellidos':['',[Validators.required]],
    'correo':['',[Validators.required,Validators.email]],
    'celular':['',[Validators.required,Validators.minLength(10)]],
    'cargo':['',[Validators.required]],
  })

  getValue(value:string){
    return this.fgValidador.get(value);
  }


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
  RegistroGuardado(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Registro guardado con exito',
      showConfirmButton: false,
      timer: 1500
    })
  }

  ActualizarRegistro(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Registro actualizado con exito',
      showConfirmButton: false,
      timer: 1500
    })
  }

  ErrorRegistro(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Error al crear el registro',
      showConfirmButton: false,
      timer: 1500
    })
  }

  ExisteRegistro(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Error el registro ya existe',
      showConfirmButton: false,
      timer: 1500
    })
  }



  onSubmit(){
    let e=new ModeloEmpleado()
    e.documento=this.fgValidador.controls["documento"].value
    e.nombres=this.fgValidador.controls["nombres"].value
    e.apellidos=this.fgValidador.controls["apellidos"].value
    e.correo=this.fgValidador.controls["correo"].value
    e.celular=this.fgValidador.controls["celular"].value
    e.cargoEmpleadoId=this.fgValidador.controls["cargo"].value;
    if(this.fgValidador.controls["id"].value==null){


    this.servicoEmpleado.CrearEmpleado(e).subscribe((datos:ModeloEmpleado)=>{
      this.RegistroGuardado();
      this.limpiarFormulario();
      this.ObtenerListadoEmpleado();
      },(error:any)=>{
        this.ErrorRegistro()
      })

    }else{
      e.id=this.fgValidador.controls["id"].value;
      this.servicoEmpleado.ActualizarEmpleado(e).subscribe((datos:ModeloEmpleado)=>{
        this.ActualizarRegistro();
        this.limpiarFormulario();
        this.ObtenerListadoEmpleado();
       },(error:any)=>{
         this.ErrorRegistro()
       })
    }

  }

  alEditar(e:ModeloEmpleado){
    this.servicoEmpleado.seleccionarEmpleado=Object.assign({},e);
  }

  alEliminar(e:ModeloEmpleado){

    Swal.fire({
      title: '¿Quieres eliminar este registro?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
          this.servicoEmpleado.EliminararEmpleado(String(e.id)).subscribe((datos:ModeloEmpleado)=>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'registro eliminado con exito',
            showConfirmButton: false,
            timer: 1500
          })
          this.ObtenerListadoEmpleado();
        },(error:any)=>{
          Swal.fire('error eliminando el regsitro', '', 'error');
        })
      }
    })
  }

  limpiarFormulario(){
      this.fgValidador.reset();
      this.servicoEmpleado.seleccionarEmpleado=new ModeloEmpleado()
  }


}
