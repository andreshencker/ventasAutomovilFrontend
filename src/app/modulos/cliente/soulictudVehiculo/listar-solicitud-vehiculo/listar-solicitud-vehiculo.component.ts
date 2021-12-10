import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModeloidentificarCliente } from 'src/app/modelos/identificarCliente.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-listar-solicitud-vehiculo',
  templateUrl: './listar-solicitud-vehiculo.component.html',
  styleUrls: ['./listar-solicitud-vehiculo.component.css']
})
export class ListarSolicitudVehiculoComponent implements OnInit {


  id:string='';

  constructor(
    private fb:FormBuilder,

    private servicio:SeguridadService

  ) {
    this.sesion();
  }

  ngOnInit(): void {
  }

  sesion(){
    this.servicio.ObtenerDatosUsuarioEnSesionCliente().subscribe((datos:ModeloidentificarCliente)=>{
      this.id=String(datos.datos?.id)
    })
  }

}
