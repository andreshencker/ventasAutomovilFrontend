import { EmpleadoService } from './../../../../servicios/empleado/empleado.service';
import { ModeloEmpleado } from './../../../../modelos/empleado.modelo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModeloCargoEmpleado } from 'src/app/modelos/cargoEmpleado.modelo';
import { Router } from '@angular/router';
import { CargoEmpleadoService } from 'src/app/servicios/cargoEmpleado/cargo-empleado.service';
import Swal from 'sweetalert2';
import { getgid } from 'process';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {

  // se genera las validaciones del formulario
  fgValidador: FormGroup = this.fb.group({
    'id':[''],
    'documento': ['', [Validators.required, Validators.minLength(6)]],
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'correo': ['', [Validators.required, Validators.email]],
    'celular': ['', [Validators.required, Validators.minLength(10)]],
    'cargo': ['', [Validators.required]],
  })


  //generacion de variables para para el desarrollo de la logica
  listadoCargos: ModeloCargoEmpleado[] = [];
  listadoRegistros: ModeloEmpleado[] = [];
  seleccionarEmpleado: ModeloEmpleado = new ModeloEmpleado();
  estaEditando: boolean = false;


  constructor(
    private servicioEmpleado: EmpleadoService,
    private fb: FormBuilder,
    private router: Router,
    private cargoServicio: CargoEmpleadoService
  ) { }

  ngOnInit(): void {
    this.ObtenerListadoEmpleados();
    this.ObtenerListadoCargoEmpleado();
  }

  mostrarBotones() {
    if (this.estaEditando) {
      this.estaEditando = false;
    } else {
      this.estaEditando = true;
    }

  }
  getValue(value: string) {
    return this.fgValidador.get(value);
  }

  ObtenerListadoEmpleados() {
    this.servicioEmpleado.ObtenerRegistros().subscribe((datos: ModeloEmpleado[]) => {
      this.listadoRegistros = datos;
    })
  }

  ObtenerListadoCargoEmpleado() {
    this.cargoServicio.ObtenerRegistros().subscribe((datos: ModeloCargoEmpleado[]) => {
      this.listadoCargos = datos;
    })
  }


  RegistroGuardado() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Registro guardado con exito',
      showConfirmButton: false,
      timer: 1500
    })
  }

  ErrorRegistro() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Error al crear el registro',
      showConfirmButton: false,
      timer: 1500
    })
  }

  addOrEdit() {
      let p = new ModeloEmpleado()
      p.documento = this.fgValidador.controls["documento"].value
      p.nombres = this.fgValidador.controls["nombres"].value
      p.apellidos = this.fgValidador.controls["apellidos"].value
      p.correo = this.fgValidador.controls["correo"].value
      p.celular = this.fgValidador.controls["celular"].value
      p.cargoEmpleadoId = this.fgValidador.controls["cargo"].value
    if (this.estaEditando === false) {
      //let e = this.servicioEmpleado.ObtenerEmpleado(p.documento).subscribe
      this.servicioEmpleado.CrearEmpleado(p).subscribe((datos:ModeloEmpleado)=>{
        this.RegistroGuardado();
        this.ObtenerListadoEmpleados();
       },(error:any)=>{
         this.ErrorRegistro()
       })

    } else
      p.id=this.fgValidador.controls["id"].value
      this.seleccionarEmpleado = new ModeloEmpleado();
      this.servicioEmpleado.ActualizarEmpleado(p).subscribe((datos:ModeloEmpleado)=>{
        this.RegistroGuardado();
        this.ObtenerListadoEmpleados();
       },(error:any)=>{
         this.ErrorRegistro()
       })
       this.estaEditando=false;
  }



  openForEdit(empleado: ModeloEmpleado) {
    this.estaEditando = true
    this.seleccionarEmpleado = empleado;

  }

}
