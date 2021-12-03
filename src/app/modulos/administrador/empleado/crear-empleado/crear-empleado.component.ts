import { CargoEmpleadoService } from './../../../../servicios/cargoEmpleado/cargo-empleado.service';
import { ModeloCargoEmpleado } from './../../../../modelos/cargoEmpleado.modelo';
import { ModeloEmpleado } from './../../../../modelos/empleado.modelo';
import { EmpleadoService } from './../../../../servicios/empleado/empleado.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {



  listadoCargos:ModeloCargoEmpleado[]=[];
  listadoEmpleados:ModeloEmpleado[]=[];



  constructor(
    private servicioEmpleado:EmpleadoService,
    private cargoServicio:CargoEmpleadoService
    ) { }


  ngOnInit(): void {
    this.ObtenerListadoCargo();
    this.ObtenerListadoEmpleado();
  }

  ObtenerListadoCargo(){
    this.cargoServicio.ObtenerRegistros().subscribe((datos:ModeloCargoEmpleado[])=>{
      this.listadoCargos=datos;
    })
  }
  ObtenerListadoEmpleado(){
    this.servicioEmpleado.ObtenerRegistros().subscribe((datos:ModeloCargoEmpleado[])=>{
      this.listadoEmpleados=datos;
    })
  }




}
