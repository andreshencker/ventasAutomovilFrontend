import { ModeloTipoTransaccion } from './../../../../modelos/tipotransaccion.modelo';
import { TipoTransaccionService } from './../../../../servicios/tipoTransaccion/tipo-transaccion.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-tipo-transaccion',
  templateUrl: './actualizar-tipo-transaccion.component.html',
  styleUrls: ['./actualizar-tipo-transaccion.component.css']
})
export class ActualizarTipoTransaccionComponent implements OnInit {

  id:string="";
  fgValidador:FormGroup=this.fb.group({
    'id':['',[Validators.required]],
    'transaccion':['',[Validators.required]]
  })
  constructor(
    private fb:FormBuilder,
    private servicio:TipoTransaccionService,
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
    this.servicio.ObtenerTipoTransaccion(this.id).subscribe((datos:ModeloTipoTransaccion)=>{
      this.fgValidador.controls["id"].setValue(datos.id);
      this.fgValidador.controls["transaccion"].setValue(datos.tipoTransaccion);
    });
  }

  Editar(){
    let id=this.fgValidador.controls["id"].value
    let tipoTransaccion=this.fgValidador.controls["transaccion"].value
    let p = new ModeloTipoTransaccion();
    p.tipoTransaccion=tipoTransaccion;
    p.id=this.id;
    this.servicio.ActualizarTipoTransaccion(p).subscribe((dato:ModeloTipoTransaccion)=>{
      this.RegistroActualizado();
      this.router.navigate(["/administrador/listar-tipoTransaccion"])
    },(error:any)=>{
      this.ErrorRegistro()
    })
  }
}
