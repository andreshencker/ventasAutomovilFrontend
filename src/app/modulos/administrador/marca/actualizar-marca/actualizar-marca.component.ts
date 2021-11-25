import { ModeloMarca } from './../../../../modelos/marca.modelo';
import { MarcaService } from './../../../../servicios/marca/marca.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-marca',
  templateUrl: './actualizar-marca.component.html',
  styleUrls: ['./actualizar-marca.component.css']
})
export class ActualizarMarcaComponent implements OnInit {

  id:string="";
  fgValidador:FormGroup=this.fb.group({
    'id':['',[Validators.required]],
    'marca':['',[Validators.required]]
  })
  constructor(
    private fb:FormBuilder,
    private servicio:MarcaService,
    private router:Router,
    private route:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.Buscar();
  }

  RegistroActualizado(){
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

  Buscar(){
    this.servicio.ObtenerMarca(this.id).subscribe((datos:ModeloMarca)=>{
      this.fgValidador.controls["id"].setValue(datos.id);
      this.fgValidador.controls["marca"].setValue(datos.marca);
    });
  }

  Editar(){
    let id=this.fgValidador.controls["id"].value
    let marca=this.fgValidador.controls["marca"].value
    let p = new ModeloMarca();
    p.marca=marca;
    p.id=this.id;
    this.servicio.ActualizarMarca(p).subscribe((dato:ModeloMarca)=>{
      this.RegistroActualizado();
      this.router.navigate(["/administrador/listar-marca"])
    },(error:any)=>{
      this.ErrorRegistro()
    })
  }

}
