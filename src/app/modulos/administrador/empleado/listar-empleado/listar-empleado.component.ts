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

  constructor(

  ) { }

  ngOnInit(): void {

  }

}
