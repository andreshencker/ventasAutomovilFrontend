import { ModeloFotoVehiculo } from './../../../../modelos/fotoVehiculo.modelo';
import { FotoVehiculoService } from './../../../../servicios/fotoVehiculo/foto-vehiculo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculoService } from 'src/app/servicios/vehiculo/vehiculo.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-foto-vehiculo',
  templateUrl: './formulario-foto-vehiculo.component.html',
  styleUrls: ['./formulario-foto-vehiculo.component.css']
})
export class FormularioFotoVehiculoComponent implements OnInit {

  fgValidador:FormGroup=this.fb.group({
    'id':[''],
    'nombre':['',[Validators.required]],
    //'vehiculo':['',[Validators.required]],
  })

  getValue(value:string){
    return this.fgValidador.get(value);
  }
  id:string='';
  paginaActual=1
  listadoFotos:ModeloFotoVehiculo[]=[];

  constructor(
    private fb:FormBuilder,
    public servicioFotoVehiculo:FotoVehiculoService,
    private servicioVehiculo:VehiculoService,
    private router:Router,
    private route:ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.obtenerRegistrosFoto()
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

  obtenerRegistrosFoto(){
    this.servicioFotoVehiculo.ObtenerFortoVehiculoByVehiculo(this.id).subscribe((datos:ModeloFotoVehiculo[])=>{
      this.listadoFotos=datos;
    })
  }

  ordenar(){
    this.servicioFotoVehiculo.ObtenerRegistros().subscribe((datos:ModeloFotoVehiculo[])=>{
      this.listadoFotos=datos;
    })
  }

  alEditar(foto:ModeloFotoVehiculo){
    this.servicioFotoVehiculo.seleccionarFoto=Object.assign({},foto);
  }


  onSubmit(){
    let e=new ModeloFotoVehiculo()
    e.nombre=this.fgValidador.controls["nombre"].value
    e.vehiculoId=this.id
    if(this.fgValidador.controls["id"].value==null){
      this.servicioFotoVehiculo.CrearFotoVehiculo(e).subscribe((datos:ModeloFotoVehiculo)=>{
      this.RegistroGuardado();
      this.limpiarFormulario();
      this.obtenerRegistrosFoto();
      },(error:any)=>{
        this.ErrorRegistro()
      })
    }
    else{
      e.id=this.fgValidador.controls["id"].value;
      this.servicioFotoVehiculo.ActualizarFotoVehiculo(e).subscribe((datos:ModeloFotoVehiculo)=>{
        this.ActualizarRegistro();
        this.limpiarFormulario();
        this.obtenerRegistrosFoto();
       },(error:any)=>{
         this.ErrorRegistro()
       })
    }

  }

  limpiarFormulario(){
      this.fgValidador.reset();
      this.servicioFotoVehiculo.seleccionarFoto=new ModeloFotoVehiculo();
  }

  alEliminar(foto:ModeloFotoVehiculo){

    Swal.fire({
      title: '¿Quieres eliminar este registro?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
          this.servicioFotoVehiculo.EliminararFotoVehiculo(String(foto.id)).subscribe((datos:ModeloFotoVehiculo)=>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'registro eliminado con exito',
            showConfirmButton: false,
            timer: 1500
          })
          this.obtenerRegistrosFoto();
        },(error:any)=>{
          Swal.fire('error eliminando el regsitro', '', 'error');
        })
      }
    })
  }

}
