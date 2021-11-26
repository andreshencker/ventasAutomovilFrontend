import { CargoEmpleadoService } from './../../../../servicios/cargoEmpleado/cargo-empleado.service';
import { ModeloCargoEmpleado } from './../../../../modelos/cargoEmpleado.modelo';
import { ModeloEmpleado } from './../../../../modelos/empleado.modelo';
import { EmpleadoService } from './../../../../servicios/empleado/empleado.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  fgValidador:FormGroup=this.fb.group({
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

  listadoCargos:ModeloCargoEmpleado[]=[];

  constructor(
    private fb:FormBuilder,
    private servicio:EmpleadoService,
    private router:Router,
    private cargoServicio:CargoEmpleadoService
    ) { }


  ngOnInit(): void {
    this.ObtenerListado();
  }

  ObtenerListado(){
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
    this.servicio.CrearEmpleado(p).subscribe((datos:ModeloEmpleado)=>{
     this.RegistroGuardado();
      this.router.navigate(["/administrador/listar-empleado"]);
    },(error:any)=>{
      this.ErrorRegistro()
    })
  }


}
