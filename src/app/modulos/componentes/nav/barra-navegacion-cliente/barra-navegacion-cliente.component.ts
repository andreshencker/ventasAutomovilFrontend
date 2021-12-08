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

  nombreUsuario:string="";

  constructor(
    private servicio:SeguridadService
  ) { }

  ngOnInit(): void {
    this.susb= this.seInicioSesion=this.servicio.ObtenerInformacionSesionEmpleado().subscribe((datos:ModeloidentificarCliente)=>{

      this.seInicioSesion=datos.estaIdentificado;
    })
    this.nombreUsuario=String(this.servicio.datosUsuarioEnSesionCliente.value.datos?.nombre)
  }



  cerrarSesion(){
    this.servicio.EliminarInformacionSesionCliente();
    this.servicio.RefrescarDatosSesionEmpledo(new ModeloidentificarCliente())
  }
}
