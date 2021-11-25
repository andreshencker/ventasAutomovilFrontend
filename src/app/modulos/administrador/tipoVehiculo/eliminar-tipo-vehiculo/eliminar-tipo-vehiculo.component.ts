import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloTipoVehiculo } from './../../../../modelos/tipoVehiculo.modelo';
import { TipoVehiculoService } from './../../../../servicios/tipoVehiculo/tipo-vehiculo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-tipo-vehiculo',
  templateUrl: './eliminar-tipo-vehiculo.component.html',
  styleUrls: ['./eliminar-tipo-vehiculo.component.css']
})
export class EliminarTipoVehiculoComponent implements OnInit {

  id:string="";
  fgValidador:FormGroup=this.fb.group({
    'id':['',[Validators.required]],
    'tipoVehiculo':['',[Validators.required]]
  })
  constructor(
    private fb:FormBuilder,
    private tipoVehiculoServicio:TipoVehiculoService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.BuscarTipoVehiculo();
  }

  BuscarTipoVehiculo(){
    this.tipoVehiculoServicio.ObtenerTipoVehiculo(this.id).subscribe((datos:ModeloTipoVehiculo)=>{
      this.fgValidador.controls["id"].setValue(datos.id);
      this.fgValidador.controls["tipoVehiculo"].setValue(datos.tipoVehiculo);
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
          this.tipoVehiculoServicio.EliminararTipoVehiculo(this.id).subscribe((datos:ModeloTipoVehiculo)=>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'registro eliminado con exito',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(["/administrador/listar-tipoVehiculo"]);
        },(error:any)=>{
          Swal.fire('error eliminando el regsitro', '', 'error');
        })
      }
    })
  }
}
