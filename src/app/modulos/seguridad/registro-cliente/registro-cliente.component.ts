import { ModeloCliente } from './../../../modelos/cliente.modelo';
import { ClienteService } from './../../../servicios/cliente/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {

  fgValidador: FormGroup=this.fb.group({


    'id':[''],
    'documento':['',[Validators.required,Validators.minLength(6)]],
    'nombres':['',[Validators.required]],
    'apellidos':['',[Validators.required]],
    'correo':['',[Validators.required,Validators.email]],
    'celular':['',[Validators.required,Validators.minLength(10)]],

  });



  constructor(
    private fb:FormBuilder,
    private servicioSeguridad:SeguridadService,
    private servicioCliente:ClienteService,
    private router:Router,
    private route:ActivatedRoute,
  ) { }

  getValue(value:string){
    return this.fgValidador.get(value);
  }

  ngOnInit(): void {
  }

  RegistroGuardado(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'se ha enviado un correo con la contraseña para ingresar al sistema',
      showConfirmButton: false,
      timer: 2000
    })
  }



  ErrorRegistro(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Error al crear el registro',
      showConfirmButton: false,
      timer: 2000
    })
  }

  ExisteRegistro(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Error el documento o correo ingresado ya existe',
      showConfirmButton: false,
      timer: 1500
    })
  }

  registrarCliente(){
    let e = new ModeloCliente();
    e.documento=this.fgValidador.controls["documento"].value
    e.nombres=this.fgValidador.controls["nombres"].value
    e.apellidos=this.fgValidador.controls["apellidos"].value
    e.correo=this.fgValidador.controls["correo"].value
    e.celular=this.fgValidador.controls["celular"].value
    this.servicioCliente.CrearCliente(e).subscribe((datos:ModeloCliente)=>{
      this.limpiarFormulario();
      this.RegistroGuardado();
      this.router.navigate(["/seguridad/identificacionCliente"])
     },(error:any)=>{
       this.ErrorRegistro()
     })
  }

  limpiarFormulario(){
    this.fgValidador.reset();
}

}

