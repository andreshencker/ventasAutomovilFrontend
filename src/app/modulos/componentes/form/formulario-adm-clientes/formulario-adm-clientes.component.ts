import { ClienteService } from './../../../../servicios/cliente/cliente.service';
import { ModeloCliente } from './../../../../modelos/cliente.modelo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-formulario-adm-clientes',
  templateUrl: './formulario-adm-clientes.component.html',
  styleUrls: ['./formulario-adm-clientes.component.css']
})
export class FormularioAdmClientesComponent implements OnInit {


  fgValidador:FormGroup=this.fb.group({
    'id':[''],
    'clave':[''],
    'documento':['',[Validators.required,Validators.minLength(6)]],
    'nombres':['',[Validators.required]],
    'apellidos':['',[Validators.required]],
    'correo':['',[Validators.required,Validators.email]],
    'celular':['',[Validators.required,Validators.minLength(10)]],

  })

  getValue(value:string){
    return this.fgValidador.get(value);
  }


  paginaActual=1
  listadoClientes:ModeloCliente[]=[];


  constructor(
    private fb:FormBuilder,
    public servicioCliente:ClienteService,

  ) { }

  ngOnInit(): void {

    this.ObtenerListadoCliente();
  }



  ObtenerListadoCliente(){
    this.servicioCliente.ObtenerRegistros().subscribe((datos:ModeloCliente[])=>{
      this.listadoClientes=datos;
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
    let e=new ModeloCliente()
    e.documento=this.fgValidador.controls["documento"].value
    e.nombres=this.fgValidador.controls["nombres"].value
    e.apellidos=this.fgValidador.controls["apellidos"].value
    e.correo=this.fgValidador.controls["correo"].value
    e.celular=this.fgValidador.controls["celular"].value
    e.contrasena=this.fgValidador.controls["clave"].value

    if(this.fgValidador.controls["id"].value==null){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Por favor seleccione un cliente',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      e.id=this.fgValidador.controls["id"].value;
      this.servicioCliente.ActualizarCliente(e).subscribe((datos:ModeloCliente)=>{
        this.ActualizarRegistro();
        this.limpiarFormulario();
        this.ObtenerListadoCliente();
       },(error:any)=>{
         this.ErrorRegistro()
       })
    }

  }

  alEditar(e:ModeloCliente){
    this.servicioCliente.seleccionarCliente=Object.assign({},e);
  }

  alEliminar(e:ModeloCliente){

    Swal.fire({
      title: '¿Quieres eliminar este registro?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
          this.servicioCliente.EliminararCliente(String(e.id)).subscribe((datos:ModeloCliente)=>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'registro eliminado con exito',
            showConfirmButton: false,
            timer: 1500
          })
          this.ObtenerListadoCliente();
        },(error:any)=>{
          Swal.fire('error eliminando el regsitro', '', 'error');
        })
      }
    })
  }

  limpiarFormulario(){
      this.fgValidador.reset();
      this.servicioCliente.seleccionarCliente=new ModeloCliente()
  }


}
