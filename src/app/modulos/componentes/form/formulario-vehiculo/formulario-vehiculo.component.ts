import { ModeloMarcaTipoVehiculo } from 'src/app/modelos/marcaTipoVehiculo.model';
import { CiudadService } from 'src/app/servicios/ciudad/ciudad.service';
import { ModeloFotoVehiculo } from './../../../../modelos/fotoVehiculo.modelo';
import { FotoVehiculoService } from './../../../../servicios/fotoVehiculo/foto-vehiculo.service';
import { CatalogoVehiculoService } from './../../../../servicios/catalogoVehiculo/catalogo-vehiculo.service';
import { ModeloCatalogoVehiculo } from './../../../../modelos/catalogoVehiculos.model';
import { ModeloVehiculo } from './../../../../modelos/vehiculo.modelo';
import { ModeloMarca } from './../../../../modelos/marca.modelo';
import { ModeloTipoTransaccion } from './../../../../modelos/tipotransaccion.modelo';
import { ModeloTipoVehiculo } from 'src/app/modelos/tipoVehiculo.modelo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculoService } from './../../../../servicios/vehiculo/vehiculo.service';
import { TipoTransaccionService } from 'src/app/servicios/tipoTransaccion/tipo-transaccion.service';
import { TipoVehiculoService } from 'src/app/servicios/tipoVehiculo/tipo-vehiculo.service';
import { MarcaService } from './../../../../servicios/marca/marca.service';
import Swal from 'sweetalert2';
import { ModeloCiudad } from 'src/app/modelos/ciudad.modelo';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-formulario-vehiculo',
  templateUrl: './formulario-vehiculo.component.html',
  styleUrls: ['./formulario-vehiculo.component.css']
})
export class FormularioVehiculoComponent implements OnInit {

  fgValidador:FormGroup=this.fb.group({
    'id':[''],
    'cantidad':['',[Validators.required,Validators.min(1)]],
    'comision':['',[Validators.required,]],
    'precio':['',[Validators.required,Validators.min(1)]],
    'ciudad':['',[Validators.required]],
    'color':['',[Validators.required]],
    'kilometraje':['',[Validators.required]],
    'modelo':['',[Validators.required]],
    'descripcion':['',[Validators.required]],
    'tipoTransaccion':['',[Validators.required]],

  })

  getValue(value:string){
    return this.fgValidador.get(value);
  }

  id:string="";
  paginaActual=1
  listadoFotos:ModeloFotoVehiculo[]=[];
  listadoCatalogo:ModeloCatalogoVehiculo[]=[];
  listadoCiudad:ModeloCiudad[]=[];
  listadoVehiculos:ModeloVehiculo[]=[];
  listadoTipoTransacciones:ModeloTipoTransaccion[]=[];
  listadoMarca:ModeloMarca[]=[];
  vehiculo?:string='';
  marca:string='';
  tipo:string='';
  imagen:string='';

  constructor(
    private fb:FormBuilder,
    public servicoVehiculo:VehiculoService,
    private servicioTipoTransaccion: TipoTransaccionService,
    private servicioCiudad:CiudadService,
    private servicioCatalogo:CatalogoVehiculoService,
    private servicioFotoVehiculo:FotoVehiculoService,
    private router:Router,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.ObtenerListadoCiudad();
    this.ObtenerListadoTipoTransaccion();
    this.ObtenerListadoCatalogo();

    this.ObtenerListadoVehiculo();
    this. obtenerRegistros();
    }

    ObtenerListadoVehiculo(){
      this.servicoVehiculo.ObtenerVehiculoByMarcaTipoVehiculo(this.id).subscribe((datos:ModeloVehiculo[])=>{
        this.listadoVehiculos=datos;
      })
    }

  ObtenerListadoTipoTransaccion(){
    this.servicioTipoTransaccion.ObtenerRegistros().subscribe((datos:ModeloTipoTransaccion[])=>{
      this.listadoTipoTransacciones=datos;
    })
  }

  ObtenerListadoCatalogo(){
    this.servicioCatalogo.ObtenerRegistros().subscribe((datos:ModeloCatalogoVehiculo[])=>{
      this.listadoCatalogo=datos;
    })
  }

  ObtenerListadoCiudad(){
    this.servicioCiudad.ObtenerRegistros().subscribe((datos:ModeloCiudad[])=>{
      this.listadoCiudad=datos;
    })
  }


  obtenerRegistrosFoto(vehiculo:ModeloVehiculo){
      this.id=String(vehiculo.id);
      this.servicioFotoVehiculo.ObtenerFortoVehiculoByVehiculo(this.id).subscribe((datos:ModeloFotoVehiculo[])=>{
      this.listadoFotos= datos;
    })
  }

 

  obtenerRegistros(){
    this.servicioCatalogo.ObtenerCatalogoVehiculo(this.id).subscribe((datos:ModeloCatalogoVehiculo)=>{
      this.vehiculo=datos.nombre;
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



  onSubmit(){
    let e=new ModeloVehiculo()
    e.color=this.fgValidador.controls["color"].value
    e.kilometraje=String(this.fgValidador.controls["kilometraje"].value)
    e.modelo=this.fgValidador.controls["modelo"].value
    e.descripcion=this.fgValidador.controls["descripcion"].value
   // e.fecha=String(this.fgValidador.controls["fecha"].value)
    e.precio=this.fgValidador.controls["precio"].value
    e.porComision=this.fgValidador.controls["comision"].value
    e.tipoTransaccionId=this.fgValidador.controls["tipoTransaccion"].value
    e.catalogoVehiculoId=this.id;
    e.ciudadId=this.fgValidador.controls["ciudad"].value
    if(this.fgValidador.controls["id"].value==null){
      this.servicoVehiculo.CrearVehiculo(e).subscribe((datos:ModeloVehiculo)=>{
      this.RegistroGuardado();
      this.limpiarFormulario();
      this.ObtenerListadoVehiculo();
      },(error:any)=>{
        this.ErrorRegistro()
      })
    }
    else{
      e.id=this.fgValidador.controls["id"].value;
      this.servicoVehiculo.ActualizarVehiculo(e).subscribe((datos:ModeloVehiculo)=>{
        this.ActualizarRegistro();
        this.limpiarFormulario();
        this.ObtenerListadoVehiculo();
       },(error:any)=>{
         this.ErrorRegistro()
       })
    }

  }

  limpiarFormulario(){
      this.fgValidador.reset();
      this.servicoVehiculo.seleccionarVehiculo=new ModeloVehiculo()
  }

  alEditar(vehiculo:ModeloVehiculo){
    this.servicoVehiculo.seleccionarVehiculo=Object.assign({},vehiculo);
  }

  alEliminar(id:string){
    Swal.fire({
      title: '¿Quieres eliminar este registro?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
          this.servicoVehiculo.EliminararVehiculo(id).subscribe((datos:ModeloVehiculo)=>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'registro eliminado con exito',
            showConfirmButton: false,
            timer: 1500
          })
          this.ObtenerListadoVehiculo();
        },(error:any)=>{
          Swal.fire('error eliminando el regsitro', '', 'error');
        })
      }
    })
  }


}
