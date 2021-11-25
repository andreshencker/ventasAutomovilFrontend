import { ModeloTipoVehiculo } from './../../../../modelos/tipoVehiculo.modelo';
import { TipoVehiculoService } from './../../../../servicios/tipoVehiculo/tipo-vehiculo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MensajesRegistros } from 'src/app/message/mensajesRegistros';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-tipo-vehiculo',
  templateUrl: './crear-tipo-vehiculo.component.html',
  styleUrls: ['./crear-tipo-vehiculo.component.css']
})
export class CrearTipoVehiculoComponent implements OnInit {

  fgValidador:FormGroup=this.fb.group({
    'tipoVehiculo':['',[Validators.required]]
  })
  constructor(
    private fb:FormBuilder,
    private tipoVehiculoServicio:TipoVehiculoService,
    private router:Router,
    ) { }


  ngOnInit(): void {
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
    let tipoVehiculo=this.fgValidador.controls["tipoVehiculo"].value
    let p = new ModeloTipoVehiculo();
    p.tipoVehiculo=tipoVehiculo;
    this.tipoVehiculoServicio.CrearTipoVehiculo(p).subscribe((datos: ModeloTipoVehiculo): void => {
      this.RegistroGuardado();
      this.router.navigate(["/administrador/listar-tipoVehiculo"]);
    },(error:any)=>{
      this.ErrorRegistro()
    })
  }

}
