import { ModeloFotoVehiculo } from './../../../../modelos/fotoVehiculo.modelo';
import { FotoVehiculoService } from './../../../../servicios/fotoVehiculo/foto-vehiculo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculoService } from 'src/app/servicios/vehiculo/vehiculo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-foto-vehiculo',
  templateUrl: './formulario-foto-vehiculo.component.html',
  styleUrls: ['./formulario-foto-vehiculo.component.css']
})
export class FormularioFotoVehiculoComponent implements OnInit {

  fgValidador:FormGroup=this.fb.group({
    'id':[''],
    'nombre':['',[Validators.required]],
    'vehiculo':['',[Validators.required]],
  })

  getValue(value:string){
    return this.fgValidador.get(value);
  }
  constructor(
    private fb:FormBuilder,
    public servicioFotoVehiculo:FotoVehiculoService,
    private servicioVehiculo:VehiculoService,

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

  ActualizarRegistro(){
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

  ExisteRegistro(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Error el registro ya existe',
      showConfirmButton: false,
      timer: 1500
    })
  }



  onSubmit(){
    let e=new ModeloFotoVehiculo()
    e.nombre=this.fgValidador.controls["nombre"].value
    e.vehiculoId=this.fgValidador.controls["vehiculo"].value
    if(this.fgValidador.controls["id"].value==null){
      this.servicioFotoVehiculo.CrearFotoVehiculo(e).subscribe((datos:ModeloFotoVehiculo)=>{
      this.RegistroGuardado();
      this.limpiarFormulario();
      },(error:any)=>{
        this.ErrorRegistro()
      })
    }
    else{
      e.id=this.fgValidador.controls["id"].value;
      this.servicioFotoVehiculo.ActualizarFotoVehiculo(e).subscribe((datos:ModeloFotoVehiculo)=>{
        this.ActualizarRegistro();
        this.limpiarFormulario();
       },(error:any)=>{
         this.ErrorRegistro()
       })
    }

  }

  limpiarFormulario(){
      this.fgValidador.reset();
      this.servicioFotoVehiculo.seleccionarFoto=new ModeloFotoVehiculo()
  }


}
