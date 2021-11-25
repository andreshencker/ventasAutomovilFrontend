import { ModeloEstadoContrato } from './../../../../modelos/estadoContrato.modelo';
import { EstadoContratoService } from './../../../../servicios/estadoContato/estado-contrato.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-estado-contrato',
  templateUrl: './eliminar-estado-contrato.component.html',
  styleUrls: ['./eliminar-estado-contrato.component.css']
})
export class EliminarEstadoContratoComponent implements OnInit {

  id:string="";
  fgValidador:FormGroup=this.fb.group({
    'id':['',[Validators.required]],
    'estado':['',[Validators.required]]
  })
  constructor(
    private fb:FormBuilder,
    private estadoServicio:EstadoContratoService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.Buscar();
  }

  Buscar(){
    this.estadoServicio.ObtenerEstadoContrato(this.id).subscribe((datos:ModeloEstadoContrato)=>{
      this.fgValidador.controls["id"].setValue(datos.id);
      this.fgValidador.controls["estado"].setValue(datos.estadoContrato);
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
          this.estadoServicio.EliminararEstadoContrato(this.id).subscribe((datos:ModeloEstadoContrato)=>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'registro eliminado con exito',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(["/administrador/listar-estadoContrato"]);
        },(error:any)=>{
          Swal.fire('error eliminando el regsitro', '', 'error');
        })
      }
    })
  }

}
