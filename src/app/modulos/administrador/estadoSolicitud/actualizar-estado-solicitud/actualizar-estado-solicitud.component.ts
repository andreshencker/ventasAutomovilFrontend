import { ModeloEstadoSolicitud } from './../../../../modelos/estadoSolicitud.modelo';
import { EstadoSolicitudService } from 'src/app/servicios/estadoSolicitud/estado-solicitud.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-estado-solicitud',
  templateUrl: './actualizar-estado-solicitud.component.html',
  styleUrls: ['./actualizar-estado-solicitud.component.css']
})
export class ActualizarEstadoSolicitudComponent implements OnInit {

  id:string="";
  fgValidador:FormGroup=this.fb.group({
    'id':['',[Validators.required]],
    'estado':['',[Validators.required]]
  })
  constructor(
    private fb:FormBuilder,
    private estadoServicio:EstadoSolicitudService,
    private router:Router,
    private route:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.Buscar();
  }

  RegistroActualizado(){
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

  Buscar(){
    this.estadoServicio.ObtenerEstadoSolicitud(this.id).subscribe((datos:ModeloEstadoSolicitud)=>{
      this.fgValidador.controls["id"].setValue(datos.id);
      this.fgValidador.controls["estado"].setValue(datos.estadoSolicitud);
    });
  }

  Editar(){
    let id=this.fgValidador.controls["id"].value
    let estado=this.fgValidador.controls["estado"].value
    let p = new ModeloEstadoSolicitud();
    p.estadoSolicitud=estado;
    p.id=this.id;
    this.estadoServicio.ActualizarEstadoSolicitud(p).subscribe((dato:ModeloEstadoSolicitud)=>{
      this.RegistroActualizado();
      this.router.navigate(["/administrador/listar-estadoSolicitud"])
    },(error:any)=>{
      this.ErrorRegistro()
    })
  }
}
