import { ModeloidentificarCliente } from './../../modelos/identificarCliente.modelo';
import { IdentificacionClienteComponent } from './../../modulos/seguridad/identificacion-cliente/identificacion-cliente.component';
import { ModeloDatosCliente } from './../../modelos/datosCliente.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-barra-navegacion-inicio',
  templateUrl: './barra-navegacion-inicio.component.html',
  styleUrls: ['./barra-navegacion-inicio.component.css']
})
export class BarraNavegacionInicioComponent implements OnInit {
  seIncioSesion:boolean=false;
  subs:Subscription=new Subscription();
  constructor(private SeguridadServicio:SeguridadService) { }

  ngOnInit(): void {
    this.subs= this.seIncioSesion=this.SeguridadServicio.ObtenerInformacionSesion().subscribe((datos:ModeloidentificarCliente)=>{
     this.seIncioSesion=datos.estaIdentificado;
    })
  }

}
