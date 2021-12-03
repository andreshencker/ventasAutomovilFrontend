import { EmpleadoService } from 'src/app/servicios/empleado/empleado.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ModeloCargoEmpleado } from 'src/app/modelos/cargoEmpleado.modelo';
import { CargoEmpleadoService } from 'src/app/servicios/cargoEmpleado/cargo-empleado.service';


import { ModeloEmpleado } from 'src/app/modelos/empleado.modelo';

@Component({
  selector: 'app-formulario-empleado',
  templateUrl: './formulario-empleado.component.html',
  styleUrls: ['./formulario-empleado.component.css']
})
export class FormularioEmpleadoComponent implements OnInit {


  fgValidador:FormGroup=this.fb.group({
    'id':[''],
    'documento':['',[Validators.required,Validators.minLength(6)]],
    'nombres':['',[Validators.required]],
    'apellidos':['',[Validators.required]],
    'correo':['',[Validators.required,Validators.email]],
    'celular':['',[Validators.required,Validators.minLength(10)]],
    'cargo':['',[Validators.required]],
  })

  getValue(value:string){
    return this.fgValidador.get(value);
  }

  listadoCargos:ModeloCargoEmpleado[]=[];
  listadoEmpleados:ModeloEmpleado[]=[];


  constructor(
    private fb:FormBuilder,
    public servicoEmpleado:EmpleadoService,
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
    this.cargoServicio.ObtenerRegistros().subscribe((datos:ModeloCargoEmpleado[])=>{
      this.listadoEmpleados=datos;
    })
  }

  onSubmit(empleadoForm:NgForm){

  }

  limpiarFormulario(empleadoForm:NgForm){

  }
}
