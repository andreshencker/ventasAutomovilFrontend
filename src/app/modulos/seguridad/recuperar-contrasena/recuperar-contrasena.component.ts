import { ModeloCliente } from './../../../modelos/cliente.modelo';
import { ClienteService } from './../../../servicios/cliente/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent implements OnInit {

  fgValidador: FormGroup=this.fb.group({
    'correo':['',[Validators.required,Validators.email]],
  });

  getValue(value:string){
    return this.fgValidador.get(value);
  }

  cliente:ModeloCliente=new ModeloCliente();
  constructor(
    private fb:FormBuilder,
    private servicioCliente:ClienteService,
    private router:Router,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {

  }

  ActualizarRegistro(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'La contraseña fue enviado al correo registrado',
      showConfirmButton: false,
      timer: 2000
    })
  }

  ErrorRegistro(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Error al recuperar la contraseña',
      showConfirmButton: false,
      timer: 1500
    })
  }
  NoExiste(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'El correo ingresado no existe',
      showConfirmButton: false,
      timer: 1500
    })
  }

  clienteCorreo(){
    let correo= this.fgValidador.controls["correo"].value;
    this.servicioCliente.ObtenerClienteCorreo(correo).subscribe((datos:ModeloCliente)=>{
        this.recuperarContrasena(datos);

    })
  }



  recuperarContrasena(p:ModeloCliente){
      this.servicioCliente.recuperarContrasenaCliente(p).subscribe((datos:ModeloCliente)=>{
        this.ActualizarRegistro();
        this.router.navigate(["/seguridad/identificacionCliente"]);
        this.limpiarFormulario();
      },(error:any)=>{
        this.ErrorRegistro()
      })

  }


  limpiarFormulario(){
    this.fgValidador.reset();

}

}
