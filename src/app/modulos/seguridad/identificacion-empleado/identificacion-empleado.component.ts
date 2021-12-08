import { CargoEmpleadoService } from 'src/app/servicios/cargoEmpleado/cargo-empleado.service';
import { CatalogoVehiculoService } from './../../../servicios/catalogoVehiculo/catalogo-vehiculo.service';
import { EmpleadoService } from 'src/app/servicios/empleado/empleado.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as cryptoJS from "crypto-js";
import { SeguridadService } from 'src/app/servicios/seguridad.service';
//const cryptoJS = require("cryptojs");
import Swal from 'sweetalert2';
import { ModeloCargoEmpleado } from 'src/app/modelos/cargoEmpleado.modelo';

@Component({
  selector: 'app-identificacion-empleado',
  templateUrl: './identificacion-empleado.component.html',
  styleUrls: ['./identificacion-empleado.component.css']
})
export class IdentificacionEmpleadoComponent implements OnInit {

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
    private servicioEmpelado:EmpleadoService,
    private servicioCargoEmpleado:CargoEmpleadoService,
    private router:Router,
    private route:ActivatedRoute,
    ) {}

  ngOnInit(): void {
  }

  ErrorRegistro(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Error ',
      showConfirmButton: false,
      timer: 1500
    })
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

  limpiarFormulario(){
    this.fgValidador.reset();
}

  redigir(cargo:string){
    this.servicioCargoEmpleado.ObtenerCargoEmpleado(cargo).subscribe((datos:ModeloCargoEmpleado)=>{
      if(datos.cargoEmpleado=="Asesor"){
        this.router.navigate(["/asesor/listar-estudioSolicitud"]);
        this.limpiarFormulario();

      }else{
        this.router.navigate(["/administrador/crear-vehiculo"]);
        this.limpiarFormulario();
      }
    },(error)=>{
      this.ErrorRegistro()
    })
  }



  IdentificarUsuario(){
    let usuario=this.fgValidador.controls["usuario"].value;
    let clave=this.fgValidador.controls["clave"].value;
    let claveCifrada =cryptoJS.MD5(clave).toString();
    this.servicioSeguridad.IdentificarEmpleado(usuario,claveCifrada).subscribe((datos:any)=>{
      this.servicioSeguridad.AlmacenarSesionEmpelado(datos);
      let c = JSON.stringify(datos.cargo);

      if(c==="618e829ddb2db90aec437d22"){
        this.router.navigate(["/asesor/listar-estudioSolicitud"]);
        this.limpiarFormulario();
      }else if(c==="619f1108964c5528b0df651c"){
        this.router.navigate(["/administrador/crear-vehiculo"]);
        this.limpiarFormulario();
      }else{
        alert("no lo has logrado")
        console.log(datos)
        this.router.navigate(["/administrador/crear-vehiculo"]);
        this.limpiarFormulario();
      }

    },(error:any)=>{
      this.DatosInvalidos();

    })
  }


}
