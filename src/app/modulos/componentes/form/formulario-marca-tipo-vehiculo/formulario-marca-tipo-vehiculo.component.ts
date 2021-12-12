import { MarcaService } from 'src/app/servicios/marca/marca.service';
import { ModeloTipoVehiculo } from './../../../../modelos/tipoVehiculo.modelo';
import { TipoVehiculoService } from './../../../../servicios/tipoVehiculo/tipo-vehiculo.service';
import { ModeloMarcaTipoVehiculo } from './../../../../modelos/marcaTipoVehiculo.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloMarca } from 'src/app/modelos/marca.modelo';
import { MarcaTipoVehiculoService } from 'src/app/servicios/marcaTipoVehiculo/marca-tipo-vehiculo.service';

@Component({
  selector: 'app-formulario-marca-tipo-vehiculo',
  templateUrl: './formulario-marca-tipo-vehiculo.component.html',
  styleUrls: ['./formulario-marca-tipo-vehiculo.component.css']
})
export class FormularioMarcaTipoVehiculoComponent implements OnInit {

  fgValidador:FormGroup=this.fb.group({
    'id':[''],
    'tipo':['',[Validators.required]],
    //'vehiculo':['',[Validators.required]],
  })

  getValue(value:string){
    return this.fgValidador.get(value);
  }

  id:string='';
  paginaActual=1
  listadoMarcaTipoVehiculo:ModeloMarcaTipoVehiculo[]=[];
  listadoTipoVehiculo:ModeloTipoVehiculo[]=[];
  marca?:string='';
  imagen?:string='';

  constructor(
    private fb:FormBuilder,
    private servicioTipoVehiculo:TipoVehiculoService,
    public servicio:MarcaTipoVehiculoService,
    private servicioMarca:MarcaService,
    private router:Router,
    private route:ActivatedRoute,

  ) {


  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.obtenerRegistrosMarca();
    this.obtenerRegistrosTipoVehiculo();
    this.obtenerRegistro();
  }

  obtenerRegistro(){
    this.servicioMarca.ObtenerMarca(this.id).subscribe((datos:ModeloMarca)=>{
      this.marca=datos.marca;
      this.imagen=datos.imagen
    })
  }

  obtenerRegistrosMarca(){
    this.servicio.ObtenerMarcaTipoVehiculoByMarca(this.id).subscribe((datos:ModeloMarcaTipoVehiculo[])=>{
      this.listadoMarcaTipoVehiculo=datos;
      console.log(this.listadoMarcaTipoVehiculo);
    })
  }

  obtenerRegistrosTipoVehiculo(){
    this.servicioTipoVehiculo.ObtenerRegistros().subscribe((datos:ModeloTipoVehiculo[])=>{
      this.listadoTipoVehiculo=datos;
    })
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





  alEditar(marca:ModeloMarcaTipoVehiculo){
    this.servicio.seleccionarMarcaTipoVehiculo=Object.assign({},marca);
  }


  onSubmit(){
    let e=new ModeloMarcaTipoVehiculo()
    e.tipoVehiculoId=this.fgValidador.controls["tipo"].value
    e.marcaId=this.id
    if(this.fgValidador.controls["id"].value==null){
      this.servicio.CrearMarcaTipoVehiculo(e).subscribe((datos:ModeloMarcaTipoVehiculo)=>{
      this.RegistroGuardado();
      this.limpiarFormulario();
      this.obtenerRegistrosMarca();
      },(error:any)=>{
        this.ErrorRegistro()
      })
    }
    else{
      e.id=this.fgValidador.controls["id"].value;
      this.servicio.ActualizarMarcaTipoVehiculo(e).subscribe((datos:ModeloMarcaTipoVehiculo)=>{
        this.ActualizarRegistro();
        this.limpiarFormulario();
        this.obtenerRegistrosMarca();
       },(error:any)=>{
         this.ErrorRegistro()
       })
    }

  }

  limpiarFormulario(){
      this.fgValidador.reset();
      this.servicio.seleccionarMarcaTipoVehiculo=new ModeloMarcaTipoVehiculo();
  }

  alEliminar(foto:ModeloMarcaTipoVehiculo){

    Swal.fire({
      title: '¿Quieres eliminar este registro?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
          this.servicio.EliminararMarcaTipoVehiculo(String(foto.id)).subscribe((datos:ModeloMarcaTipoVehiculo)=>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'registro eliminado con exito',
            showConfirmButton: false,
            timer: 1500
          })
          this.obtenerRegistrosMarca();
        },(error:any)=>{
          Swal.fire('error eliminando el regsitro', '', 'error');
        })
      }
    })
  }



}
