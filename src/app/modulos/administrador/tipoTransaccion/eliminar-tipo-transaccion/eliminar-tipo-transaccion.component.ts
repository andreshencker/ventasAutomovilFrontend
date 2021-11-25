import { ModeloTipoTransaccion } from './../../../../modelos/tipotransaccion.modelo';
import { TipoTransaccionService } from './../../../../servicios/tipoTransaccion/tipo-transaccion.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-tipo-transaccion',
  templateUrl: './eliminar-tipo-transaccion.component.html',
  styleUrls: ['./eliminar-tipo-transaccion.component.css']
})
export class EliminarTipoTransaccionComponent implements OnInit {

  id:string="";
  fgValidador:FormGroup=this.fb.group({
    'id':['',[Validators.required]],
    'transaccion':['',[Validators.required]]
  })
  constructor(
    private fb:FormBuilder,
    private servicio:TipoTransaccionService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.Buscar();
  }

  Buscar(){
    this.servicio.ObtenerTipoTransaccion(this.id).subscribe((datos:ModeloTipoTransaccion)=>{
      this.fgValidador.controls["id"].setValue(datos.id);
      this.fgValidador.controls["transaccion"].setValue(datos.tipoTransaccion);
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
          this.servicio.EliminararTipoTransaccion(this.id).subscribe((datos:ModeloTipoTransaccion)=>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'registro eliminado con exito',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(["/administrador/listar-tipoTransaccion"]);
        },(error:any)=>{
          Swal.fire('error eliminando el regsitro', '', 'error');
        })
      }
    })
  }

}
