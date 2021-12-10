import { ModeloidentificarCliente } from './../../../../modelos/identificarCliente.modelo';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-barra-navegacion-cliente',
  templateUrl: './barra-navegacion-cliente.component.html',
  styleUrls: ['./barra-navegacion-cliente.component.css']
})
export class BarraNavegacionClienteComponent implements OnInit {
  seInicioSesion:boolean=false;


  susb:Subscription=new Subscription();

  nombre?:string="";

  constructor(
    private servicio:SeguridadService
  ) {
      this.sesion();
   }

  ngOnInit(): void {
    this.susb= this.servicio.ObtenerInformacionSesionCliente().subscribe((datos:ModeloidentificarCliente)=>{

      this.seInicioSesion=datos.estaIdentificado;
    })



  }

  sesion(){
    this.servicio.ObtenerDatosUsuarioEnSesionCliente().subscribe((datos:ModeloidentificarCliente)=>{
      this.nombre=datos.datos?.nombre
    })
  }

  cerrarSesion(){
    this.servicio.EliminarInformacionSesionCliente();
    this.servicio.RefrescarDatosSesionEmpledo(new ModeloidentificarCliente())
  }
}
