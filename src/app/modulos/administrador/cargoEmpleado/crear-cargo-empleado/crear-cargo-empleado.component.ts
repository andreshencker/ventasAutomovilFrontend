import { ModeloCargoEmpleado } from './../../../../modelos/cargoEmpleado.modelo';
import { CargoEmpleadoService } from './../../../../servicios/cargoEmpleado/cargo-empleado.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-cargo-empleado',
  templateUrl: './crear-cargo-empleado.component.html',
  styleUrls: ['./crear-cargo-empleado.component.css']
})
export class CrearCargoEmpleadoComponent implements OnInit {

  fgValidador:FormGroup=this.fb.group({
    'cargo':['',[Validators.required]]
  })
  constructor(
    private fb:FormBuilder,
    private cargoEmpleadoServicio:CargoEmpleadoService,
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
    let cargo=this.fgValidador.controls["cargo"].value
    let p = new ModeloCargoEmpleado();
    p.cargoEmpleado=cargo;
    this.cargoEmpleadoServicio.CrearCargoEmpleado(p).subscribe((datos:ModeloCargoEmpleado)=>{
     this.RegistroGuardado();
      this.router.navigate(["/administrador/listar-cargoEmpleado"]);
    },(error:any)=>{
      this.ErrorRegistro()
    })
  }
}
