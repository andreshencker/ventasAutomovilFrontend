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
  nombre?:string='';
  susb:Subscription=new Subscription();


  constructor(
    private servicio:SeguridadService
  )
  {
    this.sesion();

  }

  ngOnInit(): void {
    this.susb= this.seInicioSesion=this.servicio.ObtenerInformacionSesionEmpleado().subscribe((datos:ModeloidentificarEmpleado)=>{

      this.seInicioSesion=datos.estaIdentificado;
    })
  }

  sesion(){
    this.servicio.ObtenerDatosUsuarioEnSesionEmpleado().subscribe((datos:ModeloidentificarEmpleado)=>{
      this.nombre=String(datos.datos?.nombre)
    })
  }


  cerrarSesion(){
    this.servicio.EliminarInformacionSesionEmpleado();
    this.servicio.RefrescarDatosSesionEmpledo(new ModeloidentificarEmpleado())
  }

}
