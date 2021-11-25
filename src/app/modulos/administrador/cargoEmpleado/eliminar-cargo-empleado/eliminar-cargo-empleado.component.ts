import { ModeloCargoEmpleado } from './../../../../modelos/cargoEmpleado.modelo';
import { CargoEmpleadoService } from './../../../../servicios/cargoEmpleado/cargo-empleado.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-cargo-empleado',
  templateUrl: './eliminar-cargo-empleado.component.html',
  styleUrls: ['./eliminar-cargo-empleado.component.css']
})
export class EliminarCargoEmpleadoComponent implements OnInit {

  id:string="";
  fgValidador:FormGroup=this.fb.group({
    'id':['',[Validators.required]],
    'cargo':['',[Validators.required]]
  })
  constructor(
    private fb:FormBuilder,
    private cargoEmpleadoServicio:CargoEmpleadoService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.Buscar();
  }

  Buscar(){
    this.cargoEmpleadoServicio.ObtenerCargoEmpleado(this.id).subscribe((datos:ModeloCargoEmpleado)=>{
      this.fgValidador.controls["id"].setValue(datos.id);
      this.fgValidador.controls["cargo"].setValue(datos.cargoEmpleado);
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
          this.cargoEmpleadoServicio.EliminararCargoEmpleado(this.id).subscribe((datos:ModeloCargoEmpleado)=>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'registro eliminado con exito',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(["/administrador/listar-cargoEmpleado"]);
        },(error:any)=>{
          Swal.fire('error eliminando el regsitro', '', 'error');
        })
      }
    })
  }

}
