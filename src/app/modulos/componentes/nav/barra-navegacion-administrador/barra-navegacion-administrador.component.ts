import { ModeloidentificarEmpleado } from './../../../../modelos/identificarEmpleado.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-barra-navegacion-administrador',
  templateUrl: './barra-navegacion-administrador.component.html',
  styleUrls: ['./barra-navegacion-administrador.component.css']
})
export class BarraNavegacionAdministradorComponent implements OnInit {

  seInicioSesion:boolean=false;
  nombreUsuario:string='';
  susb:Subscription=new Subscription();
  sesion:ModeloidentificarEmpleado=new ModeloidentificarEmpleado();

  constructor(
    private servicio:SeguridadService
  ) { }

  ngOnInit(): void {
    this.susb= this.seInicioSesion=this.servicio.ObtenerInformacionSesionEmpleado().subscribe((datos:ModeloidentificarEmpleado)=>{
      this.nombreUsuario=String(datos.datos?.nombre);
      this.seInicioSesion=datos.estaIdentificado;
    })

    //this.sesion=this.servicio.datosUsuarioEnSesionEmpleado;

  }


  cerrarSesion(){
    this.servicio.EliminarInformacionSesionEmpleado();
    this.servicio.RefrescarDatosSesionEmpledo(new ModeloidentificarEmpleado())
  }

}
