import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ModeloidentificarCliente } from 'src/app/modelos/identificarCliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente/cliente.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-formulario-perfil-cliente',
  templateUrl: './formulario-perfil-cliente.component.html',
  styleUrls: ['./formulario-perfil-cliente.component.css']
})
export class FormularioPerfilClienteComponent implements OnInit {



  fgValidador:FormGroup=this.fb.group({
    'id':[''],
    'clave':[''],
    'documento':['',[Validators.required,Validators.minLength(6)]],
    'nombres':['',[Validators.required]],
    'apellidos':['',[Validators.required]],
    'correo':['',[Validators.required,Validators.email]],
    'celular':['',[Validators.required,Validators.minLength(10)]],

  })

  getValue(value:string){
    return this.fgValidador.get(value);
  }


 cliente:ModeloCliente=new ModeloCliente();
 id:string='';

  constructor(
    private fb:FormBuilder,
    public servicioCliente:ClienteService,
    private servicio:SeguridadService

  ) {
    this.servicio.ObtenerDatosUsuarioEnSesionCliente().subscribe((datos:ModeloidentificarCliente)=>{
      this.id=String(datos.datos?.id)
    })

    this.ObtenerListadoCliente();
  }

  ngOnInit(): void {

    this.ObtenerListadoCliente();
  }



  ObtenerListadoCliente(){
    this.servicioCliente.ObtenerCliente(this.id).subscribe((datos:ModeloCliente)=>{
      this.fgValidador.controls["id"].setValue(datos.id);
      this.fgValidador.controls["nombres"].setValue(datos.nombres);
      this.fgValidador.controls["apellidos"].setValue(datos.apellidos);
      this.fgValidador.controls["correo"].setValue(datos.correo);
      this.fgValidador.controls["documento"].setValue(datos.documento);
      this.fgValidador.controls["celular"].setValue(datos.celular);
      this.fgValidador.controls["clave"].setValue(datos.contrasena);
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
    let e=new ModeloCliente()
    e.documento=this.fgValidador.controls["documento"].value
    e.nombres=this.fgValidador.controls["nombres"].value
    e.apellidos=this.fgValidador.controls["apellidos"].value
    e.correo=this.fgValidador.controls["correo"].value
    e.celular=this.fgValidador.controls["celular"].value
    e.contrasena=this.fgValidador.controls["clave"].value
    e.id=this.fgValidador.controls["id"].value;
    this.servicioCliente.ActualizarCliente(e).subscribe((datos:ModeloCliente)=>{
      this.ActualizarRegistro();

      this.ObtenerListadoCliente();
      },(error:any)=>{
        this.ErrorRegistro()
      })
    }

}
