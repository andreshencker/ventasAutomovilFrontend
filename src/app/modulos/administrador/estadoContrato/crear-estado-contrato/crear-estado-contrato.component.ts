import { ModeloEstadoContrato } from './../../../../modelos/estadoContrato.modelo';
import { EstadoContratoService } from './../../../../servicios/estadoContato/estado-contrato.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-estado-contrato',
  templateUrl: './crear-estado-contrato.component.html',
  styleUrls: ['./crear-estado-contrato.component.css']
})
export class CrearEstadoContratoComponent implements OnInit {

  fgValidador:FormGroup=this.fb.group({
    'estado':['',[Validators.required]]
  })
  constructor(
    private fb:FormBuilder,
    private estadoServicio:EstadoContratoService,
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
    let p = new ModeloEstadoContrato();
    p.estadoContrato=estado;
    this.estadoServicio.CrearEstadoContrato(p).subscribe((datos:ModeloEstadoContrato)=>{
     this.RegistroGuardado();
      this.router.navigate(["/administrador/listar-estadoContrato"]);
    },(error:any)=>{
      this.ErrorRegistro()
    })
  }

}
