import { ModeloCiudad } from './../../../../modelos/ciudad.modelo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadService } from 'src/app/servicios/ciudad/ciudad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-ciudad',
  templateUrl: './actualizar-ciudad.component.html',
  styleUrls: ['./actualizar-ciudad.component.css']
})
export class ActualizarCiudadComponent implements OnInit {
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

  EditarCiudad(){
    let id=this.fgValidador.controls["id"].value
    let ciudad=this.fgValidador.controls["ciudad"].value
    let p = new ModeloCiudad();
    p.ciudad=ciudad;
    p.id=this.id;
    this.ciudadServicio.ActualizarCiudad(p).subscribe((datos:ModeloCiudad)=>{
      alert("cuidad actualizado exitosamente");
      this.router.navigate(["/administrador/listar-ciudad"]);
    },(error:any)=>{
      alert("error al actualizar la ciudad");
    })
  }

 
}
