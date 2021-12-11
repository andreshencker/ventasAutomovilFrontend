import { ClienteService } from './../../../servicios/cliente/cliente.service';
import { ModeloContactoCliente } from './../../../modelos/contactoCliente.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  fgValidador:FormGroup=this.fb.group({
    'nombres':['',[Validators.required]],
    'apellidos':['',[Validators.required]],
    'correo':['',[Validators.required,Validators.email]],
    'celular':['',[Validators.required,Validators.minLength(10)]],
    'tipo':['',[Validators.required]],
    'mensaje':['',[Validators.required]]
  })

  getValue(value:string){
    return this.fgValidador.get(value);
  }

  constructor(
    private fb:FormBuilder,
    public servicio:ClienteService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  RegistroGuardado(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'En breve nuestro personal se contactará',
      showConfirmButton: false,
      timer: 3500
    })
  }

  ErrorRegistro(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Error al enviar la solicitud',
      showConfirmButton: false,
      timer: 1500
    })
  }

  contacto(){
    let p = new ModeloContactoCliente();
    p.nombres=this.fgValidador.controls["nombres"].value
    p.apellidos=this.fgValidador.controls["apellidos"].value
    p.correo=this.fgValidador.controls["correo"].value
    p.celular=this.fgValidador.controls["celular"].value
    p.tipoTransaccion=this.fgValidador.controls["tipo"].value
    p.mensaje=this.fgValidador.controls["mensaje"].value

    this.servicio.ContactoCliente(p).subscribe((datos:ModeloContactoCliente)=>{
      this.router.navigate(["/inicio/inicio"])
      this.RegistroGuardado();
      this.limpiarFormulario();

    },(error)=>{
      this.ErrorRegistro();
    })
  }

  limpiarFormulario(){
    this.fgValidador.reset();
}

}
