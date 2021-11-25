import { TipoVehiculoService } from './../../../../servicios/tipoVehiculo/tipo-vehiculo.service';
import { ModeloTipoVehiculo } from './../../../../modelos/tipoVehiculo.modelo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-tipo-vehiculo',
  templateUrl: './actualizar-tipo-vehiculo.component.html',
  styleUrls: ['./actualizar-tipo-vehiculo.component.css']
})
export class ActualizarTipoVehiculoComponent implements OnInit {

  id:string="";
  fgValidador:FormGroup=this.fb.group({
    'id':['',[Validators.required]],
    'tipoVehiculo':['',[Validators.required]]
  })
  constructor(
    private fb:FormBuilder,
    private tipoVehiculoServicio:TipoVehiculoService,
    private router:Router,
    private route:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.BuscarTipoVehiculo();
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

  BuscarTipoVehiculo(){
    this.tipoVehiculoServicio.ObtenerTipoVehiculo(this.id).subscribe((datos:ModeloTipoVehiculo)=>{
      this.fgValidador.controls["id"].setValue(datos.id);
      this.fgValidador.controls["tipoVehiculo"].setValue(datos.tipoVehiculo);
    });
  }

  Editar(){
    let id=this.fgValidador.controls["id"].value
    let tipoVehiculo=this.fgValidador.controls["tipoVehiculo"].value
    let p = new ModeloTipoVehiculo();
    p.tipoVehiculo=tipoVehiculo;
    p.id=this.id;
    this.tipoVehiculoServicio.ActualizarTipoVehiculo(p).subscribe((dato:ModeloTipoVehiculo)=>{
      this.RegistroActualizado();
      this.router.navigate(["/administrador/listar-tipoVehiculo"])
    },(error:any)=>{
      this.ErrorRegistro()
    })
  }
}
