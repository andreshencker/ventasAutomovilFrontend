import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

const cryptoJS = require("cryptojs");
import Swal from 'sweetalert2';

@Component({
  selector: 'app-identificacion-cliente',
  templateUrl: './identificacion-cliente.component.html',
  styleUrls: ['./identificacion-cliente.component.css']
})
export class IdentificacionClienteComponent implements OnInit {

  fgValidador: FormGroup=this.fb.group({

    'usuario':['',[Validators.required,Validators.email]],
    'clave':['',[Validators.required]]
  });
  constructor(
    private fb:FormBuilder,
    private servicioSeguridad:SeguridadService
    ) {}

  ngOnInit(): void {
  }

  AceptarConfirmacion(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'ingresado correctamente',
      showConfirmButton: false,
      timer: 1500
    })
  }

  DatosInvalidos(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'los datos son invalidos',
      showConfirmButton: false,
      timer: 1500
    })
  }

  IdentificarUsuario(){
    alert("entro")
    let usuario=this.fgValidador.controls["usuario"].value;
    let clave=this.fgValidador.controls["clave"].value;

   // let claveCifrada =cryptoJS.MD5(clave);

    this.servicioSeguridad.Identificar(usuario,clave).subscribe((datos:any)=>{
      alert("datos correctos")
    },(error:any)=>{
      alert("datos incorrectos")
    })
  }


}
