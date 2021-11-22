import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
const cryptoJS= require("cryptojs");

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
  constructor(private fb:FormBuilder, 
  private servicioSeguridad:SeguridadService) {}
  ngOnInit(): void {
 
  }

  IdentificarUsuario(){

    let usuario=this.fgValidador.controls["usuario"].value;
    let clave=this.fgValidador.controls["clave"].value;
    let claveCifrada =cryptoJS.MD5(clave);
    this.servicioSeguridad.Identificar(usuario,claveCifrada).subscribe(datos)
    alert(usuario)
    alert(clave)
  }
}
