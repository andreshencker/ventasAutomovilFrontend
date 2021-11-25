import { ModeloEstadoSolicitud } from './../../../../modelos/estadoSolicitud.modelo';
import { EstadoSolicitudService } from 'src/app/servicios/estadoSolicitud/estado-solicitud.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-estado-solicitud',
  templateUrl: './eliminar-estado-solicitud.component.html',
  styleUrls: ['./eliminar-estado-solicitud.component.css']
})
export class EliminarEstadoSolicitudComponent implements OnInit {

  id:string="";
  fgValidador:FormGroup=this.fb.group({
    'id':['',[Validators.required]],
    'estado':['',[Validators.required]]
  })
  constructor(
    private fb:FormBuilder,
    private estadoServicio:EstadoSolicitudService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.Buscar();
  }

  Buscar(){
    this.estadoServicio.ObtenerEstadoSolicitud(this.id).subscribe((datos:ModeloEstadoSolicitud)=>{
      this.fgValidador.controls["id"].setValue(datos.id);
      this.fgValidador.controls["estado"].setValue(datos.estadoSolicitud);
    });
  }

  Eliminar(){
    let id=this.fgValidador.controls["id"].value
    Swal.fire({
      title: '¿Quieres eliminar este registro?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
          this.estadoServicio.EliminararEstadoEstadoSolicitud(this.id).subscribe((datos:ModeloEstadoSolicitud)=>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'registro eliminado con exito',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(["/administrador/listar-estadoSolicitud"]);
        },(error:any)=>{
          Swal.fire('error eliminando el regsitro', '', 'error');
        })
      }
    })
  }

}
