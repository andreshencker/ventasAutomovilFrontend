import { MensajesRegistros } from './../../../../message/mensajesRegistros';
import { Router} from '@angular/router';
import { ModeloCiudad } from './../../../../modelos/ciudad.modelo';
import { CiudadService } from './../../../../servicios/ciudad/ciudad.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-crear-ciudad',
  templateUrl: './crear-ciudad.component.html',
  styleUrls: ['./crear-ciudad.component.css']
})
export class CrearCiudadComponent implements OnInit {
  fgValidador:FormGroup=this.fb.group({
    'ciudad':['',[Validators.required]]
  })
  constructor(
    private fb:FormBuilder,
    private ciudadServicio:CiudadService,
    private router:Router,
    private mensajesRegistro:MensajesRegistros) { }


  ngOnInit(): void {
  }

  CrearCiudad(){
    let ciudad=this.fgValidador.controls["ciudad"].value
    let p = new ModeloCiudad();
    p.ciudad=ciudad;
    this.ciudadServicio.CrearCiudad(p).subscribe((datos:ModeloCiudad)=>{
      this.mensajesRegistro.RegistroGuardado();
      this.router.navigate(["/administrador/listar-ciudad"]);
    },(error:any)=>{
      this.mensajesRegistro.ErrorRegistro()
    })
  }
}
