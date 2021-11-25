import { ModeloEstadoSolicitud } from './../../../../modelos/estadoSolicitud.modelo';
import { ModeloSolicitudVehiculo } from './../../../../modelos/solicitudVehiculo.modelo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstadoSolicitudService } from 'src/app/servicios/estadoSolicitud/estado-solicitud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-estado-solicitud',
  templateUrl: './crear-estado-solicitud.component.html',
  styleUrls: ['./crear-estado-solicitud.component.css']
})
export class CrearEstadoSolicitudComponent implements OnInit {

  fgValidador:FormGroup=this.fb.group({
    'estado':['',[Validators.required]]
  })
  constructor(
    private fb:FormBuilder,
    private estadoServicio:EstadoSolicitudService,
    private router:Router
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
    let estado=this.fgValidador.controls["estado"].value
    let p = new ModeloEstadoSolicitud();
    p.estadoSolicitud=estado;
    this.estadoServicio.CrearEstadoSolicitud(p).subscribe((datos:ModeloEstadoSolicitud)=>{
     this.RegistroGuardado();
      this.router.navigate(["/administrador/listar-estadoSolicitud"]);
    },(error:any)=>{
      this.ErrorRegistro()
    })
  }


}
