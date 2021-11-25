import { ModeloTipoTransaccion } from './../../../../modelos/tipotransaccion.modelo';
import { TipoTransaccionService } from './../../../../servicios/tipoTransaccion/tipo-transaccion.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-tipo-transaccion',
  templateUrl: './crear-tipo-transaccion.component.html',
  styleUrls: ['./crear-tipo-transaccion.component.css']
})
export class CrearTipoTransaccionComponent implements OnInit {

  fgValidador:FormGroup=this.fb.group({
    'transaccion':['',[Validators.required]]
  })
  constructor(
    private fb:FormBuilder,
    private servicio:TipoTransaccionService,
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
    let tipoTransaccion=this.fgValidador.controls["transaccion"].value
    let p = new ModeloTipoTransaccion();
    p.tipoTransaccion=tipoTransaccion;
    this.servicio.CrearTipoTransaccion(p).subscribe((datos:ModeloTipoTransaccion)=>{
     this.RegistroGuardado();
      this.router.navigate(["/administrador/listar-tipoTransaccion"]);
    },(error:any)=>{
      this.ErrorRegistro()
    })
  }

}
