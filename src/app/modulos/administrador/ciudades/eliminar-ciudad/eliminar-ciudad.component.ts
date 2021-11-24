import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloCiudad } from 'src/app/modelos/ciudad.modelo';
import { CiudadService } from 'src/app/servicios/ciudad/ciudad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-ciudad',
  templateUrl: './eliminar-ciudad.component.html',
  styleUrls: ['./eliminar-ciudad.component.css']
})
export class EliminarCiudadComponent implements OnInit {

  id:string="";
  fgValidador:FormGroup=this.fb.group({
    'id':['',[Validators.required]],
    'ciudad':['',[Validators.required]]
  })
  constructor(
    private fb:FormBuilder,
    private ciudadServicio:CiudadService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.BuscarCiudad();
  }

  BuscarCiudad(){
    this.ciudadServicio.ObtenerCiudad(this.id).subscribe((datos:ModeloCiudad)=>{
      this.fgValidador.controls["id"].setValue(datos.id);
      this.fgValidador.controls["ciudad"].setValue(datos.ciudad);
    });
  }

  EliminarCiudad(){
    let id=this.fgValidador.controls["id"].value
    Swal.fire({
      title: '¿Quieres eliminar este registro?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        this.ciudadServicio.EliminararCiudad(this.id).subscribe((datos:ModeloCiudad)=>{
          Swal.fire('registro eliminado satisfactoriamente', '', 'success')
          this.router.navigate(["/administrador/listar-ciudad"]);
        })
      } else if (result.isDenied) {
        Swal.fire('error eliminando el regsitro', '', 'error')
      }
    })
    /*
    this.ciudadServicio.EliminararCiudad(this.id).subscribe((datos:ModeloCiudad)=>{
      alert("cuidad actualizado exitosamente");
      this.router.navigate(["/administrador/listar-ciudad"]);
    },(error:any)=>{
      alert("error al actualizar la ciudad");
    })*/
  }



}
