import { ModeloMarcaTipoVehiculo } from 'src/app/modelos/marcaTipoVehiculo.model';
import { MarcaTipoVehiculoService } from 'src/app/servicios/marcaTipoVehiculo/marca-tipo-vehiculo.service';
import { ActualizarVehiculoComponent } from './../../../administrador/Vehiculo/actualizar-vehiculo/actualizar-vehiculo.component';
import { ModeloCatalogoVehiculo } from './../../../../modelos/catalogoVehiculos.model';
import { CatalogoVehiculoService } from './../../../../servicios/catalogoVehiculo/catalogo-vehiculo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-catalogo-vehiculo',
  templateUrl: './formulario-catalogo-vehiculo.component.html',
  styleUrls: ['./formulario-catalogo-vehiculo.component.css']
})
export class FormularioCatalogoVehiculoComponent implements OnInit {

  fgValidador:FormGroup=this.fb.group({
    'id':[''],
    'catalogo':['',[Validators.required]]
  })

  getValue(value:string){
    return this.fgValidador.get(value);
  }

  paginaActual=1
  listadoCatalogo:ModeloCatalogoVehiculo[]=[];
  id:string='';
  marca?:string='';
  imagen?:string='';
  tipoVehiculo?:string='';

  constructor(
    private fb:FormBuilder,
    public servicoCatlogoVehiculo:CatalogoVehiculoService,
    private servicioMarcaTipo:MarcaTipoVehiculoService,
    private router:Router,
    private route:ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    console.log(this.id)
    this.ObtenerListadoCatalogo();
    this.ObtenerRegsitros();


  }

  ObtenerRegsitros(){
    this.servicioMarcaTipo.ObtenerMarcaTipoVehiculo(this.id).subscribe((datos:ModeloMarcaTipoVehiculo)=>{
      this.marca=datos.marca?.marca;
      this.tipoVehiculo=datos.tipoVehiculo?.tipoVehiculo;
      this.imagen=datos.marca?.imagen;

      console.log(this.marca)
      console.log(this.imagen)
      console.log(this.tipoVehiculo)

    })
  }

  ObtenerListadoCatalogo(){
    this.servicoCatlogoVehiculo.ObtenerCatalogoVehiculoByMarcaTipoVehiculo(this.id).subscribe((datos:ModeloCatalogoVehiculo[])=>{
      this.listadoCatalogo=datos;
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
    let e=new ModeloCatalogoVehiculo()
    e.nombre=this.fgValidador.controls["catalogo"].value
    e.marcaTipoVehiculoId=this.id

    if(this.fgValidador.controls["id"].value==null){
          this.servicoCatlogoVehiculo.CrearCatalogoVehiculo(e).subscribe((datos:ModeloCatalogoVehiculo)=>{
            this.RegistroGuardado();
            this.limpiarFormulario();
            this.ObtenerListadoCatalogo();
           },(error:any)=>{
             this.ErrorRegistro()
           })
    }else{
      e.id=this.fgValidador.controls["id"].value;
      this.servicoCatlogoVehiculo.ActualizarCatalogoVehiculo(e).subscribe((datos:ModeloCatalogoVehiculo)=>{
        this.ActualizarRegistro();
        this.limpiarFormulario();
        this.ObtenerListadoCatalogo();
       },(error:any)=>{
         this.ErrorRegistro()
       })
    }

  }

  limpiarFormulario(){
      this.fgValidador.reset();
      this.servicoCatlogoVehiculo.seleccionarCatalogo=new ModeloCatalogoVehiculo()
  }

  ordenar(){
    this.servicoCatlogoVehiculo.ObtenerRegistros().subscribe((datos:ModeloCatalogoVehiculo[])=>{
      this.listadoCatalogo=datos;
    })
  }

  alEditar(catalogo:ModeloCatalogoVehiculo){
    this.servicoCatlogoVehiculo.seleccionarCatalogo=Object.assign({},catalogo);
  }

  alEliminar(id:string){
    Swal.fire({
      title: '¿Quieres eliminar este registro?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
          this.servicoCatlogoVehiculo.EliminararCatalogoVehiculo(id).subscribe((datos:ModeloCatalogoVehiculo)=>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'registro eliminado con exito',
            showConfirmButton: false,
            timer: 1500
          })
          this.ObtenerListadoCatalogo();
        },(error:any)=>{
          Swal.fire('error eliminando el regsitro', '', 'error');
        })
      }
    })
  }


}
