import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from "crypto-js";
//const cryptoJS = require("cryptojs");
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

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

  getValue(value:string){
    return this.fgValidador.get(value);
  }

  constructor(
    private fb:FormBuilder,
    private servicioSeguridad:SeguridadService,
    private router:Router,
    private route:ActivatedRoute,
    ) {}

  ngOnInit(): void {
  }


  DatosInvalidos(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'El correo o la contraseña son incorrectos',
      showConfirmButton: false,
      timer: 1500
    })
  }

  IdentificarUsuario(){
    let usuario=this.fgValidador.controls["usuario"].value;
    let clave=this.fgValidador.controls["clave"].value;
    let claveCifrada =cryptoJS.MD5(clave).toString();
    this.servicioSeguridad.Identificar(usuario,claveCifrada).subscribe((datos:any)=>{
      this.servicioSeguridad.AlmacenarSesionCliente(datos);
     this.router.navigate(["/cliente/listar-solicitud"])
    },(error:any)=>{
      this.DatosInvalidos();

    })
  }


}
