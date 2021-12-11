import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MarcaService } from './../../../../servicios/marca/marca.service';
import { ModeloMarca } from './../../../../modelos/marca.modelo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-marca',
  templateUrl: './formulario-marca.component.html',
  styleUrls: ['./formulario-marca.component.css']
})
export class FormularioMarcaComponent implements OnInit {



  fgValidador:FormGroup=this.fb.group({
    'id':[''],
    'marca':['',[Validators.required]],
    'nombre':['',[Validators.required]]
  })

  getValue(value:string){
    return this.fgValidador.get(value);
  }

  paginaActual=1
  listadoMarca:ModeloMarca[]=[];

  constructor(
    private fb:FormBuilder,
    public servicoMarca:MarcaService,

  ) { }

  ngOnInit(): void {
    this.ObtenerListadoMarca();

  }

  ObtenerListadoMarca(){
    this.servicoMarca.ObtenerRegistros().subscribe((datos:ModeloMarca[])=>{
      this.listadoMarca=datos;
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
    let e=new ModeloMarca()
    e.marca=this.fgValidador.controls["marca"].value
    e.imagen=this.fgValidador.controls["nombre"].value

    if(this.fgValidador.controls["id"].value==null){
          this.servicoMarca.CrearMarca(e).subscribe((datos:ModeloMarca)=>{
            this.RegistroGuardado();
            this.limpiarFormulario();
            this.ObtenerListadoMarca();
           },(error:any)=>{
             this.ErrorRegistro()
           })
    }else{
      e.id=this.fgValidador.controls["id"].value;
      this.servicoMarca.ActualizarMarca(e).subscribe((datos:ModeloMarca)=>{
        this.ActualizarRegistro();
        this.limpiarFormulario();
        this.ObtenerListadoMarca();
       },(error:any)=>{
         this.ErrorRegistro()
       })
    }

  }

  limpiarFormulario(){
      this.fgValidador.reset();
      this.servicoMarca.seleccionarMarca=new ModeloMarca()
  }

  ordenar(){
    this.servicoMarca.ObtenerRegistros().subscribe((datos:ModeloMarca[])=>{
      this.listadoMarca=datos;
    })
  }

  alEditar(catalogo:ModeloMarca){
    this.servicoMarca.seleccionarMarca=Object.assign({},catalogo);
  }

  alEliminar(id:string){
    Swal.fire({
      title: '¿Quieres eliminar este registro?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
          this.servicoMarca.EliminararMarca(id).subscribe((datos:ModeloMarca)=>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'registro eliminado con exito',
            showConfirmButton: false,
            timer: 1500
          })
          this.ObtenerListadoMarca();
        },(error:any)=>{
          Swal.fire('error eliminando el regsitro', '', 'error');
        })
      }
    })
  }

}
