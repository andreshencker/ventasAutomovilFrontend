import { ModeloEstadoContrato } from './../../../../modelos/estadoContrato.modelo';
import { EstadoContratoService } from './../../../../servicios/estadoContato/estado-contrato.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-estado-contrato',
  templateUrl: './actualizar-estado-contrato.component.html',
  styleUrls: ['./actualizar-estado-contrato.component.css']
})
export class ActualizarEstadoContratoComponent implements OnInit {

  id:string="";
  fgValidador:FormGroup=this.fb.group({
    'id':['',[Validators.required]],
    'estado':['',[Validators.required]]
  })
  constructor(
    private fb:FormBuilder,
    private estadoServicio:EstadoContratoService,
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
    this.estadoServicio.ObtenerEstadoContrato(this.id).subscribe((datos:ModeloEstadoContrato)=>{
      this.fgValidador.controls["id"].setValue(datos.id);
      this.fgValidador.controls["estado"].setValue(datos.estadoContrato);
    });
  }

  Editar(){
    let id=this.fgValidador.controls["id"].value
    let estado=this.fgValidador.controls["estado"].value
    let p = new ModeloEstadoContrato();
    p.estadoContrato=estado;
    p.id=this.id;
    this.estadoServicio.ActualizarEstadoContrato(p).subscribe((dato:ModeloEstadoContrato)=>{
      this.RegistroActualizado();
      this.router.navigate(["/administrador/listar-estadoContrato"])
    },(error:any)=>{
      this.ErrorRegistro()
    })
  }

}
