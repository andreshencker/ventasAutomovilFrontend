import { EmpleadoService } from './../../../../servicios/empleado/empleado.service';
import { ModeloEmpleado } from './../../../../modelos/empleado.modelo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModeloCargoEmpleado } from 'src/app/modelos/cargoEmpleado.modelo';
import { Router } from '@angular/router';
import { CargoEmpleadoService } from 'src/app/servicios/cargoEmpleado/cargo-empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {

  fgValidador:FormGroup=this.fb.group({
    'documento':['',[Validators.required,Validators.minLength(6)]],
    'nombres':['',[Validators.required]],
    'apellidos':['',[Validators.required]],
    'correo':['',[Validators.required,Validators.email]],
    'celular':['',[Validators.required,Validators.minLength(10)]],
    'cargo':['',[Validators.required]],
  })



  listadoCargos:ModeloCargoEmpleado[]=[];
  listadoRegistros:ModeloEmpleado[]=[];

  constructor(
    private servicioEmpleado:EmpleadoService,
    private fb:FormBuilder,
    private router:Router,
    private cargoServicio:CargoEmpleadoService
    ) { }

  ngOnInit(): void {
    this.ObtenerListadoEmpleados()
  }

  getValue(value:string){
    return this.fgValidador.get(value);
  }

  ObtenerListadoEmpleados(){
    this.servicioEmpleado.ObtenerRegistros().subscribe((datos:ModeloEmpleado[])=>{
      this.listadoRegistros=datos;
    })
  }

  ObtenerListadoCargoEmpleado(){
    this.cargoServicio.ObtenerRegistros().subscribe((datos:ModeloCargoEmpleado[])=>{
      this.listadoCargos=datos;
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

  ErrorRegistro(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Error al crear el registro',
      showConfirmButton: false,
      timer: 1500
    })
  }

  Crear(){
    let documento=this.fgValidador.controls["documento"].value
    let nombres=this.fgValidador.controls["nombres"].value
    let apellidos=this.fgValidador.controls["apellidos"].value
    let correo=this.fgValidador.controls["correo"].value
    let celular=this.fgValidador.controls["celular"].value
    let cargo=this.fgValidador.controls["cargo"].value
    let p = new ModeloEmpleado();
    p.documento=documento;
    p.nombres=nombres;
    p.apellidos=apellidos;
    p.cargoEmpleadoId=cargo;
    p.correo=correo;
    p.celular=celular;
    this.servicioEmpleado.CrearEmpleado(p).subscribe((datos:ModeloEmpleado)=>{
     this.RegistroGuardado();
      this.router.navigate(["/administrador/listar-empleado"]);
    },(error:any)=>{
      this.ErrorRegistro()
    })
  }

}
