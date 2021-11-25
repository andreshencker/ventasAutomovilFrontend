import { ModeloCargoEmpleado } from './../../../../modelos/cargoEmpleado.modelo';
import { CargoEmpleadoService } from './../../../../servicios/cargoEmpleado/cargo-empleado.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-cargo-empleado',
  templateUrl: './actualizar-cargo-empleado.component.html',
  styleUrls: ['./actualizar-cargo-empleado.component.css']
})
export class ActualizarCargoEmpleadoComponent implements OnInit {

  id:string="";
  fgValidador:FormGroup=this.fb.group({
    'id':['',[Validators.required]],
    'cargo':['',[Validators.required]]
  })
  constructor(
    private fb:FormBuilder,
    private cargoEmpleadoServicio:CargoEmpleadoService,
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
    this.cargoEmpleadoServicio.ObtenerCargoEmpleado(this.id).subscribe((datos:ModeloCargoEmpleado)=>{
      this.fgValidador.controls["id"].setValue(datos.id);
      this.fgValidador.controls["cargo"].setValue(datos.cargoEmpleado);
    });
  }

  Editar(){
    let id=this.fgValidador.controls["id"].value
    let cargo=this.fgValidador.controls["cargo"].value
    let p = new ModeloCargoEmpleado();
    p.cargoEmpleado=cargo;
    p.id=this.id;
    this.cargoEmpleadoServicio.ActualizarCargoEmpleado(p).subscribe((dato:ModeloCargoEmpleado)=>{
      this.RegistroActualizado();
      this.router.navigate(["/administrador/listar-cargoEmpleado"])
    },(error:any)=>{
      this.ErrorRegistro()
    })
  }

}
