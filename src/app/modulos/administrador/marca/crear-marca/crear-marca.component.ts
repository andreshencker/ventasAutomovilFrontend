import { ModeloMarca } from './../../../../modelos/marca.modelo';
import { MarcaService } from './../../../../servicios/marca/marca.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-marca',
  templateUrl: './crear-marca.component.html',
  styleUrls: ['./crear-marca.component.css']
})
export class CrearMarcaComponent implements OnInit {

  fgValidador:FormGroup=this.fb.group({
    'marca':['',[Validators.required]]
  })
  constructor(
    private fb:FormBuilder,
    private servicio:MarcaService,
    private router:Router
    ) { }


  ngOnInit(): void {
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

  ErrorRegistro(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Error al crear el registro',
      showConfirmButton: false,
      timer: 1500
    })
  }

  Crear(){
    let marca=this.fgValidador.controls["marca"].value
    let p = new ModeloMarca();
    p.marca=marca;
    this.servicio.CrearMarca(p).subscribe((datos:ModeloMarca)=>{
     this.RegistroGuardado();
      this.router.navigate(["/administrador/listar-marca"]);
    },(error:any)=>{
      this.ErrorRegistro()
    })
  }

}
